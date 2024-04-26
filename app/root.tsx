import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";
import { RootErrorBoundaryView } from "./components/error-boundary/RootErrorBoundaryView";
import { InternalHeader } from "@navikt/ds-react";
import { HeaderMeny } from "~/components/header-meny/HeaderMeny";
import { getSaksbehandler } from "~/models/saksbehandler.server";
import { getEnv } from "~/utils/env.utils";
import navStyles from "@navikt/ds-css/dist/index.css?url";
import globalCss from "~/global.css?url";
import styles from "~/route-styles/root.module.css";
import { logger } from "./utils/logger2.utils";

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
  ];
}

export async function loader({ request }: LoaderFunctionArgs) {
  logger.info(request.url);
  const saksbehandler = await getSaksbehandler(request);

  return json({
    saksbehandler: saksbehandler,
    env: {
      BASE_PATH: process.env.BASE_PATH,
      IS_LOCALHOST: process.env.IS_LOCALHOST,
    },
  });
}

export default function App() {
  const { env, saksbehandler } = useLoaderData<typeof loader>();
  // initFaro();

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <InternalHeader className={styles.header}>
          <Link to={"/"} className={styles.headerLogo}>
            <InternalHeader.Title as="h1" className={styles.pageHeader}>
              NAV Dagpenger
            </InternalHeader.Title>
          </Link>

          <HeaderMeny saksbehandler={saksbehandler} />
        </InternalHeader>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.env = ${JSON.stringify(env)}`,
          }}
        />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return <RootErrorBoundaryView links={<Links />} meta={<Meta />} error={error} />;
}
