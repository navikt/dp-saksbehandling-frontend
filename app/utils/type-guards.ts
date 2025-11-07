import { AlertProps } from "@navikt/ds-react";

import type { IFormValidationError } from "~/components/oppgave-handlinger/OppgaveHandlinger";
import type { IAlert } from "~/context/alert-context";
import { ISAFGraphqlError, ISAFRequestError } from "~/models/saf.server";

import { components as behandlingComponents } from "../../openapi/behandling-typer";
import { components as meldingOmVedtakComponents } from "../../openapi/melding-om-vedtak-typer";
import { components as saksbehandlingComponents } from "../../openapi/saksbehandling-typer";

export function isOppgaveOversikt(
  oppgave:
    | saksbehandlingComponents["schemas"]["OppgaveOversikt"]
    | saksbehandlingComponents["schemas"]["Oppgave"],
): oppgave is saksbehandlingComponents["schemas"]["OppgaveOversikt"] {
  return "skjermesSomEgneAnsatte" in oppgave && "adressebeskyttelseGradering" in oppgave;
}

export function isAlert(data: unknown): data is IAlert {
  const ALERT_VARIANTS: AlertProps["variant"][] = ["success", "warning", "error", "info"];

  if (typeof data !== "object" || data === null) {
    return false;
  }

  const obj = data as Record<string, unknown>;

  if (!ALERT_VARIANTS.includes(obj.variant as AlertProps["variant"])) {
    return false;
  }

  if (typeof obj.title !== "string" || !obj.title) {
    return false;
  }

  if ("body" in obj && obj.body !== undefined && typeof obj.body !== "string") {
    return false;
  }

  if ("service" in obj && obj.service !== undefined && typeof obj.service !== "string") {
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

export function isDefined<T>(value: T | undefined | null): value is T {
  return value !== undefined && value !== null;
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
export function isGraphQLResponseError(value: unknown): value is {
  response: {
    status: number;
    headers: Headers;
  };
  request: {
    query: string;
    variables: Record<string, unknown>;
  };
} {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const obj = value as Record<string, unknown>;

  // Check response object
  if (typeof obj.response !== "object" || obj.response === null) {
    return false;
  }

  const response = obj.response as Record<string, unknown>;

  if (typeof response.status !== "number") {
    return false;
  }

  if (!(response.headers instanceof Headers)) {
    return false;
  }

  // Check request object
  if (typeof obj.request !== "object" || obj.request === null) {
    return false;
  }
  const request = obj.request as Record<string, unknown>;

  if (typeof request.query !== "string") {
    return false;
  }

  if (typeof request.variables !== "object" || request.variables === null) {
    return false;
  }

  return true;
}

export function isSAFRequestError(value: unknown): value is ISAFRequestError {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const obj = value as Record<string, unknown>;

  if (typeof obj.timestamp !== "string") {
    return false;
  }

  if (typeof obj.status !== "number") {
    return false;
  }

  if (typeof obj.error !== "string") {
    return false;
  }

  if (typeof obj.message !== "string") {
    return false;
  }

  return typeof obj.path === "string";
}

export function isSAFGraphqlError(value: unknown): value is ISAFGraphqlError {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const obj = value as Record<string, unknown>;

  if (!Array.isArray(obj.errors) || obj.errors.length === 0) {
    return false;
  }

  const firstError = obj.errors[0];

  if (typeof firstError !== "object" || firstError === null) {
    return false;
  }

  const error = firstError as Record<string, unknown>;

  if (typeof error.message !== "string") {
    return false;
  }

  if (typeof error.extensions !== "object" || error.extensions === null) {
    return false;
  }

  const extensions = error.extensions as Record<string, unknown>;

  const validCodes = ["bad_request", "forbidden", "not_found", "server_error"];
  if (!validCodes.includes(extensions.code as string)) {
    return false;
  }

  return typeof extensions.classification === "string";
}

export function isDatoVerdi(
  verdi: behandlingComponents["schemas"]["Opplysningsverdi"],
): verdi is behandlingComponents["schemas"]["DatoVerdi"] {
  return verdi.datatype === "dato";
}

export function isTekstVerdi(
  verdi: behandlingComponents["schemas"]["Opplysningsverdi"],
): verdi is behandlingComponents["schemas"]["TekstVerdi"] {
  return verdi.datatype === "tekst" || verdi.datatype === "inntekt";
}

export function isHeltallVerdi(
  verdi: behandlingComponents["schemas"]["Opplysningsverdi"],
): verdi is behandlingComponents["schemas"]["HeltallVerdi"] {
  return verdi.datatype === "heltall";
}

export function isDesimaltallVerdi(
  verdi: behandlingComponents["schemas"]["Opplysningsverdi"],
): verdi is behandlingComponents["schemas"]["DesimaltallVerdi"] {
  return verdi.datatype === "desimaltall";
}

export function isPengeVerdi(
  verdi: behandlingComponents["schemas"]["Opplysningsverdi"],
): verdi is behandlingComponents["schemas"]["PengeVerdi"] {
  return verdi.datatype === "penger";
}

export function isUlidVerdi(
  verdi: behandlingComponents["schemas"]["Opplysningsverdi"],
): verdi is behandlingComponents["schemas"]["UlidVerdi"] {
  return verdi.datatype === "ulid";
}

export function isBoolskVerdi(
  verdi: behandlingComponents["schemas"]["Opplysningsverdi"],
): verdi is behandlingComponents["schemas"]["BoolskVerdi"] {
  return verdi.datatype === "boolsk";
}

export function isPeriodeVerdi(
  verdi: behandlingComponents["schemas"]["Opplysningsverdi"],
): verdi is behandlingComponents["schemas"]["PeriodeVerdi"] {
  return verdi.datatype === "periode";
}

export function isBarneliste(
  verdi: behandlingComponents["schemas"]["Opplysningsverdi"],
): verdi is behandlingComponents["schemas"]["Barneliste"] {
  return verdi.datatype === "barn";
}
