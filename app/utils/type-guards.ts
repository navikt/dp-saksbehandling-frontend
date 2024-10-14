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

export function isAlertResponse(data?: IAlert | IFormValidationError): data is IAlert {
  return typeof data === "object" && data !== null && "variant" in data && "title" in data;
}

export function isFormValidationErrorResponse(
  data?: IAlert | IFormValidationError,
): data is IFormValidationError {
  return typeof data === "object" && data !== null && "field" in data && "message" in data;
}
