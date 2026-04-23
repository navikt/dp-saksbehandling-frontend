import { Button, DatePicker, Heading, TextField, useDatepicker } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { ActionFunctionArgs, useActionData } from "react-router";

import { LoadingLink } from "~/components/loading-link/LoadingLink";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { handleActions } from "~/server-side-actions/handle-actions";
import { isAlert } from "~/utils/type-guards";
import { hentValideringForNyKlageSkjema } from "~/utils/validering.util";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export default function Oppgave() {
  const { personOversikt, alert } = useTypedRouteLoaderData("routes/person.$personUuid");
  const actionData = useActionData<typeof action>();
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);
  useHandleAlertMessages(alert);

  const { datepickerProps, inputProps } = useDatepicker({ toDate: new Date() });
  const klageForm = useForm({
    schema: hentValideringForNyKlageSkjema(),
    submitSource: "state",
    method: "post",
    defaultValues: {
      personIdent: personOversikt.person.ident,
      opprettetDato: "",
      journalpostId: "",
      sakId: "",
    },
  });

  return (
    <div className="mx-auto flex">
      <div className="card mt-2 min-w-sm p-12">
        <Heading size="small" spacing>
          Opprett ny klage
        </Heading>

        <div className={"flex flex-col gap-4"}>
          <DatePicker {...datepickerProps}>
            <DatePicker.Input
              {...inputProps}
              label="Klage mottatt"
              name={"opprettetDato"}
              size={"small"}
              error={klageForm.error("opprettetDato")}
            />
          </DatePicker>

          <TextField
            name="journalpostId"
            label={"Journalpost Id"}
            size={"small"}
            error={klageForm.error("journalpostId")}
          />

          <TextField
            name="sakId"
            label={"Sak Id"}
            size={"small"}
            error={klageForm.error("sakId")}
          />

          <div className={"flex justify-between"}>
            <LoadingLink
              to={`/person/${personOversikt.person.id}/oversikt`}
              asButtonVariant={"secondary"}
              buttonSize={"small"}
            >
              Tilbake
            </LoadingLink>

            <Button
              variant={"primary"}
              type={"submit"}
              size={"small"}
              loading={klageForm.formState.isSubmitting}
            >
              Opprett
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
