import type { PropsWithChildren } from "react";
import { createContext, useState } from "react";

interface ISaksbehandlerContext {
  aktivtOppgaveSok: string;
  setAktivtOppgaveSok: (sok: string) => void;
  skjulSensitiveOpplysninger: boolean;
  setSkjulSensitiveOpplysninger: (verdi: boolean) => void;
  periodisertBehandlingsView: boolean;
  setPeriodisertBehandlingsView: (verdi: boolean) => void;
}

export const SaksbehandlerContext = createContext<ISaksbehandlerContext | undefined>(undefined);

export function SaksbehandlerProvider({ children }: PropsWithChildren) {
  const [aktivtOppgaveSok, setAktivtOppgaveSok] = useState<string>("");
  const [skjulSensitiveOpplysninger, setSkjulSensitiveOpplysninger] = useState<boolean>(false);
  const [periodisertBehandlingsView, setPeriodisertBehandlingsView] = useState<boolean>(false);

  return (
    <SaksbehandlerContext.Provider
      value={{
        aktivtOppgaveSok,
        setAktivtOppgaveSok,
        skjulSensitiveOpplysninger,
        setSkjulSensitiveOpplysninger,
        periodisertBehandlingsView,
        setPeriodisertBehandlingsView,
      }}
    >
      {children}
    </SaksbehandlerContext.Provider>
  );
}
