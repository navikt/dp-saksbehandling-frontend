import { Accordion, BodyShort, Heading } from "@navikt/ds-react";

import { useBehandling } from "~/hooks/useBehandling";
import { useOppgave } from "~/hooks/useOppgave";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { formaterOpplysningVerdi, skalViseOpplysning } from "~/utils/opplysning.utils";

import { components } from "../../../openapi/behandling-typer";
import styles from "./EndretOpplysning.module.css";

interface IProps {
  vurderinger: components["schemas"]["SaksbehandlersVurderinger"];
}

function EndretOpplysninger({ vurderinger }: IProps) {
  const { underKontroll } = useOppgave();
  const { visArvedeOpplysninger } = useBehandling();

  const opplysningerSomSkalVises = vurderinger.opplysninger.filter((opplysning) =>
    skalViseOpplysning(opplysning, visArvedeOpplysninger),
  );

  return (
    <div className={"card p-4"}>
      <Heading size={"small"}>Saksbehandlers vurderinger</Heading>
      {opplysningerSomSkalVises.length === 0 && (
        <BodyShort className={"pt-2"}>Ingen vurderinger</BodyShort>
      )}

      {opplysningerSomSkalVises.length > 0 && (
        <Accordion size={"small"} className={"accordion--subtil mt-2"}>
          {opplysningerSomSkalVises.map((opplysning) =>
            opplysning.perioder.map((periode) => (
              <Accordion.Item key={periode.id} defaultOpen={underKontroll}>
                <Accordion.Header>{opplysning.navn}</Accordion.Header>
                <Accordion.Content>
                  <div className={styles.opplysningDetail}>
                    <BodyShort size={"small"} weight={"semibold"}>
                      Periode
                    </BodyShort>
                    <BodyShort size={"small"}>
                      {periode.gyldigFraOgMed ? formaterTilNorskDato(periode.gyldigFraOgMed) : "--"}{" "}
                      –{" "}
                      {periode.gyldigTilOgMed ? formaterTilNorskDato(periode.gyldigTilOgMed) : "--"}
                    </BodyShort>
                  </div>

                  <div className={styles.opplysningDetail}>
                    <BodyShort size={"small"} weight={"semibold"}>
                      Nytt svar
                    </BodyShort>
                    <BodyShort size={"small"}>{formaterOpplysningVerdi(periode.verdi)}</BodyShort>
                  </div>

                  <div className={styles.opplysningDetail}>
                    <BodyShort size={"small"} weight={"semibold"}>
                      Begrunnelse
                    </BodyShort>
                    <BodyShort size={"small"}>
                      {periode.kilde?.begrunnelse?.verdi ?? "--"}
                    </BodyShort>
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            )),
          )}
        </Accordion>
      )}
    </div>
  );
}

export default EndretOpplysninger;
