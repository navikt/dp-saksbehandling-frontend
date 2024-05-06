import React from "react";
import styles from "./OppgaveInformasjon.module.css";
import { BodyShort, Button, Tabs } from "@navikt/ds-react";
import { CogIcon, DatabaseIcon, FilesIcon } from "@navikt/aksel-icons";
import { DokumentOversikt } from "~/components/dokument-oversikt/DokumentOversikt";
import type { IPerson } from "~/models/oppgave.server";
import { PersonBoks } from "~/components/person-boks/PersonBoks";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { useFetcher } from "@remix-run/react";
import type { action } from "~/routes/_oppgaver._index";
import { getEnv } from "~/utils/env.utils";
import { RemixLink } from "~/components/RemixLink";

interface IProps {
  person: IPerson;
}

function LenkeListe(props: { ident: string }) {
  function lagLenkeHvisFinnes(url: string, tekst: string) {
    if (url === "") return <></>;
    return (
      <BodyShort>
        <RemixLink to={url}>{tekst}</RemixLink>
      </BodyShort>
    );
  }

  return (
    <div className={styles.lenkeListe}>
      <BodyShort>Lenker:</BodyShort>
      {lagLenkeHvisFinnes(getEnv("ARBEID_INNTEKT_URL"), "Inntekt og arbeidsforhold")}
      {lagLenkeHvisFinnes(getEnv("GOSYS_URL"), "GOSYS")}
      {lagLenkeHvisFinnes(getEnv("MODIA_URL"), "MODIA")}
      {lagLenkeHvisFinnes(getEnv("MELDEKORT_URL"), "Rapporteringer")}
      {lagLenkeHvisFinnes(getEnv("INNTEKTREDIGERING_URL"), "Rediger inntektsinformasjon")}
      {lagLenkeHvisFinnes(getEnv("GRISEN_URL"), "GRISEN")}
      {lagLenkeHvisFinnes(getEnv("DAGPENGER_NORGE_URL"), "Dagpenger Norge")}
    </div>
  );
}

export function OppgaveInformasjon(props: IProps) {
  const fetcher = useFetcher<typeof action>();
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");

  return (
    <Tabs defaultValue="informasjon" className={styles.container}>
      <Tabs.List>
        <Tabs.Tab
          value="informasjon"
          label="Informasjon"
          icon={<DatabaseIcon title="Informasjon" />}
        />
        <Tabs.Tab value="dokumenter" label="Dokumenter" icon={<FilesIcon title="Dokumenter" />} />
        <Tabs.Tab value="mer" label="Mer" icon={<CogIcon title="Mer" />} />
      </Tabs.List>

      <Tabs.Panel value="informasjon">
        <PersonBoks person={oppgave.person} />
        <LenkeListe ident={oppgave.person.ident} />
      </Tabs.Panel>

      <Tabs.Panel className={styles.tabPanel} value="dokumenter">
        <DokumentOversikt />
      </Tabs.Panel>

      <Tabs.Panel className={styles.tabPanel} value="mer">
        <fetcher.Form method="post">
          <Button variant="secondary" size="small" loading={fetcher.state !== "idle"}>
            Legg oppgave tilbake i køen
          </Button>
        </fetcher.Form>
      </Tabs.Panel>
    </Tabs>
  );
}
