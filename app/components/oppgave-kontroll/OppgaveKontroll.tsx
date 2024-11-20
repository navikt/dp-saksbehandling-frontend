import type { action as lagreNotatAction } from "~/routes/action-lagre-notat";
import { type ChangeEvent, Fragment, useEffect } from "react";
import { Detail, Heading, List, Textarea } from "@navikt/ds-react";
import { useBeslutterNotat } from "~/hooks/useBeslutterNotat";
import { useDebounceFetcher } from "remix-utils/use-debounce-fetcher";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { formaterNorskDato } from "~/utils/dato.utils";
import styles from "./OppgaveKontroll.module.css";

export function OppgaveKontroll() {
  const { notat, setNotat } = useBeslutterNotat();
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const lagreNotatFetcher = useDebounceFetcher<typeof lagreNotatAction>();

  useEffect(() => {
    // @ts-ignore Typefeil fra useDebounceFetcher som ikke fungerer med v3_singleFetch. useFetcher gir ingen typefeil.
    if (lagreNotatFetcher.data?.sistEndretTidspunkt) {
      // @ts-ignore Samme som over
      setNotat({ ...notat, sistEndretTidspunkt: lagreNotatFetcher.data.sistEndretTidspunkt });
    }
  }, [lagreNotatFetcher.data, notat, setNotat]);

  function lagreBeslutterNotat(event: ChangeEvent<HTMLTextAreaElement>, delayInMs: number) {
    setNotat({ ...notat, tekst: event.currentTarget.value });

    lagreNotatFetcher.submit(event.target.form, {
      debounceTimeout: delayInMs,
    });
  }

  return (
    <div className={styles.container}>
      <lagreNotatFetcher.Form method="post" action="/action-lagre-notat">
        <input name={"oppgave-id"} value={oppgave.oppgaveId} hidden={true} readOnly={true} />
        <Textarea
          name="notat"
          value={notat.tekst}
          onChange={(event) => lagreBeslutterNotat(event, 2000)}
          onBlur={(event) => lagreBeslutterNotat(event, 0)}
          resize="vertical"
          label={
            <>
              <Heading size="small">
                Notat - hvorfor returneres oppgaven tilbake fra kontroll?
              </Heading>
              <Detail textColor="subtle">Notat kan være synlig for bruker ved innsyn.</Detail>
            </>
          }
        />
        {notat.sistEndretTidspunkt && (
          <Detail textColor="subtle">
            Sist lagret: {formaterNorskDato(notat.sistEndretTidspunkt, true)}
          </Detail>
        )}
      </lagreNotatFetcher.Form>

      <List className={styles.sjekkliste} as="ol" title="Sjekkliste" size="small">
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
