import React from "react"
import { ServerStyleSheet } from "styled-components"
import { resetStyles } from "./src/utility/build"

export default {
  getSiteData: () => ({
    title: "Elixir Camp 2018",
  }),

  // Define the routes of the application
  getRoutes: async () => [
    {
      path: "/",
      component: "src/containers/Home",
    },
    {
      path: "/code-of-conduct",
      component: "src/containers/CodeOfConduct",
    },
    {
      path: "/DiversityAndInclusion",
      component: "src/containers/DiversityAndInclusion",
    },
    {
      is404: true,
      component: "src/containers/404",
    },
  ],

  // Ensure we server-render styled-components
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet()
    const html = render(sheet.collectStyles(<Comp />))
    meta.styleTags = sheet.getStyleElement()

    return html
  },

  // Define boilerplate HTML stuff and bring in required Google fonts
  Document: ({ Html, Head, Body, children, siteData, renderMeta }) => (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <title>
          Elixir Camp IV - 26th-29th October, Camp Wombaroo, Mittagong NSW
        </title>
        <link rel="canonical" href="http://elixir.camp/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Elixir Camp IV - 26th-29th October, Camp Wombaroo, Mittagong NSW"
        />
        <meta
          property="og:description"
          content="Elixir Camp is a place for people interested in Elixir, Erlang and related technologies to gather, network, share ideas and generally have a great time."
        />
        <meta property="og:url" content="http://elixir.camp/" />
        <meta property="og:image" content="http://elixir.camp/logo.png" />
        <meta property="og:site_name" content="Elixir Camp IV" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:image" content="http://elixir.camp/logo.png" />
        <meta
          name="twitter:title"
          content="Elixir Camp IV - 26th-29th October, Camp Wombaroo, Mittagong NSW"
        />
        <meta
          name="twitter:description"
          content="Elixir Camp is a place for people interested in Elixir, Erlang and related technologies to gather, network, share ideas and generally have a great time."
        />
        <meta name="twitter:site" content="@elixircamp_au" />
        <meta name="twitter:creator" content="@elixircamp_au" />

        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,700|Playfair+Display:400,700"
          rel="stylesheet"
        />

        <style dangerouslySetInnerHTML={{ __html: resetStyles }} />
        {renderMeta.styleTags}

        <title>{siteData.title}</title>
      </Head>

      <Body>{children}</Body>
    </Html>
  ),
}
