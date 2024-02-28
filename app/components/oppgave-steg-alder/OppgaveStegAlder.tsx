import React from "react";
import styles from "./OppgaveStegAlder.module.css";
import { Alert, BodyShort, Heading, Label } from "@navikt/ds-react";

interface IAldersteg {
  alderskravDagpenger: number;
  fodselsdato: string;
  sisteDagKravOppfylt: string;
  virkningsdato: string;
  vilkaarOppfylt: boolean;
}

export function OppgaveStegAlder() {
  const props = mock;

  return (
    <div className={styles.container}>
      <Heading size="medium">Alder</Heading>
      <BodyShort>
        For å ha rett til dagpenger må søker være under {props.alderskravDagpenger} år.
      </BodyShort>

      <div>
        <Label size="small" as="p">
          Fødselsdato
        </Label>
        <BodyShort size="small">{props.fodselsdato}</BodyShort>
      </div>

      <div>
        <Label size="small" as="p">
          Siste mulige dag alderskravet er oppfylt
        </Label>
        <BodyShort size="small">{props.sisteDagKravOppfylt}</BodyShort>
      </div>

      <div>
        <Label size="small" as="p">
          Virkningsdato
        </Label>
        <BodyShort size="small">{props.virkningsdato}</BodyShort>
      </div>

      {props.vilkaarOppfylt && (
        <Alert variant="success" size="small">
          Aldersvilkåret er oppfyllt
        </Alert>
      )}
      {!props.vilkaarOppfylt && (
        <Alert variant="error" size="small">
          Aldersvilkåret er ikke oppfyllt
        </Alert>
      )}
    </div>
  );
}

const mock: IAldersteg = {
  alderskravDagpenger: 67,
  fodselsdato: "1975-02-20",
  sisteDagKravOppfylt: "2045-02-20",
  virkningsdato: "2024-02-05",
  vilkaarOppfylt: true,
};
