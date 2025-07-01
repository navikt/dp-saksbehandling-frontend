import { PlusIcon, XMarkIcon } from "@navikt/aksel-icons";
import { Accordion, Button, Heading } from "@navikt/ds-react";
import { AnimatePresence, motion } from "motion/react";
import { PropsWithChildren, useState } from "react";

import { OpplysningRedigering } from "~/components/opplysning-gruppe-redigering/OpplysningRedigering";
import { OpplysningTidslinje } from "~/components/opplysning-tidslinje/OpplysningTidslinje";
import { useDagpengerRettBehandling } from "~/hooks/useDagpengerRettBehandling";
import { useAwaitPromise } from "~/hooks/useResolvedPromise";
import { hentBehandling } from "~/models/behandling.server";

import { components } from "../../../openapi/behandling-typer";

interface IProps {
  behandlingId: string;
  behandlingPromise: ReturnType<typeof hentBehandling>;
  opplysningGruppe: components["schemas"]["Opplysningsgruppe"];
}

export interface IAktivOpplysning {
  opplysning: components["schemas"]["Opplysning"];
  periodeNummer: number;
}

export function OpplysningGruppeRedigering({
  opplysningGruppe,
  behandlingId,
  behandlingPromise,
}: IProps) {
  const { response } = useAwaitPromise(behandlingPromise);
  const { setAktivOpplysningsgruppe } = useDagpengerRettBehandling();
  const [aktivOpplysning, setAktivOpplysning] = useState<IAktivOpplysning>();
  const [leggTilNyPeriode, setLeggTilNyPeriode] = useState<boolean>(false);

  return (
    <div className={"p-4"}>
      <div className={"flex justify-between"}>
        <div>
          <Heading size={"xsmall"}>{opplysningGruppe.navn}</Heading>
        </div>
        <Button
          size={"small"}
          variant={"tertiary"}
          icon={<XMarkIcon />}
          onClick={() => setAktivOpplysningsgruppe(undefined)}
        >
          lukk
        </Button>
      </div>

      <OpplysningTidslinje
        opplysningGruppe={opplysningGruppe}
        aktivPeriode={aktivOpplysning}
        behandling={response?.data}
        setAktivPeriode={setAktivOpplysning}
      />

      <Button
        className={"mt-2"}
        variant={"tertiary"}
        size={"small"}
        icon={<PlusIcon />}
        onClick={() => setLeggTilNyPeriode(!leggTilNyPeriode)}
      >
        Legg til periode
      </Button>

      <AnimatePresence initial={false}>
        {leggTilNyPeriode && (
          <AnimertOpplysningKort key={"ny-opplysning"}>
            <OpplysningRedigering
              behandlingId={behandlingId}
              opplysning={{
                opplysningTypeId: opplysningGruppe.opplysningTypeId,
                navn: opplysningGruppe.navn,
                datatype: opplysningGruppe.datatype,
                id: "ny-opplysning",
                verdi: "",
                status: "Hypotese",
                redigerbar: true,
                synlig: true,
                formål: "Legacy",
              }}
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
          const isActive = aktivOpplysning?.periodeNummer === periodeNummer;

          return (
            <AnimertOpplysningKort key={opplysning.id}>
              <OpplysningRedigering
                opplysning={opplysning}
                periodeNummer={periodeNummer}
                behandlingId={behandlingId}
                readonly={leggTilNyPeriode}
                erAktiv={isActive}
              />
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
    </div>
  );
}

function AnimertOpplysningKort({ children }: PropsWithChildren) {
  return (
    <motion.div
      layout
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
        type: "spring",
        duration: 0.4,
      }}
    >
      {children}
    </motion.div>
  );
}
