import { BodyLong, Heading } from "@navikt/ds-react";
import { useLocation } from "react-router";
import { useState } from "react";

import { OppgaveAvklaringer } from "~/components/oppgave-avklaringer/OppgaveAvklaringer";
import { OpplysningLinje } from "~/components/opplysning-list/OpplysningLinje";
import { VilkaarMeny } from "~/components/vilkaar-meny/VilkaarMeny";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";

import styles from "./Vilkaar.module.css";
import { vilkaarMap } from "./vilkaar-map";

interface IProps {
  readonly?: boolean;
}

export function Vilkaar(props: IProps) {
  const location = useLocation();
  const { behandling } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const keys = Object.keys(vilkaarMap);
  const [selectedKategori, setSelectedKategori] = useState(keys[0]);

  const filteredOpplysning = behandling.opplysning.filter((opplysning) => {
    if (vilkaarMap[selectedKategori].values.length == 0) {
      return true;
    }
    return vilkaarMap[selectedKategori].values.includes(opplysning.navn);
  });

  return (
    <>
      <OppgaveAvklaringer avklaringer={behandling.avklaringer} />

      <div className={styles.vilkaarContainer}>
        <VilkaarMeny
          kategorier={vilkaarMap}
          kategori={selectedKategori}
          onChange={setSelectedKategori}
        />

        <div className={styles.valgtVilkaar}>
          <Heading size={"medium"} className={styles.vilkaarHeading}>
            {vilkaarMap[selectedKategori].header}
          </Heading>
          <BodyLong className={styles.vilkaarBody}>
            {vilkaarMap[selectedKategori].description}
          </BodyLong>

          <ul className={styles.opplysningListe}>
            {filteredOpplysning.map((opplysning) => (
              <OpplysningLinje
                key={`${location.key}-${opplysning.navn}`}
                opplysning={opplysning}
                readonly={props.readonly}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
