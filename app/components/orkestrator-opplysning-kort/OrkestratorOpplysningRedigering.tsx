import { Radio, RadioGroup, Stack, TextField } from "@navikt/ds-react";

import {
  hentFormatertOpplysninigsverdi as hentFormatertOpplysningVerdi,
  hentOrkestratorOpplysningVisningTekst as hentOrkestratorOpplysningLabel,
} from "~/utils/orkestrator-opplysninger.utils";

import { IOrkestratorBarnOpplysning } from "../../../mocks/data/mock-orkestrator-barn-opplysninger";
import styles from "./OrkestratorOpplysning.module.css";
import { OrkestratorTag } from "./OrkestratorTag";

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
        <TextField
          label={hentOrkestratorOpplysningLabel("fødselsdato")}
          value={hentFormatertOpplysningVerdi(fødselsdato, fødselsdato)}
          readOnly={fraRegister}
          size="small"
        />
        <OrkestratorTag fraRegister={fraRegister} />
      </div>
      <div className={styles.modalOpplysning}>
        <TextField
          label={hentOrkestratorOpplysningLabel("oppholdssted")}
          value={hentFormatertOpplysningVerdi(oppholdssted, oppholdssted)}
          readOnly={fraRegister}
          size="small"
        />
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
        <TextField
          label={hentOrkestratorOpplysningLabel("barnetilleggFom")}
          value={hentFormatertOpplysningVerdi(barnetilleggFom || "", barnetilleggFom || "")}
          size="small"
        />
      </div>
      <div className={styles.modalOpplysning}>
        <TextField
          label={hentOrkestratorOpplysningLabel("barnetilleggTom")}
          value={hentFormatertOpplysningVerdi(barnetilleggTom || "", barnetilleggTom || "")}
          size="small"
        />
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
