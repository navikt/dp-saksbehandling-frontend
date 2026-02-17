import type { PropsWithChildren } from "react";
import { createContext, useState } from "react";

import { IAlert } from "~/context/alert-context";
import { ISanityBrevMal, ISanityRegelmotorOpplysning } from "~/sanity/sanity-types";
import { isAlert } from "~/utils/type-guards";

import { components } from "../../openapi/melding-om-vedtak-typer";

interface IMeldingOmVedtakContext {
  meldingOmVedtak?: components["schemas"]["MeldingOmVedtakResponse"] | IAlert;
  sanityBrevMaler: ISanityBrevMal[];
  sanityRegelmotorOpplysninger: ISanityRegelmotorOpplysning[];
  utvidedeBeskrivelser: IUtvidetBeskrivelse[];
  oppdaterUtvidetBeskrivelse: (utvidetBeskrivelse: IUtvidetBeskrivelse) => void;
  opplysningPeriodeVerdier: IOpplysningPeriodeVerdi[];
  oppdaterOpplysningPeriodeVerdier: (verdi: IOpplysningPeriodeVerdi) => void;
}

type IUtvidetBeskrivelse = components["schemas"]["UtvidetBeskrivelse"];
export interface IOpplysningPeriodeVerdi {
  uuid: string;
  opplysningTypeId: string;
  verdi: string;
}

export const MeldingOmVedtakContext = createContext<IMeldingOmVedtakContext | undefined>(undefined);

export function MeldingOmVedtakProvider(
  props: PropsWithChildren<{
    meldingOmVedtak: components["schemas"]["MeldingOmVedtakResponse"] | IAlert;
    sanityBrevMaler: ISanityBrevMal[];
    sanityRegelmotorOpplysninger: ISanityRegelmotorOpplysning[];
  }>,
) {
  const [utvidedeBeskrivelser, setUtvidedeBeskrivelser] = useState<IUtvidetBeskrivelse[]>(
    (!isAlert(props.meldingOmVedtak) && props.meldingOmVedtak.utvidedeBeskrivelser) || [],
  );

  const [opplysningPeriodeVerdier, setOpplysningPeriodeVerdier] = useState<
    IOpplysningPeriodeVerdi[]
  >([]);

  function oppdaterUtvidetBeskrivelse(oppdatertBeskrivelse: IUtvidetBeskrivelse) {
    oppdaterListe(
      utvidedeBeskrivelser,
      oppdatertBeskrivelse,
      (beskrivelse) => beskrivelse.brevblokkId === oppdatertBeskrivelse.brevblokkId,
      setUtvidedeBeskrivelser,
    );
  }

  function oppdaterOpplysningPeriodeVerdier(opplysningPeriodeVerdi: IOpplysningPeriodeVerdi) {
    oppdaterListe(
      opplysningPeriodeVerdier,
      opplysningPeriodeVerdi,
      (periode) => periode.uuid === opplysningPeriodeVerdi.uuid,
      setOpplysningPeriodeVerdier,
    );
  }

  function oppdaterListe<T>(
    liste: T[],
    nyVerdi: T,
    finnMatch: (item: T) => boolean,
    setListe: (oppdatertListe: T[]) => void,
  ) {
    const oppdatertListe = [...liste];
    const eksisterendeIndex = oppdatertListe.findIndex(finnMatch);

    if (eksisterendeIndex !== -1) {
      oppdatertListe[eksisterendeIndex] = nyVerdi;
    } else {
      oppdatertListe.push(nyVerdi);
    }

    setListe(oppdatertListe);
  }

  return (
    <MeldingOmVedtakContext.Provider
      value={{
        sanityBrevMaler: props.sanityBrevMaler,
        sanityRegelmotorOpplysninger: props.sanityRegelmotorOpplysninger,
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
