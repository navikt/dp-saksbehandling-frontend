import { graphql, HttpResponse } from "msw";

import { mockPdlPerson } from "./mock-pdl-person";

export const mockPdl = [
  graphql.query("hentPerson", () => {
    return HttpResponse.json({
      data: {
        hentPerson: mockPdlPerson,
      },
    });
  }),
];
