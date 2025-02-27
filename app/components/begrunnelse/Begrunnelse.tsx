import { Heading } from "@navikt/ds-react";

import { Avklaringer } from "~/components/avklaringer/Avklaringer";
import { BegrunnelseLinje } from "~/components/begrunnelse-linje/BegrunnelseLinje";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";

import styles from "./Begrunnelse.module.css";

export function Begrunnelse() {
  const { vurderinger } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  return (
    <>
      <Avklaringer avklaringer={vurderinger.avklaringer} />
      <div>
        {vurderinger.regelsett.map((regelsett) => (
          <>
            <Heading size="xsmall" className={styles.regelsettHeading}>
              {regelsett.navn}
            </Heading>
            <ul className={styles.regelsettListe}>
              {regelsett.opplysningIder?.map((opplysningId) => {
                const opplysning = vurderinger.opplysninger.find(
                  (opplysning) => opplysning.id === opplysningId,
                );

                return (
                  <>
                    {opplysning && <BegrunnelseLinje key={opplysning.id} opplysning={opplysning} />}
                  </>
                );
              })}
            </ul>
          </>
        ))}
      </div>
    </>
  );
}
