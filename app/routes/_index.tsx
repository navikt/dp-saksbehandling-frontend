import { redirect } from "@remix-run/router";

export async function loader() {
  throw redirect("/saksbehandling");
}
