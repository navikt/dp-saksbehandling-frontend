import { BodyShort } from "@navikt/ds-react";
import { components } from "openapi/saksbehandling-typer";

import { OppgaveEmneknagger } from "~/components/oppgave-emneknagger/OppgaveEmneknagger";
import { VerdiMedTittel } from "~/components/verdi-med-tittel/VerdiMedTittel";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { hentOppgaveTilstandTekst } from "~/utils/tekst.utils";

interface IProps {
  oppgave: components["schemas"]["Oppgave"];
}

export function InnsendingInfo({ oppgave }: IProps) {
  return (
    <div className="card flex flex-col gap-4 p-4">
      <VerdiMedTittel
        visBorder={true}
        label="Innsendt"
        verdi={formaterTilNorskDato(oppgave.tidspunktOpprettet)}
      />
      <div className="flex flex-col gap-1 border-b border-(--ax-border-neutral-subtle) pb-2">
        <BodyShort size={"small"} weight={"semibold"}>
          Emne
        </BodyShort>
        <div>
          <OppgaveEmneknagger oppgave={oppgave} />
        </div>
      </div>
      <VerdiMedTittel
        visBorder={true}
        label="Status"
        verdi={hentOppgaveTilstandTekst(oppgave.tilstand)}
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
  );
}
