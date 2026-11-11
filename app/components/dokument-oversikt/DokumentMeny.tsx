import { FileTextIcon } from "@navikt/aksel-icons";
import { Button, Heading, Popover } from "@navikt/ds-react";
import { useId, useState } from "react";

import { DokumentOversikt } from "~/components/dokument-oversikt/DokumentOversikt";
import { useOppgave } from "~/hooks/useOppgave";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";

export function DokumentMeny() {
  const { oppgave } = useOppgave();
  const { featureFlags } = useTypedRouteLoaderData("root");
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const popoverId = useId();

  if (!featureFlags.dokumentIDropdown || oppgave.journalpostIder.length === 0) {
    return null;
  }

  return (
    <>
      <Button
        ref={setAnchorEl}
        type="button"
        variant="secondary"
        size="small"
        icon={<FileTextIcon aria-hidden />}
        aria-label="Dokumenter"
        title="Dokumenter"
        aria-expanded={open}
        aria-controls={open ? popoverId : undefined}
        onClick={() => {
          setOpen(!open);
          if (!open) {
            window.umami?.track("Vis dokumenter", { visning: "dropdown" });
          }
        }}
      />
      <Popover
        id={popoverId}
        open={open}
        onClose={() => setOpen(false)}
        anchorEl={anchorEl}
        placement="bottom-end"
        className="w-90 max-w-[calc(100vw-2rem)]"
      >
        <Popover.Content className="max-h-[60vh] overflow-y-auto">
          <Heading level="2" size="xsmall" spacing>
            Dokumenter
          </Heading>
          <DokumentOversikt />
        </Popover.Content>
      </Popover>
    </>
  );
}
