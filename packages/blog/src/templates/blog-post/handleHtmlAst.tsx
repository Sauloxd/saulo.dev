import React, { Fragment } from 'react';
import elementComponentMap from './elementComponentMap';

const zipWithLineSoftBreak = (array: string[]) =>
  array.reduce((withLineBreak, item, index, array) => {
    if (array.length === index + 1) return withLineBreak.concat(item);

    return withLineBreak.concat(item).concat('softbreak');
  }, []);
const Text: React.FC = ({ children }) => {
  const childrenIsStringBelieveIt = children as string;
  if (children === '\n') return <div style={{ marginTop: 16 }} />;
  const byLinebreak = childrenIsStringBelieveIt.split('\n');
  if (byLinebreak.length === 1)
    return (
      <span key={childrenIsStringBelieveIt}>{childrenIsStringBelieveIt}</span>
    );
  const withSoftLine = zipWithLineSoftBreak(byLinebreak);

  return (
    <>
      {withSoftLine.map((line, index) => {
        if (line === 'softbreak') return <div key={index} />;

        return <Text key={line}>{line}</Text>;
      })}
    </>
  );
};
const typeComponentMap = {
  root: Fragment,
  text: Text,
};

interface HtmlAst {
  type: 'root' | 'text';
  children: HtmlAst[];
  value: string;
  tagName:
    | 'ul'
    | 'a'
    | 'h1'
    | 'h2'
    | 'p'
    | 'code'
    | 'strong'
    | 'em'
    | 'blockquote';
  properties: any;
}

const handleHtmlAst = (htmlAst: HtmlAst, key: string | number) => {
  const { type, children, value, tagName, properties } = htmlAst;
  const CustomComponent = tagName
    ? elementComponentMap[tagName]
    : typeComponentMap[type];

  if (!CustomComponent) {
    throw `The Tag: ${tagName} was not defined yet!`;
  }

  if (!children || children.length === 0) {
    return (
      <CustomComponent key={key} {...properties}>
        {value}
      </CustomComponent>
    );
  }

  return (
    <CustomComponent key={key} {...properties}>
      {children.map((child, index) => handleHtmlAst(child, index))}
    </CustomComponent>
  );
};

export default handleHtmlAst;
