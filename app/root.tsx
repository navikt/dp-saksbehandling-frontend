import { json, type MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import navStyles from "@navikt/ds-css/dist/index.css";
import navInternalStyles from "@navikt/ds-css-internal/dist/index.css";
import globalCss from "./global.css";
import quillCss from "quill/dist/quill.snow.css";
import { cssBundleHref } from "@remix-run/css-bundle";

import { createClient } from "@sanity/client";
import { sanityConfig } from "./sanity/sanity.config";
import type { ISanityTexts } from "./sanity/sanity.types";
import { allTextsQuery } from "./sanity/sanity.query";
import { SanityProvider } from "./context/sanity-content";

declare global {
  interface Window {
    env: IEnv;
  }
}

interface IEnv {
  BASE_PATH: string;
  DP_BEHANDLING_URL: string;
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
          { rel: "stylesheet", href: quillCss },
          { rel: "stylesheet", href: globalCss },
          {
            rel: "apple-touch-icon",
            sizes: "180x180",
            href: `${getEnv("BASE_PATH")}/apple-touch-icon.png`,
          },
          {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            href: `${getEnv("BASE_PATH")}/favicon-32x32.png`,
          },
          {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            href: `${getEnv("BASE_PATH")}/favicon-16x16.png`,
          },
          { rel: "manifest", href: `${getEnv("BASE_PATH")}/site.webmanifest` },
          { rel: "manifest", href: `${getEnv("BASE_PATH")}/site.webmanifest` },
          {
            rel: "mask-icon",
            href: `${getEnv("BASE_PATH")}/safari-pinned-tab.svg`,
            color: "#5bbad5",
          },
        ]
      : []),
  ];
}

export function getEnv(value: keyof IEnv) {
  const env = typeof window !== "undefined" ? window.env : process.env;

  return env[value] || "";
}

export async function loader() {
  const sanityTexts = await sanityClient.fetch<ISanityTexts>(allTextsQuery, {
    baseLang: "nb",
    lang: "nb",
  });

  return json({
    sanityTexts,
    env: {
      BASE_PATH: process.env.BASE_PATH,
      DP_BEHANDLING_URL: process.env.DP_BEHANDLING_URL,
    },
  });
}

export default function App() {
  const { sanityTexts, env } = useLoaderData<typeof loader>();

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <SanityProvider initialState={sanityTexts}>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.env = ${JSON.stringify(env)}`,
            }}
          />
          <Scripts />
          <LiveReload />
        </SanityProvider>
      </body>
    </html>
  );
}
