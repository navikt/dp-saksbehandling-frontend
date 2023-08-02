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
    v2_routeConvention: true,
    v2_errorBoundary: true,
    v2_normalizeFormMethod: true,
    v2_meta: true,
    v2_headers: true,
    v2_dev: true,
  },
  serverModuleFormat: "cjs",
};
