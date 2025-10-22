import { Theme } from "@navikt/ds-react";
import { type LoaderFunctionArgs, Outlet, useLoaderData } from "react-router";
import invariant from "tiny-invariant";

import akselDarksideOverrides from "~/aksel-darkside-overrides.css?url";
import { PersonBoks } from "~/components/person-boks/PersonBoks";
import globalDarksideCss from "~/global-darkside.css?url";
import { useSaksbehandler } from "~/hooks/useSaksbehandler";
import { hentOppgave } from "~/models/saksbehandling.server";

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");
  invariant(params.behandlingId, "params.behandlingId er påkrevd");
  const oppgave = await hentOppgave(request, params.oppgaveId);

  return { oppgave };
}

export function links() {
  return [
    { rel: "stylesheet", href: globalDarksideCss },
    { rel: "stylesheet", href: akselDarksideOverrides },
  ];
}

export default function BehandlingLayout() {
  const { tema } = useSaksbehandler();
  const { oppgave } = useLoaderData<typeof loader>();
  return (
    <Theme theme={tema}>
      <PersonBoks person={oppgave.person} />
      <Outlet />
    </Theme>
  );
}
