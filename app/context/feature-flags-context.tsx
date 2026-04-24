import type { PropsWithChildren } from "react";
import { createContext } from "react";

interface FeatureFlagsContextType {
  featureFlags: {
    jul: boolean;
    halloween: boolean;
    valentines: boolean;
    hippHippHurra: boolean;
    paaske: boolean;
    orkestratorBarnOpplysninger: boolean;
    kanAlltidLeggeTilPeriode: boolean;
  };
}

export const FeatureFlagsContext = createContext<FeatureFlagsContextType | undefined>(undefined);

export function FeatureFlagsProvider({
  children,
  featureFlags,
}: PropsWithChildren<FeatureFlagsContextType>) {
  return (
    <FeatureFlagsContext.Provider value={{ featureFlags }}>{children}</FeatureFlagsContext.Provider>
  );
}
