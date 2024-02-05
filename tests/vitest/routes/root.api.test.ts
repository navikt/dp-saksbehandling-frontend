// @vitest-environment node

import { http, HttpResponse } from "msw";
import { afterAll, afterEach, beforeAll, describe, expect, test } from "vitest";
import { mockServer } from "../../../mocks/mock-server";
import { endSessionMock, mockSession } from "../helpers/auth-helper";
import { catchErrorResponse } from "../helpers/response-helper";
import { loader } from "~/routes/saksbehandling";
import { mockOppgaver } from "../../../mocks/data/mock-oppgaver";

describe("Root til applikasjonen", () => {
  beforeAll(() => mockServer.listen({ onUnhandledRequest: "error" }));
  afterAll(() => mockServer.close());
  afterEach(() => {
    mockServer.resetHandlers();
    endSessionMock();
  });

  describe("Loader", () => {
    const testParams = {};

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

    test("skal feile hvis backend-kallet feiler", async () => {
      mockServer.use(
        http.get(`${process.env.DP_BEHANDLING_URL}/oppgave`, () => {
          return new HttpResponse(JSON.stringify({ errorMessage: `Server Error` }), {
            status: 500,
          });
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

    test("skal hente ut alle oppgaver i saksbehandlingssystemet", async () => {
      const mock = mockSession();

      const response = await loader({
        request: new Request("http://localhost:3000"),
        params: testParams,
        context: {},
      });

      const data = await response.json();

      expect(mock.getAzureSession).toHaveBeenCalledTimes(1);
      expect(response.status).toBe(200);
      expect(data.oppgaver).toEqual(mockOppgaver);
    });
  });
});
