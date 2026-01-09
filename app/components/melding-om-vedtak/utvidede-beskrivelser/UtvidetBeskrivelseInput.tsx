import { Detail, Loader, Textarea } from "@navikt/ds-react";
import { ReactNode, useEffect } from "react";
import { useFetcher, useLocation } from "react-router";
import { ClientOnly } from "remix-utils/client-only";
import { useDebouncedCallback } from "use-debounce";

import styles from "~/components/melding-om-vedtak/utvidede-beskrivelser/UtvidetBeskrivelser.module.css";
import { RikTekstEditor } from "~/components/melding-om-vedtak/utvidet-beskrivelse-tekst-editor/RikTekstEditor";
import { useGlobalAlerts } from "~/hooks/useGlobalAlerts";
import { useTypeSafeParams } from "~/hooks/useTypeSafeParams";
import { useUtvidedeBeskrivelser } from "~/hooks/useUtvidedeBeskrivelser";
import { ISanityBrevMal } from "~/sanity/sanity-types";
import { lagreUtvidetBeskrivelseAction } from "~/server-side-actions/lagre-utvidet-beskrivelse-action";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { isAlert, isILagreUtvidetBeskrivelseResponse } from "~/utils/type-guards";

import { components } from "../../../../openapi/melding-om-vedtak-typer";

interface IProps {
  label: ReactNode;
  meldingOmVedtak?: components["schemas"]["MeldingOmVedtakResponse"];
  utvidetBeskrivelse: components["schemas"]["UtvidetBeskrivelse"];
  readOnly?: boolean;
  sanityBrevMaler: ISanityBrevMal[];
}

export function UtvidetBeskrivelseInput(props: IProps) {
  const { addAlert } = useGlobalAlerts();
  const { behandlingId } = useTypeSafeParams();
  const { pathname } = useLocation();

  const { oppdaterUtvidetBeskrivelse } = useUtvidedeBeskrivelser();
  const lagreUtvidetBeskrivelseFetcher = useFetcher<typeof lagreUtvidetBeskrivelseAction>();
  const debouncedLagreUtvidetBeskrivelseFetcher = useDebouncedCallback((verdi) => {
    lagreUtvidetBeskrivelseFetcher.submit(
      {
        _action: "lagre-utvidet-beskrivelse",
        behandlingId,
        brevBlokkId: props.utvidetBeskrivelse.brevblokkId,
        utvidetBeskrivelse: verdi,
      },
      { method: "post", action: pathname },
    );
  }, 2000);

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

  function lagreUtvidetBeskrivelse(nyTekst: string) {
    oppdaterUtvidetBeskrivelse({
      ...props.utvidetBeskrivelse,
      tekst: nyTekst,
    });

    debouncedLagreUtvidetBeskrivelseFetcher(nyTekst);

    // Kanseller debounce hvis siste tilstand på server er lik som nåværende tekstverdi
    if (props.meldingOmVedtak) {
      const utvidetBeskrivelseFraServer = props.meldingOmVedtak.utvidedeBeskrivelser.find(
        (beskrivelse) => beskrivelse.brevblokkId === props.utvidetBeskrivelse.brevblokkId,
      );

      if (utvidetBeskrivelseFraServer?.tekst === nyTekst) {
        debouncedLagreUtvidetBeskrivelseFetcher.cancel();
      }
    }
  }

  return (
    <div>
      {props.utvidetBeskrivelse.brevblokkId === "brev.blokk.egendefinert" ? (
        <ClientOnly fallback={<Loader />}>
          {() => (
            <RikTekstEditor
              tekst={props.utvidetBeskrivelse.tekst}
              onChange={lagreUtvidetBeskrivelse}
              readOnly={props.readOnly}
              sanityBrevMaler={props.sanityBrevMaler}
            />
          )}
        </ClientOnly>
      ) : (
        <Textarea
          name={"utvidet-beskrivelse"}
          className={styles.container}
          label={props.label}
          value={props.utvidetBeskrivelse.tekst}
          onChange={(event) => lagreUtvidetBeskrivelse(event.currentTarget.value)}
          onBlur={() => debouncedLagreUtvidetBeskrivelseFetcher.flush()}
          readOnly={props.readOnly}
        />
      )}

      {props.utvidetBeskrivelse.sistEndretTidspunkt && (
        <Detail textColor="subtle">
          Lagret {formaterTilNorskDato(props.utvidetBeskrivelse.sistEndretTidspunkt, true)}
        </Detail>
      )}
    </div>
  );
}
