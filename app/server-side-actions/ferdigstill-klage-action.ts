import { redirect } from "react-router";
import invariant from "tiny-invariant";

import { IAlert } from "~/context/alert-context";
import { ferdigstillKlage } from "~/models/saksbehandling.server";
import { commitSession, getSession } from "~/sessions";
import { getHttpProblemAlert } from "~/utils/error-response.utils";

export async function ferdigstillKlageAction(request: Request, formData: FormData) {
  const behandlingId = formData.get("behandlingId") as string;
  const aktivtOppgaveSok = formData.get("aktivtOppgaveSok") as string;
  invariant(behandlingId, "behandlingId er påkrevd");

  const { error } = await ferdigstillKlage(request, behandlingId);

  if (error) {
    return getHttpProblemAlert(error);
  }

  const successAlert: IAlert = {
    variant: "success",
    title: "klage ferdigstilt ✅",
  };

  const session = await getSession(request.headers.get("Cookie"));
  session.flash("alert", successAlert);

  return redirect(`/?${aktivtOppgaveSok}`, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}
