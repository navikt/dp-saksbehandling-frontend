/** @type {import('@remix-run/dev').AppConfig} */

//trengs for å kalle process.env i config-steget (som i remix kommer før man laster env variabler)
require("dotenv/config");
module.exports = {
  ignoredRouteFiles: ["**/.*", "**/*.test.{ts,tsx}"],
  publicPath:
    process.env.PUBLIC_PATH_LOCAL ||
    "https://cdn.nav.no/teamdagpenger/dp-saksbehandling-frontend/public/build",
  serverModuleFormat: "cjs",
};
