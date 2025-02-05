import { useEffect } from "react";

import { IUtvidetBeskrivelse } from "~/context/melding-om-vedtak-context";
import type { IMeldingOmVedtak } from "~/models/melding-om-vedtak.server";

interface IProps {
  meldingOmVedtak: IMeldingOmVedtak;
  utvidetBeskrivelser: IUtvidetBeskrivelse[];
}

export function MeldingOmVedtakPreview({ meldingOmVedtak, utvidetBeskrivelser }: IProps) {
  const { html } = meldingOmVedtak;
  useEffect(() => {
    utvidetBeskrivelser.forEach((utvidetBeskrivelse) => {
      const brevBlokkDiv = document.querySelector(
        `[data-utvidet-beskrivelse-id="${utvidetBeskrivelse.brevblokkId}"]`,
      );
      if (brevBlokkDiv) {
        const lines = utvidetBeskrivelse.tekst
          ?.replace(/\r\n/g, "\n")
          ?.replace(/\r/g, "\n")
          ?.replace(/\u2028/g, "\n")
          ?.replace(/\u2029/g, "\n")
          ?.split("\n");

        if (lines) {
          brevBlokkDiv.innerHTML = ""; // Clear existing content
          lines.forEach((line) => {
            const textNode = document.createTextNode(line);
            brevBlokkDiv.appendChild(textNode);
            brevBlokkDiv.appendChild(document.createElement("br"));
          });
        }
      }
    });
  }, [utvidetBeskrivelser]);
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
