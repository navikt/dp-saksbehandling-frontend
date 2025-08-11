import { ArchiveIcon, FolderFileIcon, LayersIcon, PencilWritingIcon } from "@navikt/aksel-icons";
import { BodyShort, Heading, Tabs } from "@navikt/ds-react";
import {
  ActionFunctionArgs,
  data,
  LoaderFunctionArgs,
  useActionData,
  useLoaderData,
} from "react-router";
import invariant from "tiny-invariant";

import { OppgaveListe } from "~/components/oppgave-liste/OppgaveListe";
import { OpprettBehandling } from "~/components/opprett-behandling/OpprettBehandling";
import { SakListe } from "~/components/sak-liste/SakListe";
import { SisteSak } from "~/components/siste-sak/SisteSak";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { hentPersonOversikt } from "~/models/saksbehandling.server";
import { handleActions } from "~/server-side-actions/handle-actions";
import { commitSession, getSession } from "~/sessions";
import { isAlert } from "~/utils/type-guards";

import { components } from "../../openapi/saksbehandling-typer";
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

      <div className={"card"}>
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
          <SakListe saker={personOversikt.saker} />
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

export function hentOppgaveUrl(behandling: components["schemas"]["Behandling"]) {
  switch (behandling.behandlingType) {
    case "RETT_TIL_DAGPENGER":
      return `/oppgave/${behandling.oppgaveId}/dagpenger-rett/${behandling.id}/behandle`;
    case "KLAGE":
      return `/oppgave/${behandling.oppgaveId}/klage/${behandling.id}`;
    case "MELDEKORT":
      return `/oppgave/${behandling.oppgaveId}`;
  }
}
