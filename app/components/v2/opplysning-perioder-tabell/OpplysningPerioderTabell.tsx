import { PadlockLockedIcon, PencilIcon, TrashIcon } from "@navikt/aksel-icons";
import { Button, Table } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { components } from "openapi/behandling-typer";
import { useState } from "react";
import { Form, useParams } from "react-router";

import { OpplysningPeriodeTabellNyPeriode } from "~/components/v2/opplysning-perioder-tabell/OpplysningPeriodeTabellNyPeriode";
import { OpplysningPeriodeTabellRedigerLinje } from "~/components/v2/opplysning-perioder-tabell/OpplysningPeriodeTabellRedigerLinje";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { formaterOpplysningVerdiV2 } from "~/utils/opplysning.utils";
import { hentValideringForSlettOpplysningSkjema } from "~/utils/validering.util";

interface IProps {
  opplysning: components["schemas"]["OpplysningsgruppeV2"];
}

export function OpplysningPerioderTabell(props: IProps) {
  const { behandlingId, opplysningId } = useParams();
  const [periodeUnderRedigering, setPeriodeUnderRedigering] =
    useState<components["schemas"]["Opplysningsperiode"]>();

  const slettOpplysningForm = useForm({
    method: "post",
    submitSource: "state",
    schema: hentValideringForSlettOpplysningSkjema(),
    defaultValues: { _action: "slett-opplysning", behandlingId, opplysningId },
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
          {props.opplysning.perioder.map((periode, index) => {
            if (periode.id === periodeUnderRedigering?.id) {
              return (
                <OpplysningPeriodeTabellRedigerLinje
                  key={periode.id}
                  opplysning={props.opplysning}
                  setPeriodeUnderRedigering={setPeriodeUnderRedigering}
                  periode={periode}
                  periodeIndex={index}
                />
              );
            }

            return (
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

                {props.opplysning.redigerbar && (
                  <>
                    <Table.DataCell>
                      <Form {...slettOpplysningForm.getFormProps()}>
                        <Button
                          size={"xsmall"}
                          variant={"tertiary"}
                          icon={<TrashIcon />}
                          loading={slettOpplysningForm.formState.isSubmitting}
                        />
                      </Form>
                    </Table.DataCell>

                    <Table.DataCell>
                      <Button
                        size={"xsmall"}
                        variant={"tertiary"}
                        icon={<PencilIcon />}
                        onClick={() => setPeriodeUnderRedigering(periode)}
                      />
                    </Table.DataCell>
                  </>
                )}

                {!props.opplysning.redigerbar && (
                  <Table.DataCell colSpan={2}>
                    <PadlockLockedIcon aria-label={"Ikke redigerbar"} />
                  </Table.DataCell>
                )}
              </Table.Row>
            );
          })}

          {periodeUnderRedigering?.id === nyPeriode.id && (
            <OpplysningPeriodeTabellNyPeriode
              opplysning={props.opplysning}
              nyPeriode={nyPeriode}
              setPeriodeUnderRedigering={setPeriodeUnderRedigering}
            />
          )}
        </Table.Body>
      </Table>

      {props.opplysning.redigerbar && (
        <div>
          <Button
            size={"small"}
            variant={"secondary"}
            onClick={() => setPeriodeUnderRedigering(nyPeriode)}
          >
            Legg til ny periode
          </Button>
        </div>
      )}
    </div>
  );
}
