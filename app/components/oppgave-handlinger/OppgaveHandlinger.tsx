import { useEffect, useRef, useState } from "react";
import { useFetcher, useNavigate } from "@remix-run/react";
import { add, format } from "date-fns";
import { Alert, Button, Checkbox, DatePicker, Modal } from "@navikt/ds-react";
import { nb } from "date-fns/locale";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import type { action as utsettAction } from "~/routes/action-utsett-oppgave";
import type { action as leggTilbakeAction } from "~/routes/action-legg-tilbake-oppgave";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { RemixLink } from "~/components/RemixLink";
import classnames from "classnames";
import { isAlertResponse, isFormValidationErrorResponse } from "~/utils/type-guards";
import styles from "./OppgaveHandlinger.module.css";

export interface IFormValidationError {
  field: string;
  message: string;
}

export function OppgaveHandlinger() {
  const navigate = useNavigate();
  const utsettOppgaveFetcher = useFetcher<typeof utsettAction>();
  const leggTilbakeOppgaveFetcher = useFetcher<typeof leggTilbakeAction>();
  useHandleAlertMessages(
    isAlertResponse(utsettOppgaveFetcher?.data) ? utsettOppgaveFetcher?.data : undefined,
  );
  useHandleAlertMessages(leggTilbakeOppgaveFetcher.data);
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const ref = useRef<HTMLDialogElement>(null);
  const [utsattTilDato, setUtsattTilDato] = useState<Date | undefined>();

  useEffect(() => {
    if (
      (utsettOppgaveFetcher.data && isAlertResponse(utsettOppgaveFetcher.data)) ||
      leggTilbakeOppgaveFetcher.data
    ) {
      ref.current?.close();
      navigate("/");
    }
  }, [utsettOppgaveFetcher.data, leggTilbakeOppgaveFetcher.data, navigate]);

  return (
    <div className={classnames("card", styles.OppgaveHandlingerContainer)}>
      {oppgave.tilstand !== "FERDIG_BEHANDLET" && (
        <>
          <leggTilbakeOppgaveFetcher.Form method="post" action="/action-legg-tilbake-oppgave">
            <input hidden={true} readOnly={true} name="oppgaveId" value={oppgave.oppgaveId} />
            <Button
              size="small"
              variant="tertiary"
              loading={leggTilbakeOppgaveFetcher.state !== "idle"}
            >
              Legg tilbake
            </Button>
          </leggTilbakeOppgaveFetcher.Form>

          <Button size="small" variant="tertiary" onClick={() => ref.current?.showModal()}>
            Sett på vent
          </Button>

          {oppgave.tilstand === "UNDER_BEHANDLING" && (
            <>
              <RemixLink
                to={`/oppgave/${oppgave.oppgaveId}/behandle/avbryt-behandling`}
                asButtonVariant="secondary"
                size="small"
              >
                Send til Arena
              </RemixLink>

              <RemixLink
                to={`/oppgave/${oppgave.oppgaveId}/behandle/ferdigstill`}
                asButtonVariant="primary"
                size="small"
              >
                Automatisk avslag
              </RemixLink>
            </>
          )}

          <Modal
            ref={ref}
            className={styles.modal}
            header={{ heading: "Sett på vent" }}
            closeOnBackdropClick
          >
            <Modal.Body>
              <utsettOppgaveFetcher.Form method="post" action="/action-utsett-oppgave">
                <DatePicker.Standalone
                  onSelect={(dato) => setUtsattTilDato(dato)}
                  fromDate={add(new Date(), { days: 1 })}
                  toDate={add(new Date(), { days: 20 })}
                />
                <input hidden={true} readOnly={true} name="oppgaveId" value={oppgave.oppgaveId} />
                <input
                  hidden
                  readOnly
                  name="utsettTilDato"
                  value={utsattTilDato ? format(utsattTilDato, "yyyy-MM-dd", { locale: nb }) : ""}
                />

                <Checkbox name="beholdOppgave" size="small">
                  Behold oppgave
                </Checkbox>

                <Button
                  size="small"
                  variant="primary"
                  name="_action"
                  value="utsett-oppgave"
                  loading={leggTilbakeOppgaveFetcher.state !== "idle"}
                >
                  Sett på vent
                </Button>

                {isFormValidationErrorResponse(utsettOppgaveFetcher.data) && (
                  <Alert variant="error" size="small" className="my-2">
                    {utsettOppgaveFetcher.data.message}
                  </Alert>
                )}
              </utsettOppgaveFetcher.Form>
            </Modal.Body>
          </Modal>
        </>
      )}
    </div>
  );
}
