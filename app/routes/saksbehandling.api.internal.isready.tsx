import { json } from "@remix-run/node";

export async function loader() {
  return json("dp-saksbehandling is alive", { status: 200 });
}
