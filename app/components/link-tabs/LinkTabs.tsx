import {
  CurrencyExchangeIcon,
  EnvelopeClosedIcon,
  GavelSoundBlockIcon,
  ParagraphIcon,
  PersonPencilIcon,
  RobotSmileIcon,
  SlideIcon,
  TasklistIcon,
} from "@navikt/aksel-icons";
import classnames from "classnames";
import { useLocation } from "react-router";

import { LoadingLink } from "~/components/loading-link/LoadingLink";
import { useBehandling } from "~/hooks/useBehandling";
import { useTypeSafeParams } from "~/hooks/useTypeSafeParams";
import { skalViseRegelsett } from "~/utils/behandling.utils";
import { getEnv } from "~/utils/env.utils";
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
    {
      url: `${baseUrl}/vedtak`,
      label: "Brev til bruker",
      icon: <EnvelopeClosedIcon aria-hidden />,
    },
    meldekortRegelsett
      ? {
          url: `${baseUrl}/meldekort`,
          label: "Meldekortberegning",
          icon: <CurrencyExchangeIcon aria-hidden />,
        }
      : undefined,
    getEnv("GCP_ENV") === "dev"
      ? {
          url: `${baseUrl}/lekegrind`,
          label: "Lekegrind",
          icon: <SlideIcon aria-hidden />,
        }
      : undefined,
  ].filter(isDefined);
}
