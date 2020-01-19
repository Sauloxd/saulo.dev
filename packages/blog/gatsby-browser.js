import withGlobalStyles from '@webshine/ui/src/services/withGlobalStyles.tsx';
import withUiConfig from '@webshine/ui/src/services/withUiConfig';
import withNavbar from './src/hocs/withNavbar';

const IdentityCompoent = ({ element }) => element;

export const wrapRootElement = withUiConfig(withGlobalStyles(withNavbar(IdentityCompoent)));
