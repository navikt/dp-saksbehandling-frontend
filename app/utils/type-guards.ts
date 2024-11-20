import type { INetworkResponseError, INetworkResponseSuccess } from "~/utils/types";
import type { IAlert } from "~/context/alert-context";
import type { IFormValidationError } from "~/components/oppgave-handlinger/OppgaveHandlinger";

export function isNetworkResponseSuccess<T>(
  networkResponse?: unknown,
): networkResponse is INetworkResponseSuccess<T> {
  return (networkResponse as INetworkResponseSuccess<T>)?.status === "success";
}

export function isNetworkResponseError(
  networkResponse?: unknown,
): networkResponse is INetworkResponseError {
  return (networkResponse as INetworkResponseError)?.status === "error";
}

export function isAlertResponse(data: unknown): data is { type: "alert"; alert: IAlert } {
  return !!data && typeof data === "object" && "type" in data && data.type === "alert";
}

export function isFormValidationErrorResponse(
  data: unknown,
): data is { type: "error"; error: IFormValidationError } {
  return !!data && typeof data === "object" && "type" in data && data.type === "error";
}
