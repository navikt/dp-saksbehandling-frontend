import { describe, expect, test } from "vitest";

import { umamiBeforeSend } from "./umami";

describe("umamiBeforeSend", () => {
  test("erstatter oppgaveId", () => {
    const payload = { url: "/oppgave/a1b2c3d4-e5f6-7890-abcd-ef1234567890" };
    umamiBeforeSend("event", payload);
    expect(payload.url).toBe("/oppgave/:id");
  });

  test("erstatter oppgaveId and behandlingId for dagpenger-rett", () => {
    const payload = {
      url: "/oppgave/a1b2c3d4-e5f6-7890-abcd-ef1234567890/dagpenger-rett/f0e1d2c3-b4a5-6789-0abc-def123456789/behandle",
    };
    umamiBeforeSend("event", payload);
    expect(payload.url).toBe("/oppgave/:id/dagpenger-rett/:id/behandle");
  });

  test("erstatter personUuid", () => {
    const payload = { url: "/person/a1b2c3d4-e5f6-7890-abcd-ef1234567890/oversikt" };
    umamiBeforeSend("event", payload);
    expect(payload.url).toBe("/person/:id/oversikt");
  });

  test("erstatter innsending behandlingId", () => {
    const payload = {
      url: "/oppgave/a1b2c3d4-e5f6-7890-abcd-ef1234567890/innsending/f0e1d2c3-b4a5-6789-0abc-def123456789",
    };
    umamiBeforeSend("event", payload);
    expect(payload.url).toBe("/oppgave/:id/innsending/:id");
  });

  test("erstatter klage behandlingId", () => {
    const payload = {
      url: "/oppgave/a1b2c3d4-e5f6-7890-abcd-ef1234567890/klage/f0e1d2c3-b4a5-6789-0abc-def123456789",
    };
    umamiBeforeSend("event", payload);
    expect(payload.url).toBe("/oppgave/:id/klage/:id");
  });

  test("beholder regelsett- og opplysning-IDer", () => {
    const payload = {
      url: "/oppgave/a1b2c3d4-e5f6-7890-abcd-ef1234567890/dagpenger-rett/f0e1d2c3-b4a5-6789-0abc-def123456789/regelsett/3904804981/opplysning/f0e1d2c3-b4a5-6789-0abc-def123456789",
    };
    umamiBeforeSend("event", payload);
    expect(payload.url).toBe(
      "/oppgave/:id/dagpenger-rett/:id/regelsett/3904804981/opplysning/f0e1d2c3-b4a5-6789-0abc-def123456789",
    );
  });

  test("endrer ikke URLer uten kjente segmenter", () => {
    const payload = { url: "/alle-oppgaver" };
    umamiBeforeSend("event", payload);
    expect(payload.url).toBe("/alle-oppgaver");
  });

  test("håndterer tom payload", () => {
    const payload = {};
    const result = umamiBeforeSend("event", payload);
    expect(result).toEqual({});
  });

  test("erstatter person uuid for ny-behandling klage", () => {
    const payload = { url: "/person/a1b2c3d4-e5f6-7890-abcd-ef1234567890/ny-behandling/klage" };
    umamiBeforeSend("event", payload);
    expect(payload.url).toBe("/person/:id/ny-behandling/klage");
  });

  test("håndterer fullfort-oppgave", () => {
    const payload = { url: "/oppgave/a1b2c3d4-e5f6-7890-abcd-ef1234567890/fullfort-oppgave" };
    umamiBeforeSend("event", payload);
    expect(payload.url).toBe("/oppgave/:id/fullfort-oppgave");
  });

  test("håndterer innsending", () => {
    const payload = {
      url: "/oppgave/019c9abc-ca55-76fd-b0d4-a5988c171e83/innsending/019c9abc-c9dc-739a-b109-6e7a6f443bfe",
    };
    umamiBeforeSend("event", payload);
    expect(payload.url).toBe("/oppgave/:id/innsending/:id");
  });
});
