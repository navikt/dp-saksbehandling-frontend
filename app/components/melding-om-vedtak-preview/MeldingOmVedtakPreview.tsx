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
    console.log(utvidetBeskrivelser);

    utvidetBeskrivelser.forEach((utvidetBeskrivelse) => {
      const brevBlokkDiv = document.querySelector(
        `[data-utvidet-beskrivelse-id="${utvidetBeskrivelse.brevblokkId}"]`,
      );
      console.log(brevBlokkDiv);
      if (brevBlokkDiv) {
        brevBlokkDiv.textContent = utvidetBeskrivelse.tekst;
      }
    });
  }, [utvidetBeskrivelser]);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
