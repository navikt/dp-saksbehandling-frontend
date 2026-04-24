import { components } from "@/openapi/saksbehandling-typer";

export const mockTilbakekreving: components["schemas"]["Tilbakekreving"] = {
  tilbakekrevingBehandlingId: "0198c672-222d-7701-a986-76b0ca6b225d",
  sakOpprettet: "2025-06-23T13:21:35.602787",
  behandlingsstatus: "TIL_BEHANDLING",
  totaltFeilutbetaltBelop: 12500,
  saksbehandlingURL:
    "https://tilbakekreving.intern.dev.nav.no/behandling/0198c672-222d-7701-a986-76b0ca6b225d",
  fullstendigPeriode: {
    fom: "2025-01-01",
    tom: "2025-03-31",
  },
};
