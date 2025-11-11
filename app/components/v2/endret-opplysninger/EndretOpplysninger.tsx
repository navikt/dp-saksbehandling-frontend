import { Accordion, BodyShort, Heading } from "@navikt/ds-react";

import { useOppgave } from "~/hooks/useOppgave";
import { formaterOpplysningVerdiV2 } from "~/utils/opplysning.utils";

import { components } from "../../../../openapi/behandling-typer";
import styles from "./EndretOpplysning.module.css";

interface IProps {
  vurderinger: components["schemas"]["SaksbehandlersVurderinger"];
}

export function EndretOpplysninger({ vurderinger }: IProps) {
  const { underKontroll } = useOppgave();
  return (
    <div className={"card p-4"}>
      <Heading size={"small"}>Saksbehandlers vurderinger</Heading>
      {vurderinger.opplysninger.length === 0 && (
        <BodyShort className={"pt-2"}>Ingen vurderinger</BodyShort>
      )}
      {vurderinger.opplysninger.length > 0 && (
        <Accordion size={"small"} className={"accordion--subtil mt-2"}>
          {vurderinger.opplysninger.map((opplysning) => (
            <Accordion.Item key={opplysning.id} defaultOpen={underKontroll}>
              <Accordion.Header>{opplysning.navn}</Accordion.Header>
              <Accordion.Content>
                <div className={styles.opplysningDetail}>
                  <BodyShort size={"small"} weight={"semibold"}>
                    Periode
                  </BodyShort>
                  <BodyShort size={"small"}>
                    {opplysning.gyldigFraOgMed ? opplysning.gyldigFraOgMed : "--"} –{" "}
                    {opplysning.gyldigTilOgMed ? opplysning.gyldigTilOgMed : "--"}
                  </BodyShort>
                </div>

                <div className={styles.opplysningDetail}>
                  <BodyShort size={"small"} weight={"semibold"}>
                    Nytt svar
                  </BodyShort>
                  <BodyShort size={"small"}>
                    {/* @ts-expect-error Fikset i v2 type*/}
                    {formaterOpplysningVerdiV2(opplysning.verdien)}
                  </BodyShort>
                </div>

                <div className={styles.opplysningDetail}>
                  <BodyShort size={"small"} weight={"semibold"}>
                    Begrunnelse
                  </BodyShort>
                  <BodyShort size={"small"}>
                    {opplysning.kilde?.begrunnelse?.verdi ?? "--"}
                  </BodyShort>
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion>
      )}
    </div>
  );
}
