import type { PropsWithChildren } from "react";
import { createContext, useState } from "react";

interface ISaksbehandlerContext {
  aktivtOppgaveSok: string;
  setAktivtOppgaveSok: (sok: string) => void;
}

export const SaksbehandlerContext = createContext<ISaksbehandlerContext | undefined>(undefined);

export function SaksbehandlerProvider(props: PropsWithChildren<{ aktivtSok: string }>) {
  const [aktivtOppgaveSok, setAktivtOppgaveSok] = useState<string>("");

  return (
    <SaksbehandlerContext.Provider value={{ aktivtOppgaveSok, setAktivtOppgaveSok }}>
      {props.children}
    </SaksbehandlerContext.Provider>
  );
}
