import { Heading, HStack, InlineMessage, Radio, RadioGroup, Table, VStack } from "@navikt/ds-react";
import { useState } from "react";

import { useBehandling } from "~/hooks/useBehandling";
import { formaterTilNorskDato } from "~/utils/dato.utils";

export function Rettighetsperioder() {
  const [sortOrder, setSortOrder] = useState<"eldste" | "nyeste">("eldste");
  const { behandling } = useBehandling();
  const sortedRettighetsperioder = [...behandling.rettighetsperioder].sort((a, b) => {
    if (sortOrder === "eldste") {
      return new Date(a.fraOgMed).getTime() - new Date(b.fraOgMed).getTime();
    }
    return new Date(b.fraOgMed).getTime() - new Date(a.fraOgMed).getTime();
  });

  return (
    <VStack gap="space-16">
      <Heading level="2" size="small">
        Rettighetsperioder
      </Heading>
      {sortedRettighetsperioder.length === 0 ? (
        <InlineMessage status="info">Ingen rettighetsperioder i denne behandlingen.</InlineMessage>
      ) : (
        <>
          <RadioGroup
            legend="Sorter perioder"
            hideLegend
            onChange={setSortOrder}
            value={sortOrder}
            size="small"
          >
            <HStack gap="space-16">
              <Radio value="eldste">Eldste først</Radio>
              <Radio value="nyeste">Nyeste først</Radio>
            </HStack>
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
        </>
      )}
    </VStack>
  );
}
