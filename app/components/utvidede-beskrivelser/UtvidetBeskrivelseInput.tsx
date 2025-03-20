import { Detail, Textarea } from "@navikt/ds-react";
import { ChangeEvent, ReactNode, useEffect, useState } from "react";
import { useDebounceFetcher } from "remix-utils/use-debounce-fetcher";

import styles from "~/components/utvidede-beskrivelser/UtvidetBeskrivelser.module.css";
import { useGlobalAlerts } from "~/hooks/useGlobalAlerts";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { handleActions } from "~/server-side-actions/handle-actions";
import { formaterNorskDato } from "~/utils/dato.utils";
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
  const [verdi, setVerdi] = useState(props.utvidetBeskrivelse.tekst);
  const lagreUtvidetBeskrivelseFetcher = useDebounceFetcher<typeof handleActions>();

  useEffect(() => {
    if (
      lagreUtvidetBeskrivelseFetcher.data &&
      isILagreUtvidetBeskrivelseResponse(lagreUtvidetBeskrivelseFetcher.data)
    ) {
      props.updateContext({
        ...props.utvidetBeskrivelse,
        tekst: verdi,
        sistEndretTidspunkt: lagreUtvidetBeskrivelseFetcher.data.sistEndretTidspunkt,
      });
    }

    if (isAlert(lagreUtvidetBeskrivelseFetcher.data)) {
      addAlert(lagreUtvidetBeskrivelseFetcher.data);
    }
  }, [lagreUtvidetBeskrivelseFetcher.data]);

  function lagreUtvidetBeskrivelse(event: ChangeEvent<HTMLTextAreaElement>, delayInMs: number) {
    const oppdatertVerdi = event.currentTarget.value;

    setVerdi(oppdatertVerdi);
    props.updateContext({
      ...props.utvidetBeskrivelse,
      tekst: oppdatertVerdi,
    });
    lagreUtvidetBeskrivelseFetcher.submit(event.target.form, {
      fetcherKey: props.utvidetBeskrivelse.brevblokkId,
      debounceTimeout: delayInMs,
    });
  }

  return (
    <>
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
          value={verdi}
          onChange={(event) => lagreUtvidetBeskrivelse(event, 2000)}
          onBlur={(event) => {
            if (props.utvidetBeskrivelse.tekst !== event.currentTarget.value)
              lagreUtvidetBeskrivelse(event, 0);
          }}
          readOnly={props.readOnly}
        />
      </lagreUtvidetBeskrivelseFetcher.Form>

      {props.utvidetBeskrivelse.sistEndretTidspunkt && (
        <Detail textColor="subtle">
          Lagret {formaterNorskDato(props.utvidetBeskrivelse.sistEndretTidspunkt, true)}
        </Detail>
      )}
    </>
  );
}
