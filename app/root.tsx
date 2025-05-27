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

import akselOverrides from "~/aksel-overrides.css?url";
import { GlobalAlerts } from "~/components/global-alert/GlobalAlerts";
import { PumpkinSvg } from "~/components/halloween/PumpkinSvg";
import { HeaderMeny } from "~/components/header-meny/HeaderMeny";
import { MistelteinSvg } from "~/components/jul/MistelteinSvg";
import { AlertProvider } from "~/context/alert-context";
import { SaksbehandlerProvider } from "~/context/saksbehandler-context";
import globalCss from "~/global.css?url";
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
    { rel: "stylesheet", href: globalCss },
    { rel: "stylesheet", href: akselOverrides },
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
  const oppgaveHistorikk = unleash.isEnabled("dp-saksbehandling-frontend.oppgave-historikk");
  const totrinnsKontroll = unleash.isEnabled("dp-saksbehandling-frontend.totrinns-kontroll");
  const kanRedigereOpplysninger = unleash.isEnabled(
    "dp-saksbehandling-frontend.kan-redigere-opplysninger",
  );
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
      oppgaveHistorikk,
      totrinnsKontroll,
      kanRedigereOpplysninger,
      orkestratorBarnOpplysninger,
    },
    env: {
      IS_LOCALHOST: process.env.IS_LOCALHOST,
      GCP_ENV: process.env.GCP_ENV,
      NAIS_FRONTEND_TELEMETRY_COLLECTOR_URL: process.env.NAIS_FRONTEND_TELEMETRY_COLLECTOR_URL,
      ARBEID_INNTEKT_URL: process.env.ARBEID_INNTEKT_URL,
      GOSYS_URL: process.env.GOSYS_URL,
      MODIA_URL: process.env.MODIA_URL,
      MELDEKORT_URL: process.env.MELDEKORT_URL,
      INNTEKTREDIGERING_URL: process.env.INNTEKTREDIGERING_URL,
      GRISEN_URL: process.env.GRISEN_URL,
      DAGPENGER_NORGE_URL: process.env.DAGPENGER_NORGE_URL,
      GITHUB_SHA: process.env.GITHUB_SHA,
      FARO_URL: process.env.FARO_URL,
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
        <SaksbehandlerProvider aktivtSok="">
          <InternalHeader className={styles.header}>
            <Link to={"/"} className={styles.headerLogo}>
              <InternalHeader.Title as="h1" className={styles.pageHeader}>
                {featureFlags.halloween && <PumpkinSvg />}
                {featureFlags.jul && <MistelteinSvg />}
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
        </SaksbehandlerProvider>
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return <RootErrorBoundaryView links={<Links />} meta={<Meta />} error={error} />;
}
