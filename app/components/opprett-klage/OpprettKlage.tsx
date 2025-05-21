import { FilePlusIcon } from "@navikt/aksel-icons";
import { BodyShort, Button, Heading, Popover } from "@navikt/ds-react";
import { useRef, useState } from "react";

import { RemixLink } from "~/components/RemixLink";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";

import styles from "./OpprettKlage.module.css";

export function OpprettKlage() {
  const { oppgave } = useTypedRouteLoaderData("routes/person.$personUuid");
  const [openState, setOpenState] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <div className={"flex justify-end"}>
      <Button
        className={"my-2"}
        ref={buttonRef}
        size="small"
        variant="secondary"
        onClick={() => setOpenState(!openState)}
        aria-expanded={openState}
        icon={<FilePlusIcon />}
      >
        Opprett ny behandling
      </Button>

      <Popover
        className={styles.popover}
        open={openState}
        onClose={() => setOpenState(false)}
        anchorEl={buttonRef.current}
        offset={8}
        arrow={false}
        placement="bottom-start"
      >
        <Popover.Content>
          <Heading level="2" size="xsmall" spacing>
            Velg behandlingstype
          </Heading>
          <BodyShort size={"small"}>
            <RemixLink to={`/person/${oppgave.oppgaveId}/ny-behandling/klage`} size={"xsmall"}>
              Klage
            </RemixLink>
          </BodyShort>
        </Popover.Content>
      </Popover>
    </div>
  );
}
