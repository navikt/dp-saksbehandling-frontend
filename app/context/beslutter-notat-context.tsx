import type { PropsWithChildren } from "react";
import { createContext, useState } from "react";

import { components } from "../../openapi/saksbehandling-typer";

type IOppgaveNotat = components["schemas"]["Notat"];

interface IBeslutterNotatContextType {
  notat: IOppgaveNotat;
  setNotat: (notat: IOppgaveNotat) => void;
}

export const BeslutterNotatContext = createContext<IBeslutterNotatContextType | undefined>(
  undefined,
);

export function BeslutterNotatProvider(props: PropsWithChildren<{ notat?: IOppgaveNotat }>) {
  const [notat, setNotat] = useState<IOppgaveNotat>(
    props.notat || { tekst: "", sistEndretTidspunkt: "" },
  );

  return (
    <BeslutterNotatContext.Provider value={{ notat, setNotat }}>
      {props.children}
    </BeslutterNotatContext.Provider>
  );
}
