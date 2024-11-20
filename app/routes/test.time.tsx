import { useLoaderData } from "@remix-run/react";
import { useEventSource } from "remix-utils/sse/react";
import { format } from "date-fns";

export async function loader() {
  return { time: new Date().toISOString() };
}

export default function Time() {
  let loaderData = useLoaderData<typeof loader>();
  let time = useEventSource("/saksbehandling/test/sse/time", { event: "time" }) ?? loaderData.time;

  return <time dateTime={time}>{format(new Date(time), "HH:mm:ss")}</time>;
}
