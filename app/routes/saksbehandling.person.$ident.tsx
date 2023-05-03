import { json, type LoaderArgs } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { Brodsmuler } from "~/components/brodsmuler/Brodsmuler";
import { mockHentPerson } from "~/models/person.server";
import { hentDokumentOversiktMetadata } from "~/models/SAF.server";
import { getEnv } from "~/utils/env.utils";

export const shouldRevalidate = () => false;

export async function loader({ params, request }: LoaderArgs) {
  invariant(params.ident, `params.ident er påkrevd`);
  const person = await mockHentPerson(params.ident);

  let dokumentOversiktMetadata: any[] = [];

  if (getEnv("IS_LOCALHOST") !== "true") {
    dokumentOversiktMetadata = await hentDokumentOversiktMetadata(request, params.ident);
  }

  return json({ person, dokumentOversiktMetadata });
}

export default function Person() {
  const { person } = useLoaderData<typeof loader>();

  return (
    <>
      <Brodsmuler person={person} />
      <main>
        <Outlet />
      </main>
    </>
  );
}
