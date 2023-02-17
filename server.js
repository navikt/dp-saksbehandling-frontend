const path = require("path");
const { createApp } = require("@remix-run/serve");
const { serverBuildDirectory } = require("./remix.config.js");

const buildPath = path.resolve(process.cwd(), serverBuildDirectory);

const app = createApp(buildPath);
const port = process.env.PORT;

app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`Remix App Server started at http://localhost:${port}`);
});
