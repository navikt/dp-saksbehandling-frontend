import { LoaderFunctionArgs, redirect } from "react-router";

export function loader({ params }: LoaderFunctionArgs) {
  return redirect(`/oppgave/${params.oppgaveId}/dagpenger-rett/${params.behandlingId}/vilkar`);
}
