import { components } from "openapi/melding-om-vedtak-typer";
import { useEffect, useRef } from "react";

import { useSaksbehandler } from "~/hooks/useSaksbehandler";

interface IProps {
  html: string;
  utvidedeBeskrivelser: components["schemas"]["UtvidetBeskrivelse"][];
}

export function MeldingOmVedtakPreview({ html, utvidedeBeskrivelser }: IProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { skjulSensitiveOpplysninger } = useSaksbehandler();

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.innerHTML = skjulSensitiveOpplysninger ? maskerSensitivHtml(html) : html;
    }
  }, [skjulSensitiveOpplysninger]);

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

function maskerSensitivHtml(html: string): string {
  // Bytt innhold etter "Navn:"
  html = html.replace(/Navn:([^\n]*)/g, (match, group1) => {
    const sanitized = group1.replace(/[^\s]/g, "*");
    return `Navn:${sanitized}`;
  });

  // Bytt innhold etter "Fødseslnummer:"
  html = html.replace(/Fødselsnummer:([^\n]*)/g, (match, group1) => {
    const sanitized = group1.replace(/[^\s]/g, "*");
    return `Fødselsnummer:${sanitized}`;
  });

  return html;
}
