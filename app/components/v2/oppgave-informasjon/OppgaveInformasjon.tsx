import { Heading } from "@navikt/ds-react";

import { OppgaveEmneknagger } from "~/components/oppgave-emneknagger/OppgaveEmneknagger";
import { OppgaveMeny } from "~/components/v2/oppgave-meny/OppgaveMeny";
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
      <div className={"flex justify-between"}>
        <Heading size={"xsmall"}>Oppgaveoversikt</Heading>
        <OppgaveMeny oppgave={oppgave} />
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

        <VerdiMedTittel
          visBorder={true}
          label={"Sist endret (har ikke)"}
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

        <VerdiMedTittel visBorder={true} label={"SakID"} verdi={`HAR IKKE`} />
      </div>
    </div>
  );
}
