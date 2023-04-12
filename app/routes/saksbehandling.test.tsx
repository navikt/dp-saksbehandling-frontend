import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";

export async function loader({ params }: LoaderArgs) {
  console.log("Kjører loader() i saksbehandling.test");
  return json({});
}

export default function Test() {
  return <div>Test Route</div>;
}
