import { FilePlusIcon } from "@navikt/aksel-icons";
import { BodyLong, BodyShort, Button, Heading, Modal, Popover } from "@navikt/ds-react";
import { useEffect, useRef, useState } from "react";
import { useFetcher } from "react-router";

import { RemixLink } from "~/components/RemixLink";
import { useGlobalAlerts } from "~/hooks/useGlobalAlerts";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { isAlert } from "~/utils/type-guards";

import styles from "./OpprettBehandling.module.css";

export function OpprettBehandling() {
  const fetcher = useFetcher();
  const { addAlert } = useGlobalAlerts();
  const { person } = useTypedRouteLoaderData("routes/person.$personUuid");
  const [openState, setOpenState] = useState(false);
  const modalRef = useRef<HTMLDialogElement>(null);
  const popoverRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (fetcher.data) {
      modalRef.current?.close();
      if (isAlert(fetcher.data)) {
        addAlert(fetcher.data);
      }
    }
  }, [fetcher.data]);

  return (
    <div className={"flex justify-end"}>
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
        arrow={false}
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
              onClick={() => modalRef.current?.showModal()}
            >
              Dagpengerett
            </Button>
          </BodyShort>
          <BodyShort size={"small"}>
            <RemixLink
              to={`/person/${person.id}/ny-behandling/klage`}
              size={"xsmall"}
              asButtonVariant={"tertiary-neutral"}
            >
              Klage
            </RemixLink>
          </BodyShort>
        </Popover.Content>
      </Popover>

      <Modal
        ref={modalRef}
        header={{
          icon: <FilePlusIcon aria-hidden />,
          heading: "Ved å endre opplysninger oppretter du en ny behandling",
        }}
        width={620}
      >
        <Modal.Body>
          <fetcher.Form method="post" id={"opprett-manuell-behandling-form"}>
            <input
              name="_action"
              value="opprett-manuell-behandling"
              hidden={true}
              readOnly={true}
            />
            <input name="personIdent" value={person.ident} hidden={true} readOnly={true} />
            <BodyLong spacing>
              Den nye behandlingen er basert på opplysningene i siste fullførte behandling. Du kan
              endre opplysninger i den nye behandlingen. Behandlingen kan ikke slettes.
            </BodyLong>
            <BodyLong> Er du sikker på at du vil opprette en ny behandling?</BodyLong>
          </fetcher.Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            size={"small"}
            form={"opprett-manuell-behandling-form"}
            loading={fetcher.state === "submitting"}
          >
            Opprett behandling
          </Button>
          <Button
            size={"small"}
            type="button"
            variant="secondary"
            onClick={() => modalRef.current?.close()}
          >
            Avbryt
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
