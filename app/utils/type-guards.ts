import type { TOppgaveTilstand } from "~/models/oppgave.server";
import type {
  INetworkResponse,
  INetworkResponseLoading,
  INetworkResponseSuccess,
} from "~/utils/types";

export function erGyldigTilstand(tilstand: string): tilstand is TOppgaveTilstand {
  return ["TilBehandling", "VentPåMangelbrev", "Vedtak", "Innstilt"].includes(
    tilstand as TOppgaveTilstand,
  );
}

export function isNetworkResponseSuccess<T>(
  networkresponse?: INetworkResponse<T | void>,
): networkresponse is INetworkResponseSuccess<T> {
  return (networkresponse as INetworkResponseSuccess<T>)?.status === "success";
}

export function isNetworkResponseWaiting<T>(
  networkresponse?: INetworkResponse<T | void>,
): networkresponse is INetworkResponseLoading {
  return (networkresponse as INetworkResponseLoading)?.status === "waiting";
}
