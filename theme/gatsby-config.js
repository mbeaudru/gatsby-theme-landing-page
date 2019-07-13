module.exports = {
  siteMetadata: {
    title: 'Potato',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Oxygen :700`],
        display: 'swap',
      },
    },
  ],
};
