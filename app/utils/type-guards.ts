import type {
  INetworkResponse,
  INetworkResponseError,
  INetworkResponseSuccess,
} from "~/utils/types";

export function isNetworkResponseSuccess<T>(
  networkresponse?: INetworkResponse<T | void>,
): networkresponse is INetworkResponseSuccess<T> {
  return (networkresponse as INetworkResponseSuccess<T>)?.status === "success";
}

export function isNetworkResponseError(
  networkresponse?: any,
): networkresponse is INetworkResponseError {
  return (networkresponse as INetworkResponseError)?.status === "error";
}
