import { redirect } from "@remix-run/node";

export async function loader() {
  throw redirect("rapportering-og-utbetaling");
}
