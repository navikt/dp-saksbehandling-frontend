import { expect, test, describe, beforeAll, afterAll, afterEach } from "vitest";
import { loader } from "app/routes/saksbehandling.person.$ident.oversikt.rapportering-og-utbetaling";
import { mockSession } from "./helpers/auth-helper";
import { server } from "../../mocks/server";
import { mockRapporteringsperioder } from "mocks/api-routes/rapporteringsperiodeResponse";
import { rest } from "msw";
import { catchErrorResponse } from "./helpers/response-helper";

describe("Rapportering og utbetaling", () => {
  beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
  afterAll(() => server.close());
  afterEach(() => server.resetHandlers());

  test("loader skal feile hvis bruker ikke er logget på", async () => {
    const response = await catchErrorResponse(
      async () =>
        await loader({
          request: new Request("http://test"),
          params: { ident: "1234" },
          context: {},
        }),
    );

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

  test("loader skal feile hvis backend-kallet feiler", async () => {
    server.use(
      rest.post(`${process.env.DP_RAPPORTERING_URL}/rapporteringsperioder/sok`, (req, res, ctx) => {
        return res.once(
          ctx.status(500),
          ctx.json({
            errorMessage: `Server Error`,
          }),
        );
      }),
    );

    mockSession();

    const response = await catchErrorResponse(
      async () =>
        await loader({
          request: new Request("http://test"),
          params: { ident: "1234" },
          context: {},
        }),
    );

    expect(response.status).toBe(500);
  });
});
