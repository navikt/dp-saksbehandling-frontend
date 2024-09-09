import { createClient } from "@sanity/client";

export const sanityConfig = {
  dataset: process.env.SANITY_DATASET || "migrering-test",
  projectId: process.env.SANITY_PROJECT_ID || "rt6o382n",
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_ACCESS_TOKEN || "",
  apiVersion: "2024-06-20",
};
export const sanityClient = createClient(sanityConfig);
