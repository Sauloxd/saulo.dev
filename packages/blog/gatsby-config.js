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
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    }
  ]
};
