import type { MetaFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";

import navStyles from "@navikt/ds-css/dist/index.css";
import navInternalStyles from "@navikt/ds-css-internal/dist/index.css";
import { cssBundleHref } from "@remix-run/css-bundle";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export function links() {
  return [
    ...(cssBundleHref
      ? [
          { rel: "stylesheet", href: navStyles },
          { rel: "stylesheet", href: navInternalStyles },
          { rel: "stylesheet", href: cssBundleHref },
        ]
      : []),
  ];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
