import { PlusIcon, XMarkIcon } from "@navikt/aksel-icons";
import { Button, Heading } from "@navikt/ds-react";
import { useState } from "react";
import { useLocation } from "react-router";

import { OpplysningKort } from "~/components/opplysning-gruppe-panel/OpplysningKort";
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

export const NY_PERIODE_ID = "ny-periode";

export function OpplysningGruppePanel({
  opplysningGruppe,
  behandlingId,
  behandlingPromise,
}: IProps) {
  const location = useLocation();
  const { response } = useAwaitPromise(behandlingPromise);
  const { setAktivOpplysningsgruppe } = useDagpengerRettBehandling();
  const [aktivOpplysning, setAktivOpplysning] = useState<components["schemas"]["Opplysning"]>();

  console.log(opplysningGruppe);

  return (
    <div className={"p-4"} key={location.key}>
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
          Lukk
        </Button>
      </div>

      <OpplysningTidslinje
        opplysningGruppe={opplysningGruppe}
        behandling={response?.data}
        aktivOpplysning={aktivOpplysning}
        setAktivOpplysning={setAktivOpplysning}
      />

      <Button
        className={"mt-2"}
        variant={"tertiary"}
        size={"small"}
        icon={<PlusIcon />}
        disabled={aktivOpplysning?.id === NY_PERIODE_ID}
        onClick={() =>
          setAktivOpplysning({
            opplysningTypeId: opplysningGruppe.opplysningTypeId,
            navn: opplysningGruppe.navn,
            datatype: opplysningGruppe.datatype,
            id: NY_PERIODE_ID,
            verdi: "",
            status: "Hypotese",
            redigerbar: true,
            synlig: true,
            formål: "Legacy",
          })
        }
      >
        Legg til periode
      </Button>

      <OpplysningKort
        opplysningGruppe={opplysningGruppe}
        behandlingId={behandlingId}
        aktivOpplysning={aktivOpplysning}
        setAktivOpplysning={setAktivOpplysning}
      />
    </div>
  );
}
