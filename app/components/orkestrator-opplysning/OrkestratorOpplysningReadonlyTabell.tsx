import { Heading, Tag } from "@navikt/ds-react";
import classnames from "classnames";
import {
  byggOrkestratorOpplysningObject,
  formatterOrkestratorOpplysningVerdi,
  hentOrkestratorOpplysningVisningTekst,
} from "~/utils/orkestrator-opplysninger.utils";
import { IOrkestratorBarnOpplysning } from "../../../mocks/data/mock-orkestrator-barn-opplysninger";
import styles from "./OrkestratorOpplysning.module.css";

interface IProps {
  barnIndex: number;
  barnOpplysning: IOrkestratorBarnOpplysning;
}

export function OrkestratorOpplysningReadonlyTabell({ barnIndex, barnOpplysning }: IProps) {
  const barnOpplysninger = byggOrkestratorOpplysningObject(barnOpplysning);

  return (
    <>
      <Heading level="4" size="small" className={styles.opplysningHeader} spacing>
        Barn {barnIndex + 1}
      </Heading>
      <table className={styles.opplysningTabell}>
        <tbody>
          {barnOpplysninger.opplysninger.map((opplysning, _index) => {
            const bold = opplysning.key === "kvalifisererTilBarnetillegg";

            return (
              <tr
                key={_index}
                className={classnames({
                  [styles.bold]: bold,
                })}
              >
                <td>{hentOrkestratorOpplysningVisningTekst(opplysning.key)}</td>
                <td>{formatterOrkestratorOpplysningVerdi(opplysning)}</td>
                <td>
                  {opplysning.fraRegister !== null && (
                    <Tag variant={opplysning.fraRegister ? "alt1" : "warning"} size="small">
                      {opplysning.fraRegister ? "Register" : "Søknad"}
                    </Tag>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
