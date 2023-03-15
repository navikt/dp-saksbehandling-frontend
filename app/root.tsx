import { json, type MetaFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";

import navStyles from "@navikt/ds-css/dist/index.css";
import navInternalStyles from "@navikt/ds-css-internal/dist/index.css";
import { cssBundleHref } from "@remix-run/css-bundle";

import { createClient } from "@sanity/client";
import { sanityConfig } from "./sanity/sanity.config";
import type { ISanityTexts } from "./sanity/sanity.types";
import { allTextsQuery } from "./sanity/sanity.query";

export interface IRootLoader {
  sanityTexts: ISanityTexts;
}

export const sanityClient = createClient(sanityConfig);

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Dagpenger saksbehandling",
  viewport: "width=device-width,initial-scale=1",
});

export function links() {
  return [
    ...(cssBundleHref
      ? [
          { rel: "stylesheet", href: cssBundleHref },
          { rel: "stylesheet", href: navStyles },
          { rel: "stylesheet", href: navInternalStyles },
          {
            rel: "apple-touch-icon",
            sizes: "180x180",
            href: "/apple-touch-icon.png",
          },
          {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            href: "/favicon-32x32.png",
          },
          {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            href: "/favicon-16x16.png",
          },
          { rel: "manifest", href: "/site.webmanifest" },
          { rel: "manifest", href: "/site.webmanifest" },
          { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" },
        ]
      : []),
  ];
}

export async function loader() {
  const sanityTexts = await sanityClient.fetch<ISanityTexts>(allTextsQuery, {
    baseLang: "nb",
    lang: "nb",
  });

  return json({
    sanityTexts,
  });
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
