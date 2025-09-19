import { Textarea } from "@navikt/ds-react";
import { type ChangeEvent, useEffect, useState } from "react";
import { Form, useFetcher } from "react-router";
import { useDebounceCallback } from "usehooks-ts";

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
  const lagreOpplysningBegrunnelseFetcher = useFetcher<typeof handleActions>();
  const debouncedLagreOpplysningBegrunnelseFetcher = useDebounceCallback(
    lagreOpplysningBegrunnelseFetcher.submit,
    2000,
  );

  useEffect(() => {
    if (isAlert(lagreOpplysningBegrunnelseFetcher.data)) {
      addAlert(lagreOpplysningBegrunnelseFetcher.data);
    }
  }, [lagreOpplysningBegrunnelseFetcher.data]);

  function lagreOpplysningBegrunnelse(event: ChangeEvent<HTMLTextAreaElement>) {
    const oppdatertVerdi = event.currentTarget.value;

    setVerdi(oppdatertVerdi);
    debouncedLagreOpplysningBegrunnelseFetcher(event.target.form);
    if (event.currentTarget.value === opplysning.kilde?.begrunnelse?.verdi) {
      debouncedLagreOpplysningBegrunnelseFetcher.cancel();
    }
  }

  function handleOnBlur(event: ChangeEvent<HTMLTextAreaElement>) {
    if (event.currentTarget.value !== opplysning.kilde?.begrunnelse?.verdi) {
      debouncedLagreOpplysningBegrunnelseFetcher.flush();
    }
  }

  return (
    <Form method="post" className={"max-w-[450px]"}>
      <input hidden={true} readOnly={true} name="_action" value="lagre-vurdering" />
      <input hidden={true} readOnly={true} name="opplysningId" value={opplysning.id} />
      <input hidden={true} readOnly={true} name="behandlingId" value={oppgave.behandlingId} />
      <input hidden={true} readOnly={true} name="verdi" value={opplysning.verdi} />
      <input hidden={true} readOnly={true} name="ident" value={oppgave.saksbehandler?.ident} />

      <Textarea
        label="Begrunnelse"
        size="small"
        name="begrunnelse"
        value={verdi}
        onChange={lagreOpplysningBegrunnelse}
        onBlur={handleOnBlur}
        readOnly={readOnly}
      />
    </Form>
  );
}
