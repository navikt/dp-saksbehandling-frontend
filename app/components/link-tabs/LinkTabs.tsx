import {
  CurrencyExchangeIcon,
  EnvelopeClosedIcon,
  ExclamationmarkTriangleFillIcon,
  GavelSoundBlockIcon,
  ParagraphIcon,
  PersonPencilIcon,
  RobotSmileIcon,
  TasklistIcon,
} from "@navikt/aksel-icons";
import classnames from "classnames";
import { useLocation } from "react-router";

import { LoadingLink } from "~/components/loading-link/LoadingLink";
import { useBehandling } from "~/hooks/useBehandling";
import { useTypeSafeParams } from "~/hooks/useTypeSafeParams";
import { skalViseRegelsett } from "~/utils/behandling.utils";
import { isDefined } from "~/utils/type-guards";

import styles from "./LinkTabs.module.css";

interface IProps {
  className?: string;
}

export function LinkTabs(props: IProps) {
  const location = useLocation();
  const { oppgaveId } = useTypeSafeParams();
  const { behandling, visArvedeOpplysninger } = useBehandling();

  return (
    <nav className={props.className}>
      <ol className={styles.container}>
        {getTabs(oppgaveId, behandling, visArvedeOpplysninger).map((tab) => (
          <li key={tab.url}>
            <LoadingLink
              to={`${tab.url}`}
              className={classnames(styles.lenke, {
                [styles.lenkeAktiv]: location.pathname === tab.url,
              })}
            >
              {tab.icon}
              {tab.label}
              {tab.suffix}
            </LoadingLink>
          </li>
        ))}
      </ol>
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

  const antallAvklaringer = behandling.avklaringer.filter(
    (avklaring) => avklaring.status === "Åpen",
  ).length;
  const erTilBeslutning = behandling.tilstand === "TilBeslutning";

  return [
    {
      url: `${baseUrl}/behandle`,
      label: "Forslag til vedtak",
      icon: <GavelSoundBlockIcon aria-hidden />,
    },
    {
      url: `${baseUrl}/avklaringer`,
      label: "Avklaringer og vurderinger",
      icon: <PersonPencilIcon aria-hidden />,
      suffix: hentSuffixForAvklaringer(antallAvklaringer, erTilBeslutning),
    },
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
    {
      url: `${baseUrl}/vedtak`,
      label: "Brev til bruker",
      icon: <EnvelopeClosedIcon aria-hidden />,
      suffix: erTilBeslutning ? (
        <ExclamationmarkTriangleFillIcon className={styles.advarsel} aria-hidden />
      ) : null,
    },
    // getEnv("GCP_ENV") === "dev"
    //   ? {
    //       url: `${baseUrl}/lekegrind`,
    //       label: "Lekegrind",
    //       icon: <SlideIcon aria-hidden />,
    //     }
    //   : undefined,
  ].filter(isDefined);
}

function hentSuffixForAvklaringer(antall: number, erTilBeslutning: boolean) {
  if (antall > 0 && !erTilBeslutning) {
    return <span className={styles.antallAvklaringer}>{antall}</span>;
  }

  if (erTilBeslutning) {
    return <ExclamationmarkTriangleFillIcon className={styles.advarsel} aria-hidden />;
  }
  return null;
}
