import { Outlet, useFetcher } from "@remix-run/react";
import { OppgaveStegMenyPunkt } from "~/components/oppgave-steg-meny-punkt/OppgaveStegMenyPunkt";
import styles from "~/route-styles/oppgave.module.css";
import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { defer } from "@remix-run/node";
import invariant from "tiny-invariant";
import { getSession } from "~/models/auth.server";
import { avslagOppgave, hentOppgave, lukkOppgave } from "~/models/oppgave.server";
import { hentJournalpost } from "~/models/saf.server";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { BodyLong, Button, Modal } from "@navikt/ds-react";
import { parseSkjemadata } from "~/utils/steg.utils";
import { useEffect, useState } from "react";

export async function action({ request, params }: ActionFunctionArgs) {
  invariant(params.oppgaveId, `params.oppgaveId er påkrevd`);

  const session = await getSession(request);
  const formData = await request.formData();
  const skjemadata = parseSkjemadata<ISkjemadata>(formData, "variant");

  switch (skjemadata.variant) {
    case "lukk":
      return await lukkOppgave(params.oppgaveId, session);
    case "avslag":
      return await avslagOppgave(params.oppgaveId, session);
  }
}

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");

  const session = await getSession(request);
  const oppgave = await hentOppgave(params.oppgaveId, session);

  function hentJournalposter() {
    return Promise.all(
      oppgave.journalpostIder.map((journalpostId) => hentJournalpost(request, journalpostId)),
    );
  }

  const journalposterPromises = hentJournalposter();

  return defer({
    journalposterPromises,
  });
}

interface ISkjemadata {
  variant: IOppgaveTilstand;
}

type IOppgaveTilstand = "avslag" | "lukk";

export default function OppgaveStegView() {
  const fetcher = useFetcher<typeof action>();
  const [aktivModalId, setAktivModalId] = useState<IOppgaveTilstand | undefined>();
  const { oppgave } = useTypedRouteLoaderData("routes/saksbehandling.oppgave.$oppgaveId");

  useEffect(() => {
    if (fetcher.data?.status === "success") {
      setAktivModalId(undefined);
    }
  }, [fetcher.data]);

  return (
    <>
      <div className={styles.oppgaveStegContainer}>
        <ul>
          {oppgave.steg.map((steg) => (
            <OppgaveStegMenyPunkt key={steg.uuid} {...steg} />
          ))}
        </ul>

        {oppgave.tilstand !== "FerdigBehandlet" && (
          <div className={styles.buttonContainerColumn}>
            <Button
              type="button"
              variant="primary"
              size="small"
              onClick={() => setAktivModalId("avslag")}
            >
              Send til automatisk avslag
            </Button>
            <Button
              type="button"
              variant="secondary"
              size="small"
              onClick={() => setAktivModalId("lukk")}
            >
              Send til vanlig saksflyt i Arena
            </Button>
          </div>
        )}

        <Modal
          open={!!aktivModalId}
          width="small"
          closeOnBackdropClick={true}
          onClose={() => setAktivModalId(undefined)}
          header={{
            heading: "Er du sikker?",
            size: "small",
            closeButton: false,
          }}
        >
          <Modal.Body>
            <BodyLong>
              Endre oppgave tilstand til: <strong>{aktivModalId}</strong>
            </BodyLong>
          </Modal.Body>

          <Modal.Footer>
            <fetcher.Form method="post">
              {aktivModalId === "lukk" && (
                <Button
                  type="submit"
                  variant="primary"
                  name="variant"
                  className="mr-4"
                  value={JSON.stringify({ variant: "lukk" })}
                >
                  Ja, jeg er sikker
                </Button>
              )}

              {aktivModalId === "avslag" && (
                <Button
                  type="submit"
                  variant="primary"
                  name="variant"
                  className="mr-4"
                  value={JSON.stringify({ variant: "avslag" })}
                >
                  Ja, jeg er sikker
                </Button>
              )}

              <Button type="button" variant="secondary" onClick={() => setAktivModalId(undefined)}>
                Avbryt
              </Button>
            </fetcher.Form>
          </Modal.Footer>
        </Modal>
      </div>
      <Outlet />
    </>
  );
}
