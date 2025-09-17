import fs from "node:fs";
import path from "node:path";

import { delay, graphql, http, HttpResponse } from "msw";

import { logger } from "~/utils/logger.utils";

import { mockJournalposter } from "./data/mock-journalposter";

export const mockSaf = [
  graphql.query("journalpost", async ({ request, variables }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);
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
    async ({ request }) => {
      logger.info(`[MSW]-${request.method} ${request.url}`);
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
