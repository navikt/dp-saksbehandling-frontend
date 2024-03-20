import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { hentOppgave } from "~/models/oppgave.server";
import { getSession } from "~/models/auth.server";
import styles from "~/route-styles/stegvisning.module.css";
import { Table } from "@navikt/ds-react";
import classnames from "classnames";
import React from "react";

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");
  const session = await getSession(request);
  const oppgave = await hentOppgave(params.oppgaveId, session);

  return json({ oppgave });
}

export default function Behandling() {
  const { oppgave } = useLoaderData<typeof loader>();

  if (!oppgave.behandling) {
    return <div>Mangler behandling data fra dp-behandling</div>;
  }

  const opplysningKeys = Object.keys(oppgave.behandling.opplysning[0]);

  return (
    <div className={styles.stegContainer}>
      <Table className={classnames("kompakt-tabell", styles.table)}>
        <Table.Header>
          <Table.Row>
            {opplysningKeys.map((key) => (
              <Table.HeaderCell scope="col" key={key}>
                {key}
              </Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {oppgave.behandling.opplysning.map((opplysning) => (
            <Table.Row key={opplysning.id}>
              {Object.values(opplysning).map((value, index) => (
                <Table.DataCell key={index}>
                  {typeof value === "object" && value !== null ? JSON.stringify(value) : value}
                </Table.DataCell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
