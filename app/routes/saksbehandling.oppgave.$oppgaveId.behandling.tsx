import { useFetcher, useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import { Button, Table } from "@navikt/ds-react";
import classnames from "classnames";
import { BehandlingBekreftModal } from "~/components/behandling-bekreft-modal/BehandlingBekreftModal";
import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import invariant from "tiny-invariant";
import { getSession } from "~/models/auth.server";
import { hentOppgave } from "~/models/oppgave.server";
import styles from "~/route-styles/behandling.module.css";
import { avbrytBehandling, godkjennBehandling, hentBehandling } from "~/models/behandling.server";
import { parseSkjemadata } from "~/utils/steg.utils";

interface ISkjemadata {
  ferdigstillValg: IFerdigstillValg;
  personIdent: string;
}

export type IFerdigstillValg = "godkjenn" | "avbryt";

export async function action({ request, params }: ActionFunctionArgs) {
  invariant(params.oppgaveId, `params.oppgaveId er påkrevd`);

  const session = await getSession(request);
  const formData = await request.formData();
  const skjemadata = parseSkjemadata<ISkjemadata>(formData, "skjemadata");

  switch (skjemadata.ferdigstillValg) {
    case "avbryt":
      return await avbrytBehandling(params.oppgaveId, skjemadata.personIdent, session);

    case "godkjenn":
      return await godkjennBehandling(params.oppgaveId, skjemadata.personIdent, session);
  }
}

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");
  const session = await getSession(request);
  const oppgave = await hentOppgave(params.oppgaveId, session);
  const behandling = await hentBehandling(oppgave.behandlingId, session);
  return json({ behandling, oppgave });
}

export default function Behandling() {
  const fetcher = useFetcher<typeof action>({ key: "ferdigstill-behandling" });
  const { behandling } = useLoaderData<typeof loader>();
  const [aktivModalId, setAktivModalId] = useState<IFerdigstillValg | undefined>();

  useEffect(() => {
    if (fetcher.data?.status === "success") {
      setAktivModalId(undefined);
    }
  }, [fetcher.data]);

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

      <div className={styles.buttonContainer}>
        <Button
          type="button"
          variant="primary"
          size="small"
          onClick={() => setAktivModalId("godkjenn")}
        >
          Send til automatisk avslag
        </Button>
        <Button
          type="button"
          variant="secondary"
          size="small"
          onClick={() => setAktivModalId("avbryt")}
        >
          Send til vanlig saksflyt i Arena
        </Button>
      </div>

      <BehandlingBekreftModal aktivModalId={aktivModalId} setAktivModalId={setAktivModalId} />
    </div>
  );
}
