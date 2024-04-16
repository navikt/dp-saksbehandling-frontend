import React from "react";
import styles from "./OppgaveInformasjon.module.css";
import { Tabs } from "@navikt/ds-react";
import { DatabaseIcon, FilesIcon } from "@navikt/aksel-icons";
import { DokumentOversikt } from "~/components/dokument-oversikt/DokumentOversikt";
import type { IPerson } from "~/models/oppgave.server";
import { PersonBoks } from "~/components/person-boks/PersonBoks";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";

interface IProps {
  person: IPerson;
}

export function OppgaveInformasjon(props: IProps) {
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
      </Tabs.List>

      <Tabs.Panel className={styles.tabPanel} value="informasjon">
        <PersonBoks person={oppgave.person} />
      </Tabs.Panel>

      <Tabs.Panel className={styles.tabPanel} value="dokumenter">
        <DokumentOversikt />
      </Tabs.Panel>
    </Tabs>
  );
}
