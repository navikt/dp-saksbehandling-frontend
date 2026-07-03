import { Heading, Radio, RadioGroup, Table } from "@navikt/ds-react";
import { useState } from "react";

import { OpplysningerPåPrøvingsdato } from "~/components/opplysninger-på-prøvingsdato/OpplysningerPåPrøvingsdato";
import { OpplysningerTidslinje } from "~/components/opplysninger-tidslinje/OpplysningerTidslinje";
import { useBehandling } from "~/hooks/useBehandling";
import { useTypeSafeParams } from "~/hooks/useTypeSafeParams";
import { formaterTilNorskDato } from "~/utils/dato.utils";

export function RettPåDagpenger() {
  const [sortOrder, setSortOrder] = useState<"eldste" | "nyeste">("eldste");
  const { behandlingId, oppgaveId } = useTypeSafeParams();
  const { behandling, sistePrøvingsdato } = useBehandling();
  const rettPåDagpengerOpplysning = behandling.opplysninger.find(
    (opplysning) => opplysning.opplysningTypeId === "01990a09-0eab-7957-b88f-14484a50e194",
  );

  if (!rettPåDagpengerOpplysning) {
    return null;
  }

  const sortedRettighetsperioder = [...behandling.rettighetsperioder].sort((a, b) => {
    if (sortOrder === "eldste") {
      return new Date(a.fraOgMed).getTime() - new Date(b.fraOgMed).getTime();
    }
    return new Date(b.fraOgMed).getTime() - new Date(a.fraOgMed).getTime();
  });

  return (
    <div className={"card flex flex-col gap-4 p-4"}>
      <OpplysningerTidslinje
        opplysninger={[rettPåDagpengerOpplysning]}
        tittel={rettPåDagpengerOpplysning.navn}
        pins={sistePrøvingsdato && [{ label: "Prøvingsdato", date: sistePrøvingsdato }]}
        medLenkeTilOpplysning={true}
        opplysningGrunnUrl={`/oppgave/${oppgaveId}/dagpenger-rett/${behandlingId}/regelsett/MjA5OTE0NTUwMg==/opplysning`}
        visAllePerioder={true}
      />
      {sistePrøvingsdato && (
        <OpplysningerPåPrøvingsdato behandling={behandling} prøvingsdato={sistePrøvingsdato} />
      )}
      <Heading level="3" size="small">
        Rettighetsperioder
      </Heading>
      <RadioGroup
        legend="Sorter perioder"
        hideLegend
        onChange={(e) => setSortOrder(e)}
        defaultValue="eldste"
        size="small"
      >
        <div className="flex flex-row gap-4">
          <Radio value="eldste">Eldste først</Radio>
          <Radio value="nyeste">Nyeste først</Radio>
        </div>
      </RadioGroup>
      <Table zebraStripes>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader scope="col" className="w-1/5">
              Rett på dagpenger
            </Table.ColumnHeader>
            <Table.ColumnHeader scope="col" align="center">
              Fra og med
            </Table.ColumnHeader>
            <Table.ColumnHeader scope="col" align="center">
              Til og med
            </Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {sortedRettighetsperioder.map((rettighetsperiode, index) => (
            <Table.Row key={index}>
              <Table.DataCell scope="row">
                {rettighetsperiode.harRett ? "Ja" : "Nei"}
              </Table.DataCell>
              <Table.DataCell align="center">
                {rettighetsperiode.fraOgMed
                  ? formaterTilNorskDato(rettighetsperiode.fraOgMed)
                  : "--"}
              </Table.DataCell>
              <Table.DataCell align="center">
                {rettighetsperiode.tilOgMed
                  ? formaterTilNorskDato(rettighetsperiode.tilOgMed)
                  : "--"}
              </Table.DataCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
