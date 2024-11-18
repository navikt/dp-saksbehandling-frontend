import classnames from "classnames";
import type { IOpplysning } from "~/models/behandling.server";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { useForm } from "@rvf/remix";
import { hentValideringForOpplysning } from "~/utils/validering.util";
import { useState } from "react";
import { Opplysning } from "~/components/opplysning/Opplysning";
import { Button } from "@navikt/ds-react";
import { formaterTallMedTusenSeperator } from "~/utils/number.utils";
import { formaterNorskDato } from "~/utils/dato.utils";
import styles from "./OpplysningListe.module.css";

interface IProps {
  opplysning: IOpplysning;
  readonly?: boolean;
}

export function OpplysningLinje(props: IProps) {
  const { opplysning } = props;
  const { featureFlags } = useTypedRouteLoaderData("root");
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const [redigerOpplysningModus, setRedigerOpplysningModus] = useState(false);

  const kanRedigere =
    !props.readonly && opplysning.redigerbar && featureFlags.kanRedigereOpplysninger;

  const opplysningForm = useForm({
    validator: hentValideringForOpplysning(opplysning),
    method: "post",
    defaultValues: {
      verdi: formaterOpplysningVerdi(opplysning),
    },
  });

  function resetForm() {
    opplysningForm.resetForm();
    setRedigerOpplysningModus(false);
  }

  return (
    <li className={styles.linje}>
      <form
        className={classnames("aksel--compact", styles.form)}
        {...opplysningForm.getFormProps()}
      >
        <input hidden={true} readOnly={true} name="_action" value="lagre-opplysning" />
        <input hidden={true} readOnly={true} name="opplysningId" value={opplysning.id} />
        <input hidden={true} readOnly={true} name="datatype" value={opplysning.datatype} />
        <input hidden={true} readOnly={true} name="behandlingId" value={oppgave.behandlingId} />
        {opplysning.navn}
        <Opplysning
          opplysning={opplysning}
          formScope={opplysningForm.scope("verdi")}
          readonly={!redigerOpplysningModus}
        />

        {kanRedigere && (
          <div className={styles.buttonContainer}>
            {!redigerOpplysningModus && (
              <Button
                variant="tertiary"
                type="button"
                size="xsmall"
                onClick={() => setRedigerOpplysningModus(true)}
              >
                Endre
              </Button>
            )}

            {redigerOpplysningModus && (
              <>
                {opplysningForm.formState.isDirty && (
                  <Button variant="primary" type="submit" size="xsmall">
                    Lagre
                  </Button>
                )}

                <Button variant="secondary" type="button" size="xsmall" onClick={() => resetForm()}>
                  Avbryt
                </Button>
              </>
            )}
          </div>
        )}
      </form>
    </li>
  );
}

export function formaterOpplysningVerdi(opplysning: IOpplysning) {
  switch (opplysning.datatype) {
    case "penger":
    case "desimaltall":
      return formaterTallMedTusenSeperator(opplysning.verdi);
    case "dato":
      return formaterNorskDato(opplysning.verdi);
    default:
      return opplysning.verdi;
  }
}
