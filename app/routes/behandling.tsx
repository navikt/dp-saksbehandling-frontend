import { Outlet, useRouteError } from "react-router";

import { ErrorMessageComponent } from "~/components/error-boundary/RootErrorBoundaryView";
import { DagpengerRettBehandlingProvider } from "~/context/dagpenger-rett-behandling-context";

export default function Behandling() {
  return (
    <DagpengerRettBehandlingProvider>
      <Outlet />
    </DagpengerRettBehandlingProvider>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return <ErrorMessageComponent error={error} />;
}
