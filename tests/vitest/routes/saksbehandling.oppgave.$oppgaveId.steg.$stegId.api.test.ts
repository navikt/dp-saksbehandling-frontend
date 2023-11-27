// @vitest-environment node
import { rest } from "msw";
import { afterAll, afterEach, beforeAll, describe, expect, test } from "vitest";
import { action } from "~/routes/saksbehandling.oppgave.$oppgaveId.steg.$stegUuid";
import { server } from "../../../mocks/server";
import { endSessionMock, mockSession } from "../helpers/auth-helper";
import { catchErrorResponse } from "../helpers/response-helper";

describe("Stegvisning", () => {
  beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
  afterAll(() => server.close());
  afterEach(() => {
    server.resetHandlers();
    endSessionMock();
  });

  describe("Action", () => {
    const testBody = {
      metadata: '{"svartype":"String"}',
      "58402b6b-fb74-4dfc-a59c-c06ad2a40934": "Ordinær",
      begrunnelse: "Fikset",
    };

    const testParams = {
      ident: "1234",
      oppgaveId: "msw-c2e5845f-d139-490a-8925-890269994363",
      stegId: "58402b6b-fb74-4dfc-a59c-c06ad2a40934",
    };

    describe("Lagre svar på steg", () => {
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

      test("burde lagre aktivitet", async () => {
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

        expect(response && response).toBeTruthy();
      });

      test("burde feile hvis backend feiler", async () => {
        const body = new URLSearchParams(testBody);

        const request = new Request("http://localhost:3000", {
          method: "PUT",
          body,
        });

        mockSession();

        server.use(
          rest.put(
            `${process.env.DP_BEHANDLING_URL}/oppgave/:oppgaveId/steg/:stegId`,
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

        const response = await action({
          request,
          params: testParams,
          context: {},
        });

        expect(response?.status).toBe("error");
      });
    });
  });
});
