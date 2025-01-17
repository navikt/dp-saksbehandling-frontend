import {
  CheckmarkCircleIcon,
  CircleIcon,
  CircleSlashIcon,
  ExclamationmarkTriangleFillIcon,
  XMarkOctagonFillIcon,
} from "@navikt/aksel-icons";
import classnames from "classnames";

import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { IRegelsett } from "~/models/behandling.server";

import styles from "./RegelsettMeny.module.css";

interface IProps {
  aktivtRegelsett: IRegelsett;
  setAktivtRegelsett: (regelsett: IRegelsett) => void;
}

export function RegelsettMeny({ aktivtRegelsett, setAktivtRegelsett }: IProps) {
  const { behandling } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");

  return (
    <ul className={styles.regelsettMeny}>
      {behandling.vilkår.map((regelsett, index) => (
        <li key={index}>
          <button
            className={classnames({
              [styles.akitvtRegelsett]: aktivtRegelsett.navn === regelsett.navn,
            })}
            onClick={() => setAktivtRegelsett(regelsett)}
          >
            {renderStatusIcon(regelsett.status, regelsett.relevantForVedtak)}
            {regelsett.navn}
          </button>
        </li>
      ))}

      <div className={styles.divider} />

      {behandling.fastsettelser.map((regelsett) => (
        <li key={regelsett.navn}>
          <button
            className={classnames({
              [styles.akitvtRegelsett]: aktivtRegelsett.navn === regelsett.navn,
            })}
            onClick={() => setAktivtRegelsett(regelsett)}
          >
            {renderStatusIcon(regelsett.status, regelsett.relevantForVedtak)}
            {regelsett.navn}
          </button>
        </li>
      ))}
    </ul>
  );
}

function renderStatusIcon(status: IRegelsett["status"], relevantForVedtak: boolean) {
  if (!relevantForVedtak) {
    return <CircleSlashIcon fontSize="1.5rem" />;
  }

  switch (status) {
    case "Info":
      return <CircleIcon fontSize="1.5rem" color={"var(--a-blue-500)"} />;
    case "Oppfylt":
      return <CheckmarkCircleIcon fontSize="1.5rem" color={"var(--a-green-500)"} />;
    case "IkkeOppfylt":
      return <XMarkOctagonFillIcon fontSize="1.5rem" color={"var(--a-red-500)"} />;
    case "HarAvklaring":
      return <ExclamationmarkTriangleFillIcon fontSize="1.5rem" color={"var(--a-orange-600)"} />;
  }
}
