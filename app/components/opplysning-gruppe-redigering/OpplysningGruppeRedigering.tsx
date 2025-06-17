import { XMarkIcon } from "@navikt/aksel-icons";
import { Accordion, Button, Detail, Heading } from "@navikt/ds-react";
import { Fragment, useState } from "react";

import { RedigerPeriode } from "~/components/opplysning-gruppe-redigering/RedigerPeriode";
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

  return (
    <div className={"p-4"}>
      <div className={"flex justify-between"}>
        <div>
          <Heading size={"xsmall"}>{opplysningGruppe.navn}</Heading>
          <Detail textColor={"subtle"}>§ 4-5. Reelle arbeidssøkere (mock)</Detail>
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

      <div>
        <OpplysningTidslinje
          opplysningGruppe={opplysningGruppe}
          aktivPeriode={aktivPeriode}
          setAktivPeriode={setAktivPeriode}
        />
      </div>

      {aktivPeriode && (
        <Fragment key={aktivPeriode.opplysning.id}>
          <RedigerPeriode
            opplysning={aktivPeriode.opplysning}
            periodeNummer={aktivPeriode.periodeNummer}
            behandlingId={behandlingId}
          />
        </Fragment>
      )}

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
