// @vitest-environment node
import { oppgaverResponse } from "mocks/api-routes/oppgaverResponse";
import { rest } from "msw";
import { afterAll, afterEach, beforeAll, describe, expect, test } from "vitest";
import {
  loader,
  action,
} from "~/routes/saksbehandling.person.$ident.oppgave.$oppgaveId.steg.$stegId";
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

  describe("Loader", () => {
    const testParams = {
      ident: "1234",
      oppgaveId: "msw-c2e5845f-d139-490a-8925-890269994363",
      stegId: "58402b6b-fb74-4dfc-a59c-c06ad2a40934",
    };

    test("skal feile hvis bruker ikke er logget på", async () => {
      const response = await catchErrorResponse(() =>
        loader({
          request: new Request("http://localhost:3000"),
          params: testParams,
          context: {},
        }),
      );

      expect(response.status).toBe(500);
    });

    test("skal hente riktig steg i riktig oppgave", async () => {
      const mock = mockSession();

      const response = await loader({
        request: new Request("http://localhost:3000"),
        params: testParams,
        context: {},
      });

      const data = await response.json();

      expect(mock.getAzureSession).toHaveBeenCalledTimes(1);
      expect(response.status).toBe(200);
      expect(data.steg).toEqual(oppgaverResponse[0].steg[0]);
    });

    test("skal feile hvis backend-kallet feiler", async () => {
      server.use(
        rest.get(`${process.env.DP_BEHANDLING_URL}/oppgave/:oppgaveId`, (req, res, ctx) => {
          return res.once(
            ctx.status(500),
            ctx.json({
              errorMessage: `Server Error`,
            }),
          );
        }),
      );

      mockSession();

      const response = await catchErrorResponse(() =>
        loader({
          request: new Request("http://localhost:3000"),
          params: testParams,
          context: {},
        }),
      );

      expect(response.status).toBe(500);
    });
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

        const data = await response?.json();

        expect(data && data).toBeTruthy();
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
