import fs from "node:fs";
import path from "node:path";
import { graphql, http, HttpResponse } from "msw";
import { mockJournalpost } from "./data/mock-journalpost";

export const mockSaf = [
  graphql.query("journalpost", () => {
    return HttpResponse.json({
      data: {
        journalpost: mockJournalpost,
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
