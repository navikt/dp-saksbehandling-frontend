import { Fragment } from "react";
import { Detail, Heading, List, Textarea } from "@navikt/ds-react";
import styles from "./oppgaveKontroll.module.css";

export function OppgaveKontroll() {
  return (
    <div className={styles.container}>
      <Textarea
        label={
          <>
            <Heading size="small">
              Notat - hvorfor returneres oppgaven tilbake fra kontroll?
            </Heading>
            <Detail textColor="subtle">Notat vil være synlig for bruker ved innsyn. </Detail>
          </>
        }
      />

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
