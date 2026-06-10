import type { PropsWithChildren } from "react";
import { createContext, useMemo, useState } from "react";

import { components } from "../../openapi/saksbehandling-typer";

type IOppgaveNotat = components["schemas"]["Notat"];

interface IBeslutterNotatContextType {
  notatTekst: string;
  sistEndretTidspunkt: string;
  setNotat: (notat: IOppgaveNotat) => void;
}

export const BeslutterNotatContext = createContext<IBeslutterNotatContextType | undefined>(
  undefined,
);

export function BeslutterNotatProvider(props: PropsWithChildren<{ notat?: IOppgaveNotat }>) {
  const [notat, setNotat] = useState<IOppgaveNotat>(
    props.notat || { tekst: "", sistEndretTidspunkt: "" },
  );

  const notatTekst = useMemo(() => notat.tekst, [notat.tekst]);

  return (
    <BeslutterNotatContext.Provider
      value={{ notatTekst, sistEndretTidspunkt: notat.sistEndretTidspunkt, setNotat }}
    >
      {props.children}
    </BeslutterNotatContext.Provider>
  );
}
