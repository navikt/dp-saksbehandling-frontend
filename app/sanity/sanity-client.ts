import { createClient } from "@sanity/client";

export const sanityConfig = {
  dataset: process.env.SANITY_DATASET,
  projectId: process.env.SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_ACCESS_TOKEN,
  apiVersion: "2022-03-07",
};
export const sanityClient = createClient(sanityConfig);
