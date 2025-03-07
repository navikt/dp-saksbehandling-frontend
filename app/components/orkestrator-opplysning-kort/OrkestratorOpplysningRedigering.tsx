import {
  DatePicker,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
  useDatepicker,
} from "@navikt/ds-react";

import {
  hentFormatertOpplysninigsverdi as hentFormatertOpplysningVerdi,
  hentOrkestratorOpplysningVisningTekst as hentOrkestratorOpplysningLabel,
} from "~/utils/orkestrator-opplysninger.utils";

import { IOrkestratorBarnOpplysning } from "../../../mocks/data/mock-orkestrator-barn-opplysninger";
import styles from "./OrkestratorOpplysning.module.css";
import { OrkestratorTag } from "./OrkestratorTag";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";

interface IProps {
  barnOpplysning: IOrkestratorBarnOpplysning;
}

export function OrkestratorOpplysningRedigering({ barnOpplysning }: IProps) {
  const {
    fornavnOgMellomnavn,
    etternavn,
    fødselsdato,
    oppholdssted,
    forsørgerBarnet,
    barnetilleggFom,
    barnetilleggTom,
    kvalifisererTilBarnetillegg,
    begrunnelse,
    fraRegister,
  } = barnOpplysning;

  const { orkestratorLandlister } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");

  const { datepickerProps: fodselsdatoProps, inputProps: fodselsdatoInputProps } = useDatepicker({
    defaultSelected: new Date(fødselsdato),
    onDateChange: console.info,
  });

  const { datepickerProps: barnetilleggFomProps, inputProps: barnetilleggFomInputProps } =
    useDatepicker({
      defaultSelected: barnetilleggFom ? new Date(barnetilleggFom) : undefined,
      onDateChange: console.info,
    });

  const { datepickerProps: barnetilleggTomProps, inputProps: barnetilleggTomInputProps } =
    useDatepicker({
      defaultSelected: barnetilleggTom ? new Date(barnetilleggTom) : undefined,
      onDateChange: console.info,
    });

  return (
    <div>
      <div className={styles.modalOpplysning}>
        <TextField
          label={hentOrkestratorOpplysningLabel("fornavnOgMellomnavn")}
          value={hentFormatertOpplysningVerdi(fornavnOgMellomnavn, fornavnOgMellomnavn)}
          readOnly={fraRegister}
          size="small"
        />
        <OrkestratorTag fraRegister={fraRegister} />
      </div>
      <div className={styles.modalOpplysning}>
        <TextField
          label={hentOrkestratorOpplysningLabel("etternavn")}
          value={hentFormatertOpplysningVerdi(etternavn, etternavn)}
          readOnly={fraRegister}
          size="small"
        />
        <OrkestratorTag fraRegister={fraRegister} />
      </div>
      <div className={styles.modalOpplysning}>
        <DatePicker {...fodselsdatoProps} strategy="fixed">
          <DatePicker.Input
            {...fodselsdatoInputProps}
            label={hentOrkestratorOpplysningLabel("fødselsdato")}
            readOnly
            size="small"
          />
        </DatePicker>
        <OrkestratorTag fraRegister={fraRegister} />
      </div>
      <div className={styles.modalOpplysning}>
        <Select
          label={hentOrkestratorOpplysningLabel("oppholdssted")}
          value={hentFormatertOpplysningVerdi(oppholdssted, oppholdssted)}
          size="small"
        >
          <option value="">Velg land</option>
          {orkestratorLandlister.map((land) => (
            <option key={land.alpha3kode} value={land.alpha3kode}>
              {land.navn}
            </option>
          ))}
        </Select>

        <OrkestratorTag fraRegister={fraRegister} />
      </div>
      <div className={styles.modalOpplysning}>
        <RadioGroup
          legend={hentOrkestratorOpplysningLabel("forsørgerBarnet")}
          value={forsørgerBarnet}
          onChange={() => {}}
          className={styles.radioGroup}
          size="small"
        >
          <Stack gap="0 6" direction={{ xs: "column", sm: "row" }} wrap={false}>
            <Radio value={true}>Ja</Radio>
            <Radio value={false}>Nei</Radio>
          </Stack>
        </RadioGroup>
        <OrkestratorTag fraRegister={false} />
      </div>
      <div className={styles.modalOpplysning}>
        <RadioGroup
          legend={hentOrkestratorOpplysningLabel("kvalifisererTilBarnetillegg")}
          value={kvalifisererTilBarnetillegg}
          onChange={() => {}}
          className={styles.radioGroup}
          size="small"
        >
          <Stack gap="0 6" direction={{ xs: "column", sm: "row" }} wrap={false}>
            <Radio value={true}>Ja</Radio>
            <Radio value={false}>Nei</Radio>
          </Stack>
        </RadioGroup>
      </div>
      <div className={styles.modalOpplysning}>
        <DatePicker {...barnetilleggFomProps} strategy="fixed">
          <DatePicker.Input
            {...barnetilleggFomInputProps}
            label={hentOrkestratorOpplysningLabel("barnetilleggFom")}
            size="small"
          />
        </DatePicker>
      </div>
      <div className={styles.modalOpplysning}>
        <DatePicker {...barnetilleggTomProps} strategy="fixed">
          <DatePicker.Input
            {...barnetilleggTomInputProps}
            label={hentOrkestratorOpplysningLabel("barnetilleggTom")}
            size="small"
          />
        </DatePicker>
      </div>
      <div className={styles.modalOpplysning}>
        <TextField
          label={hentOrkestratorOpplysningLabel("begrunnelse")}
          value={hentFormatertOpplysningVerdi(begrunnelse || "", begrunnelse || "")}
          size="small"
          style={{ width: "500px" }}
        />
      </div>
    </div>
  );
}
