import { Detail, Heading, List, Textarea } from "@navikt/ds-react";
import type { SerializeFrom } from "@remix-run/node";
import { type ChangeEvent, Fragment, useEffect } from "react";
import { useDebounceFetcher } from "remix-utils/use-debounce-fetcher";

import { useBeslutterNotat } from "~/hooks/useBeslutterNotat";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { action } from "~/routes/oppgave.$oppgaveId.kontroll";
import { formaterNorskDato } from "~/utils/dato.utils";
import { isILagreNotatResponse } from "~/utils/type-guards";

import styles from "./OppgaveKontroll.module.css";

export function OppgaveKontroll() {
  const { notat, setNotat } = useBeslutterNotat();
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const fetcher = useDebounceFetcher<SerializeFrom<typeof action>>();

  useEffect(() => {
    if (fetcher.data && isILagreNotatResponse(fetcher.data)) {
      setNotat({ ...notat, sistEndretTidspunkt: fetcher.data.sistEndretTidspunkt });
    }
  }, [fetcher.data]);

  function lagreBeslutterNotat(event: ChangeEvent<HTMLTextAreaElement>, delayInMs: number) {
    setNotat({ ...notat, tekst: event.currentTarget.value });

    fetcher.submit(event.target.form, {
      debounceTimeout: delayInMs,
    });
  }

  return (
    <div className={styles.container}>
      <fetcher.Form method="post">
        <input name="_action" value="lagre-notat" hidden={true} readOnly={true} />
        <input name="oppgave-id" value={oppgave.oppgaveId} hidden={true} readOnly={true} />
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
      </fetcher.Form>

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
