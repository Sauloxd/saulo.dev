import React from 'react';
import asLink from '@webshine/ui/src/components/icons/iconAsLink';
import IconGithub from '@webshine/ui/src/components/icons/IconGithub';
import styled from 'styled-components';

const GITHUB_LINK = 'https://github.com/sauloxd';

const LinkGithubStyled = asLink(IconGithub);

const LinkGithub: React.FC<{className?: string}> = ({ className }) =>
  <LinkGithubStyled className={className} href={GITHUB_LINK} size={20} color="highlight1"/>;

export default styled(LinkGithub)``;
