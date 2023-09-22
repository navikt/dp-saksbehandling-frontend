import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import type { MetaFunction } from "@remix-run/react";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";

import { createClient } from "@sanity/client";
import { getEnv } from "~/utils/env.utils";
import { RootErrorBoundaryView } from "./components/error-boundary/RootErrorBoundaryView";
import { getSaksbehandler, getSession } from "./models/auth.server";
import { sanityConfig } from "./sanity/sanity.config";
import { allTextsQuery } from "./sanity/sanity.query";
import type { ISanityTexts } from "./sanity/sanity.types";

import navInternalStyles from "@navikt/ds-css-internal/dist/index.css";
import navStyles from "@navikt/ds-css/dist/index.css";
import { cssBundleHref } from "@remix-run/css-bundle";
import globalCss from "~/global.css";
import { hentOppgaver, type IOppgave } from "./models/oppgave.server";
import { type ISaksbehandler } from "./models/saksbehandler.server";

export const sanityClient = createClient(sanityConfig);

export const meta: MetaFunction = () => {
  return [
    {
      charset: "utf-8",
    },
    {
      name: "viewport",
      content: "width=device-width,initial-scale=1",
    },
    { title: "Dagpenger saksbehandling" },
    {
      property: "og:title",
      content: "Dagpenger saksbehandling",
    },
    {
      name: "description",
      content: "Saksbehandlingløsning for dagpenger",
    },
  ];
};

export function links() {
  return [
    ...(cssBundleHref
      ? [
          { rel: "stylesheet", href: cssBundleHref },
          { rel: "stylesheet", href: navStyles },
          { rel: "stylesheet", href: navInternalStyles },
          { rel: "stylesheet", href: globalCss },
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
          {
            rel: "icon",
            type: "image/x-icon",
            href: `${getEnv("BASE_PATH")}/favicon.ico`,
          },
        ]
      : []),
  ];
}

// Hindrer loader til å kjøre på nytt etter action funksjon
export const shouldRevalidate = () => false;

export interface IRootLoader {
  saksbehandler?: ISaksbehandler;
  oppgaver: IOppgave[];
}

export async function loader({ request }: LoaderFunctionArgs) {
  const session = await getSession(request);
  const saksbehandler = await getSaksbehandler(session);

  const sanityTexts = await sanityClient.fetch<ISanityTexts>(allTextsQuery, {
    baseLang: "nb",
    lang: "nb",
  });

  const oppgaver = await hentOppgaver(session);

  return json({
    sanityTexts,
    saksbehandler,
    oppgaver,
    env: {
      BASE_PATH: process.env.BASE_PATH,
      DP_BEHANDLING_URL: process.env.DP_BEHANDLING_URL,
      DP_RAPPORTERING_URL: process.env.DP_RAPPORTERING_URL,
      DP_VEDTAK_URL: process.env.DP_VEDTAK_URL,
    },
  });
}

export default function App() {
  const { env } = useLoaderData<typeof loader>();

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
        <script
          dangerouslySetInnerHTML={{
            __html: `window.env = ${JSON.stringify(env)}`,
          }}
        />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return <RootErrorBoundaryView links={<Links />} meta={<Meta />} error={error} />;
}
