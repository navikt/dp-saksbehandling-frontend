// @vitest-environment node

import { http, HttpResponse } from "msw";
import { afterAll, afterEach, beforeAll, describe, expect, test } from "vitest";
import { mockServer } from "../../../mocks/mock-server";
import { catchErrorResponse } from "../helpers/response-helper";
import { loader } from "~/routes/_oppgaver._index";

describe("Root til applikasjonen", () => {
  beforeAll(() => mockServer.listen({ onUnhandledRequest: "error" }));
  afterAll(() => mockServer.close());
  afterEach(() => {
    mockServer.resetHandlers();
  });

  describe("Loader", () => {
    const testParams = {};

    test.skip("skal feile hvis bruker ikke er logget på", async () => {
      const response = await catchErrorResponse(() =>
        loader({
          request: new Request("http://localhost:3000"),
          params: testParams,
          context: {},
        }),
      );

      expect(response.status).toBe(500);
    });

    test.skip("skal feile hvis backend-kallet feiler", async () => {
      mockServer.use(
        http.get(`${process.env.DP_SAKSBEHANDLING_URL}/oppgave`, () => {
          return new HttpResponse(JSON.stringify({ errorMessage: `Server Error` }), {
            status: 500,
          });
        }),
      );

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
});
