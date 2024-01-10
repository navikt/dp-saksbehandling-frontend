import { createClient } from "@sanity/client";
import { sanityConfig } from "~/sanity/sanity.config";

export const sanityClient = createClient(sanityConfig);
