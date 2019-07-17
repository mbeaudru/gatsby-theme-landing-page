module.exports = {
  siteMetadata: {
    title: 'Potato',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `content`,
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto:700`],
        display: 'swap',
      },
    },
  ],
};
