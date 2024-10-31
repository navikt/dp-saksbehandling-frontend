import type { ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { lagreNotat } from "~/models/oppgave.server";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const oppgaveId = formData.get("oppgave-id") as string;
  const notat = formData.get("notat") as string;

  if (notat == null) {
    throw new Error("Mangler notat");
  }

  if (!oppgaveId) {
    throw new Error("Mangler oppgaveId");
  }

  const response = await lagreNotat(request, oppgaveId, notat);

  return json(response);
}
