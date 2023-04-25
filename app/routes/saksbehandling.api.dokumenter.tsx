import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { hentDokumenter } from "~/models/SAF.server";

export async function loader({ request }: LoaderArgs) {
  const test = await hentDokumenter(request);
  return json({ test });
}
