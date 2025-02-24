import { ActionFunctionArgs } from "@remix-run/node";

import { hentMeldingOmVedtak } from "~/models/melding-om-vedtak.server";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const behandlingId = formData.get("behandlingId") as string;
  const fornavn = formData.get("fornavn") as string;
  const mellomnavn = formData.get("mellomnavn") as string;
  const etternavn = formData.get("etternavn") as string;
  const fodselsnummer = formData.get("fodselsnummer") as string;
  const saksbehandler = formData.get("saksbehandler") as string;
  const beslutter = formData.get("beslutter") as string;

  return await hentMeldingOmVedtak(request, behandlingId, {
    fornavn,
    mellomnavn,
    etternavn,
    fodselsnummer,
    saksbehandler: saksbehandler ? JSON.parse(saksbehandler) : undefined,
    beslutter: beslutter ? JSON.parse(beslutter) : undefined,
  });
}
