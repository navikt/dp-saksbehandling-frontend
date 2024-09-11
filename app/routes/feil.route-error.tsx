import { useRouteError } from "@remix-run/react";
import { ErrorMessageComponent } from "~/components/error-boundary/RootErrorBoundaryView";

export async function loader() {
  throw new Response("Bad Request", { status: 400 });
}

export default function Time() {
  return (
    <div>
      <h1>Route error</h1>
    </div>
  );
}

export function ErrorBoundary() {
  console.log("hei");
  const error = useRouteError();
  return <ErrorMessageComponent error={error} />;
}
