import type { LoaderFunctionArgs } from "react-router";
import { eventStream } from "remix-utils/sse/server";

import { IAlert } from "~/context/alert-context";

function getRandomInterval() {
  return Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000;
}

function generateAlert() {
  const alert: IAlert = {
    variant: "info",
    title: "Nytt dokument",
    body: `Det har kommet en ettersending i saken.`,
    service: new Date().toLocaleTimeString("nb-NO"),
  };
  return alert;
}

export async function loader({ request }: LoaderFunctionArgs) {
  return eventStream(request.signal, function setup(send) {
    const timer = setInterval(() => {
      const alert = generateAlert();
      send({
        event: "alert",
        data: JSON.stringify(alert),
      });
    }, getRandomInterval());

    // Cleanup function to stop the interval when the connection is closed
    return function clear() {
      clearInterval(timer);
    };
  });
}
