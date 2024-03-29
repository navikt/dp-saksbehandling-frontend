import { json } from "@remix-run/node";
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
import { getEnv } from "~/utils/env.utils";
import { RootErrorBoundaryView } from "./components/error-boundary/RootErrorBoundaryView";
import navStyles from "@navikt/ds-css/dist/index.css";
import { cssBundleHref } from "@remix-run/css-bundle";
import globalCss from "~/global.css";
import { initFaro } from "~/utils/faro";

export function meta() {
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
}

export function links() {
  return [
    ...(cssBundleHref
      ? [
          { rel: "stylesheet", href: cssBundleHref },
          { rel: "stylesheet", href: navStyles },
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

export async function loader() {
  return json({
    env: {
      BASE_PATH: process.env.BASE_PATH,
      IS_LOCALHOST: process.env.IS_LOCALHOST,
    },
  });
}

// Hindrer loader til å kjøre på nytt etter action funksjon
export const shouldRevalidate = () => false;

export default function App() {
  const { env } = useLoaderData<typeof loader>();
  initFaro();

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
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return <RootErrorBoundaryView links={<Links />} meta={<Meta />} error={error} />;
}
