import { components } from "openapi/melding-om-vedtak-typer";
import { useEffect } from "react";

interface IProps {
  meldingOmVedtak: components["schemas"]["MeldingOmVedtakResponse"];
}

export function MeldingOmVedtakPreview({ meldingOmVedtak }: IProps) {
  const { html, utvidedeBeskrivelser } = meldingOmVedtak;

  useEffect(() => {
    utvidedeBeskrivelser?.forEach((utvidetBeskrivelse) => {
      const brevBlokkDiv = document.querySelector(
        `[data-utvidet-beskrivelse-id="${utvidetBeskrivelse.brevblokkId}"]`,
      );
      if (brevBlokkDiv) {
        const lines = utvidetBeskrivelse.tekst?.split(/\r\n|\r|\n|\u2028|\u2029/);
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
  }, [utvidedeBeskrivelser]);

  // @ts-expect-error TODO: Typefeil i dp-melding-om-vedtak
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
