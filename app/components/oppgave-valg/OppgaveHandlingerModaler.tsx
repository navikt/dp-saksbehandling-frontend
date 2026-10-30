import { Button, Modal, Radio, RadioGroup } from "@navikt/ds-react";

import { components } from "@/openapi/saksbehandling-typer";
import type { useOppgaveHandlinger } from "~/hooks/useOppgaveHandlinger";
import { hentTekstForAvbrytÅrsak, hentTekstForLeggTilbakeÅrsak } from "~/utils/tekst.utils";

interface Props extends Pick<
  ReturnType<typeof useOppgaveHandlinger>,
  "leggTilbake" | "avbryt" | "isPending"
> {
  lovligeEndringer?: components["schemas"]["LovligeEndringer"];
}

export function OppgaveHandlingerModaler({
  leggTilbake,
  avbryt,
  isPending,
  lovligeEndringer,
}: Props) {
  return (
    <>
      <Modal ref={leggTilbake.modalRef} header={{ heading: "Legg tilbake" }}>
        <Modal.Body>
          <RadioGroup
            {...leggTilbake.form.getInputProps("årsak")}
            size="small"
            error={leggTilbake.form.field("årsak").error()}
            legend="Velg årsak"
            disabled={isPending}
          >
            {lovligeEndringer?.leggTilbakeAarsaker.map((årsak) => (
              <Radio key={årsak} value={årsak}>
                {hentTekstForLeggTilbakeÅrsak(årsak)}
              </Radio>
            ))}
          </RadioGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button
            size="small"
            variant="primary"
            type="button"
            loading={leggTilbake.form.formState.isSubmitting || isPending}
            disabled={isPending}
            onClick={() => leggTilbake.form.submit()}
          >
            Legg tilbake
          </Button>
          <Button
            size="small"
            variant="secondary"
            type="button"
            disabled={isPending}
            onClick={() => leggTilbake.modalRef.current?.close()}
          >
            Ikke legg tilbake
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal ref={avbryt.modalRef} header={{ heading: "Avbryt" }}>
        <Modal.Body>
          <RadioGroup
            {...avbryt.form.getInputProps("årsak")}
            size="small"
            error={avbryt.form.field("årsak").error()}
            legend="Velg årsak"
            disabled={isPending}
          >
            {lovligeEndringer?.avbrytAarsaker.map((årsak) => (
              <Radio key={årsak} value={årsak}>
                {hentTekstForAvbrytÅrsak(årsak)}
              </Radio>
            ))}
          </RadioGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button
            size="small"
            variant="primary"
            type="button"
            loading={avbryt.form.formState.isSubmitting}
            disabled={isPending}
            onClick={() => avbryt.form.submit()}
          >
            Avbryt oppgave
          </Button>
          <Button
            size="small"
            variant="secondary"
            type="button"
            disabled={isPending}
            onClick={() => avbryt.modalRef.current?.close()}
          >
            Behold oppgave
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
