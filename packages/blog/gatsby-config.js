module.exports = {
  siteMetadata: {
    title: 'Title from siteMetadata',
    fruits: [
      'banana',
      'apple'
    ]
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: 'types/graphql-types.ts',
        documentPaths: [
          './src/**/*.{ts,tsx}',
          './node_modules/gatsby-*/**/*.js'
        ],
        codegenDelay: 200
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: 'gatsby-plugin-gtag',
      options: {
        trackingId: 'UA-175760954-1',
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true
      }
    }
  ]
};
