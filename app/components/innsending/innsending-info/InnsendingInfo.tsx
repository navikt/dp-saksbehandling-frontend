import { BodyShort, Button } from "@navikt/ds-react";
import { components } from "openapi/saksbehandling-typer";
import { useState } from "react";

import { OppgaveEmneknagger } from "~/components/oppgave-emneknagger/OppgaveEmneknagger";
import { OppgaveValgLeggTilbake } from "~/components/oppgave-valg/OppgaveValgLeggTilbake";
import { VerdiMedTittel } from "~/components/verdi-med-tittel/VerdiMedTittel";
import { useOppgave } from "~/hooks/useOppgave";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { hentOppgaveTilstandTekst } from "~/utils/tekst.utils";

import { FerdigstillInnsendingSkjema } from "../ferdigstill-innsending-skjema/FerdigstillInnsendingSkjema";

interface IProps {
  innsending: components["schemas"]["Innsending"];
}

export function InnsendingInfo({ innsending }: IProps) {
  const { oppgave, readonly } = useOppgave();
  const [ferdigstillMedBehandling, setFerdigstillMedBehandling] = useState<boolean>();

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

      {innsending.vurdering && (
        <VerdiMedTittel visBorder={true} label={"Vurdering"} verdi={innsending.vurdering} />
      )}

      {!readonly && (
        <div className="mt-2 flex flex-col gap-2">
          {ferdigstillMedBehandling === undefined && (
            <>
              <div>
                <Button
                  variant="primary"
                  size="small"
                  onClick={() => setFerdigstillMedBehandling(true)}
                >
                  Opprett ny behandling
                </Button>
              </div>

              <div>
                <Button
                  variant="secondary"
                  size="small"
                  onClick={() => setFerdigstillMedBehandling(false)}
                >
                  Ferdigstill uten behandling
                </Button>
              </div>

              <div>
                <OppgaveValgLeggTilbake oppgaveId={oppgave.oppgaveId} buttonSize={"small"} />
              </div>
            </>
          )}

          {ferdigstillMedBehandling !== undefined && (
            <FerdigstillInnsendingSkjema
              setFerdigstillMedBehandling={setFerdigstillMedBehandling}
              medBehandling={ferdigstillMedBehandling}
              lovligeSaker={innsending.lovligeSaker}
            />
          )}
        </div>
      )}
    </div>
  );
}
