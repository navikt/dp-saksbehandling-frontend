import type { ActionFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { avbrytBehandling } from "~/models/behandling.server";
import { commitSession, getSession } from "~/sessions";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const behandlingId = formData.get("behandlingId") as string;
  const personIdent = formData.get("personIdent") as string;

  const response = await avbrytBehandling(request, behandlingId, personIdent);
  const alertMessage = `Søknad er sendt til arena for videre behandling`;

  if (response.status === "success") {
    const session = await getSession(request.headers.get("Cookie"));
    session.flash("alert", { variant: "success", title: alertMessage });

    return redirect(`/`, {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  }

  return response;
}
