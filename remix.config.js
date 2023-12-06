/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "https://cdn.nav.no/teamdagpenger/dp-saksbehandling-frontend/public/build",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  publicPath:
    process.env.PUBLIC_PATH || "https://cdn.nav.no/teamdagpenger/dp-saksbehandling-frontend/",
  //publicPath: "https://cdn.nav.no/teamdagpenger/dp-saksbehandling-frontend/public/build/",
  serverModuleFormat: "cjs",
};
