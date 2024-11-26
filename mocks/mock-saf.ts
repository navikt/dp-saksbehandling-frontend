import fs from "node:fs";
import path from "node:path";

import { graphql, http, HttpResponse } from "msw";

import { mockJournalposter } from "./data/mock-journalposter";

export const mockSaf = [
  graphql.query("journalpost", ({ variables }) => {
    const journalpost = mockJournalposter.find(
      (jp) => jp?.journalpostId === variables.journalpostId,
    );

    return HttpResponse.json({
      data: {
        journalpost: journalpost,
      },
    });
  }),

  http.get(
    `https://saf.dev-fss-pub.nais.io/rest/hentdokument/:journalpostId/:dokumentInfoId/:variantFormat`,
    () => {
      const buffer = fs.readFileSync(path.resolve(process.cwd(), "public", `sample.pdf`));
      return HttpResponse.arrayBuffer(buffer, {
        headers: {
          "Content-Type": "application/pdf",
        },
      });
    },
  ),
];
