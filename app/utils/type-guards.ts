import type { INetworkResponseError, INetworkResponseSuccess } from "~/utils/types";
import type { IAlert, IAlertHTTPProblem, IAlertMessage } from "~/context/alert-context";

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

export function isAlertHTTPProblem(alert: IAlert): alert is IAlertHTTPProblem {
  return (alert as IAlertHTTPProblem)?.problem !== undefined;
}

export function isAlertMessage(alert: IAlert): alert is IAlertMessage {
  return (alert as IAlertMessage)?.title !== undefined;
}
