import { Alert, BodyLong, Heading } from "@navikt/ds-react";
import { useGlobalAlerts } from "~/hooks/useGlobalAlerts";
import classnames from "classnames";
import styles from "./GlobalAlert.module.css";

export function GlobalAlerts() {
  const { alerts, removeAlert } = useGlobalAlerts();

  return (
    <div className={styles.container}>
      {alerts.map((alert, index) => (
        <Alert
          className={classnames(styles.alert, {
            [styles.alertFadeInOut]: alert.variant === "success",
            [styles.alertFadeIn]: alert.variant !== "success",
          })}
          key={index}
          variant={alert.variant}
          closeButton={true}
          fullWidth={true}
          onClose={() => removeAlert(index)}
        >
          <>
            <Heading size="small">{alert.title}</Heading>
            {alert.body && <BodyLong>{alert.body}</BodyLong>}
          </>
        </Alert>
      ))}
    </div>
  );
}
