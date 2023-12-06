/** @type {import('@remix-run/dev').AppConfig} */

//trengs for å kalle process.env i config-steget (som i remix kommer før man laster env variabler)
require("dotenv/config");
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "https://cdn.nav.no/teamdagpenger/dp-saksbehandling-frontend/public/build",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  publicPath:
    process.env.PUBLIC_PATH_LOCAL ||
    "https://cdn.nav.no/teamdagpenger/dp-saksbehandling-frontend/public/build",
  //publicPath: "https://cdn.nav.no/teamdagpenger/dp-saksbehandling-frontend/public/build/",
  serverModuleFormat: "cjs",
};
