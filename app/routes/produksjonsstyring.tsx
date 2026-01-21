import { Heading } from "@navikt/ds-react";
import {
  type ActionFunctionArgs,
  data,
  LoaderFunctionArgs,
  redirect,
  useActionData,
  useLoaderData,
} from "react-router";

import { OppgaveStatusVelger } from "~/components/produksjonsstyring/oppgave-status-velger/OppgaveStatusVelger";
import { PeriodeVelger } from "~/components/produksjonsstyring/periode-velger/PeriodeVelger";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { hentOppgaver } from "~/models/saksbehandling.server";
import { handleActions } from "~/server-side-actions/handle-actions";
import { commitSession, getSession } from "~/sessions";
import { isAlert } from "~/utils/type-guards";
import { appendSearchParamIfNotExists } from "~/utils/url.utils";

export const produksjonsstyringDefaultParams = [
  { key: "side", value: "1" },
  { key: "antallOppgaver", value: "99999" },
];

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);

  if (!url.search) {
    let appended = false;
    for (const { key, value } of produksjonsstyringDefaultParams) {
      appended = appendSearchParamIfNotExists(url.searchParams, key, value) || appended;
    }

    if (appended) {
      return redirect(url.toString());
    }
  }

  const [oppgaverResponse] = await Promise.all([hentOppgaver(request, url.searchParams)]);

  const session = await getSession(request.headers.get("Cookie"));
  const alert = session.get("alert");

  return data(
    {
      alert,
      oppgaver: oppgaverResponse.oppgaver,
    },
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    },
  );
}

export default function Produksjonsstyring() {
  const actionData = useActionData<typeof action>();
  const { alert } = useLoaderData<typeof loader>();
  useHandleAlertMessages(alert);
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

  return (
    <main className={"m-4 flex flex-col gap-2"}>
      <div className={"card flex' flex-col gap-4 p-4"}>
        <Heading level={"1"} size={"medium"}>
          Statistikk
        </Heading>

        <PeriodeVelger />
        <OppgaveStatusVelger />
      </div>
    </main>
  );
}
