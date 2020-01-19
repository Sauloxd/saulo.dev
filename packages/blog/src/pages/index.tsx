import React from 'react';
import { Grid, CenterSingleColumn } from '@webshine/ui/src/components/layout/Grid';
import Avatar from '@webshine/ui/src/components/avatar/Avatar';
import SpanText from '@webshine/ui/src/components/typography/SpanText';
import IconGh from '@webshine/ui/src/components/icons/IconGithub';
import IconEmail from '@webshine/ui/src/components/icons/IconEmail';
import asLink from '@webshine/ui/src/components/icons/iconAsLink';
import IconLinkedin from '@webshine/ui/src/components/icons/IconLinkedin';
import styled from 'styled-components';
import Helmet from 'react-helmet';

const LinkGithub = asLink(IconGh);
const LinkEmail = asLink(IconEmail);
const LinkLinkedin = asLink(IconLinkedin);

const NamePosition = styled.div``;
const CaptionPosition = styled.div``;

const HomeGrid = styled(CenterSingleColumn)`
  grid-row: content-start / content-end;
  margin: ${p => p.theme.spaces.px24};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  ${NamePosition} {
    margin-top: ${p => p.theme.spaces.px16};
    margin-bottom: ${p => p.theme.spaces.px24};
  }
  ${CaptionPosition} {
    margin-bottom: ${p => p.theme.spaces.px12};
  }
`;

const FooterGrid = styled.div`
  grid-row: footer;
  grid-column: col-start / span 12;
  display: flex;
  justify-content: center;

  ${LinkGithub}, ${IconEmail} {
    margin-right: ${p => p.theme.spaces.px24};
  }
`;

const GridStyled = styled(Grid)`
  grid-template-rows: [content-start] 1fr [content-end footer];
  padding: ${p => p.theme.spaces.px24};
`;

const RootPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>{'\u2B21 \u2B22'}</title>
      </Helmet>
      <GridStyled>
        <HomeGrid>
          <Avatar size={320} />
          <NamePosition>
            <SpanText color="secondary">import</SpanText>
            <SpanText color="neutral">{' {'}</SpanText>
            <div style={{ textAlign: 'center' }}>
              <SpanText color="primary" size="px36">SauloFuruta</SpanText>
            </div>
            <SpanText color="neutral">{'} '}</SpanText>
            <SpanText color="secondary">from</SpanText>
            <SpanText color="highlight2">{' \'@QultureRocks/devs/frontend\''}</SpanText>
          </NamePosition>
          <CaptionPosition>
            <SpanText color="secondaryAccessory" size="px16">
              Software Engineer
            </SpanText>
          </CaptionPosition>
          <CaptionPosition>
            <SpanText color="highlight1" size="px12">
              Trying to build things, one coffee at a time
            </SpanText>

          </CaptionPosition>
        </HomeGrid>
        <FooterGrid>
          <LinkGithub size={20} color="highlight1"/>
          <LinkEmail size={20} color="highlight1"/>
          <LinkLinkedin size={20} color="highlight1"/>
        </FooterGrid>
      </GridStyled>
    </>

  );
};

export default RootPage;
