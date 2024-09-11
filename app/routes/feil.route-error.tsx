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
