import type { SortState } from "@navikt/ds-react";
import { useState } from "react";

interface ISortState<T> extends SortState {
  orderBy: keyof T & string;
}

export function useTableSort<T>(data: T[], initialSortState?: ISortState<T>) {
  const [sortState, setSortState] = useState<ISortState<T> | undefined>(initialSortState);
  const sortedData = data.slice().sort((a, b) => {
    if (sortState) {
      return sortState.direction === "ascending"
        ? comparator(b, a, sortState.orderBy)
        : comparator(a, b, sortState.orderBy);
    }
    return 1;
  });

  function handleSort(sortKey: ISortState<T>["orderBy"]) {
    // Determine the current direction
    const isSameSortKey = sortState && sortKey === sortState.orderBy;
    const isDescending = isSameSortKey && sortState.direction === "descending";

    // If it's the same sort key and descending, reset the sort state
    if (isSameSortKey && isDescending) {
      setSortState(undefined);
    } else {
      // Otherwise, toggle between ascending and descending based on current direction
      const newDirection =
        isSameSortKey && sortState.direction === "ascending" ? "descending" : "ascending";

      setSortState({
        orderBy: sortKey,
        direction: newDirection,
      });
    }
  }

  function comparator(a: T, b: T, orderBy: keyof T) {
    const valueA = a[orderBy];
    const valueB = b[orderBy];

    if (valueA == undefined || valueB == undefined) {
      if (valueA == undefined && valueB == undefined) {
        return 0;
      }
      return valueA === undefined ? 1 : -1;
    }

    if (valueA < valueB) {
      return 1;
    }

    if (valueA > valueB) {
      return -1;
    }

    return 0;
  }

  return { sortedData, sortState, handleSort };
}
