import fs from "node:fs";
import path from "node:path";

import { graphql, http, HttpResponse } from "msw";

import { logger } from "~/utils/logger.utils";

import { mockJournalposter } from "./data/mock-journalposter";

export const mockSaf = [
  graphql.query("journalpost", ({ request, variables }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);
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
    ({ request }) => {
      logger.info(`[MSW]-${request.method} ${request.url}`);
      const buffer = fs.readFileSync(path.resolve(process.cwd(), "public", `sample.pdf`));
      return HttpResponse.arrayBuffer(buffer, {
        headers: {
          "Content-Type": "application/pdf",
        },
      });
    },
  ),
];
