import React from "react"
import { resetStyles } from "./src/utility/build"

export default {
  getSiteData: () => ({
    title: "Elixir Camp 2018",
  }),

  // Define the routes of the application
  getRoutes: async () => {
    return [
      {
        path: "/",
        component: "src/containers/Home",
      },
      {
        path: "/coc",
        component: "src/containers/CodeOfConduct",
      },
      {
        is404: true,
        component: "src/containers/404",
      },
    ]
  },

  // Ensure we server-render styled-components
  renderTohtml: (render, Comp, meta) => {
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
