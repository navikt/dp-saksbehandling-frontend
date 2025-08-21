import { Button, Heading, Modal } from "@navikt/ds-react";
import { useRef, useState } from "react";

import { getEnv } from "~/utils/env.utils";

interface IProps {
  setKaffepause: (value: boolean) => void;
  kaffepause: boolean;
}

export function Kaffepause(props: IProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const [kattNummer, setKattNummer] = useState(hentTilfeldigNummer());

  function hentNyKatt() {
    setKattNummer((prevNummer) => {
      let nyttNummer;
      do {
        nyttNummer = hentTilfeldigNummer();
      } while (nyttNummer === prevNummer);
      return nyttNummer;
    });
  }

  return (
    <Modal
      closeOnBackdropClick={false}
      aria-label={""}
      open={props.kaffepause}
      onClose={() => undefined}
      onCancel={(e) => e.preventDefault()}
      ref={ref}
    >
      <>
        <Modal.Header className={"flex justify-center"} closeButton={false}>
          <Heading size={"medium"}>Katt til kaffen ☕️</Heading>
        </Modal.Header>

        <Modal.Body className={"flex flex-col items-center"}>
          <img
            src={`${getEnv("IS_LOCALHOST") ? "" : "https://cdn.nav.no/teamdagpenger/dp-saksbehandling-frontend/client"}/katter/cat${kattNummer}.gif`}
            alt={""}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button size="small" variant="secondary" onClick={() => hentNyKatt()}>
            Ny katt
          </Button>
          <Button size="small" variant="primary" onClick={() => props.setKaffepause(false)}>
            Nok kaffe
          </Button>
        </Modal.Footer>
      </>
    </Modal>
  );
}

function hentTilfeldigNummer() {
  return Math.floor(Math.random() * 8) + 1;
}
