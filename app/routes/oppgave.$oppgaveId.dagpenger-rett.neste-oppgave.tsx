import { BodyShort, Button, Heading } from "@navikt/ds-react";
import {
  ActionFunctionArgs,
  data,
  Form,
  LoaderFunctionArgs,
  useLoaderData,
  useNavigation,
  useRouteError,
} from "react-router";
import invariant from "tiny-invariant";

import { AktivOppgaveSøk } from "~/components/aktivt-oppgave-søk-tags/AktivtOppgaveSøkTags";
import { ErrorMessageComponent } from "~/components/error-boundary/RootErrorBoundaryView";
import { RemixLink } from "~/components/RemixLink";
import { useSaksbehandler } from "~/hooks/useSaksbehandler";
import { hentOppgave } from "~/models/saksbehandling.server";
import { handleActions } from "~/server-side-actions/handle-actions";
import { commitSession, getSession } from "~/sessions";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");
  const oppgave = await hentOppgave(request, params.oppgaveId);
  const session = await getSession(request.headers.get("Cookie"));
  const alert = session.get("alert");

  return data(
    { oppgave, alert },
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    },
  );
}

export default function NesteOppgave() {
  const { state } = useNavigation();
  const { oppgave, alert } = useLoaderData<typeof loader>();
  const { aktivtOppgaveSok } = useSaksbehandler();

  return (
    <>
      <div className="card">
        <div className={"mx-auto flex max-w-[650px] flex-col items-center gap-8 py-16"}>
          <span className="text-5xl">🫡</span>
          <Heading size="xlarge">Ferdig!</Heading>
          <BodyShort>{alert?.title}</BodyShort>

          <Form method="post" className={"flex flex-col items-center"}>
            <input name="_action" value="hent-neste-oppgave" hidden={true} readOnly={true} />
            <input name="aktivtOppgaveSok" value={aktivtOppgaveSok} hidden={true} readOnly={true} />
            <Button variant="primary" loading={state !== "idle"} disabled={state !== "idle"}>
              Start neste oppgave
            </Button>
            <AktivOppgaveSøk aktivtOppgaveSok={aktivtOppgaveSok} />
          </Form>

          <div className="flex gap-6">
            <RemixLink asButtonVariant={"secondary"} to={`/?${aktivtOppgaveSok}`}>
              Gå til oppgaveliste
            </RemixLink>
            <RemixLink asButtonVariant="secondary" to={`/person/${oppgave.person.id}/oversikt`}>
              Gå til personoversikt
            </RemixLink>
          </div>
        </div>
      </div>
    </>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return <ErrorMessageComponent error={error} />;
}
