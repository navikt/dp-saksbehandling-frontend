import { Heading, Radio, RadioGroup, Stack, Tag, TextField } from "@navikt/ds-react";

import { IOrkestratorOpplysningBarn } from "../../../mocks/data/mock-orkestrator-opplysning-barn";
import styles from "./OrkestratorOpplysning.module.css";

interface IProps {
  barnIndex: number;
  barnOpplysning: IOrkestratorOpplysningBarn;
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

  function formatterOpplysningVisningsTekst(opplysning: string) {
    switch (opplysning) {
      case "FornavnOgMellomnavn":
        return "Fornavn";
      case "ForsørgerBarnet":
        return "Forsørger barnet";
      case "GirBarnetillegg":
        return "Gir barnetillegg";
      default:
        return opplysning;
    }
  }

  function formatterOpplysningVerdi(opplysning: string | boolean) {
    if (typeof opplysning === "boolean") {
      return opplysning ? "Ja" : "Nei";
    }
    return opplysning;
  }


  function opplysningInput(opplysning: { key: string; value: string | boolean }) {
    const { key, value } = opplysning;

    switch (typeof value) {
      case "string":
        return (
          <TextField
            label={formatterOpplysningVisningsTekst(key)}
            value={formatterOpplysningVerdi(value)}
            readOnly={barnOpplysning.fraRegister}
            size="small"
          />
        );
      case "boolean":
        return (
          <RadioGroup
            legend={formatterOpplysningVisningsTekst(key)}
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
            <Tag variant="alt1" size="small">Register</Tag>
          ) : (
            <Tag variant="warning" size="small">Søknad</Tag>
          )}
        </div>
      ))}
    </div>
  );
}
