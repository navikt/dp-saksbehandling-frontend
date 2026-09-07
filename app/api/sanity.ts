import { ISanityBrevMal, ISanityRegelmotorOpplysning } from "~/sanity/sanity-types";

import { apiGet } from "./util";

export function fetchSanityBrevMaler() {
  return apiGet<ISanityBrevMal[]>("/api/sanity/brev-maler");
}

export function fetchSanityRegelmotorOpplysninger() {
  return apiGet<ISanityRegelmotorOpplysning[]>("/api/sanity/regelmotor-opplysninger");
}
