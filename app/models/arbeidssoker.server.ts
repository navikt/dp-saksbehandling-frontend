import { v4 as uuid } from "uuid";
import { formatISO } from "date-fns";
import { getArbeidssokerOboToken } from "~/utils/auth.utils.server";
import { getEnv } from "~/utils/env.utils";
import { type SessionWithOboProvider } from "@navikt/dp-auth/index/";

// Duplisert fra https://github.com/navikt/dp-dagpenger/blob/main/src/pages/api/arbeidssoker/perioder.ts

export interface IArbeidssokerperiode {
  fraOgMedDato: string;
  tilOgMedDato: string;
}

export async function hentPersonArbeidssokerStatus(
  session: SessionWithOboProvider,
  ident: string,
): Promise<IArbeidssokerperiode> {
  const callId = uuid();

  return { fraOgMedDato: "2023-10-01", tilOgMedDato: "2023-10-03" };

  // Vil trenge den senere
  // const saksbehandler = await getSaksbehandler(session);
  const onBehalfOfToken = getArbeidssokerOboToken(session);

  const today = formatISO(new Date(), { representation: "date" });
  const url = `${getEnv("VEILARBPROXY_URL")}/api/arbeidssoker/perioder/niva3?fraOgMed=${today}`;

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

  const perioder: IArbeidssokerperiode = await response.json();
  return perioder;
}
