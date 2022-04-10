import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import SpanText from '@saulo.dev/ui/src/components/typography/SpanText';
import withNavbar from '../../hocs/withNavbar';
import withGlobalStyles from '@saulo.dev/ui/src/services/withGlobalStyles';
import { BlogPostQuery } from '../../../types/graphql-types';
import { GridStyled, PageTitle, PostContainer } from './styles';
import { CenterSingleColumn } from '@saulo.dev/ui/src/components/layout/Grid';
import handleHtmlAst from './handleHtmlAst';

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
              {post.frontmatter.tags.map((tag) => (
                <SpanText key={tag} color="secondaryAccessory" size="px16">
                  {' '}
                  #{tag}{' '}
                </SpanText>
              ))}
            </div>
            <div>
              <SpanText color="highlight1" size="px12">
                Posted {post.frontmatter.date} - {post.timeToRead} min read{' '}
              </SpanText>
            </div>
          </div>
          <PostContainer>{handleHtmlAst(post.htmlAst, 'root')}</PostContainer>
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
