import { useState } from "react";
import { Button, Table } from "@navikt/ds-react";
import classnames from "classnames";
import { BehandlingBekreftModal } from "~/components/behandling-bekreft-modal/BehandlingBekreftModal";
import type { ActionFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import invariant from "tiny-invariant";
import styles from "~/route-styles/behandling.module.css";
import { avbrytBehandling, godkjennBehandling } from "~/models/behandling.server";
import { parseJsonSkjemaVerdi } from "~/utils/steg.utils";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { Opplysning } from "~/components/opplysning/Opplysning";
import { ValidatedForm } from "remix-validated-form";
import { hentValideringRegler } from "~/utils/validering.util";

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

export default function Behandling() {
  const { behandling } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const [aktivModalId, setAktivModalId] = useState<IFerdigstillValg | undefined>();

  return (
    <div className={styles.container}>
      <ValidatedForm validator={hentValideringRegler(behandling.opplysning)} method="post">
        <Table className={classnames("kompakt-tabell", styles.table)} zebraStripes={false}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell scope="col">Navn</Table.HeaderCell>
              <Table.HeaderCell scope="col">Verdi</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {behandling.opplysning.map((opplysning) => (
              <Table.Row key={opplysning.id}>
                <Table.DataCell>{opplysning.navn}</Table.DataCell>
                <Table.DataCell className={styles.tabellVerdi}>
                  <Opplysning opplysning={opplysning} readonly={true} />
                </Table.DataCell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </ValidatedForm>

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
