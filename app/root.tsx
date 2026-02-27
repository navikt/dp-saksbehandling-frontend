import { InternalHeader } from "@navikt/ds-react";
import type { ActionFunctionArgs, LoaderFunctionArgs } from "react-router";
import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useRouteError,
} from "react-router";

import akselDarksideOverrides from "~/aksel-darkside-overrides.css?url";
import { GlobalAlerts } from "~/components/global-alert/GlobalAlerts";
import { HeaderMeny } from "~/components/header-meny/HeaderMeny";
import { Flagg } from "~/components/høytid-og-morro/17-mai/Flagg";
import { PumpkinSvg } from "~/components/høytid-og-morro/halloween/PumpkinSvg";
import { MistelteinSvg } from "~/components/høytid-og-morro/jul/MistelteinSvg";
import { AlertProvider } from "~/context/alert-context";
import { SaksbehandlerProvider } from "~/context/saksbehandler-context";
import globalDarksideCss from "~/global-darkside.css?url";
import { getSaksbehandler } from "~/models/microsoft.server";
import { hentOppgaver } from "~/models/saksbehandling.server";
import styles from "~/route-styles/root.module.css";
import { handleActions } from "~/server-side-actions/handle-actions";
import { getEnv } from "~/utils/env.utils";

import { RootErrorBoundaryView } from "./components/error-boundary/RootErrorBoundaryView";
import { unleash } from "./unleash";

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
    { rel: "stylesheet", href: globalDarksideCss },
    { rel: "stylesheet", href: akselDarksideOverrides },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: `${getEnv("IS_LOCALHOST") ? "" : "https://cdn.nav.no/teamdagpenger/dp-saksbehandling-frontend/client"}/favicon-32x32.png`,
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: `${getEnv("IS_LOCALHOST") ? "" : "https://cdn.nav.no/teamdagpenger/dp-saksbehandling-frontend/client"}/favicon-16x16.png`,
    },
    {
      rel: "icon",
      type: "image/x-icon",
      href: `${getEnv("IS_LOCALHOST") ? "" : "https://cdn.nav.no/teamdagpenger/dp-saksbehandling-frontend/client"}/favicon.ico`,
    },
  ];
}

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export async function loader({ request }: LoaderFunctionArgs) {
  const saksbehandler = await getSaksbehandler(request);
  const oppgaverJegHarTilBehandlingPromise = hentOppgaver(
    request,
    new URLSearchParams(
      "?mineOppgaver=true&tilstand=KLAR_TIL_BEHANDLING&tilstand=UNDER_BEHANDLING&tilstand=KLAR_TIL_KONTROLL&tilstand=UNDER_KONTROLL",
    ),
  );

  const jul = unleash.isEnabled("dp-saksbehandling-frontend.jul");
  const halloween = unleash.isEnabled("dp-saksbehandling-frontend.halloween");
  const valentines = unleash.isEnabled("dp-saksbehandling-frontend.valentines");
  const hippHippHurra = unleash.isEnabled("dp-saksbehandling-frontend.hipp-hipp-hurra");
  const orkestratorBarnOpplysninger = unleash.isEnabled(
    "dp-saksbehandling-frontend.orkestrator-barn-opplysninger",
  );

  return {
    saksbehandler: saksbehandler,
    oppgaverJegHarTilBehandlingPromise,
    featureFlags: {
      jul,
      halloween,
      valentines,
      hippHippHurra,
      orkestratorBarnOpplysninger,
    },
    env: {
      IS_LOCALHOST: process.env.IS_LOCALHOST,
      GCP_ENV: process.env.GCP_ENV,
      NAIS_FRONTEND_TELEMETRY_COLLECTOR_URL: process.env.NAIS_FRONTEND_TELEMETRY_COLLECTOR_URL,
      DP_INNTEKT_REDIGERING_FRONTEND_URL: process.env.DP_INNTEKT_REDIGERING_FRONTEND_URL,
      ARBEID_INNTEKT_URL: process.env.ARBEID_INNTEKT_URL,
      GOSYS_URL: process.env.GOSYS_URL,
      MODIA_URL: process.env.MODIA_URL,
      DAGPENGER_NORGE_URL: process.env.DAGPENGER_NORGE_URL,
      GITHUB_SHA: process.env.GITHUB_SHA,
      FARO_URL: process.env.FARO_URL,
      UMAMI_TRACKING_ID: process.env.UMAMI_TRACKING_ID,
    },
  };
}

export default function App() {
  const { env, saksbehandler, featureFlags } = useLoaderData<typeof loader>();

  return (
    <html lang="nb">
      <head>
        <title>Dagpenger</title>
        <Meta />
        <Links />
      </head>
      <body>
        <SaksbehandlerProvider>
          <InternalHeader className={styles.header}>
            <Link to={"/"} className={styles.headerLogo}>
              <InternalHeader.Title as="h1" className={styles.pageHeader}>
                {featureFlags.halloween && <PumpkinSvg />}
                {featureFlags.jul && <MistelteinSvg />}
                {featureFlags.hippHippHurra && <Flagg />}
                Dagpenger
              </InternalHeader.Title>
            </Link>

            <HeaderMeny saksbehandler={saksbehandler} />
          </InternalHeader>

          <AlertProvider>
            <GlobalAlerts />

            <Outlet />
          </AlertProvider>

          <ScrollRestoration />
          <Scripts />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.env = ${JSON.stringify(env)}`,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.umamiBeforeSend = function(type, payload) {
                  if (payload.url) {
                    var ids = new Set(["oppgave","dagpenger-rett","person","innsending","klage"]);
                    var segments = payload.url.split("/");
                    for (var i = 0; i < segments.length - 1; i++) {
                      if (ids.has(segments[i])) segments[i+1] = ":id";
                    }
                    payload.url = segments.join("/");
                  }
                  return payload;
                }
              `,
            }}
          />
          <script
            defer
            src="https://cdn.nav.no/team-researchops/sporing/sporing.js"
            data-host-url="https://umami.nav.no"
            data-website-id={env.UMAMI_TRACKING_ID}
            data-before-send="umamiBeforeSend"
          />
        </SaksbehandlerProvider>
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return <RootErrorBoundaryView links={<Links />} meta={<Meta />} error={error} />;
}
