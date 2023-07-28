import { Heading } from "@navikt/ds-react";
import { useRouteLoaderData } from "@remix-run/react";
import { type IOppgave } from "~/models/oppgave.server";

export default function Vis() {
  const data = useRouteLoaderData(`routes/saksbehandling.person.$ident.oppgave.$oppgaveId`);
  const oppgave: IOppgave = data.oppgave;

  return (
    <div>
      <Heading level="2" size="medium">
        Visning av oppgave
      </Heading>

      <p>Status: {oppgave.tilstand}</p>

      {oppgave.steg.map((steg) => (
        <div key={steg.uuid}>
          <Heading level="3" size="small">
            {steg.id}
          </Heading>
          <p>{steg.svar?.svar}</p>
          <p>Begrunnelse: {steg.svar?.begrunnelse?.tekst}</p>
        </div>
      ))}
    </div>
  );
}
