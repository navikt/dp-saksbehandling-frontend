import { PencilWritingIcon } from "@navikt/aksel-icons";
import { Button, Heading } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { useEffect, useState } from "react";
import { useActionData, useNavigation } from "react-router";

import { useBehandling } from "~/hooks/useBehandling";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { isAlert } from "~/utils/type-guards";
import { hentValideringForRedigeringBarn } from "~/utils/validering.util";

import { components } from "../../../../openapi/soknad-orkestrator-typer";
import { OrkestratorOpplysningLinje } from "./OrkestratorOpplysningLinje";

interface IProps {
  barnNummer: number;
  barn: components["schemas"]["BarnResponse"];
  orkestratorLandliste: components["schemas"]["Land"][];
}

export function OrkestratorBarn({ barnNummer, barn, orkestratorLandliste }: IProps) {
  const [redigerer, setRedigerer] = useState(false);
  const [venterPåSvar, setVenterPåSvar] = useState(false);
  const { state } = useNavigation();
  const { behandling } = useBehandling();
  const actionData = useActionData();

  const fornavnOgMellomnavn = barn.opplysninger.find((o) => o.id === "fornavnOgMellomnavn")?.verdi;
  const etternavn = barn.opplysninger.find((o) => o.id === "etternavn")?.verdi;
  const fodselsdato = barn.opplysninger.find((o) => o.id === "fodselsdato")?.verdi;
  const oppholdssted = barn.opplysninger.find((o) => o.id === "oppholdssted")?.verdi;
  const forsorgerBarnet =
    barn.opplysninger.find((o) => o.id === "forsorgerBarnet")?.verdi === "true" ? "true" : "false";
  const kvalifisererTilBarnetillegg =
    barn.opplysninger.find((o) => o.id === "kvalifisererTilBarnetillegg")?.verdi === "true"
      ? "true"
      : "false";
  const barnetilleggFom = barn.opplysninger.find((o) => o.id === "barnetilleggFom")?.verdi;
  const barnetilleggTom = barn.opplysninger.find((o) => o.id === "barnetilleggTom")?.verdi;
  const begrunnelse = barn.opplysninger.find((o) => o.id === "begrunnelse")?.verdi;

  const orkestratorBarnForm = useForm({
    method: "put",
    schema: hentValideringForRedigeringBarn(),
    submitSource: "state",
    defaultValues: {
      _action: "rediger-barn",
      behandlingId: behandling.behandlingId,
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a23b",
      barnId: barn.barnId,
      fornavnOgMellomnavn: fornavnOgMellomnavn,
      etternavn: etternavn,
      fodselsdato: fodselsdato ? formaterTilNorskDato(fodselsdato) : undefined,
      oppholdssted: oppholdssted,
      forsorgerBarnet: forsorgerBarnet,
      kvalifisererTilBarnetillegg: kvalifisererTilBarnetillegg,
      barnetilleggFom: barnetilleggFom ? formaterTilNorskDato(barnetilleggFom) : undefined,
      barnetilleggTom: barnetilleggTom ? formaterTilNorskDato(barnetilleggTom) : undefined,
      begrunnelse: begrunnelse,
    },
  });

  useEffect(() => {
    if (!venterPåSvar || state !== "idle" || !isAlert(actionData)) return;

    if (actionData.variant === "success") {
      orkestratorBarnForm.resetForm(orkestratorBarnForm.transient.value());
      setRedigerer(false);
    }

    setVenterPåSvar(false);
  }, [actionData, orkestratorBarnForm, state, venterPåSvar]);

  function avbryt() {
    orkestratorBarnForm.resetForm();
    setVenterPåSvar(false);
    setRedigerer(false);
  }

  return (
    <form {...orkestratorBarnForm.getFormProps()} className="card card-raised m-4 mt-8 p-2">
      <Heading level="4" size="xsmall" className="m-2" spacing>
        Barn {barnNummer}
      </Heading>

      <div className="flex flex-col gap-4 p-2">
        {barn.opplysninger.map((opplysning) => (
          <OrkestratorOpplysningLinje
            key={`${opplysning.id}-${redigerer}`}
            opplysning={opplysning}
            formScope={orkestratorBarnForm.scope(opplysning.id)}
            orkestratorLandliste={orkestratorLandliste}
            readOnly={!redigerer}
          />
        ))}
      </div>

      {!redigerer && (
        <Button
          type="button"
          variant="secondary"
          size="small"
          className="mt-4 ml-3"
          icon={<PencilWritingIcon />}
          onClick={() => setRedigerer(true)}
        >
          Endre
        </Button>
      )}

      {redigerer && (
        <div className="mt-4 ml-3 flex gap-2">
          <Button type="button" variant="secondary" size="small" onClick={avbryt}>
            Avbryt
          </Button>

          <Button
            type="button"
            size="small"
            loading={state !== "idle"}
            onClick={() => {
              setVenterPåSvar(true);
              orkestratorBarnForm.submit();
            }}
            disabled={!orkestratorBarnForm.formState.isDirty}
          >
            Lagre endringer
          </Button>
        </div>
      )}
    </form>
  );
}
