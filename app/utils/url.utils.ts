export function appendSearchParamIfNotExists(
  params: URLSearchParams,
  key: string,
  value: string,
): boolean {
  if (!params.has(key) || !params.getAll(key).includes(value)) {
    params.append(key, value);
    return true;
  }
  return false;
}
