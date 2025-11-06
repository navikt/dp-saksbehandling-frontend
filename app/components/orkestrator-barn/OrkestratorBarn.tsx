import { PencilWritingIcon } from "@navikt/aksel-icons";
import { Button, Heading, Modal } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import classNames from "classnames";
import classnames from "classnames";
import { useRef } from "react";
import { Form, useNavigation } from "react-router";

import { useOppgave } from "~/hooks/useOppgave";
import { useTypeSafeParams } from "~/hooks/useTypeSafeParams";
import { hentValideringOrkestratorBarn } from "~/utils/validering.util";

import {
  components,
  components as orkestratorComponents,
} from "../../../openapi/soknad-orkestrator-typer";
import styles from "./OrkestratorBarn.module.css";
import { OrkestratorOpplysningLinje } from "./OrkestratorOpplysningLinje";

interface IProps {
  opplysningId: string;
  orkestratorBarn: orkestratorComponents["schemas"]["BarnResponse"][];
  orkestratorLandliste: components["schemas"]["Land"][];
}

export function OrkestratorBarn({ opplysningId, orkestratorBarn, orkestratorLandliste }: IProps) {
  if (!orkestratorBarn) {
    return null;
  }

  return (
    <>
      {orkestratorBarn.map(
        (barn: orkestratorComponents["schemas"]["BarnResponse"], index: number) => (
          <Barn
            key={barn.barnId}
            barnNummer={index + 1}
            barn={barn}
            opplysningId={opplysningId}
            orkestratorLandliste={orkestratorLandliste}
          />
        ),
      )}
    </>
  );
}

interface IOrkestratorBarnProps {
  barnNummer: number;
  barn: components["schemas"]["BarnResponse"];
  opplysningId: string;
  orkestratorLandliste: components["schemas"]["Land"][];
}

function Barn({ barnNummer, barn, opplysningId, orkestratorLandliste }: IOrkestratorBarnProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const { state } = useNavigation();
  const { oppgave } = useOppgave();
  const { behandlingId } = useTypeSafeParams();

  const orkestratorBarnForm = useForm({
    schema: hentValideringOrkestratorBarn(),
    method: "put",
    defaultValues: {
      fornavnOgMellomnavn:
        barn.opplysninger.find((o) => o.id === "fornavnOgMellomnavn")?.verdi || "",
      etternavn: barn.opplysninger.find((o) => o.id === "etternavn")?.verdi || "",
      fodselsdato: barn.opplysninger.find((o) => o.id === "fodselsdato")?.verdi || "",
      oppholdssted: barn.opplysninger.find((o) => o.id === "oppholdssted")?.verdi || "",
      forsorgerBarnet:
        barn.opplysninger.find((o) => o.id === "forsorgerBarnet")?.verdi === "true"
          ? "true"
          : "false",
      kvalifisererTilBarnetillegg:
        barn.opplysninger.find((o) => o.id === "kvalifisererTilBarnetillegg")?.verdi === "true"
          ? "true"
          : "false",
      barnetilleggFom: barn.opplysninger.find((o) => o.id === "barnetilleggFom")?.verdi || "",
      barnetilleggTom: barn.opplysninger.find((o) => o.id === "barnetilleggTom")?.verdi || "",
      begrunnelse: barn.opplysninger.find((o) => o.id === "begrunnelse")?.verdi || "",
    },
    onSubmitSuccess: () => {
      ref.current?.close();
    },
  });

  function avbryt() {
    orkestratorBarnForm.resetForm();
    ref.current?.close();
  }

  return (
    <div className={classnames(styles.orkestratorBarn, "card-raised m-4 p-2")}>
      <Heading
        level="4"
        size="xsmall"
        className={classnames(styles.opplysningBarnHeader, "mt-1 mb-0")}
        spacing
      >
        Barn {barnNummer}
      </Heading>
      <div className={styles.orkestratorOpplysning}>
        {barn.opplysninger.map((opplysning, index) => (
          <OrkestratorOpplysningLinje
            key={index}
            opplysning={opplysning}
            formScope={orkestratorBarnForm.scope(opplysning.id)}
            orkestratorLandliste={orkestratorLandliste}
            readOnly
          />
        ))}
      </div>

      <Button
        variant="secondary"
        size="small"
        className={styles.endreKnapp}
        icon={<PencilWritingIcon />}
        onClick={() => ref.current?.showModal()}
      >
        Endre
      </Button>

      <Modal
        ref={ref}
        header={{ heading: `Barn ${barnNummer}` }}
        closeOnBackdropClick
        className={styles.modal}
      >
        <Form {...orkestratorBarnForm.getFormProps()}>
          <Modal.Body>
            <div className={classNames(styles.orkestratorOpplysning)}>
              <input
                hidden={true}
                readOnly={true}
                name="_action"
                value="oppdater-orkestrator-barn"
              />
              <input hidden={true} readOnly={true} name="soknadId" value={oppgave.soknadId} />
              <input hidden={true} readOnly={true} name="barnId" value={barn.barnId} />
              <input hidden={true} readOnly={true} name="opplysningId" value={opplysningId} />
              <input hidden={true} readOnly={true} name="behandlingId" value={behandlingId} />
              {barn.opplysninger.map((opplysning, index) => (
                <OrkestratorOpplysningLinje
                  key={index}
                  opplysning={opplysning}
                  formScope={orkestratorBarnForm.scope(opplysning.id)}
                  orkestratorLandliste={orkestratorLandliste}
                />
              ))}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              type="button"
              variant="tertiary"
              size="small"
              onClick={() => ref.current?.close()}
            >
              Lukk
            </Button>
            <Button type="button" variant="secondary" size="small" onClick={avbryt}>
              Avbryt
            </Button>
            <Button
              type="submit"
              size="small"
              loading={state !== "idle"}
              disabled={!orkestratorBarnForm.formState.isDirty}
            >
              Lagre endringer
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}
