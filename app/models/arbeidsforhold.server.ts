import { type SessionWithOboProvider } from "@navikt/dp-auth/index/";
import { getBehandlingOboToken } from "~/utils/auth.utils.server";
import { getEnv } from "~/utils/env.utils";
import type { INetworkResponse } from "~/utils/types";
import { logger } from "~/utils/logger.utils";

export interface IArbeidsforhold {
  id: string;
  orgnr: string;
  ansettelsestype: string;
  startdato: string;
  yrke?: string;
  sluttdato?: string;
  sluttaarsak?: string;
}

export async function hentArbeidsforhold(
  session: SessionWithOboProvider,
  fnr: string,
): Promise<INetworkResponse<IArbeidsforhold[]>> {
  logger.info("henter arbeidsforhold");
  const onBehalfOfToken = await getBehandlingOboToken(session);
  const url = `${getEnv("DP_BEHANDLING_URL")}/arbeidsforhold`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${onBehalfOfToken}`,
      },
      body: JSON.stringify({ ident: fnr }),
    });

    if (!response.ok) {
      logger.warn(`Greide ikke hente arbeidsforhold: ${response.statusText}`);
      return {
        status: "error",
        error: { statusCode: response.status, statusText: response.statusText },
      };
    }

    logger.info("Arbeidsforhold RESPONSE OK");
    const data = await response.json();
    logger.info("Arbeidsforhold JSON OK");

    return { status: "success", data };
  } catch (error: unknown) {
    let errorMessage = "Arbeidsforhold gikk rett på trynet";

    if (typeof error === "string") {
      logger.error(error);
      errorMessage = error;
    } else if (error instanceof Error) {
      logger.error(JSON.stringify(error));
      errorMessage = error.message;
    } else {
      logger.error("Arbeidsforhold gikk rett på trynet");
    }

    return {
      status: "error",
      error: { statusCode: 500, statusText: errorMessage },
    };
  }
}
