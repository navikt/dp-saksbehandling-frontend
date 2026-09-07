import { sanityClient } from "~/sanity/sanity.config";
import { regelmotorOpplysningQuery } from "~/sanity/sanity-queries";
import { ISanityRegelmotorOpplysning } from "~/sanity/sanity-types";

export async function loader() {
  const data = await sanityClient.fetch<ISanityRegelmotorOpplysning[]>(regelmotorOpplysningQuery);
  return Response.json(data);
}
