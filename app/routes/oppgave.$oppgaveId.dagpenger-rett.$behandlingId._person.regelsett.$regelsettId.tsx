import { type LoaderFunctionArgs, Outlet, redirect } from "react-router";
import invariant from "tiny-invariant";

import { hentBehandling } from "~/models/behandling.server";

// Denne er kun for å redirecte til første opplysning i regelsettet. Avklaringer har kun id til hvilket regelsett den gjelder, men vi viser aldri kun regelsett uten opplysning. Vi må derfor redirecte
export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");
  invariant(params.behandlingId, "params.behandlingId er påkrevd");
  invariant(params.regelsettId, "params.regelsettId er påkrevd");

  // Hvis det er opplysningId i params så trenger vi ikke redirecte
  if (params.opplysningId) {
    return null;
  }

  const behandling = await hentBehandling(request, params.behandlingId);
  const regelsett = [...behandling.vilkår, ...behandling.fastsettelser].find(
    (sett) => sett.id === params.regelsettId,
  );

  if (!regelsett) {
    throw new Response(`Finner ikke regelsett med navn ${params.regelsettNavn}`, { status: 404 });
  }

  const førsteOpplysning = behandling.opplysninger
    .filter(
      (opplysning) =>
        opplysning.synlig && regelsett.opplysninger.includes(opplysning.opplysningTypeId),
    )
    .reverse()[0];

  if (!førsteOpplysning) {
    throw new Response(`Finner ikke opplysning med id ${params.opplysningId}`, { status: 404 });
  }

  return redirect(
    `/oppgave/${params.oppgaveId}/dagpenger-rett/${params.behandlingId}/regelsett/${params.regelsettId}/opplysning/${førsteOpplysning.opplysningTypeId}`,
  );
}

export default function Regelsett() {
  return <Outlet />;
}
