import type { ActionFunctionArgs } from "@remix-run/node";
import { Form } from "@remix-run/react";

import { logger } from "~/utils/logger.utils";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const errorTest = formData.get("errorTest") as string;

  if (errorTest === "throwError") {
    throw new Error("Throw error server side");
  }

  if (errorTest === "throwResponse") {
    throw new Response("Throw error server side", { status: 500 });
  }

  if (errorTest === "logger.error") {
    logger.error("logger.error server side");
    return null;
  }

  if (errorTest === "console.error") {
    console.error("console.error server side");
    return null;
  }
}

export default function Time() {
  function throwError() {
    throw new Error("Throw error client side");
  }

  function consoleError() {
    console.error("console.error client side");
  }

  function loggerError() {
    logger.error("logger.error client side");
  }

  return (
    <div>
      <h1>Test error</h1>
      <h2>Client side</h2>
      <div>
        <button className={"my-4"} onClick={throwError}>
          Throw error client side
        </button>
      </div>
      <div>
        <button className={"my-4"} onClick={consoleError}>
          console.error client side
        </button>
      </div>
      <div>
        <button className={"my-4"} onClick={loggerError}>
          logger.error client side
        </button>
      </div>

      <h2>Server side</h2>
      <Form method="post">
        <input type="text" name="errorTest" value={"throwError"} readOnly={true} hidden={true} />

        <button className={"my-4"} type="submit">
          Throw error server side
        </button>
      </Form>

      <Form method="post">
        <input type="text" name="errorTest" value={"throwResponse"} readOnly={true} hidden={true} />

        <button className={"my-4"} type="submit">
          Throw error response server side
        </button>
      </Form>

      <Form method="post">
        <input type="text" name="errorTest" value={"console.error"} readOnly={true} hidden={true} />

        <button className={"my-4"} type="submit">
          console.error server side
        </button>
      </Form>

      <Form method="post">
        <input type="text" name="errorTest" value={"logger.error"} readOnly={true} hidden={true} />

        <button className={"my-4"} type="submit">
          logger.error server side
        </button>
      </Form>
    </div>
  );
}
