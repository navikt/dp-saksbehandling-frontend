import { Alert, BodyLong, Button, Modal, Select } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { useEffect, useRef } from "react";
import { Form, useActionData, useNavigation } from "react-router";

import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { action } from "~/routes/oppgave.$oppgaveId";
import { hentTekstForAvbrytÅrsak } from "~/utils/tekst.utils";
import { isAlert } from "~/utils/type-guards";
import { hentValideringAvbrytOppgave } from "~/utils/validering.util";

import { components as saksbehandlingComponents } from "../../../openapi/saksbehandling-typer";

export function OppgaveHandlingAvbryt() {
  const { state } = useNavigation();
  const actionData = useActionData<typeof action>();
  const modalRef = useRef<HTMLDialogElement>(null);
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");

  const validatedForm = useForm({
    schema: hentValideringAvbrytOppgave(),
    method: "post",
    defaultValues: {
      oppgaveId: oppgave.oppgaveId,
      // Castingen her gjør at vi kan ha en tom verdi selv om paaVentAarsak er påkrevd i sjemaet
      // https://github.com/colinhacks/zod/discussions/1198#discussioncomment-13070773
      avbrytAarsak: "" as unknown as saksbehandlingComponents["schemas"]["AvbrytOppgaveAarsak"],
    },
  });

  useEffect(() => {
    if (isAlert(actionData) && actionData.variant === "error") {
      modalRef.current?.close();
    }
  }, [actionData]);

  return (
    <>
      <Button
        size="small"
        variant="secondary"
        onClick={() => modalRef.current?.showModal()}
        loading={state !== "idle"}
      >
        Avbryt oppgave
      </Button>

      <Modal ref={modalRef} header={{ heading: "Avbryt" }}>
        <Form method="post" {...validatedForm.getFormProps()}>
          <Modal.Body className={"pt-0"}>
            <BodyLong> Du er i ferd med å avbryte oppgaven</BodyLong>
            <input name="_action" value="avbryt-oppgave" hidden={true} readOnly={true} />
            <input {...validatedForm.getInputProps("oppgaveId")} hidden={true} readOnly={true} />
            <Select
              {...validatedForm.getInputProps("avbrytAarsak")}
              className={"mt-2"}
              label="Velg årsak"
              size="small"
            >
              <option hidden={true} value={""}>
                Velg årsak
              </option>

              {oppgave.lovligeEndringer.avbrytAarsaker.map((årsak) => (
                <option key={årsak} value={årsak}>
                  {/*// @ts-expect-error Typefeil i backend. */}
                  {hentTekstForAvbrytÅrsak(årsak)}
                </option>
              ))}
            </Select>

            {validatedForm.error("avbrytAarsak") && (
              <Alert variant={"error"} size="small" className={"mt-2"}>
                {validatedForm.error("avbrytAarsak")}
              </Alert>
            )}
          </Modal.Body>

          <Modal.Footer>
            <Button
              size="small"
              type="button"
              variant="secondary"
              onClick={() => modalRef.current?.close()}
            >
              Nei, behold oppgaven
            </Button>

            <Button
              size="small"
              variant="primary"
              type={"button"}
              loading={validatedForm.formState.isSubmitting}
              onClick={() => validatedForm.submit()}
            >
              Ja, avbryt oppgaven
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
