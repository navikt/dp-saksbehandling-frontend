import { Heading } from "@navikt/ds-react";
import { Fragment } from "react";

import { Avklaringer } from "~/components/avklaringer/Avklaringer";
import { BegrunnelseLinje } from "~/components/begrunnelse-linje/BegrunnelseLinje";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";

import styles from "./Begrunnelse.module.css";

export function Begrunnelse(props: { readonly?: boolean }) {
  const { vurderinger } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  return (
    <>
      <Avklaringer avklaringer={vurderinger.avklaringer} readonly={props.readonly} />
      <div>
        {vurderinger.regelsett.map((regelsett) => (
          <Fragment key={regelsett.navn}>
            <Heading size="xsmall" className={styles.regelsettHeading}>
              {regelsett.navn}
            </Heading>
            <ul className={styles.regelsettListe}>
              {regelsett.opplysningIder?.map((opplysningId) => {
                const opplysning = vurderinger.opplysninger.find(
                  (opplysning) => opplysning.id === opplysningId,
                );

                if (!opplysning) {
                  return null;
                }

                return (
                  <BegrunnelseLinje
                    key={opplysning.id}
                    opplysning={opplysning}
                    readonly={props.readonly}
                  />
                );
              })}
            </ul>
          </Fragment>
        ))}
      </div>
    </>
  );
}
