import { PencilWritingIcon } from "@navikt/aksel-icons";
import { Button, Heading, Modal } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import classNames from "classnames";
import { useRef } from "react";
import { useNavigation } from "react-router";

import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { hentOrkestratorBarnFormDefaultValues } from "~/utils/orkestrator-opplysninger.utils";
import { hentValideringOrkestratorBarn } from "~/utils/validering.util";

import { components } from "../../../openapi/soknad-orkestrator-typer";
import styles from "./OrkestratorBarn.module.css";
import { OrkestratorOpplysningLinje } from "./OrkestratorOpplysningLinje";

interface IProps {
  barnNummer: number;
  barn: components["schemas"]["BarnResponse"];
}

export function OrkestratorBarn({ barnNummer, barn }: IProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const { state } = useNavigation();
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");

  // Filtrerer bort opplysninger der id er ‘endretAv’, siden disse ikke skal vises.
  const barnOpplysninger = barn.opplysninger.filter((opplysning) => opplysning.id !== "endretAv");

  const orkestratorBarnForm = useForm({
    validator: hentValideringOrkestratorBarn(),
    method: "put",
    defaultValues: hentOrkestratorBarnFormDefaultValues(barn.opplysninger),
    onSubmitSuccess: () => {
      ref.current?.close();
    },
  });

  function avbryt() {
    orkestratorBarnForm.resetForm();
    ref.current?.close();
  }

  return (
    <div className={styles.orkestratorBarn}>
      <>
        <Heading level="4" size="xsmall" className={styles.opplysningBarnHeader} spacing>
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
      </>
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
        <form {...orkestratorBarnForm.getFormProps()}>
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
        </form>
      </Modal>
    </div>
  );
}
