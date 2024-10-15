import type { IUtvidetBeskrivelse } from "~/context/melding-om-vedtak-context";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { type ChangeEvent, useEffect, useState } from "react";
import type { action as lagreUtvidetBeskrivelseAction } from "~/routes/action-lagre-utvidet-beskrivelse";
import { Detail, Textarea } from "@navikt/ds-react";
import { formaterNorskDato } from "~/utils/dato.utils";
import { useDebounceFetcher } from "remix-utils/use-debounce-fetcher";
import styles from "~/components/utvidet-beskrivelser/UtvidetBeskrivelser.module.css";
import type { SerializeFrom } from "@remix-run/node";

export interface IUtvidetBeskrivelseInput {
  verdi: string;
  label: string;
  brevblokkId: string;
  updateContext: (utvidetBeskrivelse: IUtvidetBeskrivelse) => void;
  sistLagretTidspunkt?: string;
}

export function UtvidetBeskrivelseInput(props: IUtvidetBeskrivelseInput) {
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const [verdi, setVerdi] = useState(props.verdi);
  let lagreUtvidetBeskrivelseFetcher =
    useDebounceFetcher<SerializeFrom<typeof lagreUtvidetBeskrivelseAction>>();

  useEffect(() => {
    if (lagreUtvidetBeskrivelseFetcher.data) {
      props.updateContext({
        tekst: verdi,
        brevblokkId: props.brevblokkId,
        sistLagretTidspunkt: lagreUtvidetBeskrivelseFetcher.data.sistLagretTidspunkt,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lagreUtvidetBeskrivelseFetcher.data]);

  function lagreUtvidetBeskrivelse(event: ChangeEvent<HTMLTextAreaElement>, delayInMs: number) {
    setVerdi(event.target.value);
    props.updateContext({
      tekst: event.target.value,
      brevblokkId: props.brevblokkId,
    });

    lagreUtvidetBeskrivelseFetcher.submit(event.target.form, {
      fetcherKey: props.brevblokkId,
      debounceTimeout: delayInMs,
    });
  }

  return (
    <>
      <lagreUtvidetBeskrivelseFetcher.Form method="post" action="/action-lagre-utvidet-beskrivelse">
        <input name={"behandling-id"} value={oppgave.behandlingId} hidden={true} readOnly={true} />
        <input name={"brevblokk-id"} value={props.brevblokkId} hidden={true} readOnly={true} />
        <Textarea
          name={"utvidet-beskrivelse"}
          className={styles.container}
          label={props.label}
          value={verdi}
          onChange={(event) => lagreUtvidetBeskrivelse(event, 2000)}
          onBlur={(event) => lagreUtvidetBeskrivelse(event, 0)}
        />
      </lagreUtvidetBeskrivelseFetcher.Form>
      {props.sistLagretTidspunkt && (
        <Detail textColor="subtle">
          Lagret {formaterNorskDato(props.sistLagretTidspunkt, true)}
        </Detail>
      )}
    </>
  );
}
