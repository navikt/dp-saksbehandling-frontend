import { graphql, HttpResponse } from "msw";
import { mockPerson } from "./data/mock-person";

export const mockPdl = [
  graphql.query("hentPerson", () => {
    return HttpResponse.json({
      data: {
        hentPerson: mockPerson,
      },
    });
  }),
];
