import type { ISaksbehandler } from "~/models/saksbehandler.server";
import type { IBruker } from "~/models/bruker.server";
import { mockOppgaver } from "../../mock-data/mock-oppgave";
import { mockSaksbehandler } from "../../mock-data/mock-saksbehandler";

type HendelsesType = SoknadsType | "Ettersendelse" | "Endring" | "Klage";
type SoknadsType = "Ordinær" | "Utdanning" | "Gjenopptak";

export interface IOppgave {
  saksbehandler: ISaksbehandler | null;
  bruker: IBruker;
  datoOpprettet: string;
  hendelse: HendelsesType;
}

export function mockHentOppgaver(saksbehandler?: ISaksbehandler): Promise<IOppgave[]> {
  const oppgaver: IOppgave[] = [];

  if (saksbehandler) {
    for (let i = 1; i <= 2; i++) {
      oppgaver.push({
        ...mockOppgaver[i],
        saksbehandler: { ...mockSaksbehandler, givenName: "Mock av innlogget bruker" },
      });
    }
    return Promise.resolve(oppgaver);
  }
  for (let i = 0; i < mockOppgaver.length; i++) {
    oppgaver.push(mockOppgaver[i]);
  }

  return Promise.resolve(oppgaver);
}
