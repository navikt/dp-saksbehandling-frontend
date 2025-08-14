import { PlusIcon, XMarkIcon } from "@navikt/aksel-icons";
import { Button, Heading } from "@navikt/ds-react";
import { useState } from "react";
import { useLocation } from "react-router";

import { OpplysningKort } from "~/components/opplysning-gruppe-panel/OpplysningKort";
import { OpplysningTidslinje } from "~/components/opplysning-tidslinje/OpplysningTidslinje";
import { useDagpengerRettBehandling } from "~/hooks/useDagpengerRettBehandling";
import { logger } from "~/utils/logger.utils";

import { components } from "../../../openapi/behandling-typer";

interface IProps {
  behandling: components["schemas"]["Behandling"];
}

export const NY_PERIODE_ID = "ny-periode";

export function OpplysningGruppePanel({ behandling }: IProps) {
  const location = useLocation();
  const { aktivOpplysningsgruppeId, setAktivOpplysningsgruppeId } = useDagpengerRettBehandling();
  const opplysningGruppe = behandling.opplysningsgrupper.find(
    (gruppe) => gruppe.opplysningTypeId === aktivOpplysningsgruppeId,
  );

  if (!opplysningGruppe) {
    return (
      <div className={"p-4"}>
        <Heading size={"xsmall"}>Ingen opplysningsgruppe valgt</Heading>
      </div>
    );
  }

  const [aktivPeriode, setAktivPeriode] = useState<components["schemas"]["Opplysning"] | undefined>(
    opplysningGruppe.opplysninger.length === 1 ? opplysningGruppe.opplysninger[0] : undefined,
  );

  const sisteOpplysningPeriodeHarGyldigTilOgMedDato =
    !opplysningGruppe?.opplysninger[opplysningGruppe?.opplysninger.length - 1].gyldigTilOgMed;

  const kanLeggeTilNyPeriode =
    !!aktivPeriode?.redigerbar &&
    aktivPeriode?.id !== NY_PERIODE_ID &&
    !sisteOpplysningPeriodeHarGyldigTilOgMedDato;

  function leggTilNyPeriode() {
    if (!opplysningGruppe) {
      return logger.error("Opplysning gruppe er ikke satt");
    }

    setAktivPeriode({
      opplysningTypeId: opplysningGruppe.opplysningTypeId,
      navn: opplysningGruppe.navn,
      datatype: opplysningGruppe.datatype,
      id: NY_PERIODE_ID,
      verdi: "",
      status: "Hypotese",
      redigerbar: true,
      synlig: true,
      formål: "Legacy",
    });
  }

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
          onClick={() => setAktivOpplysningsgruppeId(undefined)}
        >
          Lukk
        </Button>
      </div>

      <OpplysningTidslinje
        opplysningGruppe={opplysningGruppe}
        behandling={behandling}
        aktivPeriode={aktivPeriode}
        setAktivPeriode={setAktivPeriode}
      />

      {kanLeggeTilNyPeriode && (
        <Button
          className={"mt-2"}
          variant={"tertiary"}
          size={"small"}
          icon={<PlusIcon />}
          onClick={() => leggTilNyPeriode()}
        >
          Legg til periode
        </Button>
      )}

      <OpplysningKort
        opplysningGruppe={opplysningGruppe}
        behandlingId={behandling.behandlingId}
        aktivPeriode={aktivPeriode}
        setAktivPeriode={setAktivPeriode}
      />
    </div>
  );
}
