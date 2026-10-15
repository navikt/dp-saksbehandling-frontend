import { beforeEach, describe, expect, it, vi } from "vitest";

const { avbrytKlage, commitSession, flash, getSession } = vi.hoisted(() => ({
  avbrytKlage: vi.fn(),
  commitSession: vi.fn(),
  flash: vi.fn(),
  getSession: vi.fn(),
}));

vi.mock("~/models/saksbehandling.server", () => ({ avbrytKlage }));
vi.mock("~/sessions", () => ({ commitSession, getSession }));

import { avbrytKlageAction } from "./avbryt-klage-action";

describe("avbrytKlageAction", () => {
  beforeEach(() => {
    vi.resetAllMocks();
    avbrytKlage.mockResolvedValue({
      error: undefined,
      response: new Response(null, { status: 204 }),
    });
    getSession.mockResolvedValue({ flash });
    commitSession.mockResolvedValue("session=...");
  });

  it("sender begrunnelsen videre når klagen avbrytes", async () => {
    const request = new Request("http://localhost/oppgave/oppgave-id", { method: "POST" });
    const formData = new FormData();
    formData.set("_action", "avbryt-klage");
    formData.set("behandlingId", "behandling-id");
    formData.set("årsak", "TRUKKET_KLAGE");
    formData.set("notat", "  Klagen trekkes etter avtale.  ");

    await avbrytKlageAction(request, { oppgaveId: "oppgave-id" }, formData);

    expect(avbrytKlage).toHaveBeenCalledWith(
      request,
      "behandling-id",
      "TRUKKET_KLAGE",
      "Klagen trekkes etter avtale.",
    );
  });

  it("sender ikke en tom begrunnelse", async () => {
    const request = new Request("http://localhost/oppgave/oppgave-id", { method: "POST" });
    const formData = new FormData();
    formData.set("_action", "avbryt-klage");
    formData.set("behandlingId", "behandling-id");
    formData.set("årsak", "ANNET");
    formData.set("notat", "  ");

    await avbrytKlageAction(request, { oppgaveId: "oppgave-id" }, formData);

    expect(avbrytKlage).toHaveBeenCalledWith(request, "behandling-id", "ANNET", undefined);
  });

  it("sender ikke skjemaet videre når årsak mangler", async () => {
    const request = new Request("http://localhost/oppgave/oppgave-id", { method: "POST" });
    const formData = new FormData();
    formData.set("_action", "avbryt-klage");
    formData.set("behandlingId", "behandling-id");
    formData.set("notat", "Begrunnelse");

    await avbrytKlageAction(request, { oppgaveId: "oppgave-id" }, formData);

    expect(avbrytKlage).not.toHaveBeenCalled();
  });
});
