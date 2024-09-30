import { Modal } from "@navikt/ds-react";
import { Outlet, useNavigate } from "@remix-run/react";

export default function _Modal() {
  const navigate = useNavigate();
  return (
    <Modal
      closeOnBackdropClick={false}
      aria-label={""}
      open={true}
      width={"small"}
      onClose={() => navigate(-1)}
    >
      <Outlet />
    </Modal>
  );
}
