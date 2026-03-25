import { BulletListIcon } from "@navikt/aksel-icons";
import { Heading, InfoCard, List, Table } from "@navikt/ds-react";

import { useBehandling } from "~/hooks/useBehandling";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { formaterOpplysningVerdi } from "~/utils/opplysning.utils";

const omgjøringRegelsettId = "Nzc0ODQwNzYy";

export function RevurderingResultat() {
  const { behandling, forrigeBehandling } = useBehandling();
  const omgjøringRegelsett = behandling.fastsettelser.find(
    (regelsett) => regelsett.id === omgjøringRegelsettId,
  );

  if (!omgjøringRegelsett) {
    return null;
  }

  const omgjøringOpplysninger = behandling.opplysninger.filter((opplysninger) =>
    omgjøringRegelsett.opplysninger.includes(opplysninger.opplysningTypeId),
  );

  const pengerSomSkalUtbetalesDenneBehandling = behandling.opplysninger.find(
    (opplysning) => opplysning.opplysningTypeId === "01994cfd-9a27-762e-81fa-61f550467c95",
  );

  const pengerSomSkalUtbetalesForrigeBehandling = forrigeBehandling?.opplysninger.find(
    (opplysning) => opplysning.opplysningTypeId === "01994cfd-9a27-762e-81fa-61f550467c95",
  );

  return (
    <InfoCard data-color="info">
      <InfoCard.Header icon={<BulletListIcon aria-hidden />}>
        <InfoCard.Title>Resultat av revurdering</InfoCard.Title>
      </InfoCard.Header>
      <InfoCard.Content>
        <div className={"flex flex-col gap-4"}>
          <Heading size={"xsmall"}>Vedtaket omgjøres fordi</Heading>
          <List as="ul">
            {omgjøringOpplysninger.map((opplysning) => {
              if (opplysning.perioder[0]?.kilde?.begrunnelse) {
                return (
                  <List.Item key={opplysning.opplysningTypeId}>
                    {opplysning.perioder[0].kilde.begrunnelse.verdi}
                  </List.Item>
                );
              }
            })}
          </List>

          {pengerSomSkalUtbetalesDenneBehandling && pengerSomSkalUtbetalesForrigeBehandling && (
            <>
              <Heading size={"xsmall"}>{pengerSomSkalUtbetalesDenneBehandling.navn}</Heading>
              <div className={"flex gap-4"}>
                <div className={"flex-1"}>
                  <Heading size={"xsmall"}>Før</Heading>
                  <Table size={"small"} zebraStripes={true}>
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell scope="col">Periode</Table.HeaderCell>
                        <Table.HeaderCell scope="col">Utbetales</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>

                    <Table.Body>
                      {pengerSomSkalUtbetalesForrigeBehandling.perioder.map((periode) => (
                        <Table.Row key={periode.id}>
                          <Table.DataCell>
                            {periode.gyldigFraOgMed
                              ? formaterTilNorskDato(periode.gyldigFraOgMed)
                              : "--"}{" "}
                            –{" "}
                            {periode.gyldigTilOgMed
                              ? formaterTilNorskDato(periode.gyldigTilOgMed)
                              : "--"}
                          </Table.DataCell>
                          <Table.DataCell>{formaterOpplysningVerdi(periode.verdi)}</Table.DataCell>
                        </Table.Row>
                      ))}
                    </Table.Body>
                  </Table>
                </div>

                <div className={"flex-1"}>
                  <Heading size={"xsmall"}>Etter</Heading>
                  <Table size={"small"} zebraStripes={true}>
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell scope="col">Periode</Table.HeaderCell>
                        <Table.HeaderCell scope="col">Utbetales</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>

                    <Table.Body>
                      {pengerSomSkalUtbetalesDenneBehandling.perioder.map((periode) => (
                        <Table.Row key={periode.id}>
                          <Table.DataCell>
                            {periode.gyldigFraOgMed
                              ? formaterTilNorskDato(periode.gyldigFraOgMed)
                              : "--"}{" "}
                            –{" "}
                            {periode.gyldigTilOgMed
                              ? formaterTilNorskDato(periode.gyldigTilOgMed)
                              : "--"}
                          </Table.DataCell>
                          <Table.DataCell>{formaterOpplysningVerdi(periode.verdi)}</Table.DataCell>
                        </Table.Row>
                      ))}
                    </Table.Body>
                  </Table>
                </div>
              </div>
            </>
          )}
        </div>
      </InfoCard.Content>
    </InfoCard>
  );
}
