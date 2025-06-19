import {
  CheckmarkCircleIcon,
  CircleIcon,
  CircleSlashIcon,
  ExclamationmarkTriangleFillIcon,
  XMarkOctagonFillIcon,
} from "@navikt/aksel-icons";
import classnames from "classnames";

import { components } from "../../../openapi/behandling-typer";
import styles from "./RegelsettMeny.module.css";

interface IProps {
  behandling: components["schemas"]["Behandling"];
  aktivtRegelsett: components["schemas"]["Regelsett"];
  setAktivtRegelsett: (regelsett: components["schemas"]["Regelsett"]) => void;
}

export function RegelsettMeny({ behandling, aktivtRegelsett, setAktivtRegelsett }: IProps) {
  return (
    <ul className={styles.regelsettMeny}>
      {behandling.vilkår.map((regelsett, index) => {
        if (regelsett.opplysningIder.length > 0) {
          return (
            <li key={index}>
              <button
                className={classnames({
                  [styles.akitvtRegelsett]: aktivtRegelsett.navn === regelsett.navn,
                })}
                onClick={() => setAktivtRegelsett(regelsett)}
              >
                {renderStatusIcon(regelsett.status)}
                {regelsett.navn}
              </button>
            </li>
          );
        }
      })}

      <div className={styles.divider} />

      {behandling.fastsettelser.map((regelsett) => {
        if (regelsett.opplysningIder.length > 0) {
          return (
            <li key={regelsett.navn}>
              <button
                className={classnames({
                  [styles.akitvtRegelsett]: aktivtRegelsett.navn === regelsett.navn,
                })}
                onClick={() => setAktivtRegelsett(regelsett)}
              >
                {renderStatusIcon(regelsett.status)}
                {regelsett.navn}
              </button>
            </li>
          );
        }
      })}
    </ul>
  );
}

function renderStatusIcon(status: components["schemas"]["Regelsett"]["status"]) {
  switch (status) {
    case "Info":
      return <CircleIcon fontSize="1.5rem" color={"var(--a-blue-500)"} />;
    case "Oppfylt":
      return <CheckmarkCircleIcon fontSize="1.5rem" color={"var(--a-green-500)"} />;
    case "IkkeOppfylt":
      return <XMarkOctagonFillIcon fontSize="1.5rem" color={"var(--a-red-500)"} />;
    case "HarAvklaring":
      return <ExclamationmarkTriangleFillIcon fontSize="1.5rem" color={"var(--a-orange-600)"} />;
    case "IkkeRelevant":
      return <CircleSlashIcon fontSize="1.5rem" />;
  }
}
