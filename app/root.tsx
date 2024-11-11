import type { LoaderFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
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
import { AlertProvider } from "~/context/alert-context";
import { GlobalAlerts } from "~/components/global-alert/GlobalAlerts";
import { hentOppgaver } from "~/models/oppgave.server";
import navStyles from "@navikt/ds-css/dist/index.css?url";
import globalCss from "~/global.css?url";
import akselOverrides from "~/aksel-overrides.css?url";
import meldingOmVedtakCss from "~/melding-om-vedtak.css?url";
import styles from "~/route-styles/root.module.css";
import { unleash } from "./unleash";
import { PumpkinSvg } from "~/components/halloween/PumpkinSvg";
import { hentOppgaverForPerson } from "~/models/person.server";

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

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const search = new URLSearchParams(url.search);
  const saksbehandler = await getSaksbehandler(request);
  let personSokError;

  const personIdent = search.get("personIdent");
  if (personIdent) {
    const verdiUtenMellomrom = personIdent.replace(/\s+/g, "");

    if (verdiUtenMellomrom.length === 11) {
      const oppgaver = await hentOppgaverForPerson(request, personIdent);
      const sisteOppgave = oppgaver[0];

      if (sisteOppgave) {
        const sisteOppgaveTilstand = sisteOppgave?.tilstand;
        let view = "se";
        switch (sisteOppgaveTilstand) {
          case "KLAR_TIL_BEHANDLING":
          case "UNDER_BEHANDLING":
            view = "behandle";
            break;
          case "UNDER_KONTROLL":
            view = "kotroll";
            break;
        }

        if (oppgaver.length > 0) {
          return redirect(`/oppgave/${sisteOppgave.oppgaveId}/${view}`);
        }
      } else {
        personSokError = "Fant ingen oppgaver for personen";
      }
    } else {
      personSokError = "Personnummer må være 11 siffer";
    }
  }

  const mineOppgaverTilBehandling = await hentOppgaver(
    request,
    "?mineOppgaver=true&tilstand=KLAR_TIL_BEHANDLING&tilstand=UNDER_BEHANDLING",
  );

  const oppgaveHistorikk = unleash.isEnabled("dp-saksbehandling-frontend.oppgave-historikk");
  const totrinnsKontroll = unleash.isEnabled("dp-saksbehandling-frontend.totrinns-kontroll");
  const halloween = unleash.isEnabled("dp-saksbehandling-frontend.halloween");

  return json({
    saksbehandler: saksbehandler,
    antallJegHarTilBehandling: mineOppgaverTilBehandling.length,
    personSokError,
    featureFlags: {
      oppgaveHistorikk,
      totrinnsKontroll,
      halloween,
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
  const { env, saksbehandler, antallJegHarTilBehandling, featureFlags } =
    useLoaderData<typeof loader>();

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
              {featureFlags.halloween && <PumpkinSvg />}
              Dagpenger
            </InternalHeader.Title>
          </Link>

          <HeaderMeny
            saksbehandler={saksbehandler}
            antallJegHarTilBehandling={antallJegHarTilBehandling}
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
