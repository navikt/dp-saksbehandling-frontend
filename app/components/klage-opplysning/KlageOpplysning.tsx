import { FormScope, useForm } from "@rvf/react-router";
import classnames from "classnames";
import { useEffect } from "react";
import { Form } from "react-router";

import { KlageOpplysningBoolean } from "~/components/klage-opplysning/KlageOpplysningBoolean";
import { KlageOpplysningDato } from "~/components/klage-opplysning/KlageOpplysningDato";
import { KlageOpplysningFlervalg } from "~/components/klage-opplysning/KlageOpplysningFlervalg";
import { KlageOpplysningTekst } from "~/components/klage-opplysning/KlageOpplysningTekst";
import { KlageOpplysningValg } from "~/components/klage-opplysning/KlageOpplysningValg";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { hentValideringForKlageOpplysningSkjema } from "~/utils/validering.util";

import { components } from "../../../openapi/saksbehandling-typer";

type OpplysningVisningTyper = "vertikal" | "horisontal";

export interface IKlageOpplysningProps {
  opplysning: components["schemas"]["KlageOpplysning"];
  formScope: FormScope<components["schemas"]["KlageOpplysning"]["verdi"]>;
  readonly?: boolean;
}

interface IProps {
  behandlingId: string;
  opplysning: components["schemas"]["KlageOpplysning"];
  visningType: OpplysningVisningTyper;
  readonly?: boolean;
}

export function KlageOpplysning({ opplysning, behandlingId, readonly, visningType }: IProps) {
  const klageOpplysningForm = useForm({
    schema: hentValideringForKlageOpplysningSkjema(opplysning),
    method: "post",
    defaultValues: {
      verdi: formaterOpplysningVerdi(opplysning),
      opplysningId: opplysning.opplysningId,
      datatype: opplysning.type,
      behandlingId: behandlingId,
    },
  });

  useEffect(
    () =>
      klageOpplysningForm.subscribe.value((formData) => {
        klageOpplysningForm.submit({ name: "verdi", value: formData.verdi });
      }),
    [],
  );

  return (
    <Form
      className={classnames({
        "opplysning--compact-vertikal": visningType === "vertikal",
        "opplysning--compact-horisontal": visningType === "horisontal",
      })}
      {...klageOpplysningForm.getFormProps()}
    >
      <input hidden={true} readOnly={true} name="_action" value="lagre-klage-opplysning" />
      <input
        hidden={true}
        readOnly={true}
        {...klageOpplysningForm.field("opplysningId").getInputProps()}
      />
      <input
        hidden={true}
        readOnly={true}
        {...klageOpplysningForm.field("datatype").getInputProps()}
      />
      <input
        hidden={true}
        readOnly={true}
        {...klageOpplysningForm.field("behandlingId").getInputProps()}
      />
      <OpplysningType
        opplysning={opplysning}
        formScope={klageOpplysningForm.scope("verdi")}
        readonly={readonly}
      />
    </Form>
  );
}

function OpplysningType({ opplysning, formScope, readonly }: IKlageOpplysningProps) {
  switch (opplysning.type) {
    case "BOOLSK":
      return (
        <KlageOpplysningBoolean opplysning={opplysning} formScope={formScope} readonly={readonly} />
      );

    case "DATO":
      return (
        <KlageOpplysningDato opplysning={opplysning} formScope={formScope} readonly={readonly} />
      );

    case "LISTEVALG":
      return (
        <KlageOpplysningValg opplysning={opplysning} formScope={formScope} readonly={readonly} />
      );

    case "TEKST":
      return (
        <KlageOpplysningTekst opplysning={opplysning} formScope={formScope} readonly={readonly} />
      );

    case "FLER_LISTEVALG":
      return (
        <KlageOpplysningFlervalg
          opplysning={opplysning}
          formScope={formScope}
          readonly={readonly}
        />
      );
  }
}

function formaterOpplysningVerdi(opplysning: components["schemas"]["KlageOpplysning"]): string {
  if (opplysning.verdi === undefined) {
    return "";
  }

  switch (opplysning.type) {
    case "BOOLSK":
      return opplysning.verdi ? "Ja" : "Nei";
    case "DATO":
      return formaterTilNorskDato(opplysning.verdi);
    case "LISTEVALG":
      return opplysning.verdi;
    case "TEKST":
      return opplysning.verdi;
    case "FLER_LISTEVALG":
      return opplysning.verdi.join(", ");
  }
}
