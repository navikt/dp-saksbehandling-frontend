import React, { useRef, useState } from "react";
import type { IOppgave } from "~/models/oppgave.server";
import { Button, Popover } from "@navikt/ds-react";
import { MenuElipsisHorizontalIcon } from "@navikt/aksel-icons";
import { RemixLink } from "~/components/RemixLink";

export function OppgaveListeValg(props: { oppgave: IOppgave }) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [openState, setOpenState] = useState(false);

  return (
    <>
      <Button
        ref={buttonRef}
        size="small"
        variant="tertiary-neutral"
        onClick={() => setOpenState(!openState)}
        aria-expanded={openState}
        icon={<MenuElipsisHorizontalIcon />}
      />
      <Popover
        open={openState}
        onClose={() => setOpenState(false)}
        anchorEl={buttonRef.current}
        offset={0}
        arrow={false}
        placement="bottom"
      >
        <Popover.Content>
          <RemixLink
            to={`/oppgave/${props.oppgave.oppgaveId}/behandling`}
            asButtonVariant="primary"
            size="xsmall"
          >
            Tildel oppgave
          </RemixLink>
        </Popover.Content>
      </Popover>
    </>
  );
}
