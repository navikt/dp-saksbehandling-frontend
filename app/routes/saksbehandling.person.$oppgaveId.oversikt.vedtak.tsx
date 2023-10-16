import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Alert, CopyButton, Table } from "@navikt/ds-react";
import invariant from "tiny-invariant";
import { hentVedtak } from "~/models/vedtak.server";

import { hentOppgave } from "~/models/oppgave.server";
import { hentFormattertDato } from "~/utils/dato.utils";
import styles from "../route-styles/vedtak.module.css";
import { getSession } from "~/models/auth.server";

export async function loader({ request, params }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, "Fant ikke oppgaveId");

  const session = await getSession(request);
  const oppgave = await hentOppgave(params.oppgaveId, session);
  const vedtak = await hentVedtak(oppgave.person, session);

  return json(vedtak);
}

export default function PersonOversiktVedtak() {
  const vedtak = useLoaderData<typeof loader>();

  if (vedtak.rammer.length === 0 && vedtak.utbetalinger.length === 0) {
    return (
      <div className={styles.container}>
        <Alert variant="info" inline>
          Ingen vedtak funnet for bruker
        </Alert>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {vedtak.rammer.length > 0 && (
        <div className={styles.table}>
          <h2>Rammevedtak</h2>

          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell scope="col">Vedtak ID</Table.HeaderCell>
                <Table.HeaderCell scope="col">Virkningdato</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {vedtak.rammer.map(({ vedtakId, virkningsdato }) => (
                <Table.Row key={vedtakId}>
                  <Table.DataCell scope="row">
                    <CopyButton
                      copyText={vedtakId}
                      text={vedtakId}
                      activeText="Kopierte vedtak ID"
                    />
                  </Table.DataCell>
                  <Table.DataCell>{hentFormattertDato(virkningsdato)}</Table.DataCell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      )}

      {vedtak.utbetalinger.length > 0 && (
        <div className={styles.table}>
          <h2>Utbetalingsvedtak</h2>

          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell scope="col">Vedtak ID</Table.HeaderCell>
                <Table.HeaderCell scope="col">14. dagers periode</Table.HeaderCell>
                <Table.HeaderCell scope="col">Sum utbetalt</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {vedtak.utbetalinger.map(({ vedtakId, fraOgMed, tilOgMed, sumUtbetalt }) => (
                <Table.Row key={vedtakId}>
                  <Table.DataCell scope="row">
                    <CopyButton
                      copyText={vedtakId}
                      text={vedtakId}
                      activeText="Kopierte vedtak ID"
                    />
                  </Table.DataCell>
                  <Table.DataCell>{`${hentFormattertDato(fraOgMed)} - ${hentFormattertDato(
                    tilOgMed,
                  )}`}</Table.DataCell>
                  <Table.DataCell>{`${sumUtbetalt} kr`}</Table.DataCell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      )}
    </div>
  );
}
