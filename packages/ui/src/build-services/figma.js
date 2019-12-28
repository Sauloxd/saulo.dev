import axios from 'axios';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { writeFileSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const httpClient = axios.create({
  headers: {
    'X-Figma-Token': process.env.FIGMA_API_KEY
  }
});

const fileId = 'l6zkswpv4ZoVVmj26e3go3';
const artboardId = '1:21';

const ERROR_TYPES = {
  apiChange: (details) =>
    `API CHANGED -> ${details}`
};

const safeExtract = propName =>
  (data) => {
    if (!data[propName]) throw ERROR_TYPES.apiChange(propName);

    return data[propName];
  };

const filterNameIncludes = (name) =>
  (data) =>
    data.name.includes(name);

const inpect = (data, _index, array) =>
  console.log(array) || data;

const traverseFirstChildrenUntil = (condition) =>
  data => {
    if (condition(data)) return data;
    const getFirstChildren = (data) =>
      safeExtract(0)(safeExtract('children')(data));
    return traverseFirstChildrenUntil(condition)(getFirstChildren(data));
  };

const extractConstant = {
  TYPOGRAPHY: (artboard) => {
    return 'typograpy';
  },
  COLORS: (artboard) => {
    return 'colors';
  }
};

const getStyles = ({
  fileId, artboardId
}) => {
  httpClient.get(`https://api.figma.com/v1/files/${fileId}?ids=${artboardId}`)
    .then(response => {
      console.log([response.data]
        .map(safeExtract('document'))
        .map(traverseFirstChildrenUntil(filterNameIncludes('DesignSystem')))
        // Ignore Page1
        .flatMap(safeExtract('children'))
        .filter(filterNameIncludes('DesignSystem::'))
        .reduce((constants, artboard) => {
          const typeName = artboard.name.replace('DesignSystem::', '');

          return {
            ...constants,
            [typeName]: extractConstant[typeName](artboard)
          };
        }, {}));
      // .map(safeExtract('children'))
      // .flatMap(filterNameIncludes('DesignSystem'));

      // console.log(response.data);
      // writeFileSync(path.resolve(__dirname, 'data.json'), JSON.stringify(response.data, null, 2), 'utf-8');
    })
    .catch(err =>
      console.log(err));
};

getStyles({
  fileId,
  artboardId
});

/**
 * Next step is to add a restrict way to create groups in figma so we can consistently traverse the tree, searching for styles
 */
