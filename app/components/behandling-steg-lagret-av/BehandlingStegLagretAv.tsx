import { BodyShort } from "@navikt/ds-react";
import { type IBehandlingSteg } from "~/models/oppgave.server";
import { hentFormattertDato } from "~/utils/dato.utils";

interface IProps {
  steg: IBehandlingSteg;
}

export function BehandlingStegLagretAv(props: IProps) {
  const { steg } = props;

  if (steg.svar?.begrunnelse?.kilde === "Saksbehandler" && steg.svar?.begrunnelse.utført) {
    return (
      <BodyShort>
        Sist endret: {hentFormattertDato(steg.svar.begrunnelse.utført, true)} av:{" "}
        {steg.svar.begrunnelse.utførtAv?.ident}
      </BodyShort>
    );
  }
}
