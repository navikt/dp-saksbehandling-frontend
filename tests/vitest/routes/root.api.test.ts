// @vitest-environment node

import { describe, expect, test } from "vitest";
import { catchErrorResponse } from "../helpers/response-helper";
import { loader } from "~/routes/_oppgaver._index";

describe("Root til applikasjonen", () => {
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
