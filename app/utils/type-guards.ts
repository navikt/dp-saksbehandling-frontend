import { AlertProps } from "@navikt/ds-react";

import type { IFormValidationError } from "~/components/oppgave-handlinger/OppgaveHandlinger";
import type { IAlert } from "~/context/alert-context";
import { IKilde, IKildeSaksbehandler } from "~/models/behandling.server";
import { ILagreUtvidetBeskrivelseResponse } from "~/models/melding-om-vedtak.server";
import { ILagreNotatResponse } from "~/models/oppgave.server";
import type { INetworkResponseError, INetworkResponseSuccess } from "~/utils/types";

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

export function isAlert(data?: unknown): data is IAlert {
  if (typeof data !== "object" || data === null) {
    return false;
  }

  const maybeAlert = data as Partial<IAlert>;

  if (typeof maybeAlert.title !== "string") {
    return false;
  }

  const validVariants: AlertProps["variant"][] = ["error", "warning", "info", "success"];
  if (!maybeAlert.variant || !validVariants.includes(maybeAlert.variant)) {
    return false;
  }

  if (maybeAlert.body !== undefined && typeof maybeAlert.body !== "string") {
    return false;
  }

  return true;
}

export function isILagreNotatResponse(data: unknown): data is ILagreNotatResponse {
  if (typeof data !== "object" || data === null) {
    return false;
  }

  const maybeResponse = data as Partial<ILagreNotatResponse>;

  return typeof maybeResponse.sistEndretTidspunkt === "string";
}

export function isILagreUtvidetBeskrivelseResponse(
  data: unknown,
): data is ILagreUtvidetBeskrivelseResponse {
  if (typeof data !== "object" || data === null) {
    return false;
  }

  const maybeResponse = data as Partial<ILagreUtvidetBeskrivelseResponse>;

  return typeof maybeResponse.sistEndretTidspunkt === "string";
}

export function isFormValidationError(data: unknown): data is IFormValidationError {
  if (typeof data !== "object" || data === null) {
    return false;
  }

  const maybeError = data as Partial<IFormValidationError>;

  if (typeof maybeError.field !== "string") {
    return false;
  }

  return typeof maybeError.message === "string";
}

export function isSaksbehandlerKilde(kilde: IKilde | null): kilde is IKildeSaksbehandler {
  return (kilde as IKildeSaksbehandler).type === "Saksbehandler";
}
