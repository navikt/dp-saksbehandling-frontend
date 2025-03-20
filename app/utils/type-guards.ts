import { AlertProps } from "@navikt/ds-react";

import type { IFormValidationError } from "~/components/oppgave-handlinger/OppgaveHandlinger";
import type { IAlert } from "~/context/alert-context";
import type { INetworkResponseError, INetworkResponseSuccess } from "~/utils/types";

import { components as meldingOmVedtakComponents } from "../../openapi/melding-om-vedtak-typer";
import { components as saksbehandlingComponents } from "../../openapi/saksbehandling-typer";

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

export function isILagreNotatResponse(
  data: unknown,
): data is saksbehandlingComponents["schemas"]["LagreNotatResponse"] {
  if (typeof data !== "object" || data === null) {
    return false;
  }

  const maybeResponse = data as Partial<saksbehandlingComponents["schemas"]["LagreNotatResponse"]>;

  return typeof maybeResponse.sistEndretTidspunkt === "string";
}

export function isILagreUtvidetBeskrivelseResponse(
  data: unknown,
): data is meldingOmVedtakComponents["schemas"]["UtvidetBeskrivelseSistEndretTidspunkt"] {
  if (typeof data !== "object" || data === null) {
    return false;
  }

  const maybeResponse = data as Partial<
    meldingOmVedtakComponents["schemas"]["UtvidetBeskrivelseSistEndretTidspunkt"]
  >;

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

export function isIMeldingOmVedtak(
  data: unknown,
): data is meldingOmVedtakComponents["schemas"]["MeldingOmVedtakResponse"] {
  if (typeof data !== "object" || data === null) {
    return false;
  }

  const maybeMeldingOmVedtak = data as Partial<
    meldingOmVedtakComponents["schemas"]["MeldingOmVedtakResponse"]
  >;

  const hasValidHtml = typeof maybeMeldingOmVedtak.html === "string";
  const hasValidUtvidedeBeskrivelser = Array.isArray(maybeMeldingOmVedtak.utvidedeBeskrivelser);

  return hasValidHtml && hasValidUtvidedeBeskrivelser;
}

/**
 * Represents a primitive value type that can be parsed from a URL parameter
 */
type PrimitiveValue = string | number | boolean;

/**
 * Represents possible parsed values from URL parameters
 */
type ParsedValue = PrimitiveValue | PrimitiveValue[];

/**
 * Converts URLSearchParams to a typed query object based on OpenAPI path schema
 * @param searchParams - The URLSearchParams object or URLSearchParams-like object to parse
 * @returns A typed query object with correctly parsed values
 */
export function parseSearchParamsToOpenApiQuery<T extends Record<string, unknown> | undefined>(
  searchParams: URLSearchParams | Record<string, string> | string,
): T {
  // Ensure we're working with a proper URLSearchParams object
  const params = ensureURLSearchParams(searchParams);
  const result: Record<string, ParsedValue> = {};

  // Use forEach which is more reliably available than entries()
  params.forEach((value, key) => {
    // Skip empty values
    if (value === "") return;

    // Check if the key already exists in the result (for array parameters)
    if (key in result) {
      // If the existing value is already an array, push to it
      if (Array.isArray(result[key])) {
        (result[key] as PrimitiveValue[]).push(parseValue(value));
      } else {
        // Convert existing value to an array and add the new value
        result[key] = [result[key] as PrimitiveValue, parseValue(value)];
      }
    } else {
      // Get all values for this key to check if it should be an array
      const allValues = params.getAll(key);

      if (allValues.length > 1) {
        // If multiple values exist, create an array
        result[key] = allValues.map(parseValue);
      } else {
        // Otherwise, set as a single value
        result[key] = parseValue(value);
      }
    }
  });

  return result as T;
}

/**
 * Helper function to ensure we're working with a URLSearchParams object
 * @param input - The input to convert to URLSearchParams
 * @returns A URLSearchParams object
 */
function ensureURLSearchParams(
  input: URLSearchParams | Record<string, string> | string,
): URLSearchParams {
  if (input instanceof URLSearchParams) {
    return input;
  }

  if (typeof input === "string") {
    return new URLSearchParams(input);
  }

  // Handle plain objects by creating a new URLSearchParams
  if (typeof input === "object") {
    const params = new URLSearchParams();
    Object.entries(input).forEach(([key, value]) => {
      params.append(key, value);
    });
    return params;
  }

  // Default fallback
  return new URLSearchParams();
}

/**
 * Helper function to parse string values to appropriate types
 * @param value - The string value to parse
 * @returns The parsed value with the correct type
 */
function parseValue(value: string): PrimitiveValue {
  // Parse boolean values
  if (value.toLowerCase() === "true") return true;
  if (value.toLowerCase() === "false") return false;

  // Parse numeric values
  if (!isNaN(Number(value)) && value.trim() !== "") {
    return Number(value);
  }

  // Keep strings as is
  return value;
}
