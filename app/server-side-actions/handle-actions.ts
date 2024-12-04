import { kvitterAvklaringAction } from "~/server-side-actions/kvitter-avklaring-action";
import { lagreOpplysning } from "~/server-side-actions/lagre-opplysning";
import { sokPerson } from "~/server-side-actions/sok-person";

export async function handleActions(request: Request) {
  const formData = await request.formData();
  const actionToRun = formData.get("_action") as string;

  switch (actionToRun) {
    case "sok-person":
      return await sokPerson(request, formData);

    case "lagre-opplysning":
      return await lagreOpplysning(request, formData);

    case "kvitter-avklaring":
      return await kvitterAvklaringAction(request, formData);
    default:
      return null;
  }
}
