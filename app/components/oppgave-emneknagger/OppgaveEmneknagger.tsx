import { Detail, Skeleton, Tag } from "@navikt/ds-react";
import { differenceInCalendarDays } from "date-fns";

import { isOppgaveOversikt } from "~/utils/type-guards";

import { components } from "../../../openapi/saksbehandling-typer";

interface IProps {
  oppgave: components["schemas"]["OppgaveOversikt"] | components["schemas"]["Oppgave"];
  laster?: boolean;
}

export function OppgaveEmneknagger({ oppgave, laster }: IProps) {
  const dagerIgjenTilUtsattDato = oppgave.utsattTilDato
    ? differenceInCalendarDays(oppgave.utsattTilDato, new Date())
    : undefined;

  return (
    <>
      {oppgave.emneknagger.map((emneknagg) => (
        <Tag
          className={"whitespace-nowrap"}
          key={emneknagg}
          size={"xsmall"}
          variant={laster ? "info-moderate" : "info"}
        >
          <Detail as={laster ? Skeleton : "p"}>{emneknagg}</Detail>
        </Tag>
      ))}
      {oppgave.utsattTilDato && (
        <Tag
          className={"whitespace-nowrap"}
          size={"xsmall"}
          variant={laster ? "warning-moderate" : "warning"}
        >
          <Detail
            as={laster ? Skeleton : "p"}
          >{`${dagerIgjenTilUtsattDato} ${dagerIgjenTilUtsattDato === 1 ? "dag" : "dager"} igjen`}</Detail>
        </Tag>
      )}

      {isOppgaveOversikt(oppgave) && oppgave.skjermesSomEgneAnsatte && (
        <Tag
          className={"whitespace-nowrap"}
          size={"xsmall"}
          variant={laster ? "error-moderate" : "error"}
        >
          <Detail as={laster ? Skeleton : "p"}>Egne ansatte</Detail>
        </Tag>
      )}

      {isOppgaveOversikt(oppgave) && oppgave.adressebeskyttelseGradering === "FORTROLIG" && (
        <Tag
          className={"whitespace-nowrap"}
          size={"xsmall"}
          variant={laster ? "error-moderate" : "error"}
        >
          <Detail as={laster ? Skeleton : "p"}>Fortrolig</Detail>
        </Tag>
      )}

      {isOppgaveOversikt(oppgave) &&
        oppgave.adressebeskyttelseGradering === "STRENGT_FORTROLIG" && (
          <Tag
            className={"whitespace-nowrap"}
            size={"xsmall"}
            variant={laster ? "error-moderate" : "error"}
          >
            <Detail as={laster ? Skeleton : "p"}>Strengt fortrolig</Detail>
          </Tag>
        )}

      {isOppgaveOversikt(oppgave) &&
        oppgave.adressebeskyttelseGradering === "STRENGT_FORTROLIG_UTLAND" && (
          <Tag
            className={"whitespace-nowrap"}
            size={"xsmall"}
            variant={laster ? "error-moderate" : "error"}
          >
            <Detail as={laster ? Skeleton : "p"}>Strengt fortrolig utland</Detail>
          </Tag>
        )}
    </>
  );
}
