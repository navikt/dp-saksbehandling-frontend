import { Button, Label, TextField } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { components } from "openapi/behandling-typer";
import { useParams } from "react-router";

import { konverterOpplysningVerdiTilSkjemaVerdi } from "~/utils/opplysning.utils";
import { hentValideringForSaksbehandlingsregel } from "~/utils/validering.util";

import { OpplysningPeriodeInput } from "../opplysning-periode-input/OpplysningPeriodeInput";

interface IProps {
  opplysning: components["schemas"]["RedigerbareOpplysninger"];
  setSvart: (verdi: boolean) => void;
}

export default function SaksbehandlingsregelRedigering(props: IProps) {
  const { behandlingId } = useParams();
  const periode = props.opplysning.perioder[0];
  const saksbehandlingsregelForm = useForm({
    method: "post",
    submitSource: "state",
    schema: hentValideringForSaksbehandlingsregel(periode.verdi.datatype),
    onSubmitSuccess: () => props.setSvart(true),
    defaultValues: {
      _action: "lagre-opplysning",
      opplysningTypeId: props.opplysning.opplysningTypeId,
      datatype: periode.verdi.datatype,
      behandlingId: behandlingId,
      verdi: konverterOpplysningVerdiTilSkjemaVerdi(periode.verdi),
      begrunnelse: periode.kilde?.begrunnelse?.verdi,
    },
  });

  const disabled = !props.opplysning.redigerbar || saksbehandlingsregelForm.formState.isSubmitting;

  return (
    <div className="flex max-w-xl flex-col gap-4">
      <div>
        <Label size="small">{props.opplysning.navn}</Label>
        <OpplysningPeriodeInput
          opplysning={props.opplysning}
          datatype={periode.verdi.datatype}
          formScope={saksbehandlingsregelForm.scope("verdi")}
        />
      </div>
      <TextField
        {...saksbehandlingsregelForm.getInputProps("begrunnelse")}
        error={saksbehandlingsregelForm.error("begrunnelse")}
        disabled={disabled}
        size="small"
        label="Begrunnelse"
      />

      <div>
        <Button
          size="small"
          variant="primary"
          disabled={disabled}
          onClick={() => saksbehandlingsregelForm.submit()}
          loading={saksbehandlingsregelForm.formState.isSubmitting}
        >
          Lagre
        </Button>
      </div>
    </div>
  );
}
