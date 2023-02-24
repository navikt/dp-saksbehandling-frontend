import { json } from "@remix-run/node";

export async function loader() {
  return json("Alive", { status: 200 });
}
