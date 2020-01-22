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
import H3 from '@webshine/ui/src/components/typography/H3';
import { BlogPostQuery } from '../../types/graphql-types';

const GridStyled = styled(Grid)`
  padding: ${p => p.theme.spaces.px24};
`;

const PageTitle = styled(H1)`
  margin-bottom: 0;
`;

const PostContainer = styled.div`
  margin-top: ${p => p.theme.spaces.px24};
  margin-bottom: ${p => p.theme.spaces.px36};
`;

const P: React.FC = ({ children }) => <SpanText color="neutral" size="px16">{children}</SpanText>;
const Code: React.FC = ({ children }) => <SpanText color="highlight2" size="px16">{children}</SpanText>;
const Strong: React.FC = ({ children }) => <SpanText color="primaryAccessory" fontWeight="bold">{children}</SpanText>;
const Italic: React.FC = ({ children }) => <em><SpanText color="highlight1">{children}</SpanText></em>;

const elementComponentMap = {
  h1: H2,
  h2: H3,
  p: P,
  code: Code,
  strong: Strong,
  em: Italic,
  blockquote: Strong
};

const zipWithLineSoftBreak = (array: string[]) => array.reduce((withLineBreak, item, index, array) => {
  if (array.length === index + 1) return withLineBreak.concat(item);
  return withLineBreak.concat(item).concat('softbreak');
}, []);

const Text: React.FC = ({ children }) => {
  const childrenIsStringBelieveIt = children as string;
  if (children === '\n') return <div style={{ marginTop: 16 }} />;
  const byLinebreak = childrenIsStringBelieveIt.split('\n');
  if (byLinebreak.length === 1) return <span key={childrenIsStringBelieveIt}>{childrenIsStringBelieveIt}</span>;
  const withSoftLine = zipWithLineSoftBreak(byLinebreak);
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {withSoftLine.map((line, index) => {
        if (line === 'softbreak') return <div key={index} />;
        return <Text key={line}>{line}</Text>;
      })}
    </>
  );
};

const typeComponentMap = {
  root: Fragment,
  text: Text
};

interface HtmlAst {
  type: 'root' | 'text';
  children: HtmlAst[];
  value: string;
  tagName: 'h1'| 'h2'| 'p'| 'code'| 'strong'| 'em'| 'blockquote';
}

const handleHtmlAst = (htmlAst: HtmlAst, key: string | number) => {
  const { type, children, value, tagName } = htmlAst;

  const Component = tagName ? elementComponentMap[tagName] : typeComponentMap[type];

  if (!children || children.length === 0) {
    return <Component key={key}>{value}</Component>;
  }

  return (
    <Component key={key}>
      {children.map((child, index) => handleHtmlAst(child, index))}
    </Component>
  );
};

interface BlogPostPage {
  data: BlogPostQuery;
  location?: Location;
}

const BlogPostPage: React.FC<BlogPostPage> = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <>
      <Helmet>
        <title> Blog - {post.frontmatter.title}</title>
      </Helmet>
      <GridStyled>
        <CenterSingleColumn>
          <div key={post.id}>
            <PageTitle>{post.frontmatter.title}</PageTitle>
            <div>
              {post.frontmatter.tags.map(tag => <SpanText key={tag} color="secondaryAccessory" size="px16"> #{tag} </SpanText>)}
            </div>
            <div>
              <SpanText color="highlight1" size="px12">Posted {post.frontmatter.date} - {post.timeToRead} min read </SpanText>
            </div>
          </div>
          <PostContainer>
            {handleHtmlAst(post.htmlAst, 'root')}
          </PostContainer>
        </CenterSingleColumn>
      </GridStyled>
    </>

  );
};

export default withGlobalStyles(withNavbar(BlogPostPage));

export const query = graphql`
  query BlogPost($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      htmlAst
      frontmatter {
        title
        description
        date(formatString: "DD MMMM, YYYY")
        tags
      }
      timeToRead
    }
  }
`;
