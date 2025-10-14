import { PencilIcon, TrashIcon } from "@navikt/aksel-icons";
import { Button, DatePicker, Table, TextField } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { useParams } from "react-router";

import { OpplysningPeriodeInput } from "~/components/v2/opplysning-periode-input/OpplysningPeriodeInput";
import { formaterOpplysningVerdiV2 } from "~/utils/opplysning.utils";
import { hentValideringForOpplysningSkjema } from "~/utils/validering.util";

import { components } from "../../../../openapi/behandling-typer";

interface IProps {
  opplysningTypeId: string;
  periode: components["schemas"]["Opplysningsperiode"];
}

export function OpplysningPeriodeTabellRedigerLinje(props: IProps) {
  const { oppgaveId, regelsettNavn, behandlingId } = useParams();
  const periodeForm = useForm({
    method: "post",
    action: `/oppgave/${oppgaveId}/dagpenger-rett/${behandlingId}/behandle/${regelsettNavn}`,
    schema: hentValideringForOpplysningSkjema(props.periode.verdi.datatype),
    defaultValues: {
      opplysningTypeId: props.opplysningTypeId,
      datatype: props.periode.verdi.datatype,
      behandlingId: behandlingId,
      verdi: props.periode.verdi,
      begrunnelse: props.periode.kilde?.begrunnelse?.verdi,
      gyldigFraOgMed: props.periode.gyldigFraOgMed,
      gyldigTilOgMed: props.periode.gyldigTilOgMed,
    },
  });
  return (
    <Table.Row>
      <Table.DataCell>
        <DatePicker></DatePicker>
      </Table.DataCell>

      <Table.DataCell>
        <DatePicker></DatePicker>
      </Table.DataCell>

      <Table.DataCell>
        <OpplysningPeriodeInput
          periodeVerdi={props.periode.verdi}
          formScope={periodeForm.scope("verdi")}
        />
      </Table.DataCell>

      <Table.DataCell>
        <TextField {...periodeForm.field("begrunnelse").getInputProps()} size={"small"} />
      </Table.DataCell>

      <Table.DataCell>
        <Button size={"xsmall"} variant={"tertiary-neutral"} icon={<TrashIcon />} />
      </Table.DataCell>

      <Table.DataCell>
        <Button size={"xsmall"} variant={"tertiary-neutral"} icon={<PencilIcon />}>
          avbryt
        </Button>
      </Table.DataCell>
    </Table.Row>
  );
}
