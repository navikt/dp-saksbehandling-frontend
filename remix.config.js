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
    v2_errorBoundary: true,
  },
};
