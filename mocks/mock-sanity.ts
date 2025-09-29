import { bypass, http, HttpResponse } from "msw";

export const mockSanity = [
  http.get("https://rt6o382n.api.sanity.io/v2024-06-20/data/query*", async ({ request }) => {
    const response = await fetch(bypass(request));
    const sanityData = await response.json();

    return HttpResponse.json(sanityData);
  }),
];
