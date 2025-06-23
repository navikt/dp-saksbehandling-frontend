import { ChevronRightIcon } from "@navikt/aksel-icons";
import { BodyShort, Detail, Heading } from "@navikt/ds-react";
import classnames from "classnames";
import { motion } from "motion/react";

import { Avklaringer } from "~/components/avklaringer/Avklaringer";
import { useDagpengerRettBehandling } from "~/hooks/useDagpengerRettBehandling";

import { components } from "../../../openapi/behandling-typer";
import { formaterOpplysningVerdi } from "../opplysning-linje/OpplysningLinje";
import styles from "./Regelsett.module.css";

interface IProps {
  behandling: components["schemas"]["Behandling"];
  aktivtRegelsett: components["schemas"]["Regelsett"];
  readonly?: boolean;
}

export function RegelsettPeriode({ behandling, aktivtRegelsett }: IProps) {
  const { aktivOpplysningsgruppe, setAktivOpplysningsgruppe } = useDagpengerRettBehandling();

  const grupper = behandling.opplysningsgrupper.filter(
    (gruppe) =>
      gruppe.synlig && aktivtRegelsett.opplysningTypeIder.includes(gruppe.opplysningTypeId),
  );

  return (
    <div className={styles.container}>
      <div className={styles.hjemmelContainer}>
        <Heading className={styles.hjemmelTittel} size="medium">
          {aktivtRegelsett.hjemmel.tittel}
        </Heading>

        <Detail textColor="subtle" className={styles.hjemmelKilde}>
          {aktivtRegelsett.hjemmel.kilde.navn}
        </Detail>
      </div>

      <Avklaringer
        avklaringer={aktivtRegelsett.avklaringer}
        behandlingId={behandling.behandlingId}
      />

      <div className={"card m-4"}>
        <Heading size={"small"} className={"pt-4 pl-6"}>
          Opplysninger
        </Heading>
        <ul className={"pb-4"}>
          {grupper.map((gruppe) => {
            const erAktivGruppe =
              gruppe.opplysningTypeId === aktivOpplysningsgruppe?.opplysningTypeId;
            return (
              <motion.li
                key={gruppe.opplysningTypeId}
                className={classnames(styles.opplysningLinje, {
                  [styles.opplysningLinjeAktiv]: erAktivGruppe,
                })}
                whileHover={{ scale: 1.005 }}
                whileTap={{ scale: 0.995 }}
              >
                <button
                  onClick={() => setAktivOpplysningsgruppe(erAktivGruppe ? undefined : gruppe)}
                >
                  <BodyShort>{gruppe.navn}</BodyShort>
                  <BodyShort>{formaterOpplysningVerdi(gruppe.opplysninger[0])} </BodyShort>
                  <motion.span
                    animate={{ rotate: erAktivGruppe ? 180 : 0 }}
                    transition={{
                      duration: 0.2,
                      type: "spring",
                    }}
                  >
                    <ChevronRightIcon
                      fontSize={"1.5rem"}
                      aria-label={erAktivGruppe ? "Lukk opplysning" : "Åpne opplsyning"}
                    />
                  </motion.span>
                </button>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
