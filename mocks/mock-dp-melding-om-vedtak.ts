import { http, HttpResponse } from "msw";
import { logger } from "~/utils/logger.utils";
import { mockMeldingerOmVedtak } from "./data/mock-melding-om-vedtak";

export const mockDpMeldingOmVedtak = [
  // Hent melding om vedtak for behandlingId
  http.get(
    `${process.env.DP_MELDING_OM_VEDTAK_URL}/melding-om-vedtak/:behandlingId`,
    ({ params }) => {
      const { behandlingId } = params;
      logger.info(
        `[MSW]-GET ${process.env.DP_MELDING_OM_VEDTAK_URL}/melding-om-vedtak/${behandlingId}`,
      );

      const meldingOmVedtak = mockMeldingerOmVedtak.find(
        (melding) => melding.behandlingId === behandlingId,
      );

      if (!meldingOmVedtak) {
        return new HttpResponse(null, {
          status: 404,
        });
      }

      return HttpResponse.json(meldingOmVedtak.melding);
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
