import { Detail, Textarea } from "@navikt/ds-react";
import classnames from "classnames";
import { type ChangeEvent, useEffect, useState } from "react";
import { useDebounceFetcher } from "remix-utils/use-debounce-fetcher";

import { useGlobalAlerts } from "~/hooks/useGlobalAlerts";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { handleActions } from "~/server-side-actions/handle-actions";
import { formaterNorskDato } from "~/utils/dato.utils";
import { isAlert } from "~/utils/type-guards";

import { components } from "../../../openapi/behandling-typer";

interface IProps {
  avklaring: components["schemas"]["Avklaring"];
  readOnly?: boolean;
}

export function AvklaringBegrunnelse({ avklaring, readOnly }: IProps) {
  const { addAlert } = useGlobalAlerts();
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const [verdi, setVerdi] = useState<string>(avklaring.begrunnelse ?? "");
  const lagreAvklaringBegrunnelseFetcher = useDebounceFetcher<typeof handleActions>();

  useEffect(() => {
    if (isAlert(lagreAvklaringBegrunnelseFetcher.data)) {
      addAlert(lagreAvklaringBegrunnelseFetcher.data);
    }
  }, [lagreAvklaringBegrunnelseFetcher.data]);

  function lagreAvklaringBegrunnelse(event: ChangeEvent<HTMLTextAreaElement>, delayInMs: number) {
    const oppdatertVerdi = event.currentTarget.value;

    setVerdi(oppdatertVerdi);
    lagreAvklaringBegrunnelseFetcher.submit(event.target.form, {
      debounceTimeout: delayInMs,
    });
  }

  function handleOnBlur(event: ChangeEvent<HTMLTextAreaElement>) {
    if (event.currentTarget.value !== avklaring.begrunnelse) {
      lagreAvklaringBegrunnelse(event, 0);
    }
  }

  let avklartAv = "";
  if (avklaring.maskinelt) avklartAv = "av regelmotor";
  if (avklaring.avklartAv?.ident) avklartAv = `av ${avklaring.avklartAv?.ident}`;
  return (
    <form method="post">
      <input name="_action" value="kvitter-avklaring" readOnly={true} hidden={true} />
      <input name="avklaring-id" value={avklaring.id} readOnly={true} hidden={true} />
      <input name="behandling-id" value={oppgave.behandlingId} readOnly={true} hidden={true} />

      <Textarea
        label=""
        size="small"
        name="begrunnelse"
        className="textarea--kompakt"
        value={verdi}
        onChange={(event) => lagreAvklaringBegrunnelse(event, 2000)}
        onBlur={handleOnBlur}
        readOnly={readOnly}
      />

      {avklaring.sistEndret && (
        <Detail className={classnames({ ["ml-6"]: readOnly })}>
          Sist endret {formaterNorskDato(avklaring.sistEndret, true)} {avklartAv}
        </Detail>
      )}
    </form>
  );
}
