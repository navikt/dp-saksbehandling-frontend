import { Button, Heading } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { ActionFunctionArgs, Form, useActionData } from "react-router";

import { LoadingLink } from "~/components/loading-link/LoadingLink";
import { NyOppfolgingFelter } from "~/components/ny-oppfolging-felter/NyOppfolgingFelter";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { handleActions } from "~/server-side-actions/handle-actions";
import { isAlert } from "~/utils/type-guards";
import { hentValideringForNyOppfolgingSkjema, INyOppfolging } from "~/utils/validering.util";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export default function NyOppfolging() {
  const { personOversikt, alert } = useTypedRouteLoaderData("routes/person.$personUuid");
  const actionData = useActionData<typeof action>();
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);
  useHandleAlertMessages(alert);

  const oppfolgingForm = useForm({
    schema: hentValideringForNyOppfolgingSkjema(),
    method: "post",
    defaultValues: {
      _action: "opprett-oppfolging",
      personIdent: personOversikt.person.ident,
      nyOppgaveTittel: "",
      nyOppgaveBeskrivelse: "",
      nyOppgaveEmneknagg: "" as INyOppfolging,
      nyOppgaveFrist: "",
      nyOppgaveTildelSammeSaksbehandler: false,
    },
  });

  return (
    <div className={"mx-auto flex"}>
      <div className={"card mt-2 p-12"}>
        <Heading size="small" spacing>
          Oppfølging
        </Heading>

        <Form method="post" {...oppfolgingForm.getFormProps()} className={"flex flex-col gap-4"}>
          <input
            hidden={true}
            readOnly={true}
            {...oppfolgingForm.field("_action").getInputProps({ value: "opprett-oppfolging" })}
          />
          <input
            hidden={true}
            readOnly={true}
            {...oppfolgingForm.field("personIdent").getInputProps()}
          />

          <NyOppfolgingFelter form={oppfolgingForm} />

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
              loading={oppfolgingForm.formState.isSubmitting}
            >
              Lag oppgave
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
