module.exports = {
  siteMetadata: {
    title: 'Scott Tolinski - Modern Web Development',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Scott Tolinski',
        short_name: 'Scott Tolinski',
        start_url: '/',
        background_color: '#111',
        theme_color: '#111',
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-netlify',
  ],
};
