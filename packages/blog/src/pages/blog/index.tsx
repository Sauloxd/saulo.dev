import React from 'react';
import { Grid, CenterSingleColumn } from '@webshine/ui/src/components/layout/Grid';
import withUiConfig from '@webshine/ui/src/services/withUiConfig';
import styled from 'styled-components';
import withNavbar from '../../hocs/withNavbar';
import H1 from '@webshine/ui/src/components/typography/H1';
import Helmet from 'react-helmet';
import SpanText from '@webshine/ui/src/components/typography/SpanText';
import H2 from '@webshine/ui/src/components/typography/H2';
import { graphql, Link } from 'gatsby';
import Hexagon from '@webshine/ui/src/components/hexagon/Hexagon';

const GridStyled = styled(Grid)`
  padding: ${p => p.theme.spaces.px24};
`;

const H1Subtitle = styled(SpanText)`
  display: block;
  margin-top: ${p => p.theme.spaces.px12};
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

const BlogPage: React.FC = ({ data }) => {
  console.log(data);
  const blogPosts = data.allMarkdownRemark.edges;

  return (
    <>
      <Helmet>
        <title>{'\u2B22 \u2B21'}</title>
      </Helmet>
      <GridStyled>
        <CenterSingleColumn>
          <H1>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {'A place to reflect  '}
              <HexagonStyled layers={['primaryAccessory', { color: 'primary', border: 8 }, { color: 'primaryAccessory', border: 8 }]} size={48}/>
            </div>
            <H1Subtitle color="neutral" size="px16">
                This is where I talk about stuff. Maybe it’s about me, maybe its a curated list of something, sometimes about tech
            </H1Subtitle>
          </H1>
          {
            blogPosts.map(({ node: post }) => {
              console.log(post);
              return (
                <div key={post.id}>
                  <PostLinkStyled to={post.fields.slug}><H2>{post.frontmatter.title}</H2></PostLinkStyled>
                  <div>
                    <SpanText color="highlight1" size="px12">Posted {post.frontmatter.date} - {post.timeToRead} min read </SpanText>
                  </div>
                  <div>
                    {post.frontmatter.tags.map(tag => <SpanText key={tag} color="secondaryAccessory" size="px16"> #{tag} </SpanText>)}
                  </div>
                </div>
              );
            })
          }
        </CenterSingleColumn>
      </GridStyled>
    </>

  );
};

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
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

export default withUiConfig(withNavbar(BlogPage));
