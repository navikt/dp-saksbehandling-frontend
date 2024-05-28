export type INetworkResponse<T = void> = INetworkResponseSuccess<T> | INetworkResponseError;

export type INetworkResponseSuccess<T> = T extends void
  ? { status: "success"; data?: T }
  : { status: "success"; data: T };

export interface INetworkResponseError {
  status: "error";
  error: IHttpProblem;
}

export interface IHttpProblem {
  type: string;
  title: string;
  status: number;
  detail: string;
  instance: string;
}
