import { json, type LoaderArgs, type MetaFunction } from "@remix-run/node";
import {
  isRouteErrorResponse,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";

import navInternalStyles from "@navikt/ds-css-internal/dist/index.css";
import navStyles from "@navikt/ds-css/dist/index.css";
import { cssBundleHref } from "@remix-run/css-bundle";
import quillCss from "quill/dist/quill.snow.css";
import globalCss from "~/global.css";

import { createClient } from "@sanity/client";
import { getEnv } from "~/utils/env.utils";
import RootErrorBoundaryView from "./components/error-boundary/RootErrorBoundaryView";
import { SanityProvider } from "./context/sanity-content";
import { authorizeUser } from "./models/auth.server";
import { sanityConfig } from "./sanity/sanity.config";
import { allTextsQuery } from "./sanity/sanity.query";
import type { ISanityTexts } from "./sanity/sanity.types";
import { Alert, Heading } from "@navikt/ds-react";

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

export async function loader({ request }: LoaderArgs) {
  const saksbehandler = await authorizeUser(request);

  const sanityTexts = await sanityClient.fetch<ISanityTexts>(allTextsQuery, {
    baseLang: "nb",
    lang: "nb",
  });

  return json({
    sanityTexts,
    saksbehandler,
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

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    const hasStatusText = error.statusText.length > 0;

    return (
      <RootErrorBoundaryView links={<Links />} meta={<Meta />}>
        <Alert variant="error">
          <Heading spacing size="medium" level="1">
            {error.status} Error {hasStatusText && `: ${error.statusText}`}
          </Heading>
          <p>{error.data}</p>
        </Alert>
      </RootErrorBoundaryView>
    );
  } else if (error instanceof Error) {
    return (
      <RootErrorBoundaryView links={<Links />} meta={<Meta />}>
        <Alert variant="error">
          <Heading spacing size="medium" level="1">
            {error.message}
          </Heading>
          <p>{error.message}</p>
          <p>The stack trace is:</p>
          <pre>{error.stack}</pre>
        </Alert>
      </RootErrorBoundaryView>
    );
  } else {
    return (
      <RootErrorBoundaryView links={<Links />} meta={<Meta />}>
        <Alert variant="error">
          <Heading spacing size="medium" level="1">
            Ukjent feil
          </Heading>
        </Alert>
      </RootErrorBoundaryView>
    );
  }
}
