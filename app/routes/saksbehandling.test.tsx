import { json } from "@remix-run/node";

export async function loader() {
  return json({});
}

export default function Test() {
  return <div>Test Route</div>;
}
