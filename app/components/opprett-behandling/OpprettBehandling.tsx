import { FilePlusIcon } from "@navikt/aksel-icons";
import { BodyShort, Button, Heading, Popover } from "@navikt/ds-react";
import { useEffect, useRef, useState } from "react";
import { useFetcher } from "react-router";

import { LoadingLink } from "~/components/loading-link/LoadingLink";
import { ManuellBehandlingModal } from "~/components/opprett-behandling/ManuellBehandlingModal";
import { RevurderingModal } from "~/components/opprett-behandling/RevurderingModal";
import { useGlobalAlerts } from "~/hooks/useGlobalAlerts";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { isAlert } from "~/utils/type-guards";

import styles from "./OpprettBehandling.module.css";

export function OpprettBehandling() {
  const fetcher = useFetcher();
  const { addAlert } = useGlobalAlerts();
  const { personOversikt } = useTypedRouteLoaderData("routes/person.$personUuid");
  const [openState, setOpenState] = useState(false);
  const manuellBehandlingModal = useRef<HTMLDialogElement>(null);
  const revurderingModal = useRef<HTMLDialogElement>(null);
  const popoverRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (fetcher.data) {
      manuellBehandlingModal.current?.close();
      if (isAlert(fetcher.data)) {
        addAlert(fetcher.data);
      }
    }
  }, [fetcher.data]);

  return (
    <>
      <Button
        className={"my-2"}
        ref={popoverRef}
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
        anchorEl={popoverRef.current}
        offset={8}
        placement="bottom-start"
      >
        <Popover.Content>
          <Heading level="2" size="xsmall" spacing>
            Velg behandlingstype
          </Heading>

          <BodyShort size={"small"}>
            <Button
              variant={"tertiary-neutral"}
              size={"xsmall"}
              onClick={() => manuellBehandlingModal.current?.showModal()}
            >
              Manuell behandling
            </Button>
          </BodyShort>

          <BodyShort size={"small"}>
            <Button
              variant={"tertiary-neutral"}
              size={"xsmall"}
              onClick={() => revurderingModal.current?.showModal()}
            >
              Revurdering
            </Button>
          </BodyShort>

          <BodyShort size={"small"}>
            <LoadingLink
              to={`/person/${personOversikt.person.id}/ny-behandling/klage`}
              asButtonVariant={"tertiary-neutral"}
            >
              Klage
            </LoadingLink>
          </BodyShort>
        </Popover.Content>
      </Popover>

      <ManuellBehandlingModal ref={manuellBehandlingModal} />
      <RevurderingModal ref={revurderingModal} />
    </>
  );
}
