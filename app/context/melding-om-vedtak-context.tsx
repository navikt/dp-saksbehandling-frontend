import type { PropsWithChildren } from "react";
import { createContext, useEffect, useState } from "react";

import { IAlert } from "~/context/alert-context";
import { isAlert } from "~/utils/type-guards";

import { components } from "../../openapi/saksbehandling-typer";

interface IMeldingOmVedtakContext {
  meldingOmVedtak?: components["schemas"]["MeldingOmVedtakResponse"] | IAlert;
  utvidedeBeskrivelser: IUtvidetBeskrivelse[];
  oppdaterUtvidetBeskrivelse: (utvidetBeskrivelse: IUtvidetBeskrivelse) => void;
  opplysningPeriodeVerdier: IOpplysningPeriodeVerdi[];
  oppdaterOpplysningPeriodeVerdier: (verdi: IOpplysningPeriodeVerdi) => void;
}

type IUtvidetBeskrivelse = components["schemas"]["MeldingOmVedtakUtvidetBeskrivelse"];
export interface IOpplysningPeriodeVerdi {
  uuid: string;
  opplysningTypeId: string;
  verdi: string;
}

export const MeldingOmVedtakContext = createContext<IMeldingOmVedtakContext | undefined>(undefined);

export function MeldingOmVedtakProvider(
  props: PropsWithChildren<{
    meldingOmVedtak: components["schemas"]["MeldingOmVedtakResponse"] | IAlert;
  }>,
) {
  const [utvidedeBeskrivelser, setUtvidedeBeskrivelser] = useState<IUtvidetBeskrivelse[]>(
    (!isAlert(props.meldingOmVedtak) && props.meldingOmVedtak.utvidedeBeskrivelser) || [],
  );

  const [opplysningPeriodeVerdier, setOpplysningPeriodeVerdier] = useState<
    IOpplysningPeriodeVerdi[]
  >([]);

  useEffect(() => {
    setUtvidedeBeskrivelser(
      (!isAlert(props.meldingOmVedtak) && props.meldingOmVedtak.utvidedeBeskrivelser) || [],
    );
    setOpplysningPeriodeVerdier([]);
  }, [props.meldingOmVedtak]);

  function oppdaterUtvidetBeskrivelse(oppdatertBeskrivelse: IUtvidetBeskrivelse) {
    setUtvidedeBeskrivelser((gjeldendeListe) => {
      const oppdatertListe = [...gjeldendeListe];
      const eksisterendeIndex = oppdatertListe.findIndex(
        (beskrivelse) => beskrivelse.brevblokkId === oppdatertBeskrivelse.brevblokkId,
      );

      if (eksisterendeIndex !== -1) {
        oppdatertListe[eksisterendeIndex] = oppdatertBeskrivelse;
      } else {
        oppdatertListe.push(oppdatertBeskrivelse);
      }

      return oppdatertListe;
    });
  }

  function oppdaterOpplysningPeriodeVerdier(opplysningPeriodeVerdi: IOpplysningPeriodeVerdi) {
    setOpplysningPeriodeVerdier((gjeldendeListe) => {
      const oppdatertListe = [...gjeldendeListe];
      const eksisterendeIndex = oppdatertListe.findIndex(
        (periode) => periode.uuid === opplysningPeriodeVerdi.uuid,
      );

      if (eksisterendeIndex !== -1) {
        oppdatertListe[eksisterendeIndex] = opplysningPeriodeVerdi;
      } else {
        oppdatertListe.push(opplysningPeriodeVerdi);
      }

      return oppdatertListe;
    });
  }

  return (
    <MeldingOmVedtakContext.Provider
      value={{
        meldingOmVedtak: props.meldingOmVedtak,
        utvidedeBeskrivelser,
        oppdaterUtvidetBeskrivelse,
        opplysningPeriodeVerdier,
        oppdaterOpplysningPeriodeVerdier,
      }}
    >
      {props.children}
    </MeldingOmVedtakContext.Provider>
  );
}
