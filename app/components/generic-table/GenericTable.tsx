import { Detail, Table } from "@navikt/ds-react";
import type { ReactNode } from "react";
import { useSearchParams } from "react-router";

type NoInfer<T> = [T][T extends unknown ? 0 : never];

export interface TableColumn {
  header?: ReactNode;
  sortKey?: string;
}

export interface GenericTableProps<T, TColumnKey extends string = string> {
  columns: Record<TColumnKey, TableColumn>;
  data: readonly T[];
  getRowKey: (value: T) => string;
  children: (columnKey: TColumnKey, value: T) => ReactNode;
  defaultColumn: NoInfer<TColumnKey>;
  emptyMessage?: ReactNode;
}

export function GenericTable<T, TColumnKey extends string = string>({
  columns,
  data,
  getRowKey,
  children,
  defaultColumn,
  emptyMessage = "Ingen data",
}: GenericTableProps<T, TColumnKey>) {
  const [searchParams, setSearchParams] = useSearchParams();
  const columnEntries = Object.entries(columns) as [TColumnKey, TableColumn][];
  const defaultSortKey = columns[defaultColumn].sortKey;
  const orderBy = searchParams.get("sorteringsfelt") ?? defaultSortKey ?? defaultColumn;
  const direction = searchParams.get("sortering") === "ASC" ? "ascending" : "descending";

  function handleSortChange(sortKey: string) {
    const currentDirection = direction;
    const nextDirection =
      sortKey === orderBy && currentDirection === "ascending" ? "descending" : "ascending";
    const nextSearchParams = new URLSearchParams(searchParams);
    nextSearchParams.set("sorteringsfelt", sortKey);
    nextSearchParams.set("sortering", nextDirection === "ascending" ? "ASC" : "DESC");
    nextSearchParams.set("side", "1");
    setSearchParams(nextSearchParams);
  }

  return (
    <Table
      size="small"
      className="tabell--subtil"
      zebraStripes
      sort={{ orderBy, direction }}
      onSortChange={handleSortChange}
    >
      <Table.Header>
        <Table.Row>
          {columnEntries.map(([columnKey, column]) => (
            <Table.ColumnHeader
              key={columnKey}
              scope="col"
              sortable={column.sortKey !== undefined}
              sortKey={column.sortKey}
            >
              <Detail>{column.header}</Detail>
            </Table.ColumnHeader>
          ))}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {data.length === 0 ? (
          <Table.Row shadeOnHover={false}>
            <Table.DataCell colSpan={columnEntries.length}>{emptyMessage}</Table.DataCell>
          </Table.Row>
        ) : (
          data.map((value) => (
            <Table.Row key={getRowKey(value)}>
              {columnEntries.map(([columnKey]) => (
                <Table.DataCell key={columnKey}>{children(columnKey, value)}</Table.DataCell>
              ))}
            </Table.Row>
          ))
        )}
      </Table.Body>
    </Table>
  );
}
