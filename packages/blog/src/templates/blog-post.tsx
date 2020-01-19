import React, { Fragment } from 'react';
import { Grid, CenterSingleColumn } from '@webshine/ui/src/components/layout/Grid';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import H1 from '@webshine/ui/src/components/typography/H1';
import H2 from '@webshine/ui/src/components/typography/H2';
import SpanText from '@webshine/ui/src/components/typography/SpanText';
import withNavbar from '../hocs/withNavbar';
import withGlobalStyles from '@webshine/ui/src/services/withGlobalStyles';

const GridStyled = styled(Grid)`
  padding: ${p => p.theme.spaces.px24};
`;

const P: React.FC = ({ children }) => <SpanText color="neutral" size="px16">{children}</SpanText>;

const elementComponentMap = {
  h1: H1,
  h2: H2,
  p: P
};

const Text: React.FC = ({ children }) => children === '\n' ?  <div style={{ marginTop: 16 }} />: <span>{children}</span>;

const typeCmponentMap = {
  root: Fragment,
  text: Text
};

const handleHtmlAst = (htmlAst: any, key: string) => {
  const { type, children, value, tagName } = htmlAst;

  const Component = tagName ? elementComponentMap[tagName] : typeCmponentMap[type];

  if (!children || children.length === 0) {
    return <Component key={key}>{value}</Component>;
  }

  return (
    <Component key={key}>
      {children.map((child, index) => handleHtmlAst(child, index))}
    </Component>
  );
};

const BlogPostPage: React.FC = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <>
      <Helmet>
        <title>{'\u2B22 \u2B21'}</title>
      </Helmet>
      <GridStyled>
        <CenterSingleColumn>
          {handleHtmlAst(post.htmlAst, 'root')}
        </CenterSingleColumn>
      </GridStyled>
    </>

  );
};

export default withGlobalStyles(withNavbar(BlogPostPage));

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
      }
    }
  }
`;
