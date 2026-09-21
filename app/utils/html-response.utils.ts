import { logger } from "~/utils/logger.utils";

export const HTML_RESPONSE_STATUS_TEXT = "HTML response";

export function handleHtmlResponse(responseBody: unknown, status: number): void {
  const body = typeof responseBody === "string" ? responseBody : JSON.stringify(responseBody);

  logger.error(`${status} - ${body}`);

  throw new Response(body, { status, statusText: HTML_RESPONSE_STATUS_TEXT });
}
