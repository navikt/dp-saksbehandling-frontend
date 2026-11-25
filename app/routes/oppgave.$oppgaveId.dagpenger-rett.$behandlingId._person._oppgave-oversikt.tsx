import { HStack, VStack } from "@navikt/ds-react";
import { useState } from "react";
import { ActionFunctionArgs, Outlet } from "react-router";

import { BehandlingOversikt } from "~/components/behandling-oversikt/BehandlingOversikt";
import { LinkTabs } from "~/components/link-tabs/LinkTabs";
import { NoteButton, NoteModal } from "~/components/note-button/NoteButton";
import { OppgaveMeny } from "~/components/oppgave-meny/OppgaveMeny";
import { useOppgave } from "~/hooks/useOppgave";
import { handleActions } from "~/server-side-actions/handle-actions";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export default function BehandlingLayout() {
  const { oppgave } = useOppgave();
  const [visHuskelapp, setVisHuskelapp] = useState(false);
  return (
    <div className="flex h-full min-h-0 gap-4">
      {visHuskelapp && (
        <NoteModal noteKey={oppgave.oppgaveId} onClose={() => setVisHuskelapp(false)} />
      )}

      <div className="min-h-0 min-w-0 flex-1 overflow-auto">
        <VStack as="main" gap="space-16">
          <BehandlingOversikt />
          <div className={"card p-4"}>
            <div className="flex justify-between gap-6">
              <LinkTabs />
              <HStack align="center" gap="space-8" wrap={false} className="shrink-0">
                <NoteButton
                  noteKey={oppgave.oppgaveId}
                  onClick={() => setVisHuskelapp(true)}
                  oppgaveTilstand={oppgave.tilstand}
                />

                <OppgaveMeny />
              </HStack>
            </div>
            <div className="mt-4">
              <Outlet />
            </div>
          </div>
        </VStack>
      </div>
    </div>
  );
}
