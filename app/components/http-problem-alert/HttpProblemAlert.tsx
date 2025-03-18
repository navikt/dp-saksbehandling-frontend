import { Alert, BodyShort, Detail, Heading } from "@navikt/ds-react";

import { IAlert } from "~/context/alert-context";

interface IProps {
  error: IAlert;
}

export function HttpProblemAlert({ error }: IProps) {
  return (
    <Alert variant={error.variant} className="m-4">
      <Heading size={"small"}>{error.title}</Heading>
      <BodyShort>{error.body}</BodyShort>
      <Detail>{error.service}</Detail>
    </Alert>
  );
}
