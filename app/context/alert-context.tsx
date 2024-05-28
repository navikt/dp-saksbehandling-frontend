import type { PropsWithChildren } from "react";
import { createContext, useState } from "react";
import type { AlertProps } from "@navikt/ds-react";
import type { IHttpProblem } from "~/utils/types";

export type IAlert = IAlertMessage | IAlertHTTPProblem;

export interface IAlertMessage {
  variant: AlertProps["variant"];
  title: string;
  body: string;
}

export interface IAlertHTTPProblem {
  variant: AlertProps["variant"];
  problem: IHttpProblem;
}

export interface AlertContextType {
  alerts: IAlert[];
  addAlert: (alert: IAlert) => void;
  removeAlert: (index: number) => void;
}

export const AlertContext = createContext<AlertContextType | undefined>(undefined);

export function AlertProvider({ children }: PropsWithChildren) {
  const [alerts, setAlerts] = useState<IAlert[]>([]);

  function removeAlert(index: number) {
    setAlerts((prevAlerts) => {
      const newAlerts = [...prevAlerts];
      newAlerts.splice(index, 1);
      return newAlerts;
    });
  }

  function addAlert(alert: IAlert) {
    setAlerts((prevAlerts) => [...prevAlerts, alert]);
  }

  return (
    <AlertContext.Provider value={{ alerts, addAlert, removeAlert }}>
      {children}
    </AlertContext.Provider>
  );
}
