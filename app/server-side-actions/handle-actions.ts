import { ActionFunctionArgs } from "react-router";

import { avbrytOppgaveAction } from "~/server-side-actions/avbryt-oppgave-action";
import { fattVedtakAction } from "~/server-side-actions/fatt-vedtak-action";
import { ferdigstillKlageAction } from "~/server-side-actions/ferdigstill-klage-action";
import { hentNesteOppgaveAction } from "~/server-side-actions/hent-neste-oppgave-action";
import { kvitterAvklaringAction } from "~/server-side-actions/kvitter-avklaring-action";
import { lagreBrevVariantAction } from "~/server-side-actions/lagre-brev-variant-action";
import { lagreKlageOpplysningAction } from "~/server-side-actions/lagre-klage-opplysning-action";
import { lagreNotatAction } from "~/server-side-actions/lagre-notat-action";
import { lagreOpplysningAction } from "~/server-side-actions/lagre-opplysning-action";
import { lagreUtvidetBeskrivelseAction } from "~/server-side-actions/lagre-utvidet-beskrivelse-action";
import { leggTilbakeOppgaveAction } from "~/server-side-actions/legg-tilbake-oppgave-action";
import { oppdaterOrkestratorBarnAction } from "~/server-side-actions/oppdater-orkestrator-barn-action";
import { opprettKlageAction } from "~/server-side-actions/opprett-klage-action";
import { opprettManuellBehandlingAction } from "~/server-side-actions/opprett-manuell-behandling-action";
import { rekjorBehandlingAction } from "~/server-side-actions/rekjor-behandling-action";
import { returnerOppgaveTilSaksbehandlerAction } from "~/server-side-actions/returner-oppgave-til-saksbehandler-action";
import { sendTilKontrollAction } from "~/server-side-actions/send-til-kontroll-action";
import { settOppgavePåVentAction } from "~/server-side-actions/sett-oppgave-på-vent-action";
import { slettPeriodeAction } from "~/server-side-actions/slett-periode-action";
import { sokPersonAction } from "~/server-side-actions/sok-person-action";
import { tildelOppgaveAction } from "~/server-side-actions/tildel-oppgave-action";
import { trekkKlageAction } from "~/server-side-actions/trekk-klage-action";
import { getEnv } from "~/utils/env.utils";
import { logger } from "~/utils/logger.utils";

import { ferdigstillInnsendingAction } from "./ferdigstill-innsending-action";
import { lagreGodkjentBrevIGosysAction } from "./lagre-godkjent-brev-i-gosys-action";
import { lagreMeldingOmVedtakKildeAction } from "./lagre-melding-om-vedtak-kilde-action";

export async function handleActions(request: Request, params: ActionFunctionArgs["params"]) {
  const formData = await request.formData();
  const actionToRun = formData.get("_action") as string;

  switch (actionToRun) {
    case "sok-person":
      return await sokPersonAction(request, formData);

    case "lagre-opplysning":
      return await lagreOpplysningAction(request, formData);

    case "slett-periode":
      return await slettPeriodeAction(request, formData);

    case "lagre-notat":
      return await lagreNotatAction(request, formData);

    case "hent-neste-oppgave":
      return await hentNesteOppgaveAction(request, formData);

    case "returner-oppgave-til-saksbehandler":
      return await returnerOppgaveTilSaksbehandlerAction(request, params, formData);

    case "lagre-utvidet-beskrivelse":
      return await lagreUtvidetBeskrivelseAction(request, formData);

    case "legg-tilbake-oppgave":
      return await leggTilbakeOppgaveAction(request, params, formData);

    case "tildel-oppgave":
      return await tildelOppgaveAction(request, formData);

    case "sett-oppgave-på-vent":
      return await settOppgavePåVentAction(request, formData);

    case "kvitter-avklaring":
      return await kvitterAvklaringAction(request, formData);

    case "fatt-vedtak":
      return await fattVedtakAction(request, params, formData);

    case "avbryt-oppgave":
      return await avbrytOppgaveAction(request, formData);

    case "send-til-kontroll":
      return await sendTilKontrollAction(request, params, formData);

    case "rekjor-behandling":
      return await rekjorBehandlingAction(request, formData);

    case "lagre-klage-opplysning":
      return await lagreKlageOpplysningAction(request, formData);

    case "lagre-melding-om-vedtak-kilde":
      return await lagreMeldingOmVedtakKildeAction(request, formData);

    case "lagre-brev-variant":
      return await lagreBrevVariantAction(request, formData);

    case "lagre-godkjent-brev-i-gosys":
      return await lagreGodkjentBrevIGosysAction(request, formData);

    case "ferdigstill-klage":
      return await ferdigstillKlageAction(request, params, formData);

    case "trekk-klage":
      return await trekkKlageAction(request, params, formData);

    case "opprett-klage":
      return await opprettKlageAction(request, formData);

    case "opprett-manuell-behandling":
      return await opprettManuellBehandlingAction(request, formData);

    case "oppdater-orkestrator-barn":
      return await oppdaterOrkestratorBarnAction(request, formData);

    case "ferdigstill-innsending":
      return await ferdigstillInnsendingAction(request, params, formData);

    default:
      logger.warn(`Ukjent action: ${actionToRun}`);
      if (getEnv("IS_LOCALHOST") === "true") {
        throw new Error(`Ukjent action: ${actionToRun}`);
      }
      return null;
  }
}
