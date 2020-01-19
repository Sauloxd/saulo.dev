import withGlobalStyles from '@webshine/ui/src/services/withGlobalStyles.tsx';
import withUiConfig from '@webshine/ui/src/services/withUiConfig';

const IdentityCompoent = ({ element }) => element;

export const wrapRootElement = withUiConfig(withGlobalStyles(IdentityCompoent));
