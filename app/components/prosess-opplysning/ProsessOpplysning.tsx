import { Button, TextField } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { useParams } from "react-router";

import { OpplysningPeriodeInput } from "~/components/opplysning-periode-input/OpplysningPeriodeInput";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { konverterOpplysningVerdiTilSkjemaVerdi } from "~/utils/opplysning.utils";
import { hentValideringForOpplysningPeriodeSkjema } from "~/utils/validering.util";

import { components } from "../../../openapi/behandling-typer";

export function ProsessOpplysning({
  opplysning,
}: {
  opplysning: components["schemas"]["RedigerbareOpplysninger"];
}) {
  const { behandlingId } = useParams();
  const periode = opplysning.perioder[0];

  const periodeForm = useForm({
    method: "post",
    submitSource: "state",
    schema: hentValideringForOpplysningPeriodeSkjema(periode.verdi.datatype),
    defaultValues: {
      _action: "lagre-opplysning",
      opplysningTypeId: opplysning.opplysningTypeId,
      datatype: periode.verdi.datatype,
      behandlingId: behandlingId,
      verdi: konverterOpplysningVerdiTilSkjemaVerdi(periode.verdi),
      begrunnelse: periode.kilde?.begrunnelse?.verdi,
      gyldigFraOgMed: periode.gyldigFraOgMed
        ? formaterTilNorskDato(periode.gyldigFraOgMed)
        : undefined,
      gyldigTilOgMed: periode.gyldigTilOgMed
        ? formaterTilNorskDato(periode.gyldigTilOgMed)
        : undefined,
    },
  });

  return (
    <div className={"card p-4"}>
      <OpplysningPeriodeInput opplysning={opplysning} formScope={periodeForm.scope("verdi")} />
      <TextField
        {...periodeForm.field("begrunnelse").getInputProps()}
        label={"Begrunnelse"}
        size={"small"}
        error={periodeForm.field("begrunnelse").error()}
      />
      <div className={"mt-2 flex gap-2"}>
        <Button size={"xsmall"} variant={"secondary"} onClick={() => periodeForm.resetForm()}>
          Avbryt
        </Button>
        <Button
          size={"xsmall"}
          variant={"primary"}
          onClick={() => periodeForm.submit()}
          loading={periodeForm.formState.isSubmitting}
        >
          Lagre
        </Button>
      </div>
    </div>
  );
}
