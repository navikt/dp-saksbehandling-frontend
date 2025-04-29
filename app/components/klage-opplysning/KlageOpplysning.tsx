import { Button } from "@navikt/ds-react";
import { FormScope, useForm } from "@rvf/react-router";

import { KlageOpplysningBoolean } from "~/components/klage-opplysning/KlageOpplysningBoolean";
import { KlageOpplysningDato } from "~/components/klage-opplysning/KlageOpplysningDato";
import { KlageOpplysningFlervalg } from "~/components/klage-opplysning/KlageOpplysningFlervalg";
import { KlageOpplysningTekst } from "~/components/klage-opplysning/KlageOpplysningTekst";
import { KlageOpplysningValg } from "~/components/klage-opplysning/KlageOpplysningValg";
import { formaterNorskDato } from "~/utils/dato.utils";
import { hentValideringForKlageOpplysning } from "~/utils/validering.util";

import { components } from "../../../openapi/saksbehandling-typer";

export interface IKlageOpplysningProps {
  opplysning: components["schemas"]["KlageOpplysning"];
  formScope: FormScope<components["schemas"]["KlageOpplysning"]["verdi"]>;
  readonly?: boolean;
}

interface IProps {
  oppgaveId: string;
  opplysning: components["schemas"]["KlageOpplysning"];
  readonly?: boolean;
}

export function KlageOpplysning({ opplysning, oppgaveId, readonly }: IProps) {
  const klageOpplysningForm = useForm({
    validator: hentValideringForKlageOpplysning(opplysning),
    method: "post",
    defaultValues: {
      verdi:
        opplysning.type === "BOOLSK" && opplysning.verdi
          ? // @ts-expect-error TODO Fix typing backend
            formaterNorskDato(opplysning.verdi)
          : opplysning.verdi,
    },
  });

  // useEffect(
  //   () =>
  //     klageOpplysningForm.subscribe.value((values) => {
  //       console.log(values);
  //       klageOpplysningForm.submit();
  //     }),
  //   [],
  // );

  return (
    <form className={"aksel--compact"} {...klageOpplysningForm.getFormProps()}>
      <input hidden={true} readOnly={true} name="_action" value="lagre-klage-opplysning" />
      <input hidden={true} readOnly={true} name="oppgave-id" value={oppgaveId} />
      <input hidden={true} readOnly={true} name="opplysning-id" value={opplysning.id} />
      <input hidden={true} readOnly={true} name="datatype" value={opplysning.type} />

      <OpplysningType
        opplysning={opplysning}
        formScope={klageOpplysningForm.scope("verdi")}
        readonly={readonly}
      />

      <Button variant={"secondary"} size={"xsmall"}>
        lagre
      </Button>
    </form>
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
