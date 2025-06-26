import { XMarkIcon } from "@navikt/aksel-icons";
import { Accordion, Button, Heading } from "@navikt/ds-react";
import { useState } from "react";

import { OpplysningRedigering } from "~/components/opplysning-gruppe-redigering/OpplysningRedigering";
import { OpplysningTidslinje } from "~/components/opplysning-tidslinje/OpplysningTidslinje";
import { useDagpengerRettBehandling } from "~/hooks/useDagpengerRettBehandling";

import { components } from "../../../openapi/behandling-typer";

interface IProps {
  behandlingId: string;
  opplysningGruppe: components["schemas"]["Opplysningsgruppe"];
}

export interface IAktivOpplysning {
  opplysning: components["schemas"]["Opplysning"];
  periodeNummer: number;
}

export function OpplysningGruppeRedigering({ opplysningGruppe, behandlingId }: IProps) {
  const { setAktivOpplysningsgruppe } = useDagpengerRettBehandling();
  const [aktivOpplysning, setAktivOpplysning] = useState<IAktivOpplysning>();

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
        setAktivPeriode={setAktivOpplysning}
      />

      {[...opplysningGruppe.opplysninger].reverse().map((opplysning, index) => {
        const periodeNummer = opplysningGruppe.opplysninger.length - 1 - index;
        const isActive = aktivOpplysning?.periodeNummer === periodeNummer;

        return (
          <OpplysningRedigering
            key={index}
            opplysning={opplysning}
            periodeNummer={periodeNummer}
            behandlingId={behandlingId}
            isActive={isActive}
          />
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
    </div>
  );
}
