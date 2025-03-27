import { Alert, BodyShort, Heading } from "@navikt/ds-react";
import { useAsyncError } from "react-router";

interface IAsyncProps {
  tittel?: string;
  feilmelding?: string;
}

export function AsyncErrorMelding(props: IAsyncProps) {
  const error = useAsyncError();

  const hasErrorMessage =
    error !== null &&
    typeof error === "object" &&
    "message" in error &&
    typeof (error as { message: unknown }).message === "string";

  return (
    <Alert variant="error">
      <Heading size="small">{props.tittel || "Noe gikk galt"}</Heading>
      {props.feilmelding && <BodyShort>{props.feilmelding}</BodyShort>}
      {hasErrorMessage && <BodyShort>{(error as { message: string }).message}</BodyShort>}
    </Alert>
  );
}
