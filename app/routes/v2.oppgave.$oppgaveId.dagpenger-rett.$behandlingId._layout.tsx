import { Tabs, Theme } from "@navikt/ds-react";
import { type LoaderFunctionArgs, Outlet, useLoaderData } from "react-router";
import invariant from "tiny-invariant";

import akselDarksideOverrides from "~/aksel-darkside-overrides.css?url";
import { DokumentOversikt } from "~/components/dokument-oversikt/DokumentOversikt";
import { FagsystemLenker } from "~/components/fagsystem-lenker/FagsystemLenker";
import { PersonBoks } from "~/components/person-boks/PersonBoks";
import { OppgaveOversikt } from "~/components/v2/oppgave-oversikt/OppgaveOversikt";
import globalDarksideCss from "~/global-darkside.css?url";
import { useSaksbehandler } from "~/hooks/useSaksbehandler";
import { hentBehandlingV2 } from "~/models/behandling.server";
import { hentJournalpost } from "~/models/saf.server";
import { hentOppgave } from "~/models/saksbehandling.server";
import { hentInntektRedigeringUrl } from "~/utils/behandling.utils";

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");
  invariant(params.behandlingId, "params.behandlingId er påkrevd");
  const oppgave = await hentOppgave(request, params.oppgaveId);
  const behandling = await hentBehandlingV2(request, params.behandlingId);
  const journalposterPromises = Promise.all(
    oppgave.journalpostIder.map((journalpostId) => hentJournalpost(request, journalpostId)),
  );

  return { oppgave, behandling, journalposterPromises };
}

export function links() {
  return [
    { rel: "stylesheet", href: globalDarksideCss },
    { rel: "stylesheet", href: akselDarksideOverrides },
  ];
}

export default function BehandlingLayout() {
  const { tema } = useSaksbehandler();
  const { oppgave, behandling, journalposterPromises } = useLoaderData<typeof loader>();
  return (
    <Theme theme={tema}>
      <PersonBoks person={oppgave.person} />
      <div className={"main grid grid-cols-[2fr_1fr] gap-4"}>
        <OppgaveOversikt oppgave={oppgave} />

        <div className={"card p-2"}>
          <Tabs defaultValue="dokumenter" size={"small"}>
            <Tabs.List>
              <Tabs.Tab value="dokumenter" label="Dokumenter" />
              <Tabs.Tab value="fagsystemer" label="Fagsystemer" />
              <Tabs.Tab value="historikk" label="Historikk" />
            </Tabs.List>

            <Tabs.Panel value="dokumenter">
              <DokumentOversikt journalposterPromises={journalposterPromises} />
            </Tabs.Panel>

            <Tabs.Panel value="fagsystemer">
              <FagsystemLenker inntektRedigeringUrl={hentInntektRedigeringUrl(behandling)} />
            </Tabs.Panel>

            <Tabs.Panel value="historikk">
              <div>Historikk</div>
            </Tabs.Panel>
          </Tabs>
        </div>
      </div>
      <Outlet />
    </Theme>
  );
}
