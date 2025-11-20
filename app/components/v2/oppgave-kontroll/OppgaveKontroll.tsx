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
              <List.Item>{punkt.navn}</List.Item>
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
    navn: "Se raskt gjennom søknad, relevante dokumenter og vedtak: Er det noe spesielt ved saken/ røde flagg/ grensesnitt (konkurs, sammenlegging og grensearbeidere etc)?",
  },
  {
    navn: "Skal det være gjenopptak/ny rettighet?",
  },
  {
    navn: "Er det riktig antall barnetillegg?",
  },
  {
    navn: "Er virkningstidspunkt satt riktig, og begrunnelse i vedtak stemmer med Arena? (Se om dato og tekst er lik i Arena og melding om vedtak.)",
  },
  {
    navn: "FVA",
    underpunkter: [
      "Riktig beregningsregel? (Ikke dobbeltkontroll av selve beregningen)",
      "Stemmer begrunnelsen i vedtak med Arena?",
    ],
  },
  {
    navn: "Sanksjon",
    underpunkter: ["Er det riktig å gi sanksjon?", "Er sanksjonen begrunnet?"],
  },
  {
    navn: "Ved permitteringssaker",
    underpunkter: [
      "Er telleverk justert for permittering siste 18 måneder? (ikke dobbeltkontroll av antall uker justert)",
      "Var det riktig å godkjenne eller avslå permitteringsårsak (hvis saksbehandler også har gjort førstegangsvurdering av permitteringsårsak)?",
      "Ved avslag: Er alt vurdert korrekt og tilstrekkelig dokumentert?",
    ],
  },
];
