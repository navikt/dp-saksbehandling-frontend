import { CogRotationIcon, GavelSoundBlockIcon, SlideIcon } from "@navikt/aksel-icons";
import classnames from "classnames";
import { useLocation } from "react-router";

import { LoadingLink } from "~/components/loading-link/LoadingLink";
import { useTypeSafeParams } from "~/hooks/useTypeSafeParams";
import { getEnv } from "~/utils/env.utils";
import { isDefined } from "~/utils/type-guards";

import styles from "./LinkTabs.module.css";

interface IProps {
  className?: string;
}

export function LinkTabs(props: IProps) {
  const location = useLocation();
  const { oppgaveId, behandlingId } = useTypeSafeParams();

  return (
    <nav className={props.className}>
      <ol className={styles.container}>
        {getTabs(oppgaveId, behandlingId).map((tab) => (
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

function getTabs(oppgaveId: string, behandlingId: string) {
  return [
    {
      url: `/oppgave/${oppgaveId}/dagpenger-rett/${behandlingId}/behandle`,
      label: "Behandling",
      icon: <CogRotationIcon aria-hidden />,
    },
    {
      url: `/oppgave/${oppgaveId}/dagpenger-rett/${behandlingId}/vedtak`,
      label: "Vedtak",
      icon: <GavelSoundBlockIcon aria-hidden />,
    },
    getEnv("GCP_ENV") === "dev"
      ? {
          url: `/oppgave/${oppgaveId}/dagpenger-rett/${behandlingId}/lekegrind`,
          label: "Lekegrind",
          icon: <SlideIcon aria-hidden />,
        }
      : undefined,
  ].filter(isDefined);
}
