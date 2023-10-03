import { v4 as uuid } from "uuid";
import { formatISO } from "date-fns";
import { logger } from "server/logger";
import { getSaksbehandler, getSession } from "./auth.server";
import {
  getArbeidssokerOboToken,
  getBehandlingOboToken,
  getVedtakOboToken,
} from "~/utils/auth.utils.server";
import { json } from "@remix-run/node";
import { getEnv } from "~/utils/env.utils";
import { SessionWithOboProvider } from "@navikt/dp-auth/index/";

// Duplisert fra https://github.com/navikt/dp-dagpenger/blob/main/src/pages/api/arbeidssoker/perioder.ts

export type Arbeidssøkerperiode = {
  fraOgMedDato: string;
  tilOgMedDato: string;
};

export async function perioderHandler(
  session: SessionWithOboProvider,
): Promise<Arbeidssøkerperiode[]> {
  const callId = uuid();

  try {
    const saksbehandler = await getSaksbehandler(session);
    const token = getArbeidssokerOboToken(session);

    const today = formatISO(new Date(), { representation: "date" });
    const url = `${getEnv(VEILARBPROXY_URL)}/api/arbeidssoker/perioder/niva3?fraOgMed=${today}`;

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${onBehalfOfToken}`,
        "Downstream-Authorization": `Bearer ${onBehalfOfToken}`,
        "Nav-Consumer-Id": "dp-dagpenger",
        "Nav-Call-Id": callId,
      },
    });

    if (!response.ok) {
      throw new Response(null, {
        status: 500,
        statusText: "Feil ved å hente ut arbeidssøkerperioder",
      });
    }

    const perioder = await response.json();
    return json(perioder);
  } catch (error) {
    logger.error(`Kall mot veilarbregistrering (callId: ${callId}) feilet. Feilmelding: ${error}`);

    return logger.info(`Noe gikk galt (callId: ${callId})`);
  }
}

export default perioderHandler;
