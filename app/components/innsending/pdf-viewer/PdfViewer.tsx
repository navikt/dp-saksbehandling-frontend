import { components } from "openapi/saksbehandling-typer";

interface IProps {
  innsending: components["schemas"]["Innsending"];
}

export function PdfViewer({ innsending }: IProps) {
  return <div className="card h-full p-4">{JSON.stringify(innsending)}</div>;
}
