import { FileTextIcon, TasklistIcon } from "@navikt/aksel-icons";
import { Alert, BodyShort, Box, Heading, Loader, Tabs, Tooltip, VStack } from "@navikt/ds-react";
import { useState } from "react";

import { useVurderingerQuery } from "~/api/behandling-hooks";
import { Avklaringer } from "~/components/avklaringer/Avklaringer";
import { DokumentOversikt } from "~/components/dokument-oversikt/DokumentOversikt";
import EndretOpplysninger from "~/components/endret-opplysninger/EndretOpplysninger";
import { OppgaveKontroll } from "~/components/oppgave-kontroll/OppgaveKontroll";
import { OppgaveOversiktVisArvedeOpplysninger } from "~/components/oppgave-oversikt/OppgaveOversiktVisArvedeOpplysninger";
import { useBehandling } from "~/hooks/useBehandling";
import { useOppgave } from "~/hooks/useOppgave";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";

export function BehandlingSidepanel() {
  const { behandling } = useBehandling();
  const { oppgave, underKontroll } = useOppgave();
  const { featureFlags } = useTypedRouteLoaderData("root");
  const { data: vurderinger, isPending, error } = useVurderingerQuery(behandling.behandlingId);
  const [sidepanelTab, setSidepanelTab] = useState("avklaringer");

  const avklaringerInnhold = (
    <VStack gap="space-16">
      <Avklaringer avklaringer={behandling.avklaringer} />
      {isPending && <Loader size="large" title="Henter vurderinger" />}
      {error && (
        <Alert variant="error">
          <Heading size="small">Kunne ikke hente vurderinger</Heading>
          <p>{error.message}</p>
        </Alert>
      )}
      {vurderinger && <EndretOpplysninger vurderinger={vurderinger} />}
    </VStack>
  );

  return (
    <VStack as="aside" aria-label="Sidepanel" gap="space-16" className="min-w-0">
      <OppgaveOversiktVisArvedeOpplysninger />
      {featureFlags.dokumentIDropdown ? (
        <Box padding="space-16" className="card min-w-0">
          {avklaringerInnhold}
        </Box>
      ) : (
        <Tabs
          value={sidepanelTab}
          size="medium"
          fill
          className="card min-w-0"
          onChange={(value) => {
            setSidepanelTab(value);
            if (value === "dokumenter" && sidepanelTab !== value) {
              window.umami?.track("Vis dokumenter", { visning: "tab" });
            }
          }}
        >
          <Tabs.List aria-label="Sidepanel">
            <Tooltip content="Avklaringer">
              <Tabs.Tab
                value="avklaringer"
                aria-label="Avklaringer"
                icon={<TasklistIcon aria-hidden />}
              />
            </Tooltip>
            <Tooltip content="Dokumenter">
              <Tabs.Tab
                value="dokumenter"
                aria-label="Dokumenter"
                icon={<FileTextIcon aria-hidden />}
              />
            </Tooltip>
          </Tabs.List>
          <Tabs.Panel value="avklaringer" lazy={false}>
            <Box padding="space-16">{avklaringerInnhold}</Box>
          </Tabs.Panel>
          <Tabs.Panel value="dokumenter">
            <Box padding="space-16">
              <Heading level="2" size="small" spacing>
                Dokumenter
              </Heading>
              {oppgave.journalpostIder.length === 0 ? (
                <BodyShort size="small">Ingen dokumenter</BodyShort>
              ) : (
                <DokumentOversikt />
              )}
            </Box>
          </Tabs.Panel>
        </Tabs>
      )}
      {underKontroll && (
        <Box padding="space-16" className="card">
          <Heading size="small" spacing>
            Kontroll
          </Heading>
          <OppgaveKontroll />
        </Box>
      )}
    </VStack>
  );
}
