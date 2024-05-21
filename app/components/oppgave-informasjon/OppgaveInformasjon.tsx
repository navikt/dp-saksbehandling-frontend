import { Tabs } from "@navikt/ds-react";
import { CogIcon, DatabaseIcon, FilesIcon } from "@navikt/aksel-icons";
import { DokumentOversikt } from "~/components/dokument-oversikt/DokumentOversikt";
import { PersonBoks } from "~/components/person-boks/PersonBoks";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { OppgaveMer } from "~/components/oppgave-mer/OppgaveMer";
import { OppgaveLenker } from "~/components/oppgave-lenker/OppgaveLenker";
import styles from "./OppgaveInformasjon.module.css";
import React from "react";
import { OppgaveListe } from "~/components/oppgave-liste/OppgaveListe";

export function OppgaveInformasjon() {
  const { oppgave, oppgaverForPerson } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");

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
        <OppgaveLenker />
        <OppgaveListe oppgaver={oppgaverForPerson} />
      </Tabs.Panel>

      <Tabs.Panel value="dokumenter">
        <DokumentOversikt />
      </Tabs.Panel>

      <Tabs.Panel value="mer">
        <OppgaveMer />
      </Tabs.Panel>
    </Tabs>
  );
}
