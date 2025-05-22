import { Outlet } from "react-router";

import { DagpengerRettBehandlingProvider } from "~/context/dagpenger-rett-behandling-context";

export default function Behandling() {
  return (
    <DagpengerRettBehandlingProvider>
      <Outlet />
    </DagpengerRettBehandlingProvider>
  );
}
