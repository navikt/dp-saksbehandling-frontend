import { createClient } from "@sanity/client";

export const sanityConfig = {
  dataset: process.env.SANITY_DATASET || "development",
  projectId: process.env.SANITY_PROJECT_ID || "rt6o382n",
  token: process.env.SANITY_ACCESS_TOKEN || "",
  useCdn: process.env.NODE_ENV === "production",
  apiVersion: "2024-06-20",
};
export const sanityClient = createClient(sanityConfig);
