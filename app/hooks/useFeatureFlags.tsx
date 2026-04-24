import { useContext } from "react";

import { FeatureFlagsContext } from "~/context/feature-flags-context";

export function useFeatureFlags() {
  const context = useContext(FeatureFlagsContext);
  if (!context) {
    throw new Error("useFeatureFlags must be used within an FeatureFlagsProvider");
  }
  return context;
}
