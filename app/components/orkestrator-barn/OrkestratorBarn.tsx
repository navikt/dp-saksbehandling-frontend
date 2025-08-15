import { PencilWritingIcon } from "@navikt/aksel-icons";
import { Button, Heading, Modal } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import classNames from "classnames";
import classnames from "classnames";
import { useRef } from "react";
import { Form, useNavigation } from "react-router";

import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { hentOrkestratorBarnFormDefaultValues } from "~/utils/orkestrator-opplysninger.utils";
import { hentValideringOrkestratorBarn } from "~/utils/validering.util";

import {
  components,
  components as orkestratorComponents,
} from "../../../openapi/soknad-orkestrator-typer";
import styles from "./OrkestratorBarn.module.css";
import { OrkestratorOpplysningLinje } from "./OrkestratorOpplysningLinje";

export function OrkestratorBarn({ opplysningId }: { opplysningId: string }) {
  const { orkestratorBarn } = useTypedRouteLoaderData(
    "routes/oppgave.$oppgaveId.dagpenger-rett.$behandlingId.behandle",
  );

  if (!orkestratorBarn) {
    return null;
  }

  return (
    <>
      {orkestratorBarn.map(
        (barn: orkestratorComponents["schemas"]["BarnResponse"], index: number) => (
          <Barn key={barn.barnId} barnNummer={index + 1} barn={barn} opplysningId={opplysningId} />
        ),
      )}
    </>
  );
}

interface IProps {
  barnNummer: number;
  barn: components["schemas"]["BarnResponse"];
  opplysningId: string;
}

function Barn({ barnNummer, barn, opplysningId }: IProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const { state } = useNavigation();
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const { behandling } = useTypedRouteLoaderData(
    "routes/oppgave.$oppgaveId.dagpenger-rett.$behandlingId",
  );

  // Filtrerer bort opplysninger der id er ‘endretAv’, siden disse ikke skal vises.
  const barnOpplysninger = barn.opplysninger.filter((opplysning) => opplysning.id !== "endretAv");

  const orkestratorBarnForm = useForm({
    validator: hentValideringOrkestratorBarn(),
    method: "put",
    defaultValues: hentOrkestratorBarnFormDefaultValues(barnOpplysninger),
    onSubmitSuccess: () => {
      ref.current?.close();
    },
  });

  function avbryt() {
    orkestratorBarnForm.resetForm();
    ref.current?.close();
  }

  return (
    <div className={classnames(styles.orkestratorBarn, "card m-4 p-2")}>
      <Heading
        level="4"
        size="xsmall"
        className={classnames(styles.opplysningBarnHeader, "mt-1 mb-0")}
        spacing
      >
        Barn {barnNummer}
      </Heading>
      <div className={styles.orkestratorOpplysning}>
        {barnOpplysninger.map((opplysning, index) => (
          <OrkestratorOpplysningLinje
            key={index}
            opplysning={opplysning}
            formScope={orkestratorBarnForm.scope(opplysning.id)}
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
              <input
                hidden={true}
                readOnly={true}
                name="behandlingId"
                value={behandling.behandlingId}
              />
              {barnOpplysninger.map((opplysning, index) => (
                <OrkestratorOpplysningLinje
                  key={index}
                  opplysning={opplysning}
                  formScope={orkestratorBarnForm.scope(opplysning.id as string)}
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
