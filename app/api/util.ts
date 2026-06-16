export async function apiGet<T>(url: string, errorMessage?: string): Promise<T> {
  const res = await fetch(url, { credentials: "include" });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.error || errorMessage || `Failed: ${res.status}`);
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
    const error = await res.json().catch(() => ({}));
    throw new Error(error.error || errorMessage || `Failed: ${res.status}`);
  }

  return (await res.json()) as T;
}
