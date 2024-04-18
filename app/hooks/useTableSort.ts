import { useState } from "react";
import type { SortState } from "@navikt/ds-react";

export function useTableSort<T>(data: T[]) {
  const [sortState, setSortState] = useState<SortState | undefined>();
  const sortedData = data.slice().sort((a, b) => {
    if (sortState) {
      return sortState.direction === "ascending"
        ? comparator(b, a, sortState.orderBy)
        : comparator(a, b, sortState.orderBy);
    }
    return 1;
  });

  function handleSort(sortKey: string) {
    setSortState(
      sortState && sortKey === sortState.orderBy && sortState.direction === "descending"
        ? undefined
        : {
            orderBy: sortKey,
            direction:
              sortState && sortKey === sortState.orderBy && sortState.direction === "ascending"
                ? "descending"
                : "ascending",
          },
    );
  }

  function comparator(a: any, b: any, orderBy: string) {
    if (b[orderBy] < a[orderBy] || b[orderBy] === undefined) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  return { sortedData, sortState, handleSort };
}
