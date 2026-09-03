import { sanityClient } from "~/sanity/sanity.config";
import { brevMalQuery } from "~/sanity/sanity-queries";
import { ISanityBrevMal } from "~/sanity/sanity-types";

export async function loader() {
  const data = await sanityClient.fetch<ISanityBrevMal[]>(brevMalQuery);
  return Response.json(data);
}
