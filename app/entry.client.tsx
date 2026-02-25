/**
 * By default, Remix will handle hydrating your app on the client for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.client
 */

// Denne importen sørger for at umamiBeforeSend er tilgjengelig når vi laster umami i root.tsx
import "~/umami";

import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { HydratedRouter } from "react-router/dom";

import { initFaro } from "~/faro";
import { logger } from "~/utils/logger.utils";

try {
  initFaro();
} catch (error) {
  logger.error(error);
}

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <HydratedRouter />
    </StrictMode>,
  );
});
