export default {
  getSiteData: () => ({
    title: "Elixir Camp 2018",
  }),
  getRoutes: async () => {
    return [
      {
        path: "/",
        component: "src/containers/Home",
      },
      {
        is404: true,
        component: "src/containers/404",
      },
    ]
  },
}
