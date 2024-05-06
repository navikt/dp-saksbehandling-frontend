import React from "react";
import styles from "./OppgaveInformasjon.module.css";
import { Button, Tabs } from "@navikt/ds-react";
import { CogIcon, DatabaseIcon, FilesIcon } from "@navikt/aksel-icons";
import { DokumentOversikt } from "~/components/dokument-oversikt/DokumentOversikt";
import type { IPerson } from "~/models/oppgave.server";
import { PersonBoks } from "~/components/person-boks/PersonBoks";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { useFetcher } from "@remix-run/react";
import type { action } from "~/routes/_oppgaver._index";

interface IProps {
  person: IPerson;
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

      <Tabs.Panel className={styles.tabPanel} value="informasjon">
        <PersonBoks person={oppgave.person} />
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
