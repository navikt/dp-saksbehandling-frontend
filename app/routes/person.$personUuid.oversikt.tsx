import { ArchiveIcon, FolderFileIcon, LayersIcon, PencilWritingIcon } from "@navikt/aksel-icons";
import { BodyShort, Detail, ExpansionCard, Heading, Table, Tabs } from "@navikt/ds-react";
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
import { SisteSak } from "~/siste-sak/SisteSak";
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

  const oppgaverTilBehandling = personOversikt.oppgaver.filter((oppgave) =>
    ["KLAR_TIL_BEHANDLING", "UNDER_BEHANDLING", "KLAR_TIL_KONTROLL"].includes(oppgave.tilstand),
  );

  return (
    <div className={styles.container}>
      <div className={"mb-2 flex items-center justify-between"}>
        <Heading size={"medium"}>Oppgaver</Heading>
        <OpprettBehandling />
      </div>

      <div className={"card !bg-blue-50"}>
        <OppgaveListe
          tittel={"Oppgave til behandling"}
          icon={<PencilWritingIcon fontSize="1.5rem" aria-hidden />}
          oppgaver={oppgaverTilBehandling}
          totaltAntallOppgaver={personOversikt.oppgaver.length}
        />
      </div>

      <Heading size={"medium"} className={"mt-6"}>
        Saks- og oppgavehistorikk
      </Heading>
      <Tabs defaultValue="siste-sak" size="small" className={"mt-2"}>
        <Tabs.List>
          <Tabs.Tab value="siste-sak" label="Siste sak" icon={<FolderFileIcon aria-hidden />} />
          <Tabs.Tab
            value="tidligere-saker"
            label="Tidligere saker og behandlinger"
            icon={<ArchiveIcon aria-hidden />}
          />
          <Tabs.Tab
            value="alle-oppgaver"
            label="Alle oppgaver"
            icon={<LayersIcon fontSize="1.5rem" aria-hidden />}
          />
        </Tabs.List>
        <Tabs.Panel value="siste-sak">
          {personOversikt.saker[0] && <SisteSak sak={personOversikt.saker[0]} />}
          {!personOversikt.saker[0] && (
            <div className={"card my-4 p-4"}>
              <BodyShort>Personen har ingen saker</BodyShort>
            </div>
          )}
        </Tabs.Panel>
        <Tabs.Panel value="tidligere-saker">
          {personOversikt.saker.map((sak) => (
            <ExpansionCard
              key={sak.id}
              className={"expansion--subtil card my-4"}
              aria-label={""}
              size={"small"}
            >
              <ExpansionCard.Header>
                <ExpansionCard.Title size={"small"} className={"flex items-center gap-1"}>
                  <FolderFileIcon fontSize="1.5rem" />
                  SakID: {sak.id}
                </ExpansionCard.Title>
                <ExpansionCard.Description>
                  Siste endret: {formaterTilNorskDato(new Date())}
                </ExpansionCard.Description>
              </ExpansionCard.Header>

              <ExpansionCard.Content className={"p-4"}>
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
                            <RemixLink to={`/behandling/${behandling.id}`}>
                              {behandling.id}
                            </RemixLink>
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
              </ExpansionCard.Content>
            </ExpansionCard>
          ))}
        </Tabs.Panel>
        <Tabs.Panel value="alle-oppgaver">
          <div className={"card mt-4"}>
            <OppgaveListe
              tittel={"Alle oppgaver"}
              icon={<LayersIcon fontSize="1.5rem" aria-hidden />}
              oppgaver={personOversikt.oppgaver}
              totaltAntallOppgaver={personOversikt.oppgaver.length}
            />
          </div>
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}
