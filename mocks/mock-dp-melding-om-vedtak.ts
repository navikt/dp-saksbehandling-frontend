import { http, HttpResponse } from "msw";
import { logger } from "~/utils/logger.utils";
import { mockMeldingOmVedtak } from "./data/mock-melding-om-vedtak";

export const mockDpMeldingOmVedtak = [
  // Hent melding om vedtak for behandlingId
  http.get(
    `${process.env.DP_MELDING_OM_VEDTAK_URL}/melding-om-vedtak/:behandlingId`,
    ({ params }) => {
      const { behandlingId } = params;
      logger.info(
        `[MSW]-GET ${process.env.DP_MELDING_OM_VEDTAK}/melding-om-vedtak/${behandlingId}`,
      );

      return HttpResponse.json(mockMeldingOmVedtak);
    },
  ),

  // Lagre utvidet beskrivelse tekst
  http.put(
    `${process.env.DP_MELDING_OM_VEDTAK_URL}/melding-om-vedtak/:behandlingId/:brevblokkId/utvidet-beskrivelse`,
    ({ params }) => {
      const { behandlingId, brevblokkId } = params;
      logger.info(
        `[MSW]-GET ${process.env.DP_MELDING_OM_VEDTAK}/melding-om-vedtak/${behandlingId}/${brevblokkId}/utvidet-beskrivelse`,
      );

      return HttpResponse.json({ sistEndretTidspunkt: new Date().toISOString() });
    },
  ),
];
