import { PencilWritingIcon, TrashIcon } from "@navikt/aksel-icons";
import { Button, Heading, Modal, Textarea } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { useEffect, useRef, useState } from "react";
import { Form, useActionData, useNavigation } from "react-router";

import { useBehandling } from "~/hooks/useBehandling";
import { useTypeSafeParams } from "~/hooks/useTypeSafeParams";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { isAlert } from "~/utils/type-guards";
import {
  hentValideringForRedigeringBarn,
  hentValideringForSlettBarn,
} from "~/utils/validering.util";

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
  const { barnId: soknadbarnId } = useTypeSafeParams();
  const actionData = useActionData();
  const slettModalRef = useRef<HTMLDialogElement>(null);

  const fornavnOgMellomnavn = barn.opplysninger.find((o) => o.id === "fornavnOgMellomnavn")?.verdi;
  const etternavn = barn.opplysninger.find((o) => o.id === "etternavn")?.verdi;
  const fodselsdato = barn.opplysninger.find((o) => o.id === "fodselsdato")?.verdi;
  const oppholdssted = barn.opplysninger.find((o) => o.id === "oppholdssted")?.verdi;
  const forsorgerBarnet = barn.opplysninger.find((o) => o.id === "forsorgerBarnet")?.verdi;
  const kvalifisererTilBarnetillegg = barn.opplysninger.find(
    (o) => o.id === "kvalifisererTilBarnetillegg",
  )?.verdi;
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
      forsorgerBarnet: forsorgerBarnet as "true" | "false" | undefined,
      kvalifisererTilBarnetillegg: kvalifisererTilBarnetillegg as "true" | "false" | undefined,
      barnetilleggFom: barnetilleggFom ? formaterTilNorskDato(barnetilleggFom) : undefined,
      barnetilleggTom: barnetilleggTom ? formaterTilNorskDato(barnetilleggTom) : undefined,
      begrunnelse: begrunnelse,
    },
  });

  const slettBarnForm = useForm({
    method: "post",
    schema: hentValideringForSlettBarn(),
    submitSource: "state",
    defaultValues: {
      _action: "slett-barn",
      soknadbarnId: soknadbarnId,
      barnId: barn.barnId,
      behandlingId: behandling.behandlingId,
      begrunnelse: "",
    },
    onSubmitSuccess: () => slettModalRef.current?.close(),
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
    <div className="card card-raised m-4 mt-8 p-2">
      <Form {...orkestratorBarnForm.getFormProps()}>
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
          <div className="mt-4 ml-3 flex gap-2">
            <Button
              type="button"
              variant="secondary"
              size="small"
              icon={<PencilWritingIcon />}
              onClick={() => setRedigerer(true)}
            >
              Endre
            </Button>

            <Button
              type="button"
              variant="secondary"
              size="small"
              icon={<TrashIcon />}
              onClick={() => slettModalRef.current?.showModal()}
            >
              Slett
            </Button>
          </div>
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
      </Form>

      <Form {...slettBarnForm.getFormProps()}>
        <Modal
          ref={slettModalRef}
          header={{ heading: `Slett barn ${barnNummer}: ${fornavnOgMellomnavn} ${etternavn}` }}
        >
          <Modal.Body>
            <Textarea
              {...slettBarnForm.getInputProps("begrunnelse")}
              label="Begrunnelse"
              description="Beskriv hvorfor barnet skal slettes"
              error={slettBarnForm.error("begrunnelse")}
              resize
            />
          </Modal.Body>
          <Modal.Footer>
            <Button
              type="button"
              size="small"
              variant="danger"
              loading={state !== "idle"}
              onClick={() => slettBarnForm.submit()}
              disabled={!slettBarnForm.formState.isDirty}
            >
              Slett barn
            </Button>

            <Button
              type="button"
              size="small"
              variant="secondary"
              onClick={() => {
                slettBarnForm.resetForm();
                slettModalRef.current?.close();
              }}
            >
              Avbryt
            </Button>
          </Modal.Footer>
        </Modal>
      </Form>
    </div>
  );
}
