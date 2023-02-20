import { LoaderArgs } from "@remix-run/node";

export async function loader({ request }: LoaderArgs) {
  return new Response("", {
    status: 200,
  });
}