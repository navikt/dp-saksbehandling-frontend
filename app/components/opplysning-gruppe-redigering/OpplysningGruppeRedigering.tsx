import { XMarkIcon } from "@navikt/aksel-icons";
import { Accordion, Button, Heading } from "@navikt/ds-react";
import { useEffect, useState } from "react";

import { OpplysningRedigering } from "~/components/opplysning-gruppe-redigering/OpplysningRedigering";
import { OpplysningTidslinje } from "~/components/opplysning-tidslinje/OpplysningTidslinje";
import { useDagpengerRettBehandling } from "~/hooks/useDagpengerRettBehandling";

import { components } from "../../../openapi/behandling-typer";

interface IProps {
  behandlingId: string;
  opplysningGruppe: components["schemas"]["Opplysningsgruppe"];
}

export interface IAktivPeriode {
  opplysning: components["schemas"]["Opplysning"];
  periodeNummer: number;
}

export function OpplysningGruppeRedigering({ opplysningGruppe, behandlingId }: IProps) {
  const { setAktivOpplysningsgruppe } = useDagpengerRettBehandling();
  const forsteRedigerBareOpplysningIndex = opplysningGruppe.opplysninger.findIndex(
    (opplysning) => opplysning.redigerbar,
  );

  const forsteRedigerBarOpplysning =
    forsteRedigerBareOpplysningIndex !== -1
      ? opplysningGruppe.opplysninger[forsteRedigerBareOpplysningIndex]
      : opplysningGruppe.opplysninger[0];
  const [aktivPeriode, setAktivPeriode] = useState<IAktivPeriode>({
    opplysning: forsteRedigerBarOpplysning,
    periodeNummer: forsteRedigerBareOpplysningIndex !== -1 ? forsteRedigerBareOpplysningIndex : 0,
  });

  useEffect(() => {
    const forsteRedigerBareOpplysningIndex = opplysningGruppe.opplysninger.findIndex(
      (opplysning) => opplysning.redigerbar,
    );
    const forsteRedigerBarOpplysning =
      forsteRedigerBareOpplysningIndex !== -1
        ? opplysningGruppe.opplysninger[forsteRedigerBareOpplysningIndex]
        : opplysningGruppe.opplysninger[0];

    setAktivPeriode({
      opplysning: forsteRedigerBarOpplysning,
      periodeNummer: forsteRedigerBareOpplysningIndex !== -1 ? forsteRedigerBareOpplysningIndex : 0,
    });
  }, [opplysningGruppe]);

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
        aktivPeriode={aktivPeriode}
        setAktivPeriode={setAktivPeriode}
      />

      <OpplysningRedigering
        opplysning={aktivPeriode.opplysning}
        periodeNummer={aktivPeriode.periodeNummer}
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
