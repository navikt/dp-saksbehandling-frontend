import { type LoaderArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Alert, Table } from "@navikt/ds-react";
import invariant from "tiny-invariant";
import { hentVedtak } from "~/models/vedtak.server";

import styles from "../route-styles/beslutning.module.css";

export async function loader({ request, params }: LoaderArgs) {
  invariant(params.ident, "Fant ikke bruker");
  const vedtak = await hentVedtak(params.ident, request);

  return json(vedtak);
}

export default function PersonOversiktBeslutningSide() {
  const vedtak = useLoaderData<typeof loader>();

  if (vedtak.length === 0) {
    return (
      <div className={styles.kontainer}>
        <Alert variant="info" inline>
          Ingen tidligere vedtak funnet for bruker
        </Alert>
      </div>
    );
  }

  return (
    <div className={styles.kontainer}>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell scope="col">Vedtak ID</Table.HeaderCell>
            <Table.HeaderCell scope="col">Vedtakstype</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {vedtak.map(({ vedtakId, vedtakType }) => {
            return (
              <Table.Row key={vedtakId}>
                <Table.DataCell scope="row">{vedtakId} </Table.DataCell>
                <Table.DataCell>{vedtakType}</Table.DataCell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
