import { useLoaderData } from "@remix-run/react";
import { Table } from "@navikt/ds-react";
import classnames from "classnames";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import invariant from "tiny-invariant";
import { hentOppgave } from "~/models/oppgave.server";
import styles from "~/route-styles/behandling.module.css";
import { hentBehandling } from "~/models/behandling.server";

export type IFerdigstillValg = "godkjenn" | "avbryt";

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");
  const oppgave = await hentOppgave(request, params.oppgaveId);
  const behandling = await hentBehandling(request, oppgave.behandlingId);
  return json({ behandling, oppgave });
}

export default function Behandling() {
  const { behandling } = useLoaderData<typeof loader>();

  return (
    <div className={styles.container}>
      <Table className={classnames("kompakt-tabell", styles.table)}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell scope="col">Navn</Table.HeaderCell>
            <Table.HeaderCell scope="col">Datatype</Table.HeaderCell>
            <Table.HeaderCell scope="col">Verdi</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {behandling.opplysning.map((opplysning) => (
            <Table.Row key={opplysning.id}>
              <Table.DataCell>{opplysning.navn}</Table.DataCell>
              <Table.DataCell>{opplysning.datatype}</Table.DataCell>
              <Table.DataCell>{opplysning.verdi}</Table.DataCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
