import { Heading, Tag } from "@navikt/ds-react";

import { IOrkestratorOpplysningBarn } from "../../../mocks/data/mock-orkestrator-opplysning-barn";
import styles from "./OrkestratorOpplysning.module.css";

interface IProps {
  barnIndex: number;
  barnOpplysning: IOrkestratorOpplysningBarn;
}

export function OrkestratorOpplysningReadonlyTabell({
  barnIndex,
  barnOpplysning,
}: IProps) {
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

  return (
    <>
      <Heading level="4" size="small" className={styles.opplysningHeader} spacing>
        Barn {barnNummer}
      </Heading>
      <table className={styles.opplysningTabell}>
        <tbody>
          {barnOpplysningArray.map(({ key, value }) => (
            <tr key={key}>
              <td>{formatterOpplysningVisningsTekst(key)}</td>
              <td>{formatterOpplysningVerdi(value)}</td>
              <td>
                {barnOpplysning.fraRegister ? (
                  <Tag variant="alt1" size="small">Register</Tag>
                ) : (
                  <Tag variant="warning" size="small">Søknad</Tag>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
