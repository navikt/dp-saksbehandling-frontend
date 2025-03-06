import { Heading, Radio, RadioGroup, Stack, Tag, TextField } from "@navikt/ds-react";

import {
  formatterOrkestratorOpplysningVerdi,
  hentOrkestratorOpplysningVisningTekst,
} from "~/utils/orkestrator-opplysninger.utils";
import { IOrkestratorBarnOpplysning } from "../../../mocks/data/mock-orkestrator-barn-opplysninger";
import styles from "./OrkestratorOpplysning.module.css";

interface IProps {
  barnIndex: number;
  barnOpplysning: IOrkestratorBarnOpplysning;
}

export function OrkestratorOpplysningTabell({ barnIndex, barnOpplysning }: IProps) {
  const filterKeys = ["FraRegister", "GirBarnetilleggFom", "GirBarnetilleggTom", "BarnSvarId"];
  const barnOpplysningArray = Object.entries(barnOpplysning)
    .map(([key, value]) => ({
      key: key.charAt(0).toUpperCase() + key.slice(1),
      value,
    }))
    .filter((opplysning) => !filterKeys.includes(opplysning.key));

  const barnNummer = barnIndex + 1;

  function opplysningInput(opplysning: { key: string; value: string | boolean }) {
    const { key, value } = opplysning;

    switch (typeof value) {
      case "string":
        return (
          <TextField
            label={hentOrkestratorOpplysningVisningTekst(key)}
            value={formatterOrkestratorOpplysningVerdi(value)}
            readOnly={barnOpplysning.fraRegister}
            size="small"
          />
        );
      case "boolean":
        return (
          <RadioGroup
            legend={hentOrkestratorOpplysningVisningTekst(key)}
            onChange={() => {}}
            value={value}
            className={styles.radioGroup}
            size="small"
            readOnly={barnOpplysning.fraRegister}
          >
            <Stack gap="0 6" direction={{ xs: "column", sm: "row" }} wrap={false}>
              <Radio value={false}>Nei</Radio>
              <Radio value={true}>Ja</Radio>
            </Stack>
          </RadioGroup>
        );

      default:
        return <>Error</>;
    }
  }

  return (
    <div className={styles.modalOpplysningContainer}>
      <Heading level="4" size="small" className={styles.opplysningHeader} spacing>
        Barn {barnNummer}
      </Heading>

      {barnOpplysningArray.map(({ key, value }) => (
        <div key={key} className={styles.modalOpplysning}>
          <div>{opplysningInput({ key, value })}</div>
          {barnOpplysning.fraRegister ? (
            <Tag variant="alt1" size="small">
              Register
            </Tag>
          ) : (
            <Tag variant="warning" size="small">
              Søknad
            </Tag>
          )}
        </div>
      ))}
    </div>
  );
}
