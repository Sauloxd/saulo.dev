import React from 'react';
import asLink from '@saulo.dev/ui/src/components/icons/iconAsLink';
import IconLinkedin from '@saulo.dev/ui/src/components/icons/IconLinkedin';
import styled from 'styled-components';

const Link = 'https://www.linkedin.com/in/saulo-furuta-386a76b4/';
const LinkLinkedinStyled = asLink(IconLinkedin);
const LinkLinkedin: React.FC<{ className?: string }> = ({ className }) => (
  <LinkLinkedinStyled
    href={Link}
    className={className}
    size={20}
    color="highlight1"
  />
);

export default styled(LinkLinkedin)``;
