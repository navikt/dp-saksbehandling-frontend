import type { IMeldingOmVedtak } from "~/models/melding-om-vedtak.server";

interface IProps {
  meldingOmVedtak: IMeldingOmVedtak;
}

export function MeldingOmVedtakPreview({ meldingOmVedtak }: IProps) {
  return <div dangerouslySetInnerHTML={{ __html: meldingOmVedtak.html }} />;
}
