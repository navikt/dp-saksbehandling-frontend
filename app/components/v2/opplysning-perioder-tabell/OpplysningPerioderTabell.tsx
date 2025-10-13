import { PencilIcon, PlusCircleIcon, TrashIcon } from "@navikt/aksel-icons";
import { Button, Table } from "@navikt/ds-react";
import { components } from "openapi/behandling-typer";

import { formaterOpplysningVerdi } from "~/components/vilkår-tidslinje/VilkårTidslinje";
import { formaterTilNorskDato } from "~/utils/dato.utils";

interface IProps {
  opplysning: components["schemas"]["OpplysningsgruppeV2"];
}

export function OpplysningPerioderTabell(props: IProps) {
  return (
    <>
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
              <Table.DataCell>{formaterOpplysningVerdi(periode.verdi)}</Table.DataCell>
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

      <Button
        className={"mt-4"}
        variant={"secondary"}
        size={"small"}
        icon={<PlusCircleIcon aria-hidden />}
      >
        Legg til ny periode
      </Button>
    </>
  );
}
