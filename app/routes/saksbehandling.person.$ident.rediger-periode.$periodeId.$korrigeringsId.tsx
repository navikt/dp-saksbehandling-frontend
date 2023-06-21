import { Form, useLoaderData } from "@remix-run/react";
import styles from "../route-styles/rediger-periode.module.css";
import { Alert, Button, Heading, Table, TextField, Textarea } from "@navikt/ds-react";
import { FormattedDate } from "~/components/FormattedDate";
import { hentAktivitetITimer, hentAllAktivitetITimer } from "~/utils/aktivitet.utils";
import invariant from "tiny-invariant";
import { json, type LoaderArgs } from "@remix-run/node";
import {
  type IRapporteringsperiode,
  hentRapporteringsperiode,
} from "~/models/rapporteringsperiode.server";

export async function loader({ params, request }: LoaderArgs) {
  invariant(params.periodeId, `Fant ikke rapporteringsperiode`);
  invariant(params.korrigeringsId, `Fant ikke korrigeringsperiode`);
  let rapporteringsperiode, korrigeringsperiode: IRapporteringsperiode;

  const periodeResponse = await hentRapporteringsperiode(params.periodeId, request);
  const korrigeringResponse = await hentRapporteringsperiode(params.korrigeringsId, request);

  if (periodeResponse.ok) {
    rapporteringsperiode = await periodeResponse.json();
  } else {
    throw new Error("Feil i uthenting av rapporteringsperioder");
  }

  if (korrigeringResponse.ok) {
    korrigeringsperiode = await korrigeringResponse.json();
  } else {
    throw new Error("Feil i uthenting av rapporteringsperioder");
  }

  console.log(korrigeringsperiode.korrigertAv);

  if (korrigeringsperiode.korrigertAv !== "") {
    throw new Error("Periode er allerede korrigert");
  }

  return json({ rapporteringsperiode, korrigeringsperiode });
}

export default function RedigerPeriode() {
  const { rapporteringsperiode, korrigeringsperiode } = useLoaderData();

  return (
    <div className={styles.kontainer}>
      <Heading level="1" size="large" spacing>
        Endre rapportert periode
      </Heading>
      {!rapporteringsperiode ||
        (!korrigeringsperiode && (
          <Alert variant="info" inline>
            Ingen rapporteringsperiode funnet
          </Alert>
        ))}
      {rapporteringsperiode && korrigeringsperiode && (
        <Form method="post" key={rapporteringsperiode.id}>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>14. dagers periode</Table.HeaderCell>
                <Table.HeaderCell>Jobbet</Table.HeaderCell>
                <Table.HeaderCell>Syk</Table.HeaderCell>
                <Table.HeaderCell>Ferie</Table.HeaderCell>
                <Table.HeaderCell>Dager brukt av dp</Table.HeaderCell>
                <Table.HeaderCell>Merknader</Table.HeaderCell>
                <Table.HeaderCell></Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <>
                <Table.Row>
                  <Table.HeaderCell>
                    <FormattedDate date={rapporteringsperiode.fraOgMed} /> -{" "}
                    <FormattedDate date={rapporteringsperiode.tilOgMed} />
                  </Table.HeaderCell>
                  <Table.DataCell>
                    {hentAllAktivitetITimer(rapporteringsperiode, "Arbeid")}
                  </Table.DataCell>
                  <Table.DataCell>
                    {hentAllAktivitetITimer(rapporteringsperiode, "Sykdom")}
                  </Table.DataCell>
                  <Table.DataCell>
                    {hentAllAktivitetITimer(rapporteringsperiode, "Ferie")}
                  </Table.DataCell>
                  <Table.DataCell>TODO</Table.DataCell>
                  <Table.DataCell>Ikke tilgjengelig ennå</Table.DataCell>
                  <Table.DataCell></Table.DataCell>
                </Table.Row>
                {korrigeringsperiode.dager.map((dag) => (
                  <Table.Row key={dag.dato} className={styles.periodeDetaljer}>
                    <Table.HeaderCell>
                      <FormattedDate date={dag.dato} />
                    </Table.HeaderCell>
                    <Table.DataCell>
                      <TextField
                        className={styles.inputFelt}
                        label="Arbeid"
                        hideLabel
                        defaultValue={hentAktivitetITimer(dag, "Arbeid") || "-"}
                        size="small"
                        htmlSize={14}
                      />
                    </Table.DataCell>
                    <Table.DataCell>
                      <TextField
                        className={styles.inputFelt}
                        label="Sykdom"
                        hideLabel
                        defaultValue={hentAktivitetITimer(dag, "Sykdom") || "-"}
                        size="small"
                        htmlSize={14}
                      />
                    </Table.DataCell>
                    <Table.DataCell>
                      <TextField
                        className={styles.inputFelt}
                        label="Ferie"
                        hideLabel
                        defaultValue={hentAktivitetITimer(dag, "Ferie") || "-"}
                        size="small"
                        htmlSize={14}
                      />
                    </Table.DataCell>
                    <Table.DataCell></Table.DataCell>
                    <Table.DataCell></Table.DataCell>
                    <Table.DataCell></Table.DataCell>
                  </Table.Row>
                ))}
              </>
            </Table.Body>
          </Table>
          <input type="hidden" value={korrigeringsperiode.id} name="korringeringId" />
          <Textarea label="Begrunnelse" name="begrunnelse"></Textarea>
          <Button type="submit">Send inn endring</Button>
        </Form>
      )}
    </div>
  );
}
