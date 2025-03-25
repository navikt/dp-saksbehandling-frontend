import { PersonPencilIcon } from "@navikt/aksel-icons";
import { Textarea } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import classnames from "classnames";
import { type ChangeEvent, useEffect, useState } from "react";
import { useDebounceFetcher } from "remix-utils/use-debounce-fetcher";

import { useGlobalAlerts } from "~/hooks/useGlobalAlerts";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { handleActions } from "~/server-side-actions/handle-actions";
import { formaterNorskDato } from "~/utils/dato.utils";
import { formaterTallMedTusenSeperator } from "~/utils/number.utils";
import { isAlert } from "~/utils/type-guards";
import { hentValideringOpplysningBegrunnelse } from "~/utils/validering.util";

import { components } from "../../../openapi/behandling-typer";
import styles from "./BegrunnelseLinje.module.css";

interface IProps {
  opplysning: components["schemas"]["Opplysning"];
  readonly?: boolean;
}

export function BegrunnelseLinje({ opplysning, readonly }: IProps) {
  const { addAlert } = useGlobalAlerts();
  const [verdi, setVerdi] = useState<string>(opplysning.kilde?.begrunnelse?.verdi ?? "");
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const lagreOpplysningBegrunnelseFetcher = useDebounceFetcher<typeof handleActions>();

  const begrunnelseForm = useForm({
    id: opplysning.id,
    validator: hentValideringOpplysningBegrunnelse(),
    method: "post",
  });

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

  return (
    <li className={styles.linje} key={opplysning.id}>
      <form className={classnames("aksel--compact")} {...begrunnelseForm.getFormProps()}>
        <input hidden={true} readOnly={true} name="_action" value="lagre-vurdering" />
        <input hidden={true} readOnly={true} name="opplysningId" value={opplysning.id} />
        <input hidden={true} readOnly={true} name="behandlingId" value={oppgave.behandlingId} />
        <input hidden={true} readOnly={true} name="verdi" value={opplysning.verdi} />
        <input hidden={true} readOnly={true} name="ident" value={oppgave.saksbehandler?.ident} />

        <div>
          {opplysning.formål === "Bruker" && opplysning.kilde?.type === "Saksbehandler" && (
            <PersonPencilIcon fontSize="1.5rem" />
          )}
          {opplysning.navn}
        </div>

        {formatereOpplysningVerdi(opplysning)}

        <div>
          <Textarea
            size="small"
            className={styles.textarea}
            {...begrunnelseForm.getInputProps("begrunnelse")}
            value={verdi}
            onChange={(event) => lagreOpplysningBegrunnelse(event, 2000)}
            onBlur={() => begrunnelseForm.clearError("begrunnelse")}
            error={begrunnelseForm.error("begrunnelse")}
            readOnly={readonly}
          />
        </div>
      </form>
    </li>
  );
}

function formatereOpplysningVerdi(opplysning: components["schemas"]["Opplysning"]): string {
  switch (opplysning.datatype) {
    case "boolsk":
      return opplysning.verdi === "true" ? "Ja" : "Nei";

    case "dato":
      return formaterNorskDato(opplysning.verdi);

    case "desimaltall":
      return formaterTallMedTusenSeperator(opplysning.verdi);

    default:
      return opplysning.verdi;
  }
}
