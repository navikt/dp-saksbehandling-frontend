import { Button } from "@navikt/ds-react";
import { components } from "openapi/saksbehandling-typer";
import { useState } from "react";

import { OppgaveValgLeggTilbake } from "~/components/oppgave-valg/OppgaveValgLeggTilbake";
import { useOppgave } from "~/hooks/useOppgave";

import { FerdigstillGenerellOppgaveSkjema } from "./FerdigstillGenerellOppgaveSkjema";

interface IProps {
  generellOppgaveData: components["schemas"]["GenerellOppgaveData"];
}

export function GenerellOppgaveHandlinger({ generellOppgaveData }: IProps) {
  const { oppgave, readonly } = useOppgave();
  const [ferdigstillMedBehandling, setFerdigstillMedBehandling] = useState<boolean>();

  if (readonly) {
    return null;
  }

  return (
    <div className="card flex flex-col gap-4 p-4">
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
            <OppgaveValgLeggTilbake oppgave={oppgave} buttonSize={"small"} />
          </div>
        </>
      )}

      {ferdigstillMedBehandling !== undefined && (
        <FerdigstillGenerellOppgaveSkjema
          setFerdigstillMedBehandling={setFerdigstillMedBehandling}
          medBehandling={ferdigstillMedBehandling}
          lovligeSaker={generellOppgaveData.lovligeSaker}
        />
      )}
    </div>
  );
}
