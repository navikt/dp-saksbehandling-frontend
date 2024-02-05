import type { INetworkResponse, INetworkResponseSuccess } from "~/utils/types";

export function isNetworkResponseSuccess<T>(
  networkresponse?: INetworkResponse<T | void>,
): networkresponse is INetworkResponseSuccess<T> {
  return (networkresponse as INetworkResponseSuccess<T>)?.status === "success";
}
