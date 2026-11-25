import {
  ClockDashedIcon,
  ExternalLinkIcon,
  FileTextIcon,
  NewspaperIcon,
  TasklistIcon,
} from "@navikt/aksel-icons";
import {
  Alert,
  BodyShort,
  Box,
  Heading,
  Link,
  Loader,
  Tabs,
  Tooltip,
  VStack,
} from "@navikt/ds-react";
import { useState } from "react";

import { useVurderingerQuery } from "~/api/behandling-hooks";
import { Avklaringer } from "~/components/avklaringer/Avklaringer";
import { DokumentOversikt } from "~/components/dokument-oversikt/DokumentOversikt";
import EndretOpplysninger from "~/components/endret-opplysninger/EndretOpplysninger";
import { OppgaveHistorikk } from "~/components/oppgave-historikk/OppgaveHistorikk";
import { OppgaveKontroll } from "~/components/oppgave-kontroll/OppgaveKontroll";
import { OppgaveOversiktVisArvedeOpplysninger } from "~/components/oppgave-oversikt/OppgaveOversiktVisArvedeOpplysninger";
import { useBehandling } from "~/hooks/useBehandling";
import { useOppgave } from "~/hooks/useOppgave";
import { getEnv } from "~/utils/env.utils";

import { FagsystemLenker } from "../fagsystem-lenker/FagsystemLenker";
import { OppgaveOversikt } from "../oppgave-oversikt/OppgaveOversikt";

export function BehandlingSidepanel() {
  const { behandling } = useBehandling();
  const { oppgave, underKontroll } = useOppgave();
  const { data: vurderinger, isPending, error } = useVurderingerQuery(behandling.behandlingId);
  const [sidepanelTab, setSidepanelTab] = useState("avklaringer");

  return (
    <VStack as="aside" aria-label="Sidepanel" gap="space-16" className="min-w-0">
      <OppgaveOversiktVisArvedeOpplysninger />

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
          <Tooltip content="Oppgaveinformasjon">
            <Tabs.Tab
              value="oppgaveinformasjon"
              aria-label="Oppgaveinformasjon"
              icon={<NewspaperIcon aria-hidden />}
            />
          </Tooltip>
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
          <Tooltip content="Historikk">
            <Tabs.Tab
              value="historikk"
              aria-label="Historikk"
              icon={<ClockDashedIcon aria-hidden />}
            />
          </Tooltip>
        </Tabs.List>
        <Tabs.Panel value="oppgaveinformasjon">
          <Box padding="space-16">
            <div className="flex items-center gap-2 pb-2">
              <Heading size={"small"}>Oppgaveinformasjon</Heading>
            </div>
            <OppgaveOversikt />
          </Box>
        </Tabs.Panel>
        <Tabs.Panel value="avklaringer" lazy={false}>
          <Box padding="space-16">
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
          </Box>
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
          <Box padding="space-16">
            <Heading level="2" size="small" spacing>
              Fagsystemlenker
            </Heading>
            <FagsystemLenker />
          </Box>
        </Tabs.Panel>
        <Tabs.Panel value="historikk">
          <Box padding="space-16">
            <div className="flex justify-between pb-2">
              <Heading size={"small"}>Historikk</Heading>
              <Link
                href={`${getEnv("DP_AKTIVITETSLOGG_FRONTEND_URL")}/aktivitetslogg?behandlingId=${oppgave.behandlingId}`}
                target="_blank"
              >
                Se i aktivitetslogg <ExternalLinkIcon className="inline-block" />
              </Link>
            </div>
            <OppgaveHistorikk />
          </Box>
        </Tabs.Panel>
      </Tabs>

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
