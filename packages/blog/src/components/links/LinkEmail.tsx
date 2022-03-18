import React from 'react';
import asLink from '@saulo.dev/ui/src/components/icons/iconAsLink';
import IconEmail from '@saulo.dev/ui/src/components/icons/IconEmail';
import styled from 'styled-components';

const EMAIL_LINK =
  'mailto:hello@saulo.dev?Subject=Heeeey%2C%20I%27m%20sending%20this%20because...';
const LinkEmailStyled = asLink(IconEmail);
const LinkEmail: React.FC<{ className?: string }> = ({ className }) => (
  <LinkEmailStyled
    className={className}
    href={EMAIL_LINK}
    size={20}
    color="highlight1"
  />
);

export default styled(LinkEmail)``;
