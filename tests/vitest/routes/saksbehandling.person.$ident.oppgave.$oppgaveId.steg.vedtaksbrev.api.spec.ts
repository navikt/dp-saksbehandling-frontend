// @vitest-environment node
import { rest } from "msw";
import { afterAll, afterEach, beforeAll, describe, expect, test } from "vitest";
import { action } from "~/routes/saksbehandling.oppgave.$oppgaveId.steg.vedtaksbrev";
import { server } from "../../../mocks/server";
import { endSessionMock, mockSession } from "../helpers/auth-helper";
import { catchErrorResponse } from "../helpers/response-helper";

describe("Send vedtaksbrev", () => {
  beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
  afterAll(() => server.close());
  afterEach(() => {
    server.resetHandlers();
    endSessionMock();
  });

  describe("Action", () => {
    const testBody = {
      metadata:
        '{"tilstand":"TilBehandling", "muligeTilstander": ["VentPåMangelbrev", "Innstilt"]}',
      "ny-tilstand": "Innstilt",
    };

    const testParams = {
      ident: "1234",
      oppgaveId: "msw-c2e5845f-d139-490a-8925-890269994363",
    };

    describe("Sende behandling til to-trinnskontroll", () => {
      test("burde feile hvis bruker ikke er autentisert", async () => {
        const body = new URLSearchParams(testBody);

        const request = new Request("http://localhost:3000", {
          method: "PUT",
          body,
        });

        const response = await catchErrorResponse(() =>
          action({
            request,
            params: testParams,
            context: {},
          }),
        );

        expect(response.status).toBe(500);
      });

      test("burde kunne endre status til 'Innstilt'", async () => {
        const body = new URLSearchParams(testBody);

        const request = new Request("http://localhost:3000", {
          method: "PUT",
          body,
        });

        mockSession();

        const response = await action({
          request,
          params: testParams,
          context: {},
        });

        const data = await response.json();

        expect(data.endret).toBeTruthy();
        expect(data.nyTilstand).toBe("Innstilt");
      });

      test("burde feile hvis status ikke kan endres til 'Innstilt'", async () => {
        const nyTestBody = {
          metadata: '{"tilstand":"TilBehandling", "muligeTilstander": ["VentPåMangelbrev"]}',
          "ny-tilstand": "Innstilt",
        };

        const body = new URLSearchParams(nyTestBody);

        const request = new Request("http://localhost:3000", {
          method: "PUT",
          body,
        });

        mockSession();

        const response = await catchErrorResponse(() =>
          action({
            request,
            params: testParams,
            context: {},
          }),
        );

        expect(response.status).toBe(500);
      });

      test("burde feile hvis backend feiler", async () => {
        const body = new URLSearchParams(testBody);

        const request = new Request("http://localhost:3000", {
          method: "PUT",
          body,
        });

        mockSession();

        server.use(
          rest.post(
            `${process.env.DP_BEHANDLING_URL}/oppgave/:oppgaveId/tilstand`,
            (req, res, ctx) => {
              return res.once(
                ctx.status(500),
                ctx.json({
                  errorMessage: `Server Error`,
                }),
              );
            },
          ),
        );

        const response = await catchErrorResponse(() =>
          action({
            request,
            params: testParams,
            context: {},
          }),
        );

        expect(response.status).toBe(500);
      });
    });
  });
});
