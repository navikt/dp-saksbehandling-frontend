import { Accordion, BodyShort, Detail, Heading } from "@navikt/ds-react";

import { useBehandling } from "~/hooks/useBehandling";
import { useOppgave } from "~/hooks/useOppgave";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { formaterOpplysningVerdi, skalVisePeriode } from "~/utils/opplysning.utils";

import { components } from "../../../openapi/behandling-typer";
import styles from "./EndretOpplysning.module.css";

interface IProps {
  vurderinger: components["schemas"]["SaksbehandlersVurderinger"];
}

function EndretOpplysninger({ vurderinger }: IProps) {
  const { underKontroll } = useOppgave();
  const { visArvedeOpplysninger } = useBehandling();

  const vurderingsperioder = vurderinger.opplysninger
    .flatMap((opplysning) =>
      opplysning.perioder.map((periode) => ({ navn: opplysning.navn, periode })),
    )
    .filter(({ periode }) => skalVisePeriode(periode, visArvedeOpplysninger))
    .sort(
      (first, second) =>
        new Date(second.periode.opprettet).getTime() - new Date(first.periode.opprettet).getTime(),
    );

  return (
    <div>
      <Heading level="3" size={"small"}>
        Saksbehandlers vurderinger
      </Heading>
      {vurderingsperioder.length === 0 && (
        <BodyShort className={"pt-2"}>Ingen vurderinger</BodyShort>
      )}

      {vurderingsperioder.length > 0 && (
        <Accordion size={"small"} className={"accordion--subtil mt-2"}>
          {vurderingsperioder.map(({ navn, periode }) => (
            <Accordion.Item
              key={periode.id}
              defaultOpen={underKontroll}
              data-color={periode.opprinnelse === "Arvet" ? "neutral" : undefined}
            >
              <Accordion.Header>
                <span className="flex flex-col">
                  <span>{navn}</span>
                  <Detail as="span" textColor="subtle">
                    {formaterTilNorskDato(periode.opprettet, true)}
                  </Detail>
                </span>
              </Accordion.Header>
              <Accordion.Content>
                <div className={styles.opplysningDetail}>
                  <BodyShort size={"small"} weight={"semibold"}>
                    Periode
                  </BodyShort>
                  <BodyShort size={"small"}>
                    {periode.gyldigFraOgMed ? formaterTilNorskDato(periode.gyldigFraOgMed) : "--"} –{" "}
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
                  <BodyShort size={"small"}>{periode.kilde?.begrunnelse?.verdi ?? "--"}</BodyShort>
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion>
      )}
    </div>
  );
}

export default EndretOpplysninger;
