import { vilkaarMap } from "./vilkaar-map";
import { Alert, BodyLong, Heading } from "@navikt/ds-react";
import { useState } from "react";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { VilkaarMeny } from "~/components/vilkaar-meny/VilkaarMeny";
import { OpplysningLinje } from "~/components/opplysning-list/OpplysningLinje";
import { useLocation } from "@remix-run/react";
import styles from "./Vilkaar.module.css";

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
      {behandling.aktiveAvklaringer.map((avklaring) => (
        <Alert
          key={avklaring.tittel}
          className="alert--compact"
          variant={"warning"}
          fullWidth={true}
          size={"small"}
        >
          {avklaring.beskrivelse}
        </Alert>
      ))}

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
