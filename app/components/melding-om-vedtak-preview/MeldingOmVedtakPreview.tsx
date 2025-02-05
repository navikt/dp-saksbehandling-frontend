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
        brevBlokkDiv.textContent = utvidetBeskrivelse.tekst
          ?.replace(/\r\n/g, "<br/>")
          ?.replace(/\r/g, "<br/>")
          ?.replace(/\n/g, "<br/>")
          ?.replace(/\u2028/g, "<br/>")
          ?.replace(/\u2029/g, "<br/>");
      }
    });
  }, [utvidetBeskrivelser]);
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
