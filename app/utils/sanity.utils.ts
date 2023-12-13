import { createClient } from "@sanity/client";
import { sanityConfig } from "~/sanity/sanity.config";

export const sanityClient = createClient(sanityConfig);

// export function setupSanity() {
//   sanityClient = createClient(sanityConfig);
// }
