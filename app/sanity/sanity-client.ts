import { createClient } from "@sanity/client";

export const sanityConfig = {
  dataset: process.env.SANITY_DATASET || "development",
  projectId: process.env.SANITY_PROJECT_ID || "rt6o382n",
  useCdn: false,
  token: process.env.SANITY_ACCESS_TOKEN || "",
  apiVersion: "2022-03-07",
};
export const sanityClient = createClient(sanityConfig);
