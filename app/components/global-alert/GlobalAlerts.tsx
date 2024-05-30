import React from "react";
import { Alert, BodyLong, Detail, Heading } from "@navikt/ds-react";
import { useGlobalAlerts } from "~/hooks/useGlobalAlerts";
import { isAlertHTTPProblem, isAlertMessage } from "~/utils/type-guards";
import styles from "./GlobalAlert.module.css";

export function GlobalAlerts() {
  const { alerts, removeAlert } = useGlobalAlerts();

  return (
    <div className={styles.container}>
      {alerts.map((alert, index) => (
        <Alert
          className={styles.alert}
          key={index}
          variant={alert.variant}
          closeButton={true}
          fullWidth={true}
          onClose={() => removeAlert(index)}
        >
          {isAlertHTTPProblem(alert) && (
            <>
              <Heading size="small">{`${alert.problem.status} - ${alert.problem.title}`}</Heading>
              <Detail>{alert.problem.detail}</Detail>
              <Detail>{alert.problem.type}</Detail>
              {alert.problem.instance ? <Detail>{alert.problem.instance}</Detail> : undefined}
            </>
          )}

          {isAlertMessage(alert) && (
            <>
              <Heading size="small">{alert.title}</Heading>
              {typeof alert.body === "string" ? <BodyLong>{alert.body}</BodyLong> : alert.body}
            </>
          )}
        </Alert>
      ))}
    </div>
  );
}
