import { IAlert } from "~/context/alert-context";
import { opprettManuellBehandling } from "~/models/behandling.server";
import { getHttpProblemAlert } from "~/utils/error-response.utils";

export async function opprettManuellBehandlingAction(request: Request, formData: FormData) {
  const personIdent = formData.get("personIdent") as string;

  const { data, error } = await opprettManuellBehandling(request, personIdent);

  if (data) {
    const successAlert: IAlert = {
      variant: "success",
      title: `Behandling med id ${data.behandlingId} opprettet`,
    };

    return successAlert;
  }

  if (error) {
    return getHttpProblemAlert(error);
  }

  throw new Error(`Uhåndtert feil i opprettManuellBehandlingAction()`);
}
