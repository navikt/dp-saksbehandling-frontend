import { type SessionWithOboProvider } from "@navikt/dp-auth/index/";
import { formatISO } from "date-fns";
import { v4 as uuid } from "uuid";
import { getArbeidsokerOboToken } from "~/utils/auth.utils.server";
import { getEnv } from "~/utils/env.utils";

export interface IArbeidssokerperiode {
  fraOgMedDato: string;
  tilOgMedDato: string;
}

export async function hentPersonArbeidssokerStatus(
  session: SessionWithOboProvider,
  fnr: string,
): Promise<IArbeidssokerperiode | any> {
  const callId = uuid();
  const onBehalfOfToken = await getArbeidsokerOboToken(session);

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
      "Nav-Consumer-Id": "dp-saksbehandling-frontend",
      "Nav-Call-Id": callId,
      Accept: "application/json",
    },
    body: JSON.stringify({ fnr }),
  });

  if (!response.ok) {
    console.log("Feil ved å hente ut arbeidssøkerperioder");

    // throw new Response(null, {
    //   status: response.status,
    //   statusText: "Feil ved å hente ut arbeidssøkerperioder",
    // });

    return;
  }

  return await response.json();
}
