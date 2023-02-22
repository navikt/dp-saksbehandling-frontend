/** @type {import('@remix-run/dev').AppConfig} */
const basePath = "/saksbehandling";
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  //assetsBuildDirectory: "public/build",
  //serverBuildPath: "build/index.js",
  publicPath: `${basePath}/build/`,
  future: {
    unstable_cssModules: true,
    //v2_routeConvention: true, fjerner denne enn så lenge da den bare gir et blankt ark
  },
};
