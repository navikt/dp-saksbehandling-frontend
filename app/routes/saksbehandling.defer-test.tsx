import { defer } from "@remix-run/node";
import { Await, useLoaderData } from "@remix-run/react";
import { Suspense } from "react";

async function getData(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello maaaan");
    }, 3000);
  });
}

export function loader() {
  const delayedData = getData();

  return defer({
    data: "test",
    delayedData,
  });
}

export default function Test() {
  const { data, delayedData } = useLoaderData<typeof loader>();

  return (
    <div>
      <div>Data: {data}</div>

      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={delayedData} errorElement={<div>Could not load reviews 😬</div>}>
          {(resolvedData) => <div>{resolvedData}</div>}
        </Await>
      </Suspense>
    </div>
  );
}
