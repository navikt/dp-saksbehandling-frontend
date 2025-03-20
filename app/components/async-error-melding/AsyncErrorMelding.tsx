import { Alert, BodyShort, Heading } from "@navikt/ds-react";
import { useAsyncError } from "react-router";

interface IAsyncProps {
  feilmelding: string;
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
      <Heading size="small">Noe gikk galt</Heading>
      <BodyShort>{props.feilmelding}</BodyShort>
      {hasErrorMessage && <BodyShort>{(error as { message: string }).message}</BodyShort>}
    </Alert>
  );
}
