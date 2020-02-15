import withGlobalStyles from '@saulo.dev/ui/src/services/withGlobalStyles.tsx';
import withUiConfig from '@saulo.dev/ui/src/services/withUiConfig';

const IdentityCompoent = ({ element }) => element;

export const wrapRootElement = withUiConfig(withGlobalStyles(IdentityCompoent));
