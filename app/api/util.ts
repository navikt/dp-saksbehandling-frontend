type HttpProblem = {
  status?: number;
  title?: string;
  detail?: string;
  instance?: string;
};

type ApiErrorResponse = {
  error?: string | HttpProblem;
};

export class ApiError extends Error {
  constructor(
    message: string,
    readonly status: number,
    readonly title?: string,
    readonly detail?: string,
    readonly service?: string,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

function createApiError(parsedError: ApiErrorResponse, status: number, fallbackMessage?: string) {
  if (typeof parsedError.error === "string") {
    return new ApiError(parsedError.error, status);
  }

  const problem = parsedError.error;
  const message = problem?.detail || problem?.title || fallbackMessage || `Failed: ${status}`;

  return new ApiError(
    message,
    problem?.status || status,
    problem?.title,
    problem?.detail,
    problem?.instance,
  );
}

export async function apiGet<T>(url: string, errorMessage?: string): Promise<T> {
  const res = await fetch(url, { credentials: "include" });

  if (!res.ok) {
    const error = (await res.json().catch(() => ({}))) as ApiErrorResponse;
    throw createApiError(error, res.status, errorMessage);
  }

  return (await res.json()) as T;
}

export async function apiPost<T>(url: string, payload: unknown, errorMessage?: string): Promise<T> {
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(payload),
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    const error = (await res.json().catch(() => ({}))) as ApiErrorResponse;
    throw createApiError(error, res.status, errorMessage);
  }

  return (await res.json()) as T;
}

export async function apiPut<T>(url: string, payload: unknown, errorMessage?: string): Promise<T> {
  const res = await fetch(url, {
    method: "PUT",
    body: JSON.stringify(payload),
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    const error = (await res.json().catch(() => ({}))) as ApiErrorResponse;
    throw createApiError(error, res.status, errorMessage);
  }

  return (await res.json()) as T;
}
