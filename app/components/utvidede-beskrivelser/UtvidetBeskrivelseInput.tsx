import { Detail, Textarea } from "@navikt/ds-react";
import { ChangeEvent, ReactNode, useEffect } from "react";
import { useFetcher } from "react-router";
import { useDebounceCallback } from "usehooks-ts";

import styles from "~/components/utvidede-beskrivelser/UtvidetBeskrivelser.module.css";
import { useGlobalAlerts } from "~/hooks/useGlobalAlerts";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { useUtvidedeBeskrivelser } from "~/hooks/useUtvidedeBeskrivelser";
import { handleActions } from "~/server-side-actions/handle-actions";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { isAlert, isILagreUtvidetBeskrivelseResponse } from "~/utils/type-guards";
import { RikTekstEditor } from "~/utvidet-beskrivelse-tekst-editor/RikTekstEditor";

import { components } from "../../../openapi/melding-om-vedtak-typer";

export interface IUtvidetBeskrivelseInput {
  label: ReactNode;
  meldingOmVedtak?: components["schemas"]["MeldingOmVedtakResponse"];
  utvidetBeskrivelse: components["schemas"]["UtvidetBeskrivelse"];
  readOnly?: boolean;
}

export function UtvidetBeskrivelseInput(props: IUtvidetBeskrivelseInput) {
  const { addAlert } = useGlobalAlerts();
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const { oppdaterUtvidetBeskrivelse } = useUtvidedeBeskrivelser();
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
      oppdaterUtvidetBeskrivelse({
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

    oppdaterUtvidetBeskrivelse({
      ...props.utvidetBeskrivelse,
      tekst: oppdatertVerdi,
    });

    debouncedLagreUtvidetBeskrivelseFetcher(event.target.form);

    // Kanseller debounce hvis siste tilstand på server er lik som nåværende tekstverdi
    if (props.meldingOmVedtak) {
      const utvidetBeskrivelseFraServer = props.meldingOmVedtak.utvidedeBeskrivelser.find(
        (beskrivelse) => beskrivelse.brevblokkId === props.utvidetBeskrivelse.brevblokkId,
      );

      if (utvidetBeskrivelseFraServer?.tekst === oppdatertVerdi) {
        debouncedLagreUtvidetBeskrivelseFetcher.cancel();
      }
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
        {props.utvidetBeskrivelse.brevblokkId === "brev.blokk.begrunnelse-innvilgelsesdato" ? (
          // TODO Here må vi sjekke mot ny ID for egendefienrt brev
          <RikTekstEditor tekst={"<h1>Hei på deg</h1><h>H2</h><p>Ballalaika</p>"} />
        ) : (
          <Textarea
            name={"utvidet-beskrivelse"}
            className={styles.container}
            label={props.label}
            value={props.utvidetBeskrivelse.tekst}
            onChange={lagreUtvidetBeskrivelse}
            onBlur={() => debouncedLagreUtvidetBeskrivelseFetcher.flush()}
            readOnly={props.readOnly}
          />
        )}
      </lagreUtvidetBeskrivelseFetcher.Form>

      {props.utvidetBeskrivelse.sistEndretTidspunkt && (
        <Detail textColor="subtle">
          Lagret {formaterTilNorskDato(props.utvidetBeskrivelse.sistEndretTidspunkt, true)}
        </Detail>
      )}
    </div>
  );
}
