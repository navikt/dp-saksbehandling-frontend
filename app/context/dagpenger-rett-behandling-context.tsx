import { createContext, PropsWithChildren, useState } from "react";

interface IDagpengerRettBehandlingContext {
  aktivOpplysningsgruppeId: string | undefined;
  setAktivOpplysningsgruppeId: (id?: string) => void;
}

export const DagpengerRettBehandlingContext = createContext<
  IDagpengerRettBehandlingContext | undefined
>(undefined);

export function DagpengerRettBehandlingProvider(props: PropsWithChildren) {
  const [aktivOpplysningsgruppeId, setAktivOpplysningsgruppeId] = useState<string | undefined>();

  return (
    <DagpengerRettBehandlingContext.Provider
      value={{
        aktivOpplysningsgruppeId,
        setAktivOpplysningsgruppeId,
      }}
    >
      {props.children}
    </DagpengerRettBehandlingContext.Provider>
  );
}
