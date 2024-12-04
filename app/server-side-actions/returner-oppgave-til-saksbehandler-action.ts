import { json, redirect } from "@remix-run/node";
import type { ActionFunctionArgs } from "@remix-run/server-runtime/dist/routeModules";
import invariant from "tiny-invariant";

import type { IFormValidationError } from "~/components/oppgave-handlinger/OppgaveHandlinger";
import { returnerOppgaveTilSaksbehandler } from "~/models/oppgave.server";
import { commitSession, getSession } from "~/sessions";
import { getAlertMessage } from "~/utils/alert-message.utils";
import { logger } from "~/utils/logger.utils";

export async function returnerOppgaveTilSaksbehandlerAction(
  request: Request,
  params: ActionFunctionArgs["params"],
  formData: FormData,
) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");
  const notat = formData.get("notat") as string;

  if (!notat) {
    const error: IFormValidationError = {
      field: "notat",
      message: "Du må skrive en begrunnelse for å returnere oppgaven til saksbehandler.",
    };

    return json(error);
  }

  const response = await returnerOppgaveTilSaksbehandler(request, params.oppgaveId);
  const session = await getSession(request.headers.get("Cookie"));
  session.flash(
    "alert",
    getAlertMessage({ name: "returner-til-saksbehandler", httpCode: response.status }),
  );

  if (!response.ok) {
    logger.warn(`${response.status} - Feil ved kall til ${response.url}`);

    return redirect(`/oppgave/${params.oppgaveId}/behandle`, {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  }

  return redirect(`../../behandle/neste-oppgave`, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}
