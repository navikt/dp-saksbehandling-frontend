import { http, HttpResponse } from "msw";
import { mockSanity } from "./data/mock-sanity";

export const mockSanityServer = [
  // Hent sanity tekster
  http.get("https://rt6o382n.apicdn.sanity.io/v2021-06-06/data/query/production", () => {
    return HttpResponse.json(mockSanity);
  }),
];
