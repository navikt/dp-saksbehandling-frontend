import { Button, Heading } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { ActionFunctionArgs, Form, useActionData } from "react-router";

import { LoadingLink } from "~/components/loading-link/LoadingLink";
import { NyGenerellOppgaveFelter } from "~/components/ny-generell-oppgave-felter/NyGenerellOppgaveFelter";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { handleActions } from "~/server-side-actions/handle-actions";
import { isAlert } from "~/utils/type-guards";
import {
  hentValideringForNyGenerellOppgaveSkjema,
  INyGenerellOppgave,
} from "~/utils/validering.util";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export default function NyGenerellOppgave() {
  const { personOversikt, alert } = useTypedRouteLoaderData("routes/person.$personUuid");
  const actionData = useActionData<typeof action>();
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);
  useHandleAlertMessages(alert);

  const generellOppgaveForm = useForm({
    schema: hentValideringForNyGenerellOppgaveSkjema(),
    method: "post",
    defaultValues: {
      _action: "opprett-generell-oppgave",
      personIdent: personOversikt.person.ident,
      nyOppgaveTittel: "",
      nyOppgaveBeskrivelse: "",
      nyOppgaveEmneknagg: "" as INyGenerellOppgave,
      nyOppgaveFrist: "",
      nyOppgaveTildelSammeSaksbehandler: false,
    },
  });

  return (
    <div className={"mx-auto flex"}>
      <div className={"card mt-2 p-12"}>
        <Heading size="small" spacing>
          Generell oppgave
        </Heading>

        <Form
          method="post"
          {...generellOppgaveForm.getFormProps()}
          className={"flex flex-col gap-4"}
        >
          <input
            hidden={true}
            readOnly={true}
            {...generellOppgaveForm
              .field("_action")
              .getInputProps({ value: "opprett-generell-oppgave" })}
          />
          <input
            hidden={true}
            readOnly={true}
            {...generellOppgaveForm.field("personIdent").getInputProps()}
          />

          <NyGenerellOppgaveFelter form={generellOppgaveForm} />

          <div className="flex justify-between">
            <LoadingLink
              to={`/person/${personOversikt.person.id}/oversikt`}
              asButtonVariant="secondary"
              buttonSize="small"
            >
              Avbryt
            </LoadingLink>

            <Button
              variant="primary"
              type="submit"
              size="small"
              loading={generellOppgaveForm.formState.isSubmitting}
            >
              Lag oppgave
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
