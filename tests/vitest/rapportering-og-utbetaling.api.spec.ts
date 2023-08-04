// @vitest-environment node
import { redirect } from "@remix-run/node";
import { rest } from "msw";
import { afterAll, afterEach, beforeAll, describe, expect, test } from "vitest";
import {
  action,
  loader,
} from "~/routes/saksbehandling.person.$ident.oversikt.rapportering-og-utbetaling";
import { mockRapporteringsperioder } from "../../mocks/api-routes/rapporteringsperiodeResponse";
import { server } from "../../mocks/server";
import { endSessionMock, mockSession } from "./helpers/auth-helper";
import { catchErrorResponse } from "./helpers/response-helper";

describe("Rapportering og utbetaling", () => {
  beforeAll(() => server.listen({ onUnhandledRequest: "bypass" }));
  afterAll(() => server.close());
  afterEach(() => {
    server.resetHandlers();
    endSessionMock();
  });

  describe("Loader", () => {
    test("skal feile hvis bruker ikke er logget på", async () => {
      const response = await catchErrorResponse(
        async () =>
          await loader({
            request: new Request("http://localhost:3000"),
            params: { ident: "1234" },
            context: {},
          }),
      );

      expect(response.status).toBe(500);
    });

    test("skal hente rapporteringsperioder", async () => {
      const mock = mockSession();

      const response = await loader({
        request: new Request("http://localhost:3000"),
        params: { ident: "1234" },
        context: {},
      });

      const data = await response.json();

      expect(mock.getAzureSession).toHaveBeenCalledTimes(1);
      expect(response.status).toBe(200);
      expect(data.rapporteringsperioder).toEqual(mockRapporteringsperioder);
    });

    test("skal feile hvis backend-kallet feiler", async () => {
      server.use(
        rest.post(
          `${process.env.DP_RAPPORTERING_URL}/rapporteringsperioder/sok`,
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

      mockSession();

      const response = await catchErrorResponse(
        async () =>
          await loader({
            request: new Request("http://localhost:3000"),
            params: { ident: "1234" },
            context: {},
          }),
      );

      expect(response.status).toBe(500);
    });
  });

  describe("Action", () => {
    describe("Opprett korrigering", () => {
      test("burde feile hvis bruker ikke er autentisert", async () => {
        const body = new URLSearchParams({
          periodeId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          submit: "start-korrigering",
        });

        const request = new Request("http://localhost:3000", {
          method: "POST",
          body,
        });

        const response = await catchErrorResponse(async () => {
          await action({ request, params: { ident: "1234" }, context: {} });
        });

        expect(response.status).toBe(500);
      });

      test("burde kunne opprette en ny korrigering og redirecte til riktig side", async () => {
        const body = new URLSearchParams({
          periodeId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          submit: "start-korrigering",
        });

        const request = new Request("http://localhost:3000", {
          method: "POST",
          body,
        });

        mockSession();

        const response = await action({ request, params: { ident: "1234" }, context: {} });

        expect(response).toEqual(
          redirect(
            `/saksbehandling/person/1234/rediger-periode/3fa85f64-5717-4562-b3fc-2c963f66afa66`,
          ),
        );
      });

      test("burde feile hvis backend feiler", async () => {
        const body = new URLSearchParams({
          periodeId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          submit: "start-korrigering",
        });

        const request = new Request("http://localhost:3000", {
          method: "POST",
          body,
        });

        mockSession();

        server.use(
          rest.post(
            `${process.env.DP_RAPPORTERING_URL}/rapporteringsperioder/3fa85f64-5717-4562-b3fc-2c963f66afa6/korrigering`,
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

        const response = await catchErrorResponse(async () => {
          await action({ request, params: { ident: "1234" }, context: {} });
        });

        expect(response.status).toBe(500);
      });
    });

    describe("Avgodkjenn periode", () => {
      test("burde feile hvis bruker ikke er autentisert", async () => {
        const body = new URLSearchParams({
          periodeId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          submit: "avgodkjenn",
        });

        const request = new Request("http://localhost:3000", {
          method: "POST",
          body,
        });

        const response = await catchErrorResponse(async () => {
          await action({ request, params: { ident: "1234" }, context: {} });
        });

        expect(response.status).toBe(500);
      });

      test("burde kunne avgodkjenne og redirecte til riktig side", async () => {
        const body = new URLSearchParams({
          periodeId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          submit: "avgodkjenn",
        });

        const request = new Request("http://localhost:3000", {
          method: "POST",
          body,
        });

        mockSession();

        const response = await action({ request, params: { ident: "1234" }, context: {} });

        expect(response).toEqual(
          redirect(
            "/saksbehandling/person/1234/rediger-periode/3fa85f64-5717-4562-b3fc-2c963f66afa6",
          ),
        );
      });

      test("burde feile hvis backend feiler", async () => {
        const body = new URLSearchParams({
          periodeId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          submit: "avgodkjenn",
        });

        const request = new Request("http://localhost:3000", {
          method: "POST",
          body,
        });

        server.use(
          rest.post(
            `${process.env.DP_RAPPORTERING_URL}/rapporteringsperioder/3fa85f64-5717-4562-b3fc-2c963f66afa6/avgodkjenn`,
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

        mockSession();

        const response = await catchErrorResponse(async () => {
          await action({ request, params: { ident: "1234" }, context: {} });
        });

        expect(response.status).toBe(500);
      });
    });
  });
});
