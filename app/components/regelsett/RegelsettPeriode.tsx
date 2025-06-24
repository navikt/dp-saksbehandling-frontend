import {
  ChevronRightIcon,
  ClockDashedIcon,
  PadlockLockedIcon,
  PersonPencilIcon,
} from "@navikt/aksel-icons";
import { BodyShort, Detail, Heading, Tooltip } from "@navikt/ds-react";
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

  const opplysningGrupper = behandling.opplysningsgrupper.filter(
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
          {opplysningGrupper.map((opplysningGruppe) => {
            const erAktivGruppe =
              opplysningGruppe.opplysningTypeId === aktivOpplysningsgruppe?.opplysningTypeId;

            return (
              <li key={opplysningGruppe.opplysningTypeId} className={styles.opplysningLinje}>
                <motion.button
                  className={classnames(styles.opplysningLinjeKnapp, {
                    [styles.opplysningLinjeKnappAktiv]: erAktivGruppe,
                  })}
                  whileHover={{ scale: 1.005 }}
                  whileTap={{ scale: 0.995 }}
                  onClick={() =>
                    setAktivOpplysningsgruppe(erAktivGruppe ? undefined : opplysningGruppe)
                  }
                >
                  <BodyShort className={"flex items-center gap-1"}>
                    {opplysningGruppe.redigertAvSaksbehandler && (
                      <Tooltip content="Opplysningen er redigert av saksbehandler">
                        <PersonPencilIcon />
                      </Tooltip>
                    )}
                    {!opplysningGruppe.redigerbar && (
                      <Tooltip content="Opplysningen er ikke redigerbar">
                        <PadlockLockedIcon />
                      </Tooltip>
                    )}
                    {opplysningGruppe.navn}
                  </BodyShort>
                  <BodyShort className={"flex items-center gap-1"}>
                    {formaterOpplysningVerdi(opplysningGruppe.opplysninger[0])}
                    {opplysningGruppe.opplysninger.length > 1 && (
                      <Tooltip content="Opplysningen har flere perioder">
                        <ClockDashedIcon />
                      </Tooltip>
                    )}
                  </BodyShort>

                  <motion.span
                    className={"justify-self-end"}
                    animate={{ rotate: erAktivGruppe ? 180 : 0 }}
                    transition={{
                      duration: 0.2,
                      type: "spring",
                    }}
                  >
                    <ChevronRightIcon
                      fontSize={"1.2rem"}
                      aria-label={erAktivGruppe ? "Lukk opplysning" : "Åpne opplsyning"}
                      color={"var(--a-blue-400)"}
                    />
                  </motion.span>
                </motion.button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
