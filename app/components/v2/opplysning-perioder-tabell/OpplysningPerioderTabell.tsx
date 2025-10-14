import { PencilIcon, PlusCircleIcon, TrashIcon } from "@navikt/aksel-icons";
import { Button, DatePicker, Table, useDatepicker } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { components } from "openapi/behandling-typer";
import { useState } from "react";
import { Form, useParams } from "react-router";

import { OpplysningPeriode } from "~/components/v2/opplysning-periode/OpplysningPeriode";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { formaterOpplysningVerdiV2 } from "~/utils/opplysning.utils";
import { hentValideringForNyOpplysningPeriodeSkjema } from "~/utils/validering.util";

interface IProps {
  opplysning: components["schemas"]["OpplysningsgruppeV2"];
}

export function OpplysningPerioderTabell(props: IProps) {
  const { behandlingId } = useParams();
  const [leggTilNyPeriode, setLeggTilNyPeriode] = useState(false);

  const sisteOpplysningPeriodeTilOgMedDato =
    props.opplysning.perioder[props.opplysning.perioder.length - 1]?.gyldigTilOgMed;

  const datepickerFraOgMed = useDatepicker({
    defaultSelected: sisteOpplysningPeriodeTilOgMedDato
      ? new Date(sisteOpplysningPeriodeTilOgMedDato)
      : undefined,
  });

  const nyOpplysningPeriodeForm = useForm({
    method: "post",
    schema: hentValideringForNyOpplysningPeriodeSkjema(props.opplysning.datatype),
    defaultValues: {
      opplysningTypeId: props.opplysning.opplysningTypeId,
      datatype: props.opplysning.datatype,
      behandlingId: behandlingId,
      verdi: "",
      begrunnelse: "",
      gyldigFraOgMed: "",
      gyldigTilOgMed: "",
    },
  });

  const nyPeriode: components["schemas"]["Opplysningsperiode"] = {
    id: "NY-PERIODE",
    opprettet: new Date().toISOString(),
    status: "Ny",
    verdi: {
      verdi: "",
      datatype: props.opplysning.datatype,
    } as unknown as components["schemas"]["Opplysningsverdi"],
  };

  return (
    <div className={"flex flex-col gap-4"}>
      <Table size="small" className={"tabell--subtil"} zebraStripes={true}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell scope="col">Fra og med</Table.HeaderCell>
            <Table.HeaderCell scope="col">Til og med</Table.HeaderCell>
            <Table.HeaderCell scope="col">Verdi</Table.HeaderCell>
            <Table.HeaderCell scope="col">Begrunnelse</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {props.opplysning.perioder.map((periode) => (
            <Table.Row key={periode.id}>
              <Table.DataCell>
                {periode.gyldigFraOgMed ? formaterTilNorskDato(periode.gyldigFraOgMed) : "--"}
              </Table.DataCell>

              <Table.DataCell>
                {periode.gyldigTilOgMed ? formaterTilNorskDato(periode.gyldigTilOgMed) : "--"}
              </Table.DataCell>

              <Table.DataCell>{formaterOpplysningVerdiV2(periode.verdi)}</Table.DataCell>

              <Table.DataCell>
                {periode.kilde?.begrunnelse ? periode.kilde?.begrunnelse.verdi : "--"}
              </Table.DataCell>

              <Table.DataCell>
                <Button size={"xsmall"} variant={"tertiary-neutral"} icon={<TrashIcon />} />
              </Table.DataCell>

              <Table.DataCell>
                <Button size={"xsmall"} variant={"tertiary-neutral"} icon={<PencilIcon />}></Button>
              </Table.DataCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      {!leggTilNyPeriode && (
        <Button
          className={"mt-4"}
          variant={"secondary"}
          size={"small"}
          icon={<PlusCircleIcon aria-hidden />}
          onClick={() => setLeggTilNyPeriode(true)}
        >
          Legg til ny periode
        </Button>
      )}

      {leggTilNyPeriode && (
        <div className={"card-sunken"}>
          <Form {...nyOpplysningPeriodeForm.getFormProps()}>
            <input hidden={true} readOnly={true} name="_action" value="lagre-opplysning" />
            <input
              hidden={true}
              readOnly={true}
              {...nyOpplysningPeriodeForm.field("opplysningTypeId").getInputProps()}
            />
            <input
              hidden={true}
              readOnly={true}
              {...nyOpplysningPeriodeForm.field("datatype").getInputProps()}
            />
            <input
              hidden={true}
              readOnly={true}
              {...nyOpplysningPeriodeForm.field("behandlingId").getInputProps()}
            />

            <OpplysningPeriode
              opplysning={nyPeriode}
              formScope={nyOpplysningPeriodeForm.scope("verdi")}
            />

            <Button
              className={"mt-4"}
              variant={"secondary"}
              size={"small"}
              onClick={() => setLeggTilNyPeriode(false)}
              type={"button"}
            >
              Avbryt
            </Button>
            <Button variant={"primary"} size={"small"}>
              Lagre
            </Button>
            <DatePicker {...datepickerFraOgMed.datepickerProps}>
              <DatePicker.Input
                {...datepickerFraOgMed.inputProps}
                size={"small"}
                label="Fra og med"
                form={nyOpplysningPeriodeForm.field("gyldigFraOgMed").getInputProps().form}
                name={nyOpplysningPeriodeForm.field("gyldigFraOgMed").getInputProps().name}
                error={nyOpplysningPeriodeForm.field("gyldigFraOgMed").error()}
              />
            </DatePicker>
            <pre>{JSON.stringify(nyOpplysningPeriodeForm.formState.fieldErrors)}</pre>
          </Form>
        </div>
      )}
    </div>
  );
}
