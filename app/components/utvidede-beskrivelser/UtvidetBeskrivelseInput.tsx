import { Detail, Textarea } from "@navikt/ds-react";
import { ChangeEvent, ReactNode, useEffect } from "react";
import { useState } from "react";
import { useDebounceFetcher } from "remix-utils/use-debounce-fetcher";

import styles from "~/components/utvidede-beskrivelser/UtvidetBeskrivelser.module.css";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { IUtvidetBeskrivelse } from "~/models/melding-om-vedtak.server";
import { action } from "~/routes/oppgave.$oppgaveId.behandle";
import { formaterNorskDato } from "~/utils/dato.utils";
import { isILagreUtvidetBeskrivelseResponse } from "~/utils/type-guards";

export interface IUtvidetBeskrivelseInput {
  verdi: string;
  label: ReactNode;
  brevblokkId: string;
  updateContext: (utvidetBeskrivelse: IUtvidetBeskrivelse) => void;
  sistEndretTidspunkt?: string;
  readOnly?: boolean;
}

export function UtvidetBeskrivelseInput(props: IUtvidetBeskrivelseInput) {
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const [verdi, setVerdi] = useState(props.verdi);
  const lagreUtvidetBeskrivelseFetcher = useDebounceFetcher<typeof action>();
  useEffect(() => {
    if (
      lagreUtvidetBeskrivelseFetcher.data &&
      isILagreUtvidetBeskrivelseResponse(lagreUtvidetBeskrivelseFetcher.data)
    ) {
      props.updateContext({
        tekst: verdi,
        brevblokkId: props.brevblokkId,
        sistEndretTidspunkt: lagreUtvidetBeskrivelseFetcher.data.sistEndretTidspunkt,
      });
    }
  }, [lagreUtvidetBeskrivelseFetcher.data]);

  function lagreUtvidetBeskrivelse(event: ChangeEvent<HTMLTextAreaElement>, delayInMs: number) {
    const oppdatertVerdi = event.currentTarget.value;

    setVerdi(oppdatertVerdi);
    props.updateContext({
      tekst: oppdatertVerdi,
      brevblokkId: props.brevblokkId,
    });
    lagreUtvidetBeskrivelseFetcher.submit(event.target.form, {
      fetcherKey: props.brevblokkId,
      debounceTimeout: delayInMs,
    });
  }

  return (
    <>
      <lagreUtvidetBeskrivelseFetcher.Form method="post">
        <input name="_action" value="lagre-utvidet-beskrivelse" hidden={true} readOnly={true} />
        <input name="behandling-id" value={oppgave.behandlingId} hidden={true} readOnly={true} />
        <input name="brevblokk-id" value={props.brevblokkId} hidden={true} readOnly={true} />
        <Textarea
          name={"utvidet-beskrivelse"}
          className={styles.container}
          label={props.label}
          value={verdi}
          onChange={(event) => lagreUtvidetBeskrivelse(event, 2000)}
          onBlur={(event) => lagreUtvidetBeskrivelse(event, 0)}
          readOnly={props.readOnly}
        />
      </lagreUtvidetBeskrivelseFetcher.Form>

      {props.sistEndretTidspunkt && (
        <Detail textColor="subtle">
          Lagret {formaterNorskDato(props.sistEndretTidspunkt, true)}
        </Detail>
      )}
    </>
  );
}
