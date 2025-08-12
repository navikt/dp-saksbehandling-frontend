import {
  CheckmarkCircleIcon,
  CircleIcon,
  CircleSlashIcon,
  ExclamationmarkTriangleFillIcon,
  XMarkOctagonFillIcon,
} from "@navikt/aksel-icons";
import classnames from "classnames";
import { motion } from "motion/react";
import { useParams } from "react-router";

import { components } from "../../../openapi/behandling-typer";
import styles from "./RegelsettMeny.module.css";

interface IProps {
  behandling: components["schemas"]["Behandling"];
}

export function RegelsettMeny({ behandling }: IProps) {
  const { regelsettNavn } = useParams();
  return (
    <ul className={styles.regelsettMeny}>
      {behandling.vilkår.map((regelsett) => {
        if (regelsett.opplysningIder.length > 0) {
          return (
            <motion.li key={regelsett.navn} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
              <a
                href={regelsett.navn}
                className={classnames(styles.lenke, {
                  [styles.akitvtRegelsett]: regelsettNavn === regelsett.navn,
                })}
              >
                {renderStatusIcon(regelsett.status)}
                {regelsett.navn}
              </a>
            </motion.li>
          );
        }
      })}

      <div className={styles.divider} />

      {behandling.fastsettelser.map((regelsett) => {
        if (regelsett.opplysningIder.length > 0) {
          return (
            <motion.li key={regelsett.navn} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
              <a
                href={regelsett.navn}
                className={classnames(styles.lenke, {
                  [styles.akitvtRegelsett]: regelsettNavn === regelsett.navn,
                })}
              >
                {renderStatusIcon(regelsett.status)}
                {regelsett.navn}
              </a>
            </motion.li>
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
