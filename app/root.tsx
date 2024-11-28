import navStyles from "@navikt/ds-css/dist/index.css?url";
import { InternalHeader } from "@navikt/ds-react";
import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
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

import akselOverrides from "~/aksel-overrides.css?url";
import { GlobalAlerts } from "~/components/global-alert/GlobalAlerts";
import { PumpkinSvg } from "~/components/halloween/PumpkinSvg";
import { HeaderMeny } from "~/components/header-meny/HeaderMeny";
import { MistelteinSvg } from "~/components/jul/MistelteinSvg";
import { AlertProvider } from "~/context/alert-context";
import globalCss from "~/global.css?url";
import meldingOmVedtakCss from "~/melding-om-vedtak.css?url";
import { getSaksbehandler } from "~/models/saksbehandler.server";
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
    { rel: "stylesheet", href: navStyles },
    { rel: "stylesheet", href: akselOverrides },
    { rel: "stylesheet", href: globalCss },
    { rel: "stylesheet", href: meldingOmVedtakCss },
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

export async function action({ request }: ActionFunctionArgs) {
  return await handleActions(request);
}

export async function loader({ request }: LoaderFunctionArgs) {
  const saksbehandler = await getSaksbehandler(request);
  // const oppgaverJegHarTilBehandling = await hentOppgaver(
  //   request,
  //   "?mineOppgaver=true&tilstand=KLAR_TIL_BEHANDLING&tilstand=UNDER_BEHANDLING&tilstand=KLAR_TIL_KONTROLL&tilstand=UNDER_KONTROLL",
  // );

  const jul = unleash.isEnabled("dp-saksbehandling-frontend.jul");
  const halloween = unleash.isEnabled("dp-saksbehandling-frontend.halloween");
  const oppgaveHistorikk = unleash.isEnabled("dp-saksbehandling-frontend.oppgave-historikk");
  const totrinnsKontroll = unleash.isEnabled("dp-saksbehandling-frontend.totrinns-kontroll");
  const kanRedigereOpplysninger = unleash.isEnabled(
    "dp-saksbehandling-frontend.kan-redigere-opplysninger",
  );

  return json({
    saksbehandler: saksbehandler,
    antallOppgaverJegHarTilBehandling: 0,
    featureFlags: {
      jul,
      halloween,
      oppgaveHistorikk,
      totrinnsKontroll,
      kanRedigereOpplysninger,
    },
    env: {
      BASE_PATH: process.env.BASE_PATH,
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
    },
  });
}

export default function App() {
  const { env, saksbehandler, antallOppgaverJegHarTilBehandling, featureFlags } =
    useLoaderData<typeof loader>();

  return (
    <html lang="nb">
      <head>
        <title>Dagpenger</title>
        <Meta />
        <Links />
      </head>
      <body>
        <InternalHeader className={styles.header}>
          <Link to={"/"} className={styles.headerLogo}>
            <InternalHeader.Title as="h1" className={styles.pageHeader}>
              {featureFlags.halloween && <PumpkinSvg />}
              {featureFlags.jul && <MistelteinSvg />}
              Dagpenger
            </InternalHeader.Title>
          </Link>

          <HeaderMeny
            saksbehandler={saksbehandler}
            antallOppgaverJegHarTilBehandling={antallOppgaverJegHarTilBehandling}
          />
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
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return <RootErrorBoundaryView links={<Links />} meta={<Meta />} error={error} />;
}
