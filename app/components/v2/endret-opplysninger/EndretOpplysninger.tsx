import { Accordion, BodyShort, Heading } from "@navikt/ds-react";

import { formaterOpplysningVerdi } from "~/components/vilkår-tidslinje/VilkårTidslinje";

import { components } from "../../../../openapi/behandling-typer";
import styles from "./EndretOpplysning.module.css";

interface IProps {
  vurderinger: components["schemas"]["SaksbehandlersVurderinger"];
}

export function EndretOpplysninger({ vurderinger }: IProps) {
  return (
    <div className={"card p-4"}>
      <Heading size={"xsmall"}>Endringer og vurderinger</Heading>

      <Accordion size={"small"} className={"accordion--subtil mt-2"}>
        {vurderinger.opplysninger.map((opplysning) => (
          <Accordion.Item key={opplysning.id}>
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
                  {formaterOpplysningVerdi(opplysning.verdien)}
                </BodyShort>
              </div>

              <div className={styles.opplysningDetail}>
                <BodyShort size={"small"} weight={"semibold"}>
                  Begrunnelse
                </BodyShort>
                <BodyShort size={"small"}>{opplysning.kilde?.begrunnelse?.verdi ?? "--"}</BodyShort>
              </div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}
