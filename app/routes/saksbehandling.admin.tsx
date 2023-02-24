import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return {
    title: "Dagpenger saksbehandling | Admin",
  };
};

export default function Admin() {
  return <div>Admin route</div>;
}
