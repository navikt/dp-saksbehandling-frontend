import { delay } from "msw";
import { createOpenApiHttp } from "openapi-msw";

import { getEnv } from "~/utils/env.utils";

import { components, paths } from "../openapi/saksbehandling-typer";
import { mockGenerellOppgave } from "./data/mock-generell-oppgave/mock-generell-oppgave-data";
import { mockAdresseendringOppgave } from "./data/mock-generell-oppgave/mock-adresseendring-oppgave-data";
import { mockInnsendinger } from "./data/mock-innsendinger/mock-innsendinger";
import { klager } from "./data/mock-klage-behandling/mock-klage";
import { mockMeldingerOmVedtak } from "./data/mock-melding-om-vedtak/mock-melding-om-vedtak";
import { klage } from "./data/mock-oppgaver/klage";
import {
  konverterOppgaveTilListeOppgave,
  mockListeOppgaver,
} from "./data/mock-oppgaver/mock-liste-oppgaver";
import { mockOppgaver } from "./data/mock-oppgaver/mock-oppgaver";
import { mockPerson } from "./data/mock-person";
import { mockPersonOversikt } from "./data/mock-person-oversikt";
import { mockStatistikkOppgaveTypeV2, mockStatistikkRettighetV2 } from "./data/mock-statistikk";
import { mockTilbakekrevinger } from "./data/mock-tilbakekreving/mock-tilbakekrevinger";

const apiError = false;
const delayMs = 0;
const http = createOpenApiHttp<paths>({ baseUrl: getEnv("DP_SAKSBEHANDLING_URL") });

const defaultError: components["schemas"]["HttpProblem"] = {
  type: "500",
  title: "MSW 500 feilmelding",
  status: 500,
  instance: "dp-saksbehandling",
};

function get404Error(apiKall: string): components["schemas"]["HttpProblem"] {
  return {
    type: "404",
    title: `MSW 404 feilmelding for ${apiKall}`,
    status: 404,
    instance: "dp-saksbehandling",
  };
}

export const mockDpSaksbehandling = [
  // Hent alle oppgaver
  http.get(`/oppgave`, async ({ response }) => {
    await delay(delayMs);

    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }

    return response(200).json({
      oppgaver: mockListeOppgaver,
      totaltAntallOppgaver: mockListeOppgaver.length,
    });
  }),

  // Hent neste oppgave og tildel denne til saksbehandler
  http.put(`/oppgave/neste`, async ({ response }) => {
    await delay(delayMs);

    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }

    return response(200).json(mockOppgaver[0]);
  }),

  // Hent en oppgave med oppgaveId
  http.get(`/oppgave/{oppgaveId}`, async ({ response, params }) => {
    await delay(delayMs);

    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }

    const { oppgaveId } = params;
    const mockOppgave = mockOppgaver.find((oppgave) => oppgave.oppgaveId === oppgaveId);

    if (mockOppgave) {
      return response(200).json(mockOppgave);
    }

    return response(404).json(get404Error("/oppgave/{oppgaveId}"));
  }),

  // Tildel en oppgave med oppgaveId
  http.put(`/oppgave/{oppgaveId}/tildel`, async ({ response, params }) => {
    await delay(delayMs);

    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }

    const { oppgaveId } = params;
    const mockOppgave = mockOppgaver.find((oppgave) => oppgave.oppgaveId === oppgaveId);

    if (mockOppgave) {
      if (mockOppgave.tilstand === "KLAR_TIL_BEHANDLING") {
        return response(200).json({
          ...mockOppgave,
          nyTilstand: "UNDER_BEHANDLING",
        });
      }
      if (mockOppgave.tilstand === "KLAR_TIL_KONTROLL") {
        return response(200).json({
          ...mockOppgave,
          nyTilstand: "UNDER_KONTROLL",
        });
      }

      return response(200).json({
        ...mockOppgave,
        nyTilstand: mockOppgave.tilstand,
      });
    }

    return response(404).json(get404Error("/oppgave/{oppgaveId}/tildel"));
  }),

  // Legg oppgave med oppgaveId tilbake i køen
  http.put(`/oppgave/{oppgaveId}/legg-tilbake`, async ({ response, params }) => {
    await delay(delayMs);

    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }

    const { oppgaveId } = params;
    const mockOppgave = mockOppgaver.find((oppgave) => oppgave.oppgaveId === oppgaveId);

    if (mockOppgave) {
      return response(204).empty();
    }

    return response(404).json(get404Error("oppgave/{oppgaveId}/legg-tilbake"));
  }),

  // Ferdigstille oppgave
  http.put(`/oppgave/{oppgaveId}/ferdigstill`, async ({ response }) => {
    await delay(delayMs);

    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }

    return response(204).empty();
  }),

  // Utsett oppgave med oppgaveId
  http.put(`/oppgave/{oppgaveId}/utsett`, async ({ response, params }) => {
    await delay();

    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }

    const { oppgaveId } = params;
    const mockOppgave = mockOppgaver.find((oppgave) => oppgave.oppgaveId === oppgaveId);

    if (mockOppgave) {
      return response(200).empty();
    }

    return response(404).json(get404Error("/oppgave/{oppgaveId}/utsett"));
  }),

  // Avbryt oppgave med oppgaveId
  http.put(`/oppgave/{oppgaveId}/avbryt`, async ({ response, params }) => {
    await delay();

    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }

    const { oppgaveId } = params;
    const mockOppgave = mockOppgaver.find((oppgave) => oppgave.oppgaveId === oppgaveId);

    if (mockOppgave) {
      return response(204).empty();
    }

    return response(404).json(get404Error("/oppgave/{oppgaveId}/avbryt"));
  }),

  // Send oppgave til kontroll
  http.put(`/oppgave/{oppgaveId}/send-til-kontroll`, async ({ response }) => {
    await delay(delayMs);

    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }

    return response(204).empty();
  }),

  // Send oppgave tilbake til saksbehandler fra kontroll
  http.put(`/oppgave/{oppgaveId}/returner-til-saksbehandler`, async ({ response }) => {
    await delay(delayMs);

    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }

    return response(204).empty();
  }),

  // Lagre notat på oppgave
  http.put(`/oppgave/{oppgaveId}/notat`, async ({ response }) => {
    await delay();

    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }

    return response(200).json({ sistEndretTidspunkt: new Date().toISOString() });
  }),

  // Slett notat på oppgave
  http.delete(`/oppgave/{oppgaveId}/notat`, async ({ response }) => {
    await delay(delayMs);

    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }

    return response(200).json({ sistEndretTidspunkt: new Date().toISOString() });
  }),

  // Hent melding om vedtak HTML for oppgave
  http.get(`/oppgave/{oppgaveId}/melding-om-vedtak/html`, async ({ response, params }) => {
    await delay(delayMs);

    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }

    const meldingOmVedtak = mockMeldingerOmVedtak.find(
      (melding) => melding.oppgaveId === params.oppgaveId,
    );

    if (!meldingOmVedtak) {
      return response(404).json(get404Error(`/oppgave/${params.oppgaveId}/melding-om-vedtak/html`));
    }

    return response(200).json(meldingOmVedtak.melding);
  }),

  // Lagre utvidet beskrivelse for melding om vedtak
  http.put(
    `/oppgave/{oppgaveId}/melding-om-vedtak/utvidet-beskrivelse/{brevblokkId}`,
    async ({ response }) => {
      await delay(delayMs);

      if (apiError) {
        return response("default").json(defaultError, { status: 500 });
      }

      return response(200).json({ sistEndretTidspunkt: new Date().toISOString() });
    },
  ),

  // Lagre brevvariant for melding om vedtak
  http.put(`/oppgave/{oppgaveId}/melding-om-vedtak/brev-variant`, async ({ response }) => {
    await delay(delayMs);

    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }

    return response(204).empty();
  }),

  http.put(`/oppgave/{oppgaveId}/melding-om-vedtak-kilde`, async ({ response }) => {
    await delay(delayMs);

    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }

    return response(204).empty();
  }),

  http.put(`/oppgave/{oppgaveId}/kontrollert-brev`, async ({ response }) => {
    await delay(delayMs);

    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }

    return response(204).empty();
  }),

  // Hent en klage med behandlingId
  http.get(`/klage/{behandlingId}`, async ({ response, params }) => {
    await delay(delayMs);

    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }

    const { behandlingId } = params;
    const klage = klager.find((klage) => klage.behandlingId === behandlingId);

    if (klage) {
      return response(200).json(klage);
    }

    return response(404).json(get404Error("/klage/{behandlingId}"));
  }),

  // Opprett en klage
  http.post(`/klage/opprett-manuelt`, async ({ response }) => {
    await delay(delayMs);

    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }

    return response(200).json(konverterOppgaveTilListeOppgave(klage));
  }),

  // Ferdigstill en klage med behandlingId
  http.put(`/klage/{behandlingId}/ferdigstill`, async ({ response, params }) => {
    await delay(delayMs);

    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }

    const { behandlingId } = params;
    const klage = klager.find((klage) => klage.behandlingId === behandlingId);

    if (klage) {
      return response(204).empty();
    }

    return response(404).json(get404Error("/klage/{behandlingId}/ferdigstill"));
  }),

  // Trekk en klage med behandlingId
  http.put(`/klage/{behandlingId}/trekk`, async ({ response, params }) => {
    await delay(delayMs);

    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }

    const { behandlingId } = params;
    const klage = klager.find((klage) => klage.behandlingId === behandlingId);

    if (klage) {
      return response(204).empty();
    }

    return response(404).json(get404Error("/klage/{behandlingId}/trekk"));
  }),

  // Lagre opplysning på klage
  http.put(`/klage/{behandlingId}/opplysning/{opplysningId}`, async ({ response }) => {
    await delay(delayMs);

    return response(201).empty();
  }),

  // Hent person med fnr i body
  http.post(`/person/personId`, async ({ response }) => {
    await delay(delayMs);

    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }

    return response(200).json({ id: mockPerson.id });
  }),

  // Hent person med uuid i url
  http.get(`/person/{personId}`, async ({ response }) => {
    await delay(delayMs);

    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }

    return response(200).json(mockPersonOversikt);
  }),

  // Hent alle oppgaver til en person
  http.post(`/person/oppgaver`, async ({ response }) => {
    await delay(delayMs);

    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }

    return response(200).json(mockListeOppgaver);
  }),

  http.get("/behandling/{behandlingId}/oppgaveId", async ({ response, params }) => {
    await delay(delayMs);

    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }
    const { behandlingId } = params;
    const oppgave = mockOppgaver.find((oppgave) => oppgave.behandlingId === behandlingId);

    if (!oppgave) {
      return response(404).json(get404Error(`/behandling/${behandlingId}/oppgaveId`));
    }

    if (oppgave) {
      return response(200).json({ oppgaveId: oppgave.oppgaveId });
    }

    return response("default").json(defaultError, { status: 500 });
  }),

  http.get("/innsending/{behandlingId}", async ({ response, params }) => {
    await delay(delayMs);

    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }
    const { behandlingId } = params;
    const innsending = mockInnsendinger.find(
      (innsending) => innsending.behandlingId === behandlingId,
    );

    if (!innsending) {
      return response(404).json(get404Error(`/innsending/${behandlingId}`));
    }

    if (innsending) {
      return response(200).json(innsending);
    }

    return response("default").json(defaultError, { status: 500 });
  }),

  http.put("/innsending/{behandlingId}/ferdigstill", async ({ response }) => {
    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }

    return response(204).empty();
  }),

  http.get("/tilbakekreving/{behandlingId}", async ({ response, params }) => {
    await delay(delayMs);

    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }
    const { behandlingId } = params;
    const tilbakekreving = mockTilbakekrevinger.find(
      (tilbakekreving) => tilbakekreving.tilbakekrevingBehandlingId === behandlingId,
    );

    if (!tilbakekreving) {
      return response(404).json(get404Error(`/tilbakekreving/${behandlingId}`));
    }

    return response(200).json(tilbakekreving);
  }),

  http.get("/generell-oppgave/{id}", async ({ response, params }) => {
    await delay(delayMs);

    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }

    const { id } = params;
    const mockOppgave = mockOppgaver.find((oppgave) => oppgave.oppgaveId === id);

    if (!mockOppgave || mockOppgave.behandlingType !== "GENERELL") {
      return response(404).json(get404Error(`/generell-oppgave/${id}`));
    }

    const generellOppgaveMap: Record<string, components["schemas"]["GenerellOppgave"]> = {
      "019a0001-0001-7001-a001-000000000001": mockGenerellOppgave,
      "019a0002-0002-7002-a002-000000000001": mockAdresseendringOppgave,
    };

    return response(200).json(generellOppgaveMap[id] ?? mockGenerellOppgave);
  }),

  http.put("/generell-oppgave/{id}/ferdigstill", async ({ response, params }) => {
    await delay(delayMs);

    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }

    return response(204).empty();
  }),

  http.get(`/produksjonsstatistikk`, async ({ request, response }) => {
    await delay(delayMs);

    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }

    const url = new URL(request.url);
    const grupperEtter = url.searchParams.get("grupperEtter");

    if (grupperEtter === "RETTIGHETSTYPE") {
      return response(200).json(mockStatistikkRettighetV2);
    }

    return response(200).json(mockStatistikkOppgaveTypeV2);
  }),
];
