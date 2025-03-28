import { Heading } from "@navikt/ds-react";
import { useEffect } from "react";
import { useEventSource } from "remix-utils/sse/react";

import { useGlobalAlerts } from "~/hooks/useGlobalAlerts";

export default function Time() {
  const { addAlert } = useGlobalAlerts();
  const alert = useEventSource("/test/sse/alert", { event: "alert" });

  useEffect(() => {
    if (alert) {
      addAlert(JSON.parse(alert));
    }
  }, [alert]);

  return (
    <div>
      <Heading size={"xsmall"}>Test alerts</Heading>
    </div>
  );
}
