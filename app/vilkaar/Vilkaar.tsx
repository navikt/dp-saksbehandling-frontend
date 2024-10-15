import { Button, Heading } from "@navikt/ds-react";
import { useState } from "react";
import { mockBehandling2 } from "~/vilkaar/mock-vilkaar";
import { VilkaarOpplysning } from "~/vilkaar/VilkaarOpplysning";
import styles from "./Vilkaar.module.css";

export function finnOpplysning(opplysningId: string) {
  return mockBehandling2.alleOpplysninger.find((opplysning) => opplysning.id === opplysningId);
}

export function Vilkaar() {
  const [visAlleUtledninger, setVisAlleUtledninger] = useState(false);
  return (
    <div>
      <Button
        type="button"
        onClick={() => setVisAlleUtledninger(!visAlleUtledninger)}
        size="xsmall"
      >
        {visAlleUtledninger ? "Skjul utledinger" : "Vis alle utledninger"}
      </Button>

      <Heading size={"large"}>{mockBehandling2.vilkaar[0].navn}</Heading>

      <ul className={styles.opplysningListe}>
        {mockBehandling2.vilkaar[0].opplysninger.map((opplysning, index) => (
          <VilkaarOpplysning
            key={index}
            opplysning={opplysning}
            visAlleUtledninger={visAlleUtledninger}
          />
        ))}
      </ul>
    </div>
  );
}
