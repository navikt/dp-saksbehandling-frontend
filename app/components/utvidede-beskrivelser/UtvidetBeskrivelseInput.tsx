import { Detail, Textarea } from "@navikt/ds-react";
import { ChangeEvent, ReactNode, useEffect } from "react";
import { useFetcher } from "react-router";
import { useDebounceCallback } from "usehooks-ts";

import styles from "~/components/utvidede-beskrivelser/UtvidetBeskrivelser.module.css";
import { useGlobalAlerts } from "~/hooks/useGlobalAlerts";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { handleActions } from "~/server-side-actions/handle-actions";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { isAlert, isILagreUtvidetBeskrivelseResponse } from "~/utils/type-guards";

import { components } from "../../../openapi/melding-om-vedtak-typer";

export interface IUtvidetBeskrivelseInput {
  label: ReactNode;
  utvidetBeskrivelse: components["schemas"]["UtvidetBeskrivelse"];
  updateContext: (utvidetBeskrivelse: components["schemas"]["UtvidetBeskrivelse"]) => void;
  readOnly?: boolean;
}

export function UtvidetBeskrivelseInput(props: IUtvidetBeskrivelseInput) {
  const { addAlert } = useGlobalAlerts();
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const { meldingOmVedtak } = useTypedRouteLoaderData(
    "routes/oppgave.$oppgaveId.dagpenger-rett.$behandlingId.melding-om-vedtak",
  );
  const lagreUtvidetBeskrivelseFetcher = useFetcher<typeof handleActions>();
  const debouncedLagreUtvidetBeskrivelseFetcher = useDebounceCallback(
    lagreUtvidetBeskrivelseFetcher.submit,
    2000,
  );

  useEffect(() => {
    if (
      lagreUtvidetBeskrivelseFetcher.data &&
      isILagreUtvidetBeskrivelseResponse(lagreUtvidetBeskrivelseFetcher.data)
    ) {
      props.updateContext({
        ...props.utvidetBeskrivelse,
        sistEndretTidspunkt: lagreUtvidetBeskrivelseFetcher.data.sistEndretTidspunkt,
      });
    }

    if (isAlert(lagreUtvidetBeskrivelseFetcher.data)) {
      addAlert(lagreUtvidetBeskrivelseFetcher.data);
    }
  }, [lagreUtvidetBeskrivelseFetcher.data]);

  function lagreUtvidetBeskrivelse(event: ChangeEvent<HTMLTextAreaElement>) {
    const oppdatertVerdi = event.currentTarget.value;

    props.updateContext({
      ...props.utvidetBeskrivelse,
      tekst: oppdatertVerdi,
    });
    debouncedLagreUtvidetBeskrivelseFetcher(event.target.form);

    if (!isAlert(meldingOmVedtak) && meldingOmVedtak) {
      const utvidetBeskrivelse = meldingOmVedtak.utvidedeBeskrivelser.find(
        (beskrivelse) => beskrivelse.brevblokkId === props.utvidetBeskrivelse.brevblokkId,
      );
      if (utvidetBeskrivelse?.tekst === oppdatertVerdi) {
        debouncedLagreUtvidetBeskrivelseFetcher.cancel();
      }
    }
  }

  function handleOnBlur(event: ChangeEvent<HTMLTextAreaElement>) {
    if (event.currentTarget.value !== props.utvidetBeskrivelse.tekst) {
      debouncedLagreUtvidetBeskrivelseFetcher.flush();
    }
  }

  return (
    <div>
      <lagreUtvidetBeskrivelseFetcher.Form method="post">
        <input name="_action" value="lagre-utvidet-beskrivelse" hidden={true} readOnly={true} />
        <input name="behandling-id" value={oppgave.behandlingId} hidden={true} readOnly={true} />
        <input
          name="brevblokk-id"
          value={props.utvidetBeskrivelse.brevblokkId}
          hidden={true}
          readOnly={true}
        />
        <Textarea
          name={"utvidet-beskrivelse"}
          className={styles.container}
          label={props.label}
          value={props.utvidetBeskrivelse.tekst}
          onChange={lagreUtvidetBeskrivelse}
          onBlur={handleOnBlur}
          readOnly={props.readOnly}
        />
      </lagreUtvidetBeskrivelseFetcher.Form>

      {props.utvidetBeskrivelse.sistEndretTidspunkt && (
        <Detail textColor="subtle">
          Lagret {formaterTilNorskDato(props.utvidetBeskrivelse.sistEndretTidspunkt, true)}
        </Detail>
      )}
    </div>
  );
}
