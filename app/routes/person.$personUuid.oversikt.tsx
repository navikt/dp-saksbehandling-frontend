import { FolderFileIcon } from "@navikt/aksel-icons";
import { Detail, Heading, Table } from "@navikt/ds-react";
import {
  ActionFunctionArgs,
  data,
  LoaderFunctionArgs,
  useActionData,
  useLoaderData,
} from "react-router";
import invariant from "tiny-invariant";

import { hentBehandlingTypeTekstForVisning } from "~/components/oppgave-filter-behandling-type/OppgaveFilterBehandlingType";
import { OppgaveListe } from "~/components/oppgave-liste/OppgaveListe";
import { OpprettBehandling } from "~/components/opprett-behandling/OpprettBehandling";
import { RemixLink } from "~/components/RemixLink";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { hentPersonOversikt } from "~/models/saksbehandling.server";
import { handleActions } from "~/server-side-actions/handle-actions";
import { commitSession, getSession } from "~/sessions";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { isAlert } from "~/utils/type-guards";

import styles from "../route-styles/person.module.css";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.personUuid, "params.peronUuid er påkrevd");

  const personOversikt = await hentPersonOversikt(request, params.personUuid);

  const session = await getSession(request.headers.get("Cookie"));
  const alert = session.get("alert");

  return data(
    {
      alert,
      personOversikt,
    },
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    },
  );
}

export default function PersonOversikt() {
  const { personOversikt, alert } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);
  useHandleAlertMessages(alert);

  return (
    <div className={styles.container}>
      <OpprettBehandling />
      <div className={"card"}>
        <OppgaveListe
          tittel={"Alle oppgaver"}
          oppgaver={personOversikt.oppgaver}
          totaltAntallOppgaver={personOversikt.oppgaver.length}
        />
      </div>

      <div className={"card"}>
        {personOversikt.saker.map((sak) => (
          <div className={"mt-6 flex flex-col p-4"} key={sak.id}>
            <Heading size={"xsmall"} className={"flex gap-1"} spacing>
              <FolderFileIcon fontSize="1.5rem" />
              SakID: {sak.id}
            </Heading>

            <Table size="small" className={"tabell--subtil"} zebraStripes={true}>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell scope="col">
                    <Detail weight={"semibold"}>Mottatt</Detail>
                  </Table.HeaderCell>
                  <Table.HeaderCell scope="col">
                    <Detail weight={"semibold"}>Type</Detail>
                  </Table.HeaderCell>
                  <Table.HeaderCell scope="col">
                    <Detail weight={"semibold"}>BehandlingId</Detail>
                  </Table.HeaderCell>
                  <Table.HeaderCell scope="col">
                    <Detail weight={"semibold"}>OppgaveId</Detail>
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {sak.behandlinger.map((behandling) => (
                  <Table.Row key={behandling.id}>
                    <Table.DataCell>
                      <Detail>{formaterTilNorskDato(behandling.opprettet)}</Detail>
                    </Table.DataCell>
                    <Table.DataCell>
                      <Detail>
                        {hentBehandlingTypeTekstForVisning(behandling.behandlingType)}
                      </Detail>
                    </Table.DataCell>
                    <Table.DataCell>
                      <Detail>
                        <RemixLink to={`/behandling/${behandling.id}`}>{behandling.id}</RemixLink>
                      </Detail>
                    </Table.DataCell>
                    <Table.DataCell>
                      <Detail>
                        <RemixLink
                          to={`/oppgave/${behandling.oppgaveId}/dagpenger-rett/${behandling.id}`}
                        >
                          {behandling.oppgaveId}
                        </RemixLink>
                      </Detail>
                    </Table.DataCell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        ))}
      </div>
    </div>
  );
}
