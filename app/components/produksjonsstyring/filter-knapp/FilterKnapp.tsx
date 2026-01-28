import { BodyShort, Button, Detail } from "@navikt/ds-react";

import { useToggleSearchParam } from "~/hooks/useToggleSearchParam";

export interface IEmneknagg {
  navn: string;
  kategori: string;
}

interface IProps {
  emneknagg: IEmneknagg;
  antallOppgaver: number;
}

export function FilterKnapp({ emneknagg, antallOppgaver }: IProps) {
  const { searchParams, toggleSearchParam } = useToggleSearchParam();

  return (
    <Button
      className={"h-[120px] w-[120px] text-left"}
      variant={
        searchParams.getAll(emneknagg.kategori).includes(emneknagg.navn) ? "primary" : "secondary"
      }
      onClick={() => {
        toggleSearchParam(emneknagg.kategori, emneknagg.navn);
      }}
    >
      <Detail>{emneknagg.navn.toLowerCase().replaceAll("_", " ")}</Detail>
      <BodyShort weight={"semibold"} className={"mt-2"}>
        {antallOppgaver}
      </BodyShort>
    </Button>
  );
}
