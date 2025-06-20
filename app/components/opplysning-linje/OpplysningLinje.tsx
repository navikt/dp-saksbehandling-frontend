import { PersonPencilIcon } from "@navikt/aksel-icons";
import { Button } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import classnames from "classnames";
import { useState } from "react";
import { Form, useNavigation } from "react-router";

import { Opplysning } from "~/components/opplysning/Opplysning";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { formaterNorskDato } from "~/utils/dato.utils";
import { formaterTallMedTusenSeperator } from "~/utils/number.utils";
import { hentValideringForOpplysning } from "~/utils/validering.util";

import { components } from "../../../openapi/behandling-typer";
import styles from "./OpplysningListe.module.css";

interface IProps {
  opplysning: components["schemas"]["Opplysning"];
  behandlingId: string;
  readonly?: boolean;
}

export function OpplysningLinje(props: IProps) {
  const { opplysning } = props;
  const { state } = useNavigation();
  const { featureFlags } = useTypedRouteLoaderData("root");
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
      <Form
        className={classnames("aksel--compact", styles.form)}
        {...opplysningForm.getFormProps()}
      >
        <input hidden={true} readOnly={true} name="_action" value="lagre-opplysning" />
        <input hidden={true} readOnly={true} name="opplysningId" value={opplysning.id} />
        <input hidden={true} readOnly={true} name="datatype" value={opplysning.datatype} />
        <input hidden={true} readOnly={true} name="behandlingId" value={props.behandlingId} />
        <div className={styles.opplysningNavn}>
          {opplysning.kilde?.type === "Saksbehandler" && <PersonPencilIcon fontSize="1.5rem" />}
          {opplysning.navn}
        </div>

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
                  <Button variant="primary" type="submit" size="xsmall" loading={state !== "idle"}>
                    Lagre
                  </Button>
                )}

                <Button
                  variant="secondary"
                  type="button"
                  size="xsmall"
                  onClick={() => resetForm()}
                  loading={state !== "idle"}
                >
                  Avbryt
                </Button>
              </>
            )}
          </div>
        )}
      </Form>
    </li>
  );
}

export function formaterOpplysningVerdi(opplysning: components["schemas"]["Opplysning"]) {
  switch (opplysning.datatype) {
    case "penger":
      return `${formaterTallMedTusenSeperator(opplysning.verdi)} kr`;
    case "desimaltall":
      return formaterTallMedTusenSeperator(opplysning.verdi);
    case "dato":
      return formaterNorskDato(opplysning.verdi);
    case "boolsk":
      return opplysning.verdi === "true" ? "Ja" : "Nei";

    default:
      return opplysning.verdi;
  }
}
