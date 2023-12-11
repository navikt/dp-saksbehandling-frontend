import fs from "node:fs";
import path from "node:path";
import url from "node:url";

import { createRequestHandler } from "@remix-run/express";
import type { ServerBuild } from "@remix-run/node";
import { broadcastDevReady, installGlobals } from "@remix-run/node";
import compression from "compression";
import type { RequestHandler, Response } from "express";
import express from "express";
import sourceMapSupport from "source-map-support";
import morgan from "morgan";

sourceMapSupport.install();
installGlobals();
run();

async function run() {
  const BUILD_PATH = path.resolve("build/index.js");
  const VERSION_PATH = path.resolve("build/version.txt");
  const PORT = process.env.PORT || 3000;
  const BASE_PATH = process.env.BASE_PATH;

  const initialBuild = await reimportServer();
  const app = express();

  app.use(compression());

  // http://expressjs.com/en/advanced/best-practice-security.html#at-a-minimum-disable-x-powered-by-header
  app.disable("x-powered-by");

  // Remix fingerprints its assets so we can cache forever.
  app.use(`${BASE_PATH}/build`, express.static("public/build", { immutable: true, maxAge: "1y" }));

  // Everything else (like favicon.ico) is cached for an hour.
  app.use(`${BASE_PATH}`, express.static("public", { maxAge: "1h" }));

  app.get(
    [`${BASE_PATH}/api/internal/isalive`, `${BASE_PATH}/api/internal/isready`],
    (_, res: Response) => res.sendStatus(200),
  );

  app.use(morgan("tiny"));

  app.all(`${BASE_PATH}(/*)?`, async (...args) => {
    const handler =
      process.env.NODE_ENV === "development"
        ? await createDevRequestHandler(initialBuild)
        : createRequestHandler({
            build: initialBuild,
            mode: initialBuild.mode,
          });

    return handler(...args);
  });

  app.listen(PORT, () => {
    console.log(`✅ app ready: http://localhost:${PORT}`);

    if (process.env.NODE_ENV === "development") {
      broadcastDevReady(initialBuild);
    }
  });

  async function reimportServer(): Promise<ServerBuild> {
    // cjs: manually remove the server build from the require cache
    Object.keys(require.cache).forEach((key) => {
      if (key.startsWith(BUILD_PATH)) {
        delete require.cache[key];
      }
    });

    const stat = fs.statSync(BUILD_PATH);

    // convert build path to URL for Windows compatibility with dynamic `import`
    const BUILD_URL = url.pathToFileURL(BUILD_PATH).href;

    // use a timestamp query parameter to bust the import cache
    return import(BUILD_URL + "?t=" + stat.mtimeMs);
  }

  async function createDevRequestHandler(initialBuild: ServerBuild): Promise<RequestHandler> {
    let build = initialBuild;
    async function handleServerUpdate() {
      // 1. re-import the server build
      build = await reimportServer();
      // 2. tell Remix that this app server is now up-to-date and ready
      broadcastDevReady(build);
    }
    const chokidar = await import("chokidar");
    chokidar
      .watch(VERSION_PATH, { ignoreInitial: true })
      .on("add", handleServerUpdate)
      .on("change", handleServerUpdate);

    // wrap request handler to make sure its recreated with the latest build for every request
    return async (req, res, next) => {
      try {
        return createRequestHandler({
          build,
          mode: "development",
        })(req, res, next);
      } catch (error) {
        next(error);
      }
    };
  }
}
