import { Accordion } from "@navikt/ds-react";
import { AnimatePresence, motion } from "motion/react";
import { PropsWithChildren } from "react";

import { OpplysningKortRedigering } from "~/components/opplysning-gruppe-panel/OpplysningKortRedigering";
import { OpplysningKortVisning } from "~/components/opplysning-gruppe-panel/OpplysningKortVisning";

import { components } from "../../../openapi/behandling-typer";

interface IProps {
  behandlingId: string;
  opplysningGruppe: components["schemas"]["Opplysningsgruppe"];
  aktivOpplysning?: components["schemas"]["Opplysning"];
  setAktivOpplysning: (opplysning: components["schemas"]["Opplysning"] | undefined) => void;
}

export function OpplysningKort({
  behandlingId,
  opplysningGruppe,
  aktivOpplysning,
  setAktivOpplysning,
}: IProps) {
  return (
    <AnimatePresence initial={false}>
      {aktivOpplysning?.id === "ny-periode" && (
        <AnimertOpplysningKort key={"ny-periode"}>
          <OpplysningKortRedigering
            behandlingId={behandlingId}
            opplysning={aktivOpplysning}
            aktivOpplysning={aktivOpplysning}
            setAktivOpplysning={setAktivOpplysning}
            forrigePeriode={
              opplysningGruppe.opplysninger.length > 0
                ? opplysningGruppe.opplysninger[opplysningGruppe.opplysninger.length - 1]
                : undefined
            }
            periodeNummer={opplysningGruppe.opplysninger.length}
          />
        </AnimertOpplysningKort>
      )}

      {[...opplysningGruppe.opplysninger].reverse().map((opplysning, index) => {
        const periodeNummer = opplysningGruppe.opplysninger.length - 1 - index;
        const erAktiv = aktivOpplysning?.id === opplysning.id;

        return (
          <AnimertOpplysningKort key={opplysning.id}>
            {erAktiv && opplysning.redigerbar ? (
              <OpplysningKortRedigering
                behandlingId={behandlingId}
                opplysning={opplysning}
                periodeNummer={periodeNummer}
                aktivOpplysning={aktivOpplysning}
                setAktivOpplysning={setAktivOpplysning}
                nestePeriode={opplysningGruppe.opplysninger[periodeNummer + 1]}
                forrigePeriode={opplysningGruppe.opplysninger[periodeNummer - 1]}
              />
            ) : (
              <OpplysningKortVisning
                opplysning={opplysning}
                periodeNummer={periodeNummer}
                behandlingId={behandlingId}
                aktivOpplysning={aktivOpplysning}
                setAktivOpplysning={setAktivOpplysning}
              />
            )}
          </AnimertOpplysningKort>
        );
      })}

      <Accordion size={"small"} className={"mt-8"}>
        <Accordion.Item>
          <Accordion.Header>Rådata</Accordion.Header>
          <Accordion.Content>
            <pre>{JSON.stringify(opplysningGruppe.opplysninger, null, 2)}</pre>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </AnimatePresence>
  );
}

function AnimertOpplysningKort({ children }: PropsWithChildren) {
  return (
    <motion.div
      layout="preserve-aspect"
      initial={{
        y: -50,
        opacity: 0,
        height: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
        height: "auto",
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.1,
          ease: "easeInOut",
        },
      }}
      transition={{
        type: "keyframes",
        duration: 0.2,
      }}
    >
      {children}
    </motion.div>
  );
}
