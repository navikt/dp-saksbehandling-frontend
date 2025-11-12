import { Heading } from "@navikt/ds-react";

import { OppgaveEmneknagger } from "~/components/oppgave-emneknagger/OppgaveEmneknagger";
import { OppgaveMeny } from "~/components/v2/oppgave-meny/OppgaveMeny";
import { VerdiMedTittel } from "~/components/verdi-med-tittel/VerdiMedTittel";
import { useOppgave } from "~/hooks/useOppgave";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { hentOppgaveTilstandTekst } from "~/utils/tekst.utils";

export function OppgaveOversikt() {
  const { oppgave } = useOppgave();

  return (
    <div className={"card p-4"}>
      <div className={"flex justify-between"}>
        <Heading size={"xsmall"}>Oppgaveoversikt</Heading>
        <OppgaveMeny />
      </div>

      <div className={"mt-2 flex gap-1"}>
        <OppgaveEmneknagger oppgave={oppgave} />
      </div>
      <div className={"mt-4 grid grid-cols-4 gap-4"}>
        <VerdiMedTittel
          visBorder={true}
          label={"Status"}
          verdi={hentOppgaveTilstandTekst(oppgave.tilstand)}
        />

        <VerdiMedTittel
          visBorder={true}
          label={"Opprettet"}
          verdi={formaterTilNorskDato(oppgave.tidspunktOpprettet)}
        />

        {oppgave.saksbehandler && (
          <VerdiMedTittel
            visBorder={true}
            label={"Saksbehandler"}
            verdi={`${oppgave.saksbehandler.fornavn} ${oppgave.saksbehandler.etternavn}`}
          />
        )}

        {oppgave.beslutter && (
          <VerdiMedTittel
            visBorder={true}
            label={"Beslutter"}
            verdi={`${oppgave.beslutter.fornavn} ${oppgave.beslutter.etternavn}`}
          />
        )}
      </div>
    </div>
  );
}
