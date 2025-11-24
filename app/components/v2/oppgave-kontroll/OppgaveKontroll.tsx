import { BodyShort, Detail, List, Textarea } from "@navikt/ds-react";
import { type ChangeEvent, Fragment, useEffect } from "react";
import { useFetcher, useLocation } from "react-router";
import { useDebounceCallback } from "usehooks-ts";

import { useBeslutterNotat } from "~/hooks/useBeslutterNotat";
import { useGlobalAlerts } from "~/hooks/useGlobalAlerts";
import { useOppgave } from "~/hooks/useOppgave";
import { lagreNotatAction } from "~/server-side-actions/lagre-notat-action";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { isAlert, isILagreNotatResponse } from "~/utils/type-guards";

export function OppgaveKontroll() {
  const { pathname } = useLocation();
  const { addAlert } = useGlobalAlerts();
  const { notat, setNotat } = useBeslutterNotat();
  const { oppgave, minBeslutterOppgave } = useOppgave();
  const fetcher = useFetcher<typeof lagreNotatAction>();
  const debouncedFetcher = useDebounceCallback(fetcher.submit, 2000);

  useEffect(() => {
    if (fetcher.data) {
      if (isILagreNotatResponse(fetcher.data)) {
        setNotat({ ...notat, sistEndretTidspunkt: fetcher.data.sistEndretTidspunkt });
      }

      if (isAlert(fetcher.data)) {
        addAlert(fetcher.data);
      }
    }
  }, [fetcher.data]);

  function lagreBeslutterNotat(event: ChangeEvent<HTMLTextAreaElement>) {
    const nyVerdi = event.currentTarget.value;
    setNotat({ ...notat, tekst: nyVerdi });

    debouncedFetcher(
      { _action: "lagre-notat", notat: nyVerdi, oppgaveId: oppgave.oppgaveId },
      { method: "post", action: pathname },
    );

    if (nyVerdi === oppgave.notat?.tekst) {
      debouncedFetcher.cancel();
    }
  }

  function handleOnBlur(event: ChangeEvent<HTMLTextAreaElement>) {
    if (event.currentTarget.value !== oppgave.notat?.tekst) {
      debouncedFetcher.flush();
    }
  }

  return (
    <div>
      <Textarea
        value={notat.tekst}
        onChange={lagreBeslutterNotat}
        onBlur={handleOnBlur}
        resize="vertical"
        readOnly={!minBeslutterOppgave}
        label={
          <>
            <BodyShort size="small" weight={"semibold"}>
              Notat - hvorfor returneres oppgaven tilbake fra kontroll?
            </BodyShort>
            <Detail textColor="subtle">Notat kan være synlig for bruker ved innsyn.</Detail>
          </>
        }
      />

      {notat.sistEndretTidspunkt && (
        <Detail textColor="subtle">
          Sist lagret: {formaterTilNorskDato(notat.sistEndretTidspunkt, true)}
        </Detail>
      )}

      <div className={"mt-4"}>
        <BodyShort className={"mb-2"} size={"small"} weight={"semibold"}>
          Sjekkliste
        </BodyShort>

        <List className={""} as="ol" size="small">
          {sjekkliste.map((punkt) => (
            <Fragment key={punkt.navn}>
              <List.Item className={"font-bold"}>{punkt.navn}</List.Item>
              {punkt.underpunkter && (
                <List size="small">
                  {punkt.underpunkter.map((underpunkt) => (
                    <List.Item key={underpunkt}>{underpunkt}</List.Item>
                  ))}
                </List>
              )}
            </Fragment>
          ))}
        </List>
      </div>
    </div>
  );
}

interface ISjekkliste {
  navn: string;
  underpunkter?: string[];
}

const sjekkliste: ISjekkliste[] = [
  {
    navn: "Prøvingsdato",
    underpunkter: [
      "Er prøvingsdato begrunnet og hjemmel riktig?",
      "Rask sjekk på at prøvingsdato ikke er lørdag eller søndag og at det ikke er ført aktivitet på meldekort.",
    ],
  },
  {
    navn: "Er avklaringer og endringer i saken begrunnet godt nok?",
    underpunkter: [
      "Begrunnelse oppsigelsestid/sluttpakke",
      "Begrunnelse for vanlig arbeidstid",
      "Antall barnetillegg",
      "Begrunnelse sanksjonsperiode (ikke ilagt sanksjon/ilagt sanksjon)",
    ],
  },
  {
    navn: "Meldekort",
    underpunkter: ["Kommer det frem i avklaringer om meldekort er kontrollert?"],
  },
  {
    navn: "Sanksjon",
    underpunkter: [
      "I saker hvor bruker har sagt opp selv/er selvforskyldt ledig",
      "er det skrevet forvaltningsnotat med begrunnelse for hvorfor det ikke er ilagt sanksjonsperiode?",
    ],
  },
  {
    navn: "Se over vedtaksbrevet og kontroller at tekst for:",
    underpunkter: [
      "«Hvorfor får du dagpenger fra» stemmer med begrunnelse i prøvingsdato.",
      "Tekst og begrunnelse for vanlig arbeidstid er riktig.",
      "Ved fritekstbrev og til og med dato; sjekk at dato i brevet stemmer med til og med dato i personoversikten.",
      "Sjekk at til og med dato er begrunnet og har riktig hjemmel.",
    ],
  },
];
