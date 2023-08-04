// @vitest-environment node
import { redirect } from "@remix-run/node";
import { rest } from "msw";
import { afterAll, afterEach, beforeAll, describe, expect, test } from "vitest";
import { action, loader } from "~/routes/saksbehandling.person.$ident.rediger-periode.$periodeId";
import { mockRapporteringsperioder } from "../../mocks/api-routes/rapporteringsperiodeResponse";
import { server } from "../../mocks/server";
import { endSessionMock, mockSession } from "./helpers/auth-helper";
import { catchErrorResponse } from "./helpers/response-helper";

describe("Rediger rapporteringsperiode", () => {
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
            params: { ident: "1234", periodeId: "3fa85f64-5717-4562-b3fc-2c963f66afa6" },
            context: {},
          }),
      );

      expect(response.status).toBe(500);
    });

    test("skal hente en rapporteringsperiode", async () => {
      const mock = mockSession();

      const response = await loader({
        request: new Request("http://localhost:3000"),
        params: { ident: "1234", periodeId: "3fa85f64-5717-4562-b3fc-2c963f66afa6" },
        context: {},
      });

      const data = await response.json();

      expect(mock.getAzureSession).toHaveBeenCalledTimes(1);
      expect(response.status).toBe(200);
      expect(data.rapporteringsperiode).toEqual(mockRapporteringsperioder[0]);
    });

    test("skal feile hvis backend-kallet feiler", async () => {
      server.use(
        rest.get(
          `${process.env.DP_RAPPORTERING_URL}/rapporteringsperioder/3fa85f64-5717-4562-b3fc-2c963f66afa6`,
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
            params: { ident: "1234", periodeId: "3fa85f64-5717-4562-b3fc-2c963f66afa6" },
            context: {},
          }),
      );

      expect(response.status).toBe(500);
    });
  });

  describe("Action", () => {
    describe("Lagre aktivitet", () => {
      test("burde feile hvis bruker ikke er autentisert", async () => {
        const body = new URLSearchParams({
          periodeId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          dato: "2023-01-06",
          aktivitetstype: "Syk",
          timer: "2",
          submit: "lagre-aktivitet",
        });

        const request = new Request("http://localhost:3000", {
          method: "POST",
          body,
        });

        const response = await catchErrorResponse(async () => {
          await action({
            request,
            params: { ident: "1234", periodeId: "3fa85f64-5717-4562-b3fc-2c963f66afa6" },
            context: {},
          });
        });

        expect(response.status).toBe(500);
      });

      test("burde lagre aktivitet", async () => {
        const body = new URLSearchParams({
          periodeId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          dato: "2023-01-06",
          aktivitetstype: "Syk",
          timer: "2",
          submit: "lagre-aktivitet",
        });

        const request = new Request("http://localhost:3000", {
          method: "POST",
          body,
        });

        mockSession();

        const response = await action({
          request,
          params: { ident: "1234", periodeId: "3fa85f64-5717-4562-b3fc-2c963f66afa6" },
          context: {},
        });

        const data = await response?.json();

        expect(data && data.aktivitetSuccess).toBeTruthy();
      });

      test("burde feile hvis backend feiler", async () => {
        const body = new URLSearchParams({
          periodeId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          dato: "2023-01-06",
          aktivitetstype: "Syk",
          timer: "2",
          submit: "lagre-aktivitet",
        });

        const request = new Request("http://localhost:3000", {
          method: "POST",
          body,
        });

        mockSession();

        server.use(
          rest.post(
            `${process.env.DP_RAPPORTERING_URL}/rapporteringsperioder/3fa85f64-5717-4562-b3fc-2c963f66afa6/aktivitet`,
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

        const response = await catchErrorResponse(
          async () =>
            await action({
              request,
              params: { ident: "1234", periodeId: "3fa85f64-5717-4562-b3fc-2c963f66afa6" },
              context: {},
            }),
        );

        expect(response.status).toBe(500);
      });
    });

    describe("Slette aktivitet", () => {
      test("burde feile hvis bruker ikke er autentisert", async () => {
        const body = new URLSearchParams({
          periodeId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          aktivitetId: "4a49e571-6384-4eab-9c2e-3f4d48d30b9a",
          submit: "slette-aktivitet",
        });

        const request = new Request("http://localhost:3000", {
          method: "POST",
          body,
        });

        const response = await catchErrorResponse(async () => {
          await action({
            request,
            params: { ident: "1234", periodeId: "3fa85f64-5717-4562-b3fc-2c963f66afa6" },
            context: {},
          });
        });

        expect(response.status).toBe(500);
      });

      test("burde slette aktivitet", async () => {
        const body = new URLSearchParams({
          periodeId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          aktivitetId: "4a49e571-6384-4eab-9c2e-3f4d48d30b9a",
          submit: "slette-aktivitet",
        });

        const request = new Request("http://localhost:3000", {
          method: "POST",
          body,
        });

        mockSession();

        const response = await action({
          request,
          params: { ident: "1234", periodeId: "3fa85f64-5717-4562-b3fc-2c963f66afa6" },
          context: {},
        });

        const data = await response?.json();

        expect(data && data.aktivitetSuccess).toBeTruthy();
      });

      test("burde feile hvis backend feiler", async () => {
        const body = new URLSearchParams({
          periodeId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          aktivitetId: "4a49e571-6384-4eab-9c2e-3f4d48d30b9a",
          submit: "slette-aktivitet",
        });

        const request = new Request("http://localhost:3000", {
          method: "POST",
          body,
        });

        mockSession();

        server.use(
          rest.delete(
            `${process.env.DP_RAPPORTERING_URL}/rapporteringsperioder/3fa85f64-5717-4562-b3fc-2c963f66afa6/aktivitet/4a49e571-6384-4eab-9c2e-3f4d48d30b9a`,
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

        const response = await catchErrorResponse(
          async () =>
            await action({
              request,
              params: { ident: "1234", periodeId: "3fa85f64-5717-4562-b3fc-2c963f66afa6" },
              context: {},
            }),
        );

        expect(response.status).toBe(500);
      });
    });

    describe("Godkjenn periode", () => {
      test("burde feile hvis bruker ikke er autentisert", async () => {
        const body = new URLSearchParams({
          periodeId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          begrunnelse: "Endret etter melding fra bruker",
          submit: "godkjenne-periode",
        });

        const request = new Request("http://localhost:3000", {
          method: "POST",
          body,
        });

        const response = await catchErrorResponse(async () => {
          await action({
            request,
            params: { ident: "1234", periodeId: "3fa85f64-5717-4562-b3fc-2c963f66afa6" },
            context: {},
          });
        });

        expect(response.status).toBe(500);
      });

      test("burde kunne godkjenne og redirecte til riktig side", async () => {
        const body = new URLSearchParams({
          periodeId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          begrunnelse: "Endret etter melding fra bruker",
          submit: "godkjenne-periode",
        });

        const request = new Request("http://localhost:3000", {
          method: "POST",
          body,
        });

        mockSession();

        const response = await action({
          request,
          params: { ident: "1234", periodeId: "3fa85f64-5717-4562-b3fc-2c963f66afa6" },
          context: {},
        });

        expect(response).toEqual(
          redirect("/saksbehandling/person/1234/oversikt/rapportering-og-utbetaling"),
        );
      });

      test("burde feile hvis backend feiler", async () => {
        const body = new URLSearchParams({
          periodeId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          begrunnelse: "Endret etter melding fra bruker",
          submit: "godkjenne-periode",
        });

        const request = new Request("http://localhost:3000", {
          method: "POST",
          body,
        });

        server.use(
          rest.post(
            `${process.env.DP_RAPPORTERING_URL}/rapporteringsperioder/3fa85f64-5717-4562-b3fc-2c963f66afa6/godkjenn`,
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
          await action({
            request,
            params: { ident: "1234", periodeId: "3fa85f64-5717-4562-b3fc-2c963f66afa6" },
            context: {},
          });
        });

        expect(response.status).toBe(500);
      });
    });
  });
});
