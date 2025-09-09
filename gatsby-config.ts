import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `CapySlice`,
    siteUrl: `https://www.capyslice.com`,
  },
  pathPrefix: "/landing",
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `CapySlice`,
        short_name: `CapySlice`,
        start_url: `/`,
        background_color: `#f7931e`,
        theme_color: `#f7931e`,
        display: `standalone`,
        icon: `src/images/favicon.png`, // Path to your icon
      },
    },
  ],
};

export default config;
