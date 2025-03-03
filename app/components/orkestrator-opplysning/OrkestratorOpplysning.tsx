import { PencilWritingIcon } from "@navikt/aksel-icons";
import { Button, Modal } from "@navikt/ds-react";
import { useRef } from "react";

import {
  OrkestratorOpplysningReadonlyTabell
} from "~/components/orkestrator-opplysning/OrkestratorOpplysningReadonlyTabell";
import { OrkestratorOpplysningTabell } from "~/components/orkestrator-opplysning/OrkestratorOpplysningTabell";

import { IOrkestratorOpplysningBarn } from "../../../mocks/data/mock-orkestrator-opplysning-barn";
import styles from "./OrkestratorOpplysning.module.css";

interface IProps {
  barnIndex: number;
  barnOpplysning: IOrkestratorOpplysningBarn;
}

export function OrkestratorOpplysning({ barnIndex, barnOpplysning }: IProps) {
  const ref = useRef<HTMLDialogElement>(null);

  return (
    <div className={styles.opplysningTabellContainer}>
      <OrkestratorOpplysningReadonlyTabell barnIndex={barnIndex} barnOpplysning={barnOpplysning}  />

      <Button
        variant="primary"
        size="small"
        className={styles.endreKnapp}
        icon={<PencilWritingIcon />}
        onClick={() => ref.current?.showModal()}
      >
        Endre
      </Button>

      <Modal ref={ref} header={{ heading: "Barn fra søknad" }} closeOnBackdropClick className={styles.modal}>
        <Modal.Body>
          <OrkestratorOpplysningTabell barnIndex={barnIndex} barnOpplysning={barnOpplysning} />
        </Modal.Body>
        <Modal.Footer>
          <Button type="button" variant="tertiary" onClick={() => ref.current?.close()}>
            Lukk
          </Button>
          <Button type="button" variant="secondary" onClick={() => ref.current?.close()}>
            Avbryt
          </Button>
          <Button type="button" onClick={() => ref.current?.close()}>
            Lagre endringer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
