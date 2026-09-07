import { useQuery } from "@tanstack/react-query";

import { fetchSanityBrevMaler, fetchSanityRegelmotorOpplysninger } from "./sanity";

// Sanity-innhold endres sjelden, så vi kan cache det lenge på tvers av navigering
const SANITY_STALE_TIME = 5 * 60 * 1000;

export function useSanityBrevMalerQuery() {
  const { data } = useQuery({
    queryKey: ["sanity", "brev-maler"],
    queryFn: fetchSanityBrevMaler,
    staleTime: SANITY_STALE_TIME,
  });

  return data ?? [];
}

export function useSanityRegelmotorOpplysningerQuery() {
  const { data } = useQuery({
    queryKey: ["sanity", "regelmotor-opplysninger"],
    queryFn: fetchSanityRegelmotorOpplysninger,
    staleTime: SANITY_STALE_TIME,
  });

  return data ?? [];
}
