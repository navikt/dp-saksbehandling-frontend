import { useEffect, useState } from "react";
import styles from "~/vilkaar/Vilkaar.module.css";
import { CaretDownFillIcon, CaretUpFillIcon } from "@navikt/aksel-icons";
import { Button } from "@navikt/ds-react";
import type { IOpplysning } from "~/models/behandling.server";
import { OpplysningUtledning } from "~/vilkaar/VilkaarOpplysningUtledning";
import { Opplysning } from "~/components/opplysning/Opplysning";

interface IProps {
  opplysning: IOpplysning;
  visAlleUtledninger: boolean;
}

export function VilkaarOpplysning({ opplysning, visAlleUtledninger }: IProps) {
  const [visUtledning, setVisUtledning] = useState(false);

  useEffect(() => {
    setVisUtledning(visAlleUtledninger);
  }, [visAlleUtledninger]);
  return (
    <li className={styles.opplysningLinje}>
      <div className={styles.opplysningInnhold}>
        <span
          className={styles.opplysningNavn}
          onClick={() => opplysning.utledetAv && setVisUtledning(!visUtledning)}
        >
          <span className={styles.opplysningCaret}>
            {opplysning.utledetAv && (
              <>
                {!visUtledning && <CaretDownFillIcon fontSize="1rem" />}
                {visUtledning && <CaretUpFillIcon fontSize="1rem" />}
              </>
            )}
          </span>
          {opplysning.navn}
        </span>

        <Opplysning
          className={styles.opplysningVerdi}
          opplysning={opplysning}
          verdi={opplysning.verdi}
          onChange={() => console.log("rediger: ", opplysning.navn)}
          label={"test"}
        />

        <span>
          <Button variant="tertiary" type="button" size="xsmall">
            Endre
          </Button>
        </span>
      </div>

      {opplysning.utledetAv && visUtledning && (
        <OpplysningUtledning utledetAv={opplysning.utledetAv} />
      )}
    </li>
  );
}
