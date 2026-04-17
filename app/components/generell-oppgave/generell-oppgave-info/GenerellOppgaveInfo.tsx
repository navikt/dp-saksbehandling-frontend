import { BodyShort, Button } from "@navikt/ds-react";
import { components } from "openapi/saksbehandling-typer";
import { useState } from "react";

import { OppgaveEmneknagger } from "~/components/oppgave-emneknagger/OppgaveEmneknagger";
import { OppgaveValgLeggTilbake } from "~/components/oppgave-valg/OppgaveValgLeggTilbake";
import { VerdiMedTittel } from "~/components/verdi-med-tittel/VerdiMedTittel";
import { useOppgave } from "~/hooks/useOppgave";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { hentOppgaveTilstandTekst } from "~/utils/tekst.utils";

import { FerdigstillGenerellOppgaveSkjema } from "../ferdigstill-generell-oppgave-skjema/FerdigstillGenerellOppgaveSkjema";

interface IProps {
  generellOppgave: components["schemas"]["GenerellOppgave"];
}

export function GenerellOppgaveInfo({ generellOppgave }: IProps) {
  const { oppgave, readonly } = useOppgave();
  const [visSkjema, setVisSkjema] = useState(false);

  return (
    <div className="card flex flex-col gap-4 p-4">
      <VerdiMedTittel
        visBorder={true}
        label="Opprettet"
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

      <VerdiMedTittel
        visBorder={true}
        label="Frist"
        verdi={generellOppgave.frist ? formaterTilNorskDato(generellOppgave.frist) : "Ingen frist"}
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

      {generellOppgave.vurdering && readonly && (
        <VerdiMedTittel visBorder={true} label={"Vurdering"} verdi={generellOppgave.vurdering} />
      )}

      {generellOppgave.nyBehandling && readonly && (
        <VerdiMedTittel
          visBorder={true}
          label={"Ny behandling"}
          verdi={`${generellOppgave.nyBehandling.behandlingType} – ${generellOppgave.nyBehandling.behandlingId}`}
        />
      )}

      {!readonly && (
        <div className={"flex flex-col gap-2"}>
          {!visSkjema && (
            <>
              <Button variant="primary" size="small" onClick={() => setVisSkjema(true)}>
                Ferdigstill oppgave
              </Button>
              <OppgaveValgLeggTilbake oppgave={oppgave} buttonSize={"small"} />
            </>
          )}

          {visSkjema && (
            <FerdigstillGenerellOppgaveSkjema
              onAvbryt={() => setVisSkjema(false)}
              lovligeSaker={generellOppgave.lovligeSaker}
            />
          )}
        </div>
      )}
    </div>
  );
}
