import { BodyLong, Button, Checkbox, CheckboxGroup, Modal } from "@navikt/ds-react";
import { useEffect, useRef, useState } from "react";
import { Form, useActionData, useNavigation } from "react-router";

import { useAwaitPromise } from "~/hooks/useResolvedPromise";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { action } from "~/routes/oppgave.$oppgaveId.se.fullfort-oppgave";
import { isAlert } from "~/utils/type-guards";

export function OppgaveHandlingRekjorBehandling() {
  const { state } = useNavigation();
  const { oppgave, behandlingPromise } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const { response } = useAwaitPromise(behandlingPromise);
  const actionData = useActionData<typeof action>();
  const modalRef = useRef<HTMLDialogElement>(null);

  const [oppfrisk, setOppfrisk] = useState<string[]>([]);

  useEffect(() => {
    if (isAlert(actionData) && actionData.variant === "error") {
      modalRef.current?.close();
    }
  }, [actionData]);

  const muligeOpplysninger =
    response?.data?.opplysninger
      ?.filter((opplysning) => opplysning.kanOppfriskes)
      ?.map((opplysning) => {
        return { label: opplysning.navn, value: opplysning.id };
      }) ?? [];

  return (
    <>
      <Button
        size="small"
        variant="primary"
        onClick={() => modalRef.current?.showModal()}
        loading={state !== "idle"}
      >
        Kjør behandling på nytt
      </Button>

      <Modal
        ref={modalRef}
        header={{ heading: "Kjør behandling på nytt" }}
        onClose={() => setOppfrisk([])}
      >
        <Modal.Body>
          <BodyLong spacing>Du kan også velge noen opplysninger som skal oppfriskes.</BodyLong>

          <BodyLong>
            <CheckboxGroup
              legend="Opplysninger som skal oppfriskes"
              onChange={setOppfrisk}
              value={oppfrisk}
            >
              {muligeOpplysninger.map((opplysning) => (
                <Checkbox key={opplysning.value} value={opplysning.value}>
                  {opplysning.label}
                </Checkbox>
              ))}
            </CheckboxGroup>
          </BodyLong>
        </Modal.Body>

        <Modal.Footer>
          <Button
            size="small"
            type="button"
            variant="secondary"
            onClick={() => modalRef.current?.close()}
          >
            Avbryt
          </Button>
          <Form method="post">
            <input name="_action" value="rekjor-behandling" hidden={true} readOnly={true} />
            <input name="behandlingId" value={oppgave.behandlingId} hidden={true} readOnly={true} />
            <input name="ident" value={oppgave.person.ident} hidden={true} readOnly={true} />
            {oppfrisk.map((opplysning) => (
              <input
                name="opplysninger"
                key={opplysning}
                value={opplysning}
                hidden={true}
                readOnly={true}
              />
            ))}

            <Button size="small" variant="primary" onClick={() => modalRef.current?.close()}>
              Ja
            </Button>
          </Form>
        </Modal.Footer>
      </Modal>
    </>
  );
}
