import { PersonPencilIcon } from "@navikt/aksel-icons";
import { Detail, Textarea } from "@navikt/ds-react";
import { useForm } from "@rvf/remix";
import classnames from "classnames";
import { type ChangeEvent, useState } from "react";
import { useDebounceFetcher } from "remix-utils/use-debounce-fetcher";

import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { IOpplysning } from "~/models/behandling.server";
import { action } from "~/routes/oppgave.$oppgaveId.behandle";
import { formaterNorskDato } from "~/utils/dato.utils";
import { formaterTallMedTusenSeperator } from "~/utils/number.utils";
import { hentValideringOpplysningBegrunnelse } from "~/utils/validering.util";

import styles from "./BegrunnelseLinje.module.css";

interface IProps {
  opplysning: IOpplysning;
}

export function BegrunnelseLinje({ opplysning }: IProps) {
  const [verdi, setVerdi] = useState<string>(opplysning.begrunnelse.verdi);
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const lagreOpplysningBegrunnelseFetcher = useDebounceFetcher<typeof action>();

  const dato = new Date();
  const begrunnelseForm = useForm({
    id: opplysning.id,
    validator: hentValideringOpplysningBegrunnelse(),
    method: "post",
    defaultValues: {
      begrunnelse: opplysning.begrunnelse.verdi,
    },
  });

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
        <input hidden={true} readOnly={true} name="_action" value="lagre-opplysning-begrunnelse" />
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
          />
          <Detail textColor={"subtle"}>{formaterNorskDato(dato.toISOString(), true)}</Detail>
        </div>
      </form>
    </li>
  );
}

function formatereOpplysningVerdi(opplysning: IOpplysning): string {
  switch (opplysning.datatype) {
    case "boolsk":
      return opplysning.verdi === "true" ? "Ja" : "Nei";

    case "dato":
      return formaterNorskDato(opplysning.verdi);

    case "double":
      return formaterTallMedTusenSeperator(opplysning.verdi);

    default:
      return opplysning.verdi;
  }
}
