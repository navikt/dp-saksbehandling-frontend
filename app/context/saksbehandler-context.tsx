import type { PropsWithChildren } from "react";
import { createContext, useState } from "react";

interface ISaksbehandlerContext {
  aktivtOppgaveSok: string;
  setAktivtOppgaveSok: (sok: string) => void;
  skjulSensitiveOpplysninger: boolean;
  setSkjulSensitiveOpplysninger: (verdi: boolean) => void;
}

export const SaksbehandlerContext = createContext<ISaksbehandlerContext | undefined>(undefined);

export function SaksbehandlerProvider(props: PropsWithChildren<{ aktivtSok: string }>) {
  const [aktivtOppgaveSok, setAktivtOppgaveSok] = useState<string>(props.aktivtSok);
  const [skjulSensitiveOpplysninger, setSkjulSensitiveOpplysninger] = useState<boolean>(false);

  return (
    <SaksbehandlerContext.Provider
      value={{
        aktivtOppgaveSok,
        setAktivtOppgaveSok,
        skjulSensitiveOpplysninger,
        setSkjulSensitiveOpplysninger,
      }}
    >
      {props.children}
    </SaksbehandlerContext.Provider>
  );
}
