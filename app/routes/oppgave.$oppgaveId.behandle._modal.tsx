import { Modal } from "@navikt/ds-react";
import { Outlet, useNavigate, useParams } from "@remix-run/react";

export default function _Modal() {
  const { oppgaveId } = useParams();
  const navigate = useNavigate();
  return (
    <Modal
      closeOnBackdropClick={false}
      aria-label={""}
      open={true}
      width={"small"}
      onClose={() => navigate(`/oppgave/${oppgaveId}`)}
    >
      <Outlet />
    </Modal>
  );
}
