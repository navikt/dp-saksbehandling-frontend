import { serveFile } from "@std/http/file-server";
import { join } from "@std/path/join";
import { createRequestHandler } from "react-router";

const handleRequest = createRequestHandler(
  // @ts-expect-error - build output
  await import("../build/server/index.js"),
  "production",
);

Deno.serve(async (request) => {
  const pathname = new URL(request.url).pathname;

  try {
    const filePath = join("../build/client", pathname);
    const fileInfo = await Deno.stat(filePath);

    if (fileInfo.isDirectory) {
      throw new Deno.errors.NotFound();
    }

    return await serveFile(request, filePath, { fileInfo });
  } catch (error) {
    if (!(error instanceof Deno.errors.NotFound)) {
      throw error;
    }
  }

  return handleRequest(request);
});
