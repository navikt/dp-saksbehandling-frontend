import { Loader, Tabs } from "@navikt/ds-react";
import { CogIcon, DatabaseIcon, FilesIcon } from "@navikt/aksel-icons";
import { DokumentOversikt } from "~/components/dokument-oversikt/DokumentOversikt";
import { PersonBoks } from "~/components/person-boks/PersonBoks";
import { OppgaveMer } from "~/components/oppgave-mer/OppgaveMer";
import { OppgaveLenker } from "~/components/oppgave-lenker/OppgaveLenker";
import styles from "./OppgaveInformasjon.module.css";
import { Await } from "@remix-run/react";
import React, { Suspense } from "react";
import { OppgaveListe } from "~/components/oppgave-liste/OppgaveListe";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";

export function OppgaveInformasjon() {
  const { oppgave, oppgaverForPersonPromise } = useTypedRouteLoaderData(
    "routes/oppgave.$oppgaveId",
  );

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
        <Suspense
          fallback={
            <div>
              Henter oppgaver for person <Loader />
            </div>
          }
        >
          <Await
            resolve={oppgaverForPersonPromise}
            errorElement={<div>Vi klarte ikke hente oppgaver for person 😬</div>}
          >
            {(oppgaver) => (
              <div>
                <OppgaveListe oppgaver={oppgaver} />
              </div>
            )}
          </Await>
        </Suspense>
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
