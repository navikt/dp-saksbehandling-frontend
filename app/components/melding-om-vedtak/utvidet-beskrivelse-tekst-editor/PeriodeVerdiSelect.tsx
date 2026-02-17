import { Select, Tag, Tooltip } from "@navikt/ds-react";
import { useEffect } from "react";

import { useMeldingOmVedtak } from "~/hooks/useMeldingOmVedtak";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { formaterOpplysningVerdi } from "~/utils/opplysning.utils";

import { components } from "../../../../openapi/behandling-typer";

interface IProps {
  uuid: string;
  opplysning: components["schemas"]["Opplysninger"];
}

export function BrevPeriodeVerdiSelect({ opplysning, uuid }: IProps) {
  const { opplysningPeriodeVerdier, oppdaterOpplysningPeriodeVerdier } = useMeldingOmVedtak();

  useEffect(() => {
    if (opplysning.perioder.length === 1) {
      oppdaterOpplysningPeriodeVerdier({
        uuid,
        opplysningTypeId: opplysning.opplysningTypeId,
        verdi: formaterOpplysningVerdi(opplysning.perioder[0].verdi),
      });
    }
  }, []);

  if (opplysning.perioder.length === 1) {
    return (
      <Tooltip content={opplysning.navn}>
        <Tag variant={"neutral"} size={"xsmall"}>
          {formaterOpplysningVerdi(opplysning.perioder[0].verdi)}
        </Tag>
      </Tooltip>
    );
  }

  return (
    <Select
      className={"aksel--compact"}
      label={"Velg verdi"}
      hideLabel={true}
      size="small"
      value={opplysningPeriodeVerdier.find((periode) => periode.uuid === uuid)?.verdi || ""}
      onChange={(event) =>
        oppdaterOpplysningPeriodeVerdier({
          uuid,
          opplysningTypeId: opplysning.opplysningTypeId,
          verdi: event.currentTarget.value,
        })
      }
    >
      <option value={""} hidden={true}>
        - Velg verdi -
      </option>
      {opplysning.perioder.map((periode) => (
        <option key={periode.id} value={formaterOpplysningVerdi(periode.verdi)}>
          {formaterOpplysningVerdi(periode.verdi)} (
          {periode.gyldigFraOgMed ? formaterTilNorskDato(periode.gyldigFraOgMed) : "--"} –{" "}
          {periode.gyldigTilOgMed ? formaterTilNorskDato(periode.gyldigTilOgMed) : " --"})
        </option>
      ))}
    </Select>
  );
}
