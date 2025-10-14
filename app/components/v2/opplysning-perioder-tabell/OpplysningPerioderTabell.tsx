import { PencilIcon, TrashIcon } from "@navikt/aksel-icons";
import { Button, Table } from "@navikt/ds-react";
import { components } from "openapi/behandling-typer";
import { useState } from "react";

import { LeggTilNyOpplysningPeriode } from "~/components/v2/opplysning-perioder-tabell/LeggTilNyOpplysningPeriode";
import { OpplysningPeriodeTabellRedigerLinje } from "~/components/v2/opplysning-perioder-tabell/OpplysningPeriodeTabellRedigerLinje";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { formaterOpplysningVerdiV2 } from "~/utils/opplysning.utils";

interface IProps {
  opplysning: components["schemas"]["OpplysningsgruppeV2"];
}

export function OpplysningPerioderTabell(props: IProps) {
  const [periodeUnderRedigering, setPeriodeUnderRedigering] =
    useState<components["schemas"]["Opplysningsperiode"]>();

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
          {props.opplysning.perioder.map((periode) => {
            if (periode.id === periodeUnderRedigering?.id) {
              return (
                <OpplysningPeriodeTabellRedigerLinje
                  key={periode.id}
                  opplysningTypeId={props.opplysning.opplysningTypeId}
                  periode={periode}
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

                <Table.DataCell>
                  <Button size={"xsmall"} variant={"tertiary-neutral"} icon={<TrashIcon />} />
                </Table.DataCell>

                <Table.DataCell>
                  <Button
                    size={"xsmall"}
                    variant={"tertiary-neutral"}
                    icon={<PencilIcon />}
                    onClick={() => setPeriodeUnderRedigering(periode)}
                  ></Button>
                </Table.DataCell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
      <LeggTilNyOpplysningPeriode opplysning={props.opplysning} />
    </div>
  );
}
