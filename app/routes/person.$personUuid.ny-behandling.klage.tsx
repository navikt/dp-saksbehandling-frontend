import { Button, DatePicker, Heading, TextField, useDatepicker } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import classnames from "classnames";
import { ActionFunctionArgs, Form, useActionData } from "react-router";

import { RemixLink } from "~/components/RemixLink";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { handleActions } from "~/server-side-actions/handle-actions";
import { isAlert } from "~/utils/type-guards";
import { hentValideringForNyKlageSkjema } from "~/utils/validering.util";

import styles from "../route-styles/person.module.css";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export default function Oppgave() {
  const { person, alert } = useTypedRouteLoaderData("routes/person.$personUuid");
  const actionData = useActionData<typeof action>();
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);
  useHandleAlertMessages(alert);

  const { datepickerProps, inputProps } = useDatepicker();
  const klageForm = useForm({
    schema: hentValideringForNyKlageSkjema(),
    method: "post",
    defaultValues: {
      personIdent: person.ident,
      opprettetDato: "",
      journalpostId: "",
      sakId: "",
    },
  });

  return (
    <div className={classnames("card p-4 mt-2", styles.container)}>
      <Heading size="small" spacing>
        Opprett ny klage
      </Heading>

      <Form method="post" {...klageForm.getFormProps()}>
        <input name="_action" value="opprett-klage" hidden={true} readOnly={true} />
        <input name="personIdent" value={person.ident} hidden={true} readOnly={true} />
        <DatePicker {...datepickerProps}>
          <DatePicker.Input
            {...inputProps}
            label="Velg dato"
            name={"opprettetDato"}
            size={"small"}
            error={klageForm.error("opprettetDato")}
          />
        </DatePicker>

        <TextField
          name="journalpostId"
          className="mt-4"
          label={"Journalpost Id"}
          size={"small"}
          error={klageForm.error("journalpostId")}
        />

        <TextField
          name="sakId"
          className="mt-4"
          label={"Sak Id"}
          size={"small"}
          error={klageForm.error("sakId")}
        />

        <div className={"flex gap-2 mt-4"}>
          <RemixLink
            to={`/person/${person.id}/oversikt`}
            asButtonVariant={"secondary"}
            size={"small"}
          >
            Tilbake
          </RemixLink>

          <Button
            variant={"primary"}
            type={"submit"}
            size={"small"}
            loading={klageForm.formState.isSubmitting}
          >
            Opprett
          </Button>
        </div>
      </Form>
    </div>
  );
}
