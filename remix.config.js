/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "https://cdn.nav.no/teamdagpenger/dp-saksbehandling-frontend/public/build",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  publicPath: "/saksbehandling/build/",
  // publicPath: "https://cdn.nav.no/teamdagpenger/dp-saksbehandling-frontend/public/build/",
  future: {
    unstable_cssModules: true,
    v2_routeConvention: true,
  },
  routes(defineRoutes) {
    return defineRoutes((route) => {
      // A common use for this is catchall routes.
      // - The first argument is the React Router path to match against
      // - The second is the relative filename of the route handler
      // route("/*", "routes/catchall.tsx");
      // if you want to nest routes, use the optional callback argument
      // route("saksbehandlings/", "routes/catchall.tsx", () => {
      //   //   // - path is relative to parent path
      //   //   // - filenames are still relative to the app directory
      //   route("person/:ident", "routes/test.tsx");
      //   // route("relative/path", "some/other/file");
      // });
      route("saksbehandling/person/:ident", "alt-routes/person/test.tsx");
      route("saksbehandlings/person/:ident", "alt-routes/person/index.tsx"),
        () => {
          route("vedtak", "alt-routes/person/vedtak.tsx");
          route("vilkaar", "alt-routes/person/vilkaar.tsx");
          route("sanksjon", "alt-routes/person/sanksjon.tsx");
          route("/meldekort", "alt-routes/person/meldekort.tsx");
        };
      // route("saksbehandlings/person/:ident/meldekort", "alt-routes/person/meldekort.tsx");
    });
  },
};
