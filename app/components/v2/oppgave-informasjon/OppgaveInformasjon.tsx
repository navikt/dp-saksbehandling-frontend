import { Heading } from "@navikt/ds-react";

import { OppgaveEmneknagger } from "~/components/oppgave-emneknagger/OppgaveEmneknagger";
import { VerdiMedTittel } from "~/components/verdi-med-tittel/VerdiMedTittel";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { hentOppgaveTilstandTekst } from "~/utils/tekst.utils";

import { components } from "../../../../openapi/saksbehandling-typer";

interface IProps {
  oppgave: components["schemas"]["Oppgave"];
}

export function OppgaveInformasjon({ oppgave }: IProps) {
  return (
    <div className={"card p-4"}>
      <Heading size={"medium"}>Oppgaveoversikt</Heading>
      <div className={"mt-2 flex gap-1"}>
        <OppgaveEmneknagger oppgave={oppgave} />
      </div>

      <div className={"mt-4 grid grid-cols-4"}>
        <VerdiMedTittel label={"Status"} verdi={hentOppgaveTilstandTekst(oppgave.tilstand)} />

        <VerdiMedTittel
          label={"Opprettet"}
          verdi={formaterTilNorskDato(oppgave.tidspunktOpprettet)}
        />

        <VerdiMedTittel
          label={"Sist endret (har ikke)"}
          verdi={formaterTilNorskDato(oppgave.tidspunktOpprettet)}
        />

        {oppgave.saksbehandler && (
          <VerdiMedTittel
            label={"Saksbehandler"}
            verdi={`${oppgave.saksbehandler.fornavn} ${oppgave.saksbehandler.etternavn}`}
          />
        )}

        {oppgave.beslutter && (
          <VerdiMedTittel
            label={"Beslutter"}
            verdi={`${oppgave.beslutter.fornavn} ${oppgave.beslutter.etternavn}`}
          />
        )}

        <VerdiMedTittel label={"SakID"} verdi={`HAR IKKE`} />
      </div>
    </div>
  );
}
