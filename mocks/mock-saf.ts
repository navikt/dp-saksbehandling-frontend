import fs from "node:fs";
import path from "node:path";

import { graphql } from "msw/graphql";
import { http, HttpResponse } from "msw/http";
import { delay } from "msw/utils/delay";

import { mockJournalposter } from "./data/mock-journalposter";

const api = graphql.link("http://localhost:3000/graphql");

export const mockSaf = [
  api.query("journalpost", async ({ variables }) => {
    await delay();
    const journalpost = mockJournalposter.find(
      (jp) => jp?.journalpostId === variables.journalpostId,
    );

    return HttpResponse.json({
      data: { journalpost },
    });
  }),

  http.get(
    `https://saf.dev-fss-pub.nais.io/rest/hentdokument/:journalpostId/:dokumentInfoId/:variantFormat`,
    async () => {
      await delay();
      const buffer = fs.readFileSync(path.resolve(process.cwd(), "public", `sample.pdf`)).buffer;
      return HttpResponse.arrayBuffer(buffer, {
        headers: {
          "Content-Type": "application/pdf",
        },
      });
    },
  ),
];
