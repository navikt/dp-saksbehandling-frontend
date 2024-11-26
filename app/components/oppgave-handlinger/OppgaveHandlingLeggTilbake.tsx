import { Button } from "@navikt/ds-react";
import { useFetcher, useNavigate } from "@remix-run/react";
import { useEffect } from "react";

import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import type { action as leggTilbakeAction } from "~/routes/action-legg-tilbake-oppgave";

export function OppgaveHandlingLeggTilbake() {
  const navigate = useNavigate();
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const leggTilbakeOppgaveFetcher = useFetcher<typeof leggTilbakeAction>();
  useHandleAlertMessages(leggTilbakeOppgaveFetcher.data);

  useEffect(() => {
    if (leggTilbakeOppgaveFetcher.data) {
      navigate("/");
    }
  }, [leggTilbakeOppgaveFetcher.data, navigate]);

  return (
    <leggTilbakeOppgaveFetcher.Form method="post" action="/action-legg-tilbake-oppgave">
      <input hidden={true} readOnly={true} name="oppgaveId" value={oppgave.oppgaveId} />
      <Button size="small" variant="tertiary" loading={leggTilbakeOppgaveFetcher.state !== "idle"}>
        Legg tilbake
      </Button>
    </leggTilbakeOppgaveFetcher.Form>
  );
}
