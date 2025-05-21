import { Textarea } from "@navikt/ds-react";
import { type ChangeEvent, useEffect, useState } from "react";
import { Form } from "react-router";
import { useDebounceFetcher } from "remix-utils/use-debounce-fetcher";

import { useGlobalAlerts } from "~/hooks/useGlobalAlerts";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { handleActions } from "~/server-side-actions/handle-actions";
import { isAlert } from "~/utils/type-guards";

import { components } from "../../../openapi/behandling-typer";

interface IProps {
  opplysning: components["schemas"]["Opplysning"];
  readOnly?: boolean;
}

export function OpplysningBegrunnelse({ opplysning, readOnly }: IProps) {
  const { addAlert } = useGlobalAlerts();
  const [verdi, setVerdi] = useState<string>(opplysning.kilde?.begrunnelse?.verdi ?? "");
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const lagreOpplysningBegrunnelseFetcher = useDebounceFetcher<typeof handleActions>();

  useEffect(() => {
    if (isAlert(lagreOpplysningBegrunnelseFetcher.data)) {
      addAlert(lagreOpplysningBegrunnelseFetcher.data);
    }
  }, [lagreOpplysningBegrunnelseFetcher.data]);

  function lagreOpplysningBegrunnelse(event: ChangeEvent<HTMLTextAreaElement>, delayInMs: number) {
    const oppdatertVerdi = event.currentTarget.value;

    setVerdi(oppdatertVerdi);
    lagreOpplysningBegrunnelseFetcher.submit(event.target.form, {
      debounceTimeout: delayInMs,
    });
  }

  function handleOnBlur(event: ChangeEvent<HTMLTextAreaElement>) {
    if (event.currentTarget.value !== opplysning.kilde?.begrunnelse?.verdi) {
      lagreOpplysningBegrunnelse(event, 0);
    }
  }

  return (
    <Form method="post">
      <input hidden={true} readOnly={true} name="_action" value="lagre-vurdering" />
      <input hidden={true} readOnly={true} name="opplysningId" value={opplysning.id} />
      <input hidden={true} readOnly={true} name="behandlingId" value={oppgave.behandlingId} />
      <input hidden={true} readOnly={true} name="verdi" value={opplysning.verdi} />
      <input hidden={true} readOnly={true} name="ident" value={oppgave.saksbehandler?.ident} />

      <Textarea
        label=""
        size="small"
        name="begrunnelse"
        className="textarea--kompakt"
        value={verdi}
        onChange={(event) => lagreOpplysningBegrunnelse(event, 2000)}
        onBlur={handleOnBlur}
        readOnly={readOnly}
      />
    </Form>
  );
}
