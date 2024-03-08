import fs from "node:fs";
import path from "node:path";
import { http, HttpResponse } from "msw";

export const mockSaf = [
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
