import type { MetaFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import globalStyles from "~/global.css";
import navStyles from "@navikt/ds-css/dist/index.css";
import navInternalStyles from "@navikt/ds-css-internal/dist/index.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export function links() {
  return [
    { rel: "stylesheet", href: navStyles },
    { rel: "stylesheet", href: navInternalStyles },
    { rel: "stylesheet", href: globalStyles },
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
