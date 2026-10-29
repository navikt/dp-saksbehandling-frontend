import { graphql } from "msw/graphql";
import { HttpResponse } from "msw/http";

import { mockPdlPerson } from "./mock-pdl-person";

const api = graphql.link("http://localhost:3000/graphql");

export const mockPdl = [
  api.query("hentPerson", () => {
    return HttpResponse.json({
      data: {
        hentPerson: mockPdlPerson,
      },
    });
  }),
];
