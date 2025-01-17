import { Heading } from "@navikt/ds-react";

import { Avklaringer } from "~/components/avklaringer/Avklaringer";
import { OpplysningLinje } from "~/components/opplysning-list/OpplysningLinje";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { IRegelsett } from "~/models/behandling.server";

import styles from "./Regelsett.module.css";

interface IProps {
  aktivtRegelsett: IRegelsett;
  readonly?: boolean;
}

export function Regelsett({ aktivtRegelsett, readonly }: IProps) {
  const { behandling } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const aktivtRegelsettOpplysninger = behandling.opplysninger.filter(
    (opplysning) => opplysning.synlig && aktivtRegelsett.opplysningIder?.includes(opplysning.id),
  );

  console.log(aktivtRegelsett);

  aktivtRegelsettOpplysninger.map((opplysning) => {
    if (opplysning.navn === "Deltar medlemmet i streik eller er omfattet av lock-out?") {
      console.log(opplysning);
    }
  });

  return (
    <div>
      <Heading className={styles.regelsettHeading} size="medium">
        {aktivtRegelsett.navn}
      </Heading>
      <Avklaringer avklaringer={aktivtRegelsett.avklaringer} />
      <ul className={styles.opplysningListe}>
        {aktivtRegelsettOpplysninger.map((opplysning) => (
          <OpplysningLinje
            key={`${opplysning.id}-${opplysning.verdi}`}
            opplysning={opplysning}
            readonly={readonly}
          />
        ))}
      </ul>
    </div>
  );
}
