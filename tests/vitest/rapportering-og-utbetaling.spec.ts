import { expect, test, describe, beforeAll, afterAll, afterEach } from "vitest";
import { loader } from "app/routes/saksbehandling.person.$ident.oversikt.rapportering-og-utbetaling";
import { mockSession } from "./helpers/auth-helper";
import { server } from "../../mocks/server";
import { mockRapporteringsperioder } from "mocks/api-routes/rapporteringsperiodeResponse";

describe("Rapportering og utbetaling", () => {
  beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
  afterAll(() => server.close());
  afterEach(() => server.resetHandlers());

  test.fails("loader skal feile hvis bruker ikke er logget på", async () => {
    const response = await loader({
      request: new Request("http://test"),
      params: { ident: "1234" },
      context: {},
    });

    expect(response.status).toBe(500);
  });

  test("loader skal hente rapporteringsperioder", async () => {
    const mock = mockSession();

    const response = await loader({
      request: new Request("http://test"),
      params: { ident: "1234" },
      context: {},
    });

    const data = await response.json();

    expect(mock.getAzureSession).toHaveBeenCalledTimes(1);
    expect(response.status).toBe(200);
    expect(data.rapporteringsperioder).toEqual(mockRapporteringsperioder);
  });
});
