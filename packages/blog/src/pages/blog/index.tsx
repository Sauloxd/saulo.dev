import React from 'react';
import {
  Grid,
  CenterSingleColumn,
} from '@saulo.dev/ui/src/components/layout/Grid';
import styled from 'styled-components';
import H1 from '@saulo.dev/ui/src/components/typography/H1';
import SpanText from '@saulo.dev/ui/src/components/typography/SpanText';
import H2 from '@saulo.dev/ui/src/components/typography/H2';
import { graphql, Link } from 'gatsby';
import Hexagon from '@saulo.dev/ui/src/components/hexagon/Hexagon';
import withNavbar from '../../hocs/withNavbar';
import withGlobalStyles from '@saulo.dev/ui/src/services/withGlobalStyles';
import { BlogHomePageQuery } from '../../../types/graphql-types';

const GridStyled = styled(Grid)`
  padding: ${(p) => p.theme.spaces.px24};
`;
const H1Subtitle = styled(SpanText)`
  display: block;
  margin-top: ${(p) => p.theme.spaces.px12};
`;
const PostLinkStyled = styled(Link)`
  :link {
    text-decoration: none;
  }
  ${H2} {
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
`;
const HexagonStyled = styled(Hexagon)`
  margin-left: 0.5em;
`;

interface BlogPage {
  data: BlogHomePageQuery;
  location: Location;
}

export const Head = () => (
  <>
    <link
      href="https://fonts.googleapis.com/css?family=Fira+Code:500&display=swap"
      rel="stylesheet"
    />
    <title>{'\u2B21 \u2B22 Blog posts'}</title>
  </>
);

const BlogPage: React.FC<BlogPage> = ({ data }) => {
  const blogPosts = data.allMarkdownRemark.edges;

  return (
    <>
      <GridStyled>
        <CenterSingleColumn>
          <H1>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {'A place to reflect  '}
              <HexagonStyled
                layers={[
                  'primaryAccessory',
                  { color: 'primary', border: 8 },
                  { color: 'primaryAccessory', border: 8 },
                ]}
                size={48}
              />
            </div>
            <H1Subtitle color="neutral" size="px16">
              This is where I talk about stuff. Maybe it’s about me, maybe its a
              curated list of something, sometimes about tech
            </H1Subtitle>
          </H1>
          {blogPosts.map(({ node: post }) => {
            return (
              <div key={post.id} style={{ marginTop: 24 }}>
                <PostLinkStyled to={post.fields.slug}>
                  <H2>{post.frontmatter.title}</H2>
                </PostLinkStyled>
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
                <div>
                  <SpanText color="neutral" size="px16">
                    {post.frontmatter.description}
                  </SpanText>
                </div>
              </div>
            );
          })}
        </CenterSingleColumn>
      </GridStyled>
    </>
  );
};

export const query = graphql`
  query BlogHomePage {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            description
            date(formatString: "DD MMMM, YYYY")
            tags
          }
          fields {
            slug
          }
          timeToRead
        }
      }
    }
  }
`;

export default withGlobalStyles(withNavbar(BlogPage));
