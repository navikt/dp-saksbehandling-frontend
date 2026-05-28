import { Button, DatePicker, Heading, TextField, useDatepicker } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { ActionFunctionArgs, useActionData } from "react-router";

import { LoadingLink } from "~/components/loading-link/LoadingLink";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { handleActions } from "~/server-side-actions/handle-actions";
import { formaterTilBackendDato, formaterTilNorskDato } from "~/utils/dato.utils";
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

  const klageForm = useForm({
    schema: hentValideringForNyKlageSkjema(),
    submitSource: "state",
    method: "post",
    defaultValues: {
      _action: "opprett-klage",
      personIdent: personOversikt.person.ident,
      opprettetDato: undefined as unknown as string | undefined,
      journalpostId: "" as unknown as string,
      sakId: "" as unknown as string,
    },
  });

  const opprettetDatoField = klageForm.field("opprettetDato");
  const opprettetDatoValue = opprettetDatoField.value();
  const { datepickerProps, inputProps } = useDatepicker({
    toDate: new Date(),
    defaultSelected: opprettetDatoValue
      ? new Date(formaterTilBackendDato(opprettetDatoValue))
      : undefined,
    onDateChange: (date) => {
      if (date) {
        opprettetDatoField.setValue(formaterTilNorskDato(date));
      }
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
              form={klageForm.field("opprettetDato").getInputProps().form}
              name={klageForm.field("opprettetDato").getInputProps().name}
              size={"small"}
              error={klageForm.error("opprettetDato")}
            />
          </DatePicker>

          <TextField
            {...klageForm.field("journalpostId").getInputProps()}
            error={klageForm.field("journalpostId").error()}
            label={"Journalpost-ID"}
            size={"small"}
          />

          <TextField
            {...klageForm.field("sakId").getInputProps()}
            error={klageForm.field("sakId").error()}
            label={"Sak-ID"}
            size={"small"}
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
              onClick={() => klageForm.submit()}
            >
              Opprett
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
