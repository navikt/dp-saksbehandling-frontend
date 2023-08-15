import { type LoaderArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { hentVedtak } from "~/models/vedtak.server";

export async function loader({ request, params }: LoaderArgs) {
  invariant(params.ident, "Fant ikke bruker");
  const response = await hentVedtak(params.ident, request);

  if (response.ok) {
    const data = await response.json();
    return json(data);
  } else {
    throw new Response(`Feil ved uthenting av vedtak`, {
      status: response.status,
      statusText: response.statusText,
    });
  }
}

export default function PersonOversiktBeslutningSide() {
  const vedtak = useLoaderData();

  console.log("Hva er vedtak?", vedtak);
  return <>Beslutning</>;
}
