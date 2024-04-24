import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { Button, Table } from "@navikt/ds-react";
import classnames from "classnames";
import { BehandlingBekreftModal } from "~/components/behandling-bekreft-modal/BehandlingBekreftModal";
import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import invariant from "tiny-invariant";
import { hentOppgave } from "~/models/oppgave.server";
import styles from "~/route-styles/behandling.module.css";
import { avbrytBehandling, godkjennBehandling, hentBehandling } from "~/models/behandling.server";
import { parseJsonSkjemaVerdi } from "~/utils/steg.utils";

interface ISkjemadata {
  ferdigstillValg: IFerdigstillValg;
  personIdent: string;
  behandlingId: string;
}

export type IFerdigstillValg = "godkjenn" | "avbryt";

export async function action({ request, params }: ActionFunctionArgs) {
  invariant(params.oppgaveId, `params.oppgaveId er påkrevd`);

  const formData = await request.formData();
  const skjemadata = parseJsonSkjemaVerdi<ISkjemadata>(formData, "skjemadata");

  let response;

  switch (skjemadata.ferdigstillValg) {
    case "avbryt":
      response = await avbrytBehandling(request, skjemadata.behandlingId, skjemadata.personIdent);
      break;

    case "godkjenn":
      response = await godkjennBehandling(request, skjemadata.behandlingId, skjemadata.personIdent);
      break;
  }

  if (response.status === "success") {
    return redirect(`/`);
  }

  return response;
}

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");
  const oppgave = await hentOppgave(request, params.oppgaveId);
  const behandling = await hentBehandling(request, oppgave.behandlingId);
  return json({ behandling, oppgave });
}

export default function Behandling() {
  const { behandling } = useLoaderData<typeof loader>();
  const [aktivModalId, setAktivModalId] = useState<IFerdigstillValg | undefined>();

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
