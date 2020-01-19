import React from 'react';
import { Grid, CenterSingleColumn } from '@webshine/ui/src/components/layout/Grid';
import Avatar from '@webshine/ui/src/components/avatar/Avatar';
import SpanText from '@webshine/ui/src/components/typography/SpanText';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import withNavbar from '../hocs/withNavbar';
import withGlobalStyles from '@webshine/ui/src/services/withGlobalStyles';
import useMedia from '@webshine/ui/src/services/useMedia';
import LinkLinkedin from '../components/links/LinkLinkedin';
import LinkEmail from '../components/links/LinkEmail';
import LinkGithub from '../components/links/LinkGithub';

const NamePosition = styled.div``;
const CaptionPosition = styled.div``;

const HomeGrid = styled(CenterSingleColumn)`
  padding-top: ${p => p.theme.spaces.px36};
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
  display: flex;
  justify-content: center;

  ${LinkGithub}, ${LinkEmail} {
    margin-right: ${p => p.theme.spaces.px24};
  }
`;

const GridStyled = styled(Grid)`
  grid-template-rows: [content-start] 1fr [content-end footer];
`;

const RootPage: React.FC = () => {
  const tablet = useMedia('(max-width: 900px)');

  return (
    <>
      <Helmet>
        <title>{'\u2B21 \u2B22'}</title>
      </Helmet>
      <GridStyled>
        <HomeGrid>
          <Avatar size={tablet ? 250 : 320} />
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
          <FooterGrid>
            <LinkGithub/>
            <LinkEmail/>
            <LinkLinkedin/>
          </FooterGrid>
        </HomeGrid>
      </GridStyled>
    </>

  );
};

export default withGlobalStyles(withNavbar(RootPage));
