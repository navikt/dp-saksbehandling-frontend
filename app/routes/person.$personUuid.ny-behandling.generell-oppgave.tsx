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
      personIdent: personOversikt.person.ident,
      tittel: "",
      beskrivelse: "",
      aarsak: "" as unknown as INyGenerellOppgave,
      frist: "",
      beholdOppgaven: "",
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
          <input name="_action" value="opprett-generell-oppgave" hidden={true} readOnly={true} />
          <input
            hidden={true}
            readOnly={true}
            {...generellOppgaveForm.field("personIdent").getInputProps()}
          />

          <TextField
            name="tittel"
            label="Tittel"
            size="small"
            error={generellOppgaveForm.error("tittel")}
          />

          <Textarea
            name="beskrivelse"
            label="Beskrivelse"
            description="Kan leses av andre saksbehandlere."
            size="small"
          />

          <DatePicker {...datepickerProps}>
            <DatePicker.Input
              {...inputProps}
              label="Når må saksbehandler se på oppgaven?"
              name="frist"
              size="small"
            />
          </DatePicker>

          <Select
            name="aarsak"
            label="Årsak"
            size="small"
            error={generellOppgaveForm.error("aarsak")}
          >
            <option value="">Velg årsak</option>
            {gyldigeNyGenerellOppgaveÅrsaker.map((årsak) => (
              <option value={årsak} key={årsak}>
                {årsak}
              </option>
            ))}
          </Select>

          <Checkbox name="beholdOppgaven" size="small">
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
