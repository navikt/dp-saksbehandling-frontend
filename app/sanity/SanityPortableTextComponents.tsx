import type { PortableTextComponents } from "@portabletext/react";
import type { PropsWithChildren } from "react";
import type { IBehandling } from "~/models/behandling.server";
import { renderToString } from "react-dom/server";
import type { PortableTextHtmlComponents } from "@portabletext/to-html";

export function getSanityPortableTextComponents(
  behandling: IBehandling,
  fritekst: string,
  asHtmlString: true,
): PortableTextHtmlComponents;

export function getSanityPortableTextComponents(
  behandling: IBehandling,
  fritekst: string,
  asHtmlString: false,
): PortableTextComponents;

export function getSanityPortableTextComponents(
  behandling: IBehandling,
  fritekst: string,
  asHtmlString: boolean,
): PortableTextComponents | PortableTextHtmlComponents {
  if (asHtmlString) {
    return {
      types: {
        opplysningReference: ({ value }: any) =>
          renderToString(<BehandlingOpplysningReference value={value} behandling={behandling} />),
        fritekst: ({ value }: any) =>
          renderToString(<Fritekst value={value} fritekst={fritekst} />),
      },
    };
  }

  return {
    types: {
      opplysningReference: ({ value }: any) => (
        <BehandlingOpplysningReference value={value} behandling={behandling} />
      ),
      fritekst: ({ value }: any) => <Fritekst value={value} fritekst={fritekst} />,
    },
  };
}

function Fritekst(props: PropsWithChildren<{ value: any; fritekst: string }>) {
  const paragrafer = props.fritekst.split(/\n+/);
  return (
    <>
      {paragrafer.map((paragraf, index) => (
        <p key={index}>{paragraf}</p>
      ))}
    </>
  );
}

function BehandlingOpplysningReference(
  props: PropsWithChildren<{ value: any; behandling: IBehandling }>,
) {
  const opplysning = props.behandling.opplysning.find(
    (o) => o.navn === props.value?.behandlingOpplysning?.textId,
  );

  if (!opplysning) {
    throw new Error(`Opplysning for "${props.value?.behandlingOpplysning?.textId}" ikke funnet`);
  }

  return <span>{opplysning.verdi}</span>;
}
