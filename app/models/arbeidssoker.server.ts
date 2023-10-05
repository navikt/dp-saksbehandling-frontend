import { type SessionWithOboProvider } from "@navikt/dp-auth/index/";
import { formatISO } from "date-fns";
import { v4 as uuid } from "uuid";
import { getBehandlingOboToken } from "~/utils/auth.utils.server";
import { getEnv } from "~/utils/env.utils";
import { getHeaders } from "~/utils/fetch.utils";

export interface IArbeidssokerperiode {
  fraOgMedDato: string;
  tilOgMedDato: string;
}

export async function hentPersonArbeidssokerStatus(
  session: SessionWithOboProvider,
  fnr: string,
): Promise<IArbeidssokerperiode> {
  const callId = uuid();
  const onBehalfOfToken = await getBehandlingOboToken(session);

  const fomDato = formatISO(new Date("2022-01-01"), { representation: "date" });
  const tomDato = formatISO(new Date(), { representation: "date" });

  const url = `${getEnv(
    "VEILARBPROXY_URL",
  )}/veilarbregistrering/api/arbeidssoker/perioder?fraOgMed=${fomDato}&tilOgMed=${tomDato}`;

  // Fjern den når ting funker
  // return { fraOgMedDato: "2023-10-01", tilOgMedDato: "2023-10-03" };
  // console.log(url);
  // console.log(JSON.stringify({ fnr }));

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${onBehalfOfToken}`,
      "Downstream-Authorization": `Bearer ${onBehalfOfToken}`,
      "Nav-Consumer-Id": "dp-saksbehandling-frontend",
      "Nav-Call-Id": callId,
    },
    // headers: getHeaders(onBehalfOfToken),
    body: JSON.stringify({ fnr }),
  });

  if (!response.ok) {
    throw new Response(null, {
      status: response.status,
      // status: 500,
      statusText: "Feil ved å hente ut arbeidssøkerperioder",
    });
  }

  return await response.json();
}
