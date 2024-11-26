import type { PropsWithChildren } from "react";
import { createContext, useState } from "react";

import type { IOppgaveNotat } from "~/models/oppgave.server";

interface IBeslutterNotatContextType {
  notat: IOppgaveNotat;
  setNotat: (notat: IOppgaveNotat) => void;
}

export const BeslutterNotatContext = createContext<IBeslutterNotatContextType | undefined>(
  undefined,
);

export function BeslutterNotatProvider(props: PropsWithChildren<{ notat?: IOppgaveNotat }>) {
  const [notat, setNotat] = useState<IOppgaveNotat>(props.notat || { tekst: "" });

  return (
    <BeslutterNotatContext.Provider value={{ notat, setNotat }}>
      {props.children}
    </BeslutterNotatContext.Provider>
  );
}
