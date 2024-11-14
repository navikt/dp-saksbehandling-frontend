import { sokPerson } from "~/server-side-actions/sok-person";

export async function handleActions(request: Request) {
  const formData = await request.formData();
  const actionToRun = formData.get("_action") as string;

  switch (actionToRun) {
    case "sok-person":
      return await sokPerson(request, formData);

    default:
      return null;
  }
}
