import { ActionFunctionArgs } from "@remix-run/node";

import { hentNesteOppgaveAction } from "~/server-side-actions/hent-neste-oppgave-action";
import { kvitterAvklaringAction } from "~/server-side-actions/kvitter-avklaring-action";
import { lagreNotatAction } from "~/server-side-actions/lagre-notat-action";
import { lagreOpplysningAction } from "~/server-side-actions/lagre-opplysning-action";
import { lagreUtvidetBeskrivelseAction } from "~/server-side-actions/lagre-utvidet-beskrivelse-action";
import { leggTilbakeOppgaveAction } from "~/server-side-actions/legg-tilbake-oppgave-action";
import { returnerOppgaveTilSaksbehandlerAction } from "~/server-side-actions/returner-oppgave-til-saksbehandler-action";
import { sokPersonAction } from "~/server-side-actions/sok-person-action";
import { tildelOppgaveAction } from "~/server-side-actions/tildel-oppgave-action";
import { utsettOppgaveAction } from "~/server-side-actions/utsett-oppgave-action";
import { logger } from "~/utils/logger.utils";

export async function handleActions(request: Request, params: ActionFunctionArgs["params"]) {
  const formData = await request.formData();
  const actionToRun = formData.get("_action") as string;

  switch (actionToRun) {
    case "sok-person":
      return await sokPersonAction(request, formData);

    case "lagre-opplysning":
      return await lagreOpplysningAction(request, formData);

    case "lagre-notat":
      return await lagreNotatAction(request, formData);

    case "hent-neste-oppgave":
      return await hentNesteOppgaveAction(request);

    case "returner-oppgave-til-saksbehandler":
      return await returnerOppgaveTilSaksbehandlerAction(request, params, formData);

    case "lagre-utvidet-beskrivelse":
      return await lagreUtvidetBeskrivelseAction(request, formData);

    case "legg-tilbake-oppgave":
      return await leggTilbakeOppgaveAction(request, formData);

    case "tildel-oppgave":
      return await tildelOppgaveAction(request, formData);

    case "utsett-oppgave":
      return await utsettOppgaveAction(request, formData);

    case "kvitter-avklaring":
      return await kvitterAvklaringAction(request, formData);
    default:
      logger.warn(`Ukjent action: ${actionToRun}`);
      return null;
  }
}
