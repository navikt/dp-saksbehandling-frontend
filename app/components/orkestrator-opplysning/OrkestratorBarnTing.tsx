import { IOrkestratorOpplysningBarn } from "../../../mocks/data/mock-orkestrator-opplysning-barn";
import { DatePicker, Radio, RadioGroup, Select, Tag } from "@navikt/ds-react";
import { ReactNode } from "react";

interface IProps {
  barnIndex: number;
  barnOpplysning: IOrkestratorOpplysningBarn;
}

const labels = {
  fornavnOgMellomnavn: "Fornavn",
  etternavn: "Etternavn",
  fødselsdato: "Fødselsdato",
  oppholdssted: "Oppholdssted",
  forsørgerBarnet: "Forsørger barnet",
  girBarnetillegg: "Rett til barnetillegg",
  periode: "Periode",
  begrunnelse: "Begrunnelse",
  endretAv: "Endret av",
};

const VisRegisterbarnTing = ({ barnIndex, barnOpplysning }: IProps) => {
  return (
    <div>
      <BarnRad label={labels.fornavnOgMellomnavn} fraRegister>
        <p>{barnOpplysning.fornavnOgMellomnavn}</p>
      </BarnRad>

      <BarnRad label={labels.etternavn} fraRegister>
        <p>{barnOpplysning.etternavn}</p>
      </BarnRad>

      <BarnRad label={labels.fødselsdato} fraRegister>
        <p>{barnOpplysning.fødselsdato}</p>
      </BarnRad>

      <BarnRad label={labels.oppholdssted} fraRegister>
        <Select label="" readOnly hideLabel>
          <option>{barnOpplysning.oppholdssted}</option>
        </Select>
      </BarnRad>

      <BarnRad label={labels.forsørgerBarnet} fraRegister={false}>
        <RadioGroup legend="" readOnly hideLegend className="flexgreier">
          <Radio value="ja" checked={barnOpplysning.forsørgerBarnet}>
            Ja
          </Radio>
          <Radio value="nei" checked={!barnOpplysning.forsørgerBarnet}>
            Nei
          </Radio>
        </RadioGroup>
      </BarnRad>

      <BarnRad label={labels.periode} fraRegister>
        <div>
          <DatePicker {...datepickerProps}>
            <DatePicker.Input {...inputProps} label="Fra" readOnly />
          </DatePicker>

          <DatePicker {...tomDatepickerProps}>
            <DatePicker.Input {...tomInputProps} label="Til" readOnly />
          </DatePicker>
        </div>
      </BarnRad>

      <BarnRad label={labels.begrunnelse} fraRegister>
        <p>{barnOpplysning.begrunnelse}</p>
      </BarnRad>

      <div className="rad">
        <p>
          <b>{labels.girBarnetillegg}</b>
        </p>
        <p>
          <b>{barnOpplysning.girBarnetillegg ? "Ja" : "Nei"}</b>
        </p>
      </div>
    </div>
  );
};

const BarnRad = ({
  label,
  fraRegister,
  children,
}: {
  label: string;
  fraRegister: boolean;
  children: ReactNode;
}) => {
  return (
    <div className="rad">
      <p>{label}</p>
      {children}
      <BarnTag fraRegister={fraRegister} />
    </div>
  );
};

const BarnTag = ({ fraRegister }: { fraRegister: boolean }) => {
  return (
    <Tag variant={fraRegister ? "alt1" : "warning"} size="small">
      {fraRegister ? "register" : "søknad"}
    </Tag>
  );
};
