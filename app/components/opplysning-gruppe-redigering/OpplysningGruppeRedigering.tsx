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
  const [aktivOpplysning, setAktivOpplysning] = useState<IAktivOpplysning>({
    opplysning: opplysningGruppe.opplysninger[opplysningGruppe.opplysninger.length - 1],
    periodeNummer: opplysningGruppe.opplysninger.length - 1,
  });

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

      <OpplysningRedigering
        opplysning={aktivOpplysning.opplysning}
        periodeNummer={aktivOpplysning.periodeNummer}
        behandlingId={behandlingId}
      />

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
