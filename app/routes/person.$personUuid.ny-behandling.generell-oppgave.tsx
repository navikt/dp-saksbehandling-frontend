import {
  Button,
  Checkbox,
  DatePicker,
  Heading,
  Select,
  Textarea,
  TextField,
  useDatepicker,
} from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { ActionFunctionArgs, Form, useActionData } from "react-router";

import { LoadingLink } from "~/components/loading-link/LoadingLink";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { handleActions } from "~/server-side-actions/handle-actions";
import { isAlert } from "~/utils/type-guards";
import {
  gyldigeNyGenerellOppgaveÅrsaker,
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

  const { datepickerProps, inputProps } = useDatepicker({ fromDate: new Date() });
  const generellOppgaveForm = useForm({
    schema: hentValideringForNyGenerellOppgaveSkjema(),
    method: "post",
    defaultValues: {
      _action: "opprett-generell-oppgave",
      personIdent: personOversikt.person.ident,
      nyOppgaveTittel: "",
      nyOppgaveBeskrivelse: "",
      nyOppgaveEmneknagg: "" as unknown as INyGenerellOppgave,
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

          <TextField
            name="nyOppgaveTittel"
            label="Tittel"
            size="small"
            error={generellOppgaveForm.error("nyOppgaveTittel")}
          />

          <Textarea
            name="nyOppgaveBeskrivelse"
            label="Beskrivelse"
            description="Kan leses av andre saksbehandlere."
            size="small"
          />

          <DatePicker {...datepickerProps}>
            <DatePicker.Input
              {...inputProps}
              label="Når må saksbehandler se på oppgaven?"
              name="nyOppgaveFrist"
              size="small"
            />
          </DatePicker>

          <Select
            name="nyOppgaveEmneknagg"
            label="Årsak"
            size="small"
            error={generellOppgaveForm.error("nyOppgaveEmneknagg")}
          >
            <option value="">Velg årsak</option>
            {gyldigeNyGenerellOppgaveÅrsaker.map((årsak) => (
              <option value={årsak} key={årsak}>
                {årsak}
              </option>
            ))}
          </Select>

          <Checkbox name="nyOppgaveTildelSammeSaksbehandler" size="small">
            Behold oppgaven
          </Checkbox>

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
