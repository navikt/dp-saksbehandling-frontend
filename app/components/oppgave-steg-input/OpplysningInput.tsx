import type { IOppgaveStegOpplysning } from "~/models/oppgave.server";
import { OppgaveStegInput } from "~/components/oppgave-steg-input/OppgaveStegInput";

export function OpplysningInput(props: IOppgaveStegOpplysning) {
  const { opplysningNavn, opplysningType, svar } = props;
  const tekst = TekstForOpplysning(opplysningNavn);
  return (
    <OppgaveStegInput
      name={opplysningNavn}
      svartype={opplysningType}
      verdi={svar?.verdi}
      label={tekst.label}
      description={tekst.description}
    />
  );
}

function TekstForOpplysning(opplysningNavn: string): IOpplysningTekst {
  return (
    opplysningTekster.find((tekst) => {
      return tekst.name === opplysningNavn;
    }) || { name: opplysningNavn, label: opplysningNavn, description: "" } // default hvis det ikke er lagt inn tekster
  );
}
interface IOpplysningTekst {
  name: string;
  label: string;
  description: string;
}

const opplysningTekster: IOpplysningTekst[] = [
  {
    name: "EØS-arbeid",
    label: "EØS-arbeid",
    description:
      "Sjekk om det er inntekter fra arbeid i EØS som ikke har blitt tatt med i grunnlaget.",
  },
  {
    name: "Jobb utenfor Norge",
    label: "Jobb utenfor Norge",
    description: "Sjekk om det er inntekter utenfor Norge.",
  },
  {
    name: "Svangerskapsrelaterte sykepenger",
    label: "Svangerskapsrelaterte sykepenger",
    description: "Sjekk om det er svangerskapsrelaterte sykepenger.",
  },
  {
    name: "Mulig gjenopptak",
    label: "Mulig gjenopptak",
    description: "Sjekk om det er grunnlag for et gjenopptak for denne personen.",
  },
  {
    name: "Har hatt lukkede saker siste 8 uker",
    label: "Har hatt lukkede saker siste 8 uker",
    description:
      "Sjekk om søker har fått avslag om dagpenger nylig. Skal i så fall ikke få automatisk behandling.",
  },
  {
    name: "Det er inntekt neste kalendermåned",
    label: "Det er inntekt neste kalendermåned",
    description:
      "Sjekk om det er inntekter neste kalendermåned som kan påvirke utfallet for avslag på minsteinntekt.",
  },
];
