import { redirect } from "@remix-run/node";

// Hent hentPersonArbeidssokerStatus her???????

export async function loader() {
  return redirect("rapportering-og-utbetaling");
}
