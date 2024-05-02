import { logger, sikkerLogger } from "~/utils/logger.utils";

export function handleErrorResponse(response: Response): void {
  logger.warn(`${response.status} - Feil ved kall til ${response.url}`);
  sikkerLogger.warn(
    `${response.status} - Feil ved kall til ${response.url}. Tekst: ${response.statusText}`,
  );

  throw new Response(`Feil ved kall til ${response.url}`, {
    status: response.status,
    statusText: response.statusText,
  });
}
