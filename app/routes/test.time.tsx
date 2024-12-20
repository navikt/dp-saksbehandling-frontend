import { useLoaderData } from "@remix-run/react";
import { format } from "date-fns";
import { useEventSource } from "remix-utils/sse/react";

export async function loader() {
  return { time: new Date().toISOString() };
}

export default function Time() {
  const loaderData = useLoaderData<typeof loader>();
  const time =
    useEventSource("/saksbehandling/test/sse/time", { event: "time" }) ?? loaderData.time;

  return <time dateTime={time}>{format(new Date(time), "HH:mm:ss")}</time>;
}
