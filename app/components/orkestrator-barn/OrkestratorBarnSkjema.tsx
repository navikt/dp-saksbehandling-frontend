import { TextField } from "@navikt/ds-react";

import {
  hentFormatertOpplysninigsverdi as hentFormatertOpplysningVerdi,
  hentOrkestratorOpplysningVisningTekst as hentOrkestratorOpplysningLabel,
} from "~/utils/orkestrator-opplysninger.utils";

import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { IOrkestratorBarn } from "~/models/orkestrator-opplysning.server";
import styles from "./OrkestratorBarn.module.css";
import { OrkestratorTag } from "./OrkestratorTag";

interface IProps {
  barn: IOrkestratorBarn;
}

export function OrkestratorBarnSkjema({ barn }: IProps) {
  const { orkestratorLandliste } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");

  return (
    <div>
      <div className={styles.modalOpplysning}>TEST</div>
    </div>
  );
}
