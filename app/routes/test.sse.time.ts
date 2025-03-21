import type { LoaderFunctionArgs } from "react-router";
import { eventStream } from "remix-utils/sse/server";

export async function loader({ request }: LoaderFunctionArgs) {
  return eventStream(request.signal, function setup(send) {
    const timer = setInterval(() => {
      send({ event: "time", data: new Date().toISOString() });
    }, 1000);

    return function clear() {
      clearInterval(timer);
    };
  });
}
