import {
  ChevronRightIcon,
  ClockDashedIcon,
  PadlockLockedIcon,
  PersonPencilIcon,
} from "@navikt/aksel-icons";
import { BodyShort, Tooltip } from "@navikt/ds-react";
import classnames from "classnames";
import { motion } from "motion/react";

import { useDagpengerRettBehandling } from "~/hooks/useDagpengerRettBehandling";
import { formaterOpplysningVerdi } from "~/utils/opplysning.utils";

import { components } from "../../../openapi/behandling-typer";
import styles from "./Regelsett.module.css";

interface IProps {
  opplysningGruppe: components["schemas"]["Opplysningsgruppe"];
}

export function RegelsettOpplysningListeElement({ opplysningGruppe }: IProps) {
  const { aktivOpplysningsgruppeId, setAktivOpplysningsgruppeId } = useDagpengerRettBehandling();
  const erAktivGruppe = aktivOpplysningsgruppeId === opplysningGruppe.opplysningTypeId;

  return (
    <li className={styles.opplysningLinje}>
      <motion.button
        className={classnames(styles.opplysningLinjeKnapp, {
          [styles.opplysningLinjeKnappAktiv]: erAktivGruppe,
        })}
        whileHover={{ scale: 1.005 }}
        whileTap={{ scale: 0.995 }}
        onClick={() =>
          setAktivOpplysningsgruppeId(erAktivGruppe ? undefined : opplysningGruppe.opplysningTypeId)
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
}
