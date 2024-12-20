import { useEffect } from "react";

import type { IAlert } from "~/context/alert-context";
import { useGlobalAlerts } from "~/hooks/useGlobalAlerts";

export function useHandleAlertMessages(alert?: IAlert) {
  const { addAlert } = useGlobalAlerts();

  useEffect(() => {
    if (alert) {
      addAlert(alert);
    }
  }, [alert, addAlert]);
}
