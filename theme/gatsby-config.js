module.exports = {
  siteMetadata: {
    title: "Potato",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Oxygen\:700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
  ],
}
