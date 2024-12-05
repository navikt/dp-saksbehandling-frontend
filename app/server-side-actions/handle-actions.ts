import { ActionFunctionArgs } from "@remix-run/node";

import { fattVedtakAction } from "~/server-side-actions/fatt-vedtak-action";
import { hentNesteOppgaveAction } from "~/server-side-actions/hent-neste-oppgave-action";
import { kvitterAvklaringAction } from "~/server-side-actions/kvitter-avklaring-action";
import { lagreNotatAction } from "~/server-side-actions/lagre-notat-action";
import { lagreOpplysningAction } from "~/server-side-actions/lagre-opplysning-action";
import { lagreUtvidetBeskrivelseAction } from "~/server-side-actions/lagre-utvidet-beskrivelse-action";
import { leggTilbakeOppgaveAction } from "~/server-side-actions/legg-tilbake-oppgave-action";
import { returnerOppgaveTilSaksbehandlerAction } from "~/server-side-actions/returner-oppgave-til-saksbehandler-action";
import { sendTilArenaAction } from "~/server-side-actions/send-til-arena-action";
import { sendTilKontrollAction } from "~/server-side-actions/send-til-kontroll-action";
import { sokPersonAction } from "~/server-side-actions/sok-person-action";
import { tildelOppgaveAction } from "~/server-side-actions/tildel-oppgave-action";
import { utsettOppgaveAction } from "~/server-side-actions/utsett-oppgave-action";
import { getEnv } from "~/utils/env.utils";
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

    case "fatt-vedtak":
      return await fattVedtakAction(request, params, formData);

    case "send-til-arena":
      return await sendTilArenaAction(request, params, formData);

    case "send-til-kontroll":
      return await sendTilKontrollAction(request, params);

    default:
      logger.warn(`Ukjent action: ${actionToRun}`);
      if (getEnv("IS_LOCALHOST") === "true") {
        throw new Error(`Ukjent action: ${actionToRun}`);
      }
      return null;
  }
}
