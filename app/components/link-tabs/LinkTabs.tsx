import {
  CurrencyExchangeIcon,
  EnvelopeClosedIcon,
  ExclamationmarkTriangleFillIcon,
  GavelSoundBlockIcon,
  ParagraphIcon,
  RobotSmileIcon,
  TasklistIcon,
} from "@navikt/aksel-icons";
import { Tabs } from "@navikt/ds-react";
import { Link as RouterLink, useLocation } from "react-router";

import { useBehandling } from "~/hooks/useBehandling";
import { useTypeSafeParams } from "~/hooks/useTypeSafeParams";
import { skalViseRegelsett } from "~/utils/behandling.utils";
import { isDefined } from "~/utils/type-guards";

import styles from "./LinkTabs.module.css";

export function LinkTabs() {
  const location = useLocation();
  const { oppgaveId } = useTypeSafeParams();
  const { behandling, visArvedeOpplysninger } = useBehandling();

  return (
    <nav className="min-w-0 flex-1">
      <Tabs value={location.pathname} size="small">
        <Tabs.List>
          {getTabs(oppgaveId, behandling, visArvedeOpplysninger).map((tab) => (
            <Tabs.Tab
              as={RouterLink}
              to={`${tab.url}`}
              key={tab.url}
              value={tab.url}
              className="whitespace-nowrap"
              icon={tab.icon}
              label={
                <>
                  {tab.label}
                  {tab.suffix}
                </>
              }
            />
          ))}
        </Tabs.List>
      </Tabs>
    </nav>
  );
}

function getTabs(
  oppgaveId: string,
  behandling: ReturnType<typeof useBehandling>["behandling"],
  visArvedeOpplysninger: boolean,
) {
  const baseUrl = `/oppgave/${oppgaveId}/dagpenger-rett/${behandling.behandlingId}`;

  const meldekortRegelsett = behandling.fastsettelser.find(
    (fastsettelse) => fastsettelse.id === "NDk3MjQwMDY0",
  );

  const prosessregler =
    behandling.saksbehandlingsregler &&
    behandling.saksbehandlingsregler.some((regelsett) =>
      skalViseRegelsett(regelsett, behandling.opplysninger, visArvedeOpplysninger),
    );

  const erFerietillegg = behandling.behandletHendelse.type === "Ferietillegg";

  const erTilBeslutning = behandling.tilstand === "TilBeslutning";

  const ferdigBehandlet = ["Ferdig", "Avbrutt"].includes(behandling.tilstand);

  return [
    !erFerietillegg
      ? {
          url: `${baseUrl}/behandle`,
          label: "Behandlingsoversikt",
          icon: <GavelSoundBlockIcon aria-hidden />,
        }
      : undefined,
    {
      url: `${baseUrl}/vilkar`,
      label: "Vilkårsvurderinger",
      icon: <ParagraphIcon aria-hidden />,
    },
    {
      url: `${baseUrl}/fastsettelser`,
      label: "Fastsettelser",
      icon: <RobotSmileIcon aria-hidden />,
    },
    prosessregler
      ? {
          url: `${baseUrl}/prosessregler`,
          label: "Prosessregler",
          icon: <TasklistIcon aria-hidden />,
        }
      : undefined,
    meldekortRegelsett
      ? {
          url: `${baseUrl}/meldekort`,
          label: "Meldekortberegning",
          icon: <CurrencyExchangeIcon aria-hidden />,
        }
      : undefined,
    !ferdigBehandlet
      ? {
          url: `${baseUrl}/vedtak`,
          label: "Brev til bruker",
          icon: <EnvelopeClosedIcon aria-hidden />,
          suffix: erTilBeslutning ? (
            <ExclamationmarkTriangleFillIcon className={styles.advarsel} aria-hidden />
          ) : null,
        }
      : undefined,
    // getEnv("GCP_ENV") === "dev"
    //   ? {
    //       url: `${baseUrl}/lekegrind`,
    //       label: "Lekegrind",
    //       icon: <SlideIcon aria-hidden />,
    //     }
    //   : undefined,
  ].filter(isDefined);
}
