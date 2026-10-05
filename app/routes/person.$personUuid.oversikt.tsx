import {
  ArchiveIcon,
  FolderFileIcon,
  LayersIcon,
  ParasolBeachIcon,
  PencilWritingIcon,
} from "@navikt/aksel-icons";
import { BodyShort, Heading, Switch, Tabs } from "@navikt/ds-react";
import { useState } from "react";
import { ActionFunctionArgs, useActionData } from "react-router";

import { OppgaveTable } from "~/components/oppgave-table/OppgaveTable";
import { OpprettBehandling } from "~/components/opprett-behandling/OpprettBehandling";
import { SakListe } from "~/components/sak-liste/SakListe";
import { SisteSak } from "~/components/siste-sak/SisteSak";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { handleActions } from "~/server-side-actions/handle-actions";
import { filtrerMeldekortOppgaver, filtrerOppgaverTilBehandling } from "~/utils/oppgave.utils";
import { isAlert } from "~/utils/type-guards";

import styles from "../route-styles/person.module.css";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export default function PersonOversikt() {
  const { personOversikt, sisteSakIDpBehandling, gjetterSisteBehandling, sisteSak } =
    useTypedRouteLoaderData("routes/person.$personUuid");
  const actionData = useActionData<typeof action>();
  const [skjulMeldekortOppgaver, setSkjulMeldekortOppgaver] = useState(false);

  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

  const oppgaverTilBehandling = filtrerOppgaverTilBehandling(personOversikt.oppgaver);

  const ferietilleggOppgaver = personOversikt.ferietilleggSaker.flatMap((sak) => sak.oppgaver);
  const alleOppgaver = filtrerMeldekortOppgaver(personOversikt.oppgaver, skjulMeldekortOppgaver);
  return (
    <div className="main">
      <div className={`${styles.container}`}>
        <div className={"mb-2 flex items-center justify-between"}>
          <Heading size={"medium"}>Oppgaver</Heading>
          <OpprettBehandling />
        </div>

        <div className={"card"}>
          <OppgaveTable
            tittel={"Oppgaver til behandling"}
            icon={<PencilWritingIcon fontSize="1.5rem" aria-hidden />}
            oppgaver={oppgaverTilBehandling}
            totaltAntallOppgaver={oppgaverTilBehandling.length}
            excludedColumns={["personIdent", "beslutter", "utsattTilDato"]}
          />
        </div>

        <Heading size={"medium"} className={"mt-6"}>
          Dagpenger
        </Heading>

        <Tabs defaultValue="siste-sak" size="small" className={"mt-2"}>
          <div className={"flex items-center justify-between"}>
            <Tabs.List>
              <Tabs.Tab value="siste-sak" label="Siste sak" icon={<FolderFileIcon aria-hidden />} />

              <Tabs.Tab
                value="tidligere-saker"
                label="Tidligere saker og oppgaver"
                icon={<ArchiveIcon aria-hidden />}
              />

              <Tabs.Tab
                value="alle-oppgaver"
                label="Alle oppgaver"
                icon={<LayersIcon fontSize="1.5rem" aria-hidden />}
              />
            </Tabs.List>
            <Switch
              checked={skjulMeldekortOppgaver}
              size={"small"}
              onChange={(e) => setSkjulMeldekortOppgaver(e.target.checked)}
            >
              Skjul meldekort
            </Switch>
          </div>

          <Tabs.Panel value="siste-sak">
            {sisteSak && sisteSakIDpBehandling && (
              <SisteSak
                sak={sisteSak}
                sakIDpBehandling={sisteSakIDpBehandling}
                skjulMeldekortOppgaver={skjulMeldekortOppgaver}
              />
            )}
            {sisteSak && gjetterSisteBehandling && (
              <SisteSak
                sak={sisteSak}
                gjetterSisteBehandling={gjetterSisteBehandling}
                skjulMeldekortOppgaver={skjulMeldekortOppgaver}
              />
            )}
            {!sisteSak && (
              <div className={"card my-4 p-4"}>
                <BodyShort>Personen har ingen saker</BodyShort>
              </div>
            )}
          </Tabs.Panel>

          <Tabs.Panel value="tidligere-saker">
            <SakListe
              saker={personOversikt.saker}
              skjulMeldekortOppgaver={skjulMeldekortOppgaver}
            />
          </Tabs.Panel>

          <Tabs.Panel value="alle-oppgaver">
            <div className={"card mt-4"}>
              <OppgaveTable
                tittel={"Alle oppgaver"}
                icon={<LayersIcon fontSize="1.5rem" aria-hidden />}
                oppgaver={alleOppgaver}
                totaltAntallOppgaver={alleOppgaver.length}
                excludedColumns={["personIdent"]}
              />
            </div>
          </Tabs.Panel>
        </Tabs>

        <Heading size={"medium"} className={"mt-6 mb-2"}>
          Ferietillegg
        </Heading>

        <div className={"card"}>
          <OppgaveTable
            tittel={"Ferietillegg"}
            icon={<ParasolBeachIcon fontSize="1.5rem" aria-hidden />}
            oppgaver={ferietilleggOppgaver}
            totaltAntallOppgaver={ferietilleggOppgaver.length}
            excludedColumns={["personIdent"]}
          />
        </div>
      </div>
    </div>
  );
}
