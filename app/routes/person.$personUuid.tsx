import {
  ActionFunctionArgs,
  data,
  LoaderFunctionArgs,
  Outlet,
  useActionData,
  useLoaderData,
} from "react-router";
import invariant from "tiny-invariant";

import { PersonBoks } from "~/components/person-boks/PersonBoks";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { hentOppgaverForPerson, hentPerson } from "~/models/saksbehandling.server";
import { handleActions } from "~/server-side-actions/handle-actions";
import { commitSession, getSession } from "~/sessions";
import { isAlert } from "~/utils/type-guards";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.personUuid, "params.peronUuid er påkrevd");

  const person = await hentPerson(request, params.personUuid);
  const oppgaverForPersonPromise = hentOppgaverForPerson(request, person.ident);

  const session = await getSession(request.headers.get("Cookie"));
  const alert = session.get("alert");

  return data(
    {
      alert,
      person,
      oppgaverForPersonPromise,
    },
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    },
  );
}

export default function Person() {
  const { person, alert } = useLoaderData<typeof loader>();

  const actionData = useActionData<typeof action>();
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);
  useHandleAlertMessages(alert);

  return (
    <>
      <PersonBoks person={person} />
      <Outlet />
    </>
  );
}
