import { components } from "openapi/melding-om-vedtak-typer";
import { useEffect, useRef } from "react";

interface IProps {
  html: string;
  utvidedeBeskrivelser: components["schemas"]["UtvidetBeskrivelse"][];
}

export function MeldingOmVedtakPreview({ html, utvidedeBeskrivelser }: IProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.innerHTML = html;
    }
  }, []);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    utvidedeBeskrivelser.forEach((utvidetBeskrivelse) => {
      const brevBlokkDiv = containerRef.current?.querySelector<HTMLElement>(
        `[data-utvidet-beskrivelse-id="${utvidetBeskrivelse.brevblokkId}"]`,
      );

      if (brevBlokkDiv) {
        const lines = utvidetBeskrivelse.tekst?.split(/\r\n|\r|\n|\u2028|\u2029/);
        if (lines) {
          brevBlokkDiv.innerHTML = "";
          lines.forEach((line) => {
            const textNode = document.createTextNode(line);
            brevBlokkDiv.appendChild(textNode);
            brevBlokkDiv.appendChild(document.createElement("br"));
          });
        }
      }
    });
  }, [utvidedeBeskrivelser]);

  return <div ref={containerRef} />;
}
