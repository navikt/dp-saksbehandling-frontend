import { Detail, Heading, List, Textarea } from "@navikt/ds-react";
import { type ChangeEvent, Fragment, useEffect } from "react";
import { useFetcher } from "react-router";
import { useDebounceCallback } from "usehooks-ts";

import { useBeslutterNotat } from "~/hooks/useBeslutterNotat";
import { useGlobalAlerts } from "~/hooks/useGlobalAlerts";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { action } from "~/routes/oppgave.$oppgaveId";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { isAlert, isILagreNotatResponse } from "~/utils/type-guards";

import styles from "./OppgaveKontroll.module.css";

export function OppgaveKontroll() {
  const { addAlert } = useGlobalAlerts();
  const { notat, setNotat } = useBeslutterNotat();
  const { saksbehandler } = useTypedRouteLoaderData("root");
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const fetcher = useFetcher<typeof action>();
  const debouncedFetcher = useDebounceCallback(fetcher.submit, 2000);

  const minOppgave = oppgave.beslutter?.ident === saksbehandler.onPremisesSamAccountName;

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
    setNotat({ ...notat, tekst: event.currentTarget.value });

    debouncedFetcher(event.target.form);
    if (event.currentTarget.value === oppgave.notat?.tekst) {
      debouncedFetcher.cancel();
    }
  }

  function handleOnBlur(event: ChangeEvent<HTMLTextAreaElement>) {
    if (event.currentTarget.value !== oppgave.notat?.tekst) {
      debouncedFetcher.flush();
    }
  }

  return (
    <div className={styles.container}>
      <fetcher.Form method="post">
        <input name="_action" value="lagre-notat" hidden={true} readOnly={true} />
        <input name="oppgave-id" value={oppgave.oppgaveId} hidden={true} readOnly={true} />
        <Textarea
          name="notat"
          value={notat.tekst}
          onChange={lagreBeslutterNotat}
          onBlur={handleOnBlur}
          resize="vertical"
          disabled={!minOppgave}
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
            Sist lagret: {formaterTilNorskDato(notat.sistEndretTidspunkt, true)}
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
