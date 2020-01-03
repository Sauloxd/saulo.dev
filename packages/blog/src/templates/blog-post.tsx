import React, { Fragment } from 'react';
import { Grid, CenterSingleColumn } from '@webshine/ui/src/components/layout/Grid';
import withUiConfig from '@webshine/ui/src/services/withUiConfig';
import styled from 'styled-components';
import withNavbar from '../hocs/withNavbar';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import H1 from '@webshine/ui/src/components/typography/H1';
import H2 from '@webshine/ui/src/components/typography/H2';
import SpanText from '@webshine/ui/src/components/typography/SpanText';

const GridStyled = styled(Grid)`
  padding: ${p => p.theme.spaces.px24};
`;

const elementComponentMap = {
  h1: H1,
  h2: H2,
  p: ({ children }) => <SpanText color="neutral" size="px16">{children}</SpanText>
};

const typeCmponentMap = {
  root: Fragment,
  text: ({ children }) => children === '\n' ?  <div style={{ marginTop: 16 }} />: <span>{children}</span>
};

const handleHtmlAst = (htmlAst, key) => {
  console.log(htmlAst);
  const { type, children, value, tagName } = htmlAst;

  const Component = tagName ? elementComponentMap[tagName] : typeCmponentMap[type];

  if (!children || children.length === 0) {
    console.log('here', value === '\n');
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

export default withUiConfig(withNavbar(BlogPostPage));

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
