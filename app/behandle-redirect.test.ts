import { RouterContextProvider } from "react-router";
import { expect, test } from "vitest";

import { loader } from "./routes/oppgave.$oppgaveId.dagpenger-rett.$behandlingId._person._oppgave-oversikt.behandle";

test("omdirigerer gammel behandlingsoversikt til vilkårsvurderinger for samme oppgave og behandling", () => {
  const request = new Request(
    "http://localhost/oppgave/oppgave-id/dagpenger-rett/behandling-id/behandle",
  );
  const response = loader({
    request,
    url: new URL(request.url),
    pattern: "/oppgave/:oppgaveId/dagpenger-rett/:behandlingId/behandle",
    params: { oppgaveId: "oppgave-id", behandlingId: "behandling-id" },
    context: new RouterContextProvider(),
  });

  expect(response.status).toBe(302);
  expect(response.headers.get("Location")).toBe(
    "/oppgave/oppgave-id/dagpenger-rett/behandling-id/vilkar",
  );
});
