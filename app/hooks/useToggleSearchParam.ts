import { useSearchParams } from "react-router";

export function useToggleSearchParam() {
  const [searchParams, setSearchParams] = useSearchParams();

  function toggleSearchParam(key: string, value: string) {
    if (searchParams.getAll(key).includes(value)) {
      searchParams.delete(key, value);
    } else {
      searchParams.append(key, value);
    }
    setSearchParams(searchParams);
  }

  return { searchParams, setSearchParams, toggleSearchParam };
}
