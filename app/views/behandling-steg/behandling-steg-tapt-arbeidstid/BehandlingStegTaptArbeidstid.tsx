import React from "react";
import type { IBehandlingStegProps } from "../BehandlingSteg";
import { Alert, BodyShort, DatePicker, Heading, Select, useDatepicker } from "@navikt/ds-react";
import { InfoCard } from "~/components/info-card/InfoCard";
import { TextFieldWithSuffix } from "~/components/text-field-with-suffix/TextFieldWithSuffix";
import {
  mockArbeidsforholdAareg,
  mockArbeidsforholdSoknad,
  mockTaptArberidstid,
} from "~/views/behandling-steg/behandling-steg-tapt-arbeidstid/taptArbeidstidMockdata";
import { ArbeidsforholdList } from "~/components/arbeidsforhold/ArbeidsforholdList";

export interface ITaptArberidstidData {
  regel: { valg: string[]; valgt: string };
  soknadFakta: { svar: string; id: string }[];
  sisteArbeidsdatoAareg: string;
  taptArbeidstidProsent: number;
  oppfylt: boolean;
}

export function BehandlingStegTaptArbeidstid(props: IBehandlingStegProps) {
  const { datepickerProps, inputProps } = useDatepicker({
    onDateChange: console.log,
  });

  const oppgittVanligArbeidstid = mockTaptArberidstid.soknadFakta.find(
    (faktum) => faktum.id === "vanlig-arbeidstid",
  )?.svar;
  const oppgittSisteArbeidsdato = mockTaptArberidstid.soknadFakta.find(
    (faktum) => faktum.id === "siste-arbeidsdato",
  )?.svar;

  return (
    <div>
      <Heading size="large">Vurder vilkår om tap av arbeidstid</Heading>

      <BodyShort>
        For at medlemmet skal få rett til dagpenger, må vanlig arbeidstid være redusert med minst 50
        prosent. Eller at man oppfyller kravene til unntak. Les mer om i Rundskrivet § 4-3. Tap av
        arbeidsinntekt og arbeidstid og forskriften om dagpenger § 11-2. beregning av vanlig
        arbeidstid
      </BodyShort>

      <Select className="my-4" label="Regel">
        {mockTaptArberidstid.regel.valg.map((verdi) => (
          <option key={verdi} value={verdi}>
            {verdi}
          </option>
        ))}
      </Select>

      <InfoCard className={"my-4"}>
        <Heading size={"xsmall"}>Svar fra søknad</Heading>
        <BodyShort>{oppgittVanligArbeidstid}</BodyShort>
      </InfoCard>

      <DatePicker className="my-4" {...datepickerProps}>
        <DatePicker.Input {...inputProps} label="Siste arbeidstidsreduksjon" />
      </DatePicker>

      <InfoCard className={"my-4"}>
        <BodyShort>Siste dato oppgitt i søknad: {oppgittSisteArbeidsdato}</BodyShort>
        <BodyShort>
          Siste dato hentet fra Aa-registeret: {mockTaptArberidstid.sisteArbeidsdatoAareg}
        </BodyShort>
      </InfoCard>

      <TextFieldWithSuffix
        className="my-4"
        suffix={"timer"}
        label={"Nåværende arbeidstid"}
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
      />

      <TextFieldWithSuffix
        className="my-4"
        suffix={"timer"}
        label={"Ønsket arbeidstid"}
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
      />

      <TextFieldWithSuffix
        className="my-4"
        suffix={"timer"}
        label={"Fastsatt vanlig arbeidstid"}
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
      />

      <BodyShort>Tapt arbeidstid = {mockTaptArberidstid.taptArbeidstidProsent} %</BodyShort>

      {mockTaptArberidstid.oppfylt ? (
        <Alert variant={"success"}>Vilkåret om tapt arbeidstid på minimum 50% er oppfylt</Alert>
      ) : (
        <Alert variant={"error"}>Vilkåret om tapt arbeidstid på minimum 50% er ikke oppfylt</Alert>
      )}

      <ArbeidsforholdList
        arbeidsforholdSoknad={mockArbeidsforholdAareg}
        arbeidsforholdAAreg={mockArbeidsforholdSoknad}
      />
    </div>
  );
}
