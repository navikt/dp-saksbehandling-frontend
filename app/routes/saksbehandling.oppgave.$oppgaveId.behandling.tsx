import { useFetcher } from "@remix-run/react";

import { useEffect, useState } from "react";
import { Button, Table } from "@navikt/ds-react";
import classnames from "classnames";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { BehandlingBekreftModal } from "~/components/behandling-bekreft-modal/BehandlingBekreftModal";
import type { ActionFunctionArgs } from "@remix-run/node";
import invariant from "tiny-invariant";
import { getSession } from "~/models/auth.server";
import { parseSkjemadata } from "~/utils/steg.utils";
import { avslagOppgave, lukkOppgave } from "~/models/oppgave.server";
import styles from "~/route-styles/behandling.module.css";

interface ISkjemadata {
  variant: IModalTilstand;
}

export type IModalTilstand = "avslag" | "lukk";

export async function action({ request, params }: ActionFunctionArgs) {
  invariant(params.oppgaveId, `params.oppgaveId er påkrevd`);

  const session = await getSession(request);
  const formData = await request.formData();
  const skjemadata = parseSkjemadata<ISkjemadata>(formData, "variant");

  switch (skjemadata.variant) {
    case "lukk":
      return await lukkOppgave(params.oppgaveId, session);
    case "avslag":
      return await avslagOppgave(params.oppgaveId, session);
  }
}

export default function Behandling() {
  const fetcher = useFetcher<typeof action>();
  const { oppgave } = useTypedRouteLoaderData("routes/saksbehandling.oppgave.$oppgaveId");
  const [aktivModalId, setAktivModalId] = useState<IModalTilstand | undefined>();

  useEffect(() => {
    if (fetcher.data?.status === "success") {
      setAktivModalId(undefined);
    }
  }, [fetcher.data]);

  if (!oppgave.behandling) {
    return <div>Mangler behandling data fra dp-behandling</div>;
  }

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
          {oppgave.behandling.opplysning.map((opplysning) => (
            <Table.Row key={opplysning.id}>
              <Table.DataCell>{opplysning.navn}</Table.DataCell>
              <Table.DataCell>{opplysning.datatype}</Table.DataCell>
              <Table.DataCell>{opplysning.verdi}</Table.DataCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      <div className={styles.buttonContainer}>
        <Button
          type="button"
          variant="primary"
          size="small"
          onClick={() => setAktivModalId("avslag")}
        >
          Send til automatisk avslag
        </Button>
        <Button
          type="button"
          variant="secondary"
          size="small"
          onClick={() => setAktivModalId("lukk")}
        >
          Send til vanlig saksflyt i Arena
        </Button>
      </div>

      <BehandlingBekreftModal aktivModalId={aktivModalId} setAktivModalId={setAktivModalId} />
    </div>
  );
}
