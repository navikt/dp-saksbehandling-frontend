import { PencilWritingIcon } from "@navikt/aksel-icons";
import { Button, Heading, Modal } from "@navikt/ds-react";
import { useRef } from "react";

import { useForm } from "@rvf/remix";
import { withZod } from "@rvf/zod";
import { z } from "zod";
import { IOrkestratorBarn } from "~/models/orkestrator-opplysning.server";
import styles from "./OrkestratorBarn.module.css";
import { OrkestratorOpplysningRad } from "./OrkestratorOpplysningRad";
import classNames from "classnames";

interface IProps {
  barnNummer: number;
  barn: IOrkestratorBarn;
}

const validator = withZod(
  z.object({
    projectName: z
      .string()
      .min(1, "Projects need a name.")
      .max(50, "Must be 50 characters or less."),
    tasks: z
      .array(
        z.object({
          title: z.string().min(1, "Tasks need a title.").max(50, "Must be 50 characters or less."),
          daysToComplete: z.coerce.number({
            required_error: "This is required",
          }),
        }),
      )
      .min(1, "Needs at least one task.")
      .default([]),
  }),
);

export function OrkestratorBarn({ barnNummer, barn }: IProps) {
  const ref = useRef<HTMLDialogElement>(null);

  const barnOpplysningForm = useForm({
    validator: validator,
    method: "put",
    defaultValues: {},
  });

  return (
    <div className={styles.orkestratorBarn}>
      <>
        <Heading level="4" size="xsmall" className={styles.opplysningBarnHeader} spacing>
          Barn {barnNummer}
        </Heading>
        <table className={classNames(styles.opplysningBarnTabell, styles.background)}>
          <tbody>
            {barn.opplysninger.map((opplysning, index) => (
              <OrkestratorOpplysningRad key={index} opplysning={opplysning} readOnly />
            ))}
          </tbody>
        </table>
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
        <form {...barnOpplysningForm.getFormProps()}>
          <Modal.Body>
            <table className={styles.opplysningBarnTabell}>
              <tbody>
                {barn.opplysninger.map((opplysning, index) => (
                  <OrkestratorOpplysningRad key={index} opplysning={opplysning} />
                ))}
              </tbody>
            </table>
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
            <Button
              type="button"
              variant="secondary"
              size="small"
              onClick={() => ref.current?.close()}
            >
              Avbryt
            </Button>
            <Button type="submit" onClick={() => ref.current?.close()} size="small">
              Lagre endringer
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
}
