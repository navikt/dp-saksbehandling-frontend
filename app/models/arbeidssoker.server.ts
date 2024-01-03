import { type SessionWithOboProvider } from "@navikt/dp-auth/index/";
import { formatISO, subYears } from "date-fns";
import { v4 as uuid } from "uuid";
import { getVeilarbregistreringOboToken } from "~/utils/auth.utils.server";
import { getEnv } from "~/utils/env.utils";
import type { INetworkResponse } from "~/utils/types";
import { uuidv4 } from "@mswjs/interceptors/lib/utils/uuid";

export interface IArbeidssokerStatus {
  arbeidssokerperioder: IArbeidssokerperiode[];
}

export interface IArbeidssokerperiode {
  fraOgMedDato: string;
  tilOgMedDato: string | null;
  id: string;
}

export async function hentArbeidssokerStatus(
  session: SessionWithOboProvider,
  fnr: string,
): Promise<INetworkResponse<IArbeidssokerStatus>> {
  const callId = uuid();
  const onBehalfOfToken = await getVeilarbregistreringOboToken(session);

  // Et år tilbake i tid
  const fomDato = formatISO(subYears(new Date(), 1), { representation: "date" });
  const tomDato = formatISO(new Date(), { representation: "date" });

  const url = `${getEnv(
    "VEILARBPROXY_URL",
  )}/veilarbregistrering/api/arbeidssoker/perioder?fraOgMed=${fomDato}&tilOgMed=${tomDato}`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${onBehalfOfToken}`,
      "Nav-Consumer-Id": "dp-saksbehandling-frontend",
      "Nav-Call-Id": callId,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ fnr }),
  });

  if (!response.ok) {
    return {
      status: "error",
      error: {
        statusCode: response.status,
        statusText: "Feil ved uthenting av arbeidssøkerstatus",
      },
    };
  }

  const responseJSON: IArbeidssokerStatus = await response.json();
  const data = {
    arbeidssokerperioder: responseJSON.arbeidssokerperioder.map((periode) => {
      return {
        fraOgMedDato: periode.fraOgMedDato,
        tilOgMedDato: periode.tilOgMedDato,
        id: uuidv4(),
      };
    }),
  };

  return { status: "success", data };
}
