import type { PortableTextComponents } from "@portabletext/react";
import type { PropsWithChildren } from "react";
import type { IBehandling } from "~/models/behandling.server";
import { renderToString } from "react-dom/server";
import type { PortableTextHtmlComponents } from "@portabletext/to-html";
import type { IUtvidetBeskrivelse } from "~/context/melding-om-vedtak-context";
import { formaterTallMedTusenSeperator } from "~/utils/number.utils";
import { formaterNorskDato } from "~/utils/dato.utils";

export function getSanityPortableTextComponents(
  behandling: IBehandling,
  asHtmlString: true,
): PortableTextHtmlComponents;

export function getSanityPortableTextComponents(
  behandling: IBehandling,
  asHtmlString: false,
): PortableTextComponents;

export function getSanityPortableTextComponents(
  behandling: IBehandling,
  asHtmlString: boolean,
): PortableTextComponents | PortableTextHtmlComponents {
  if (asHtmlString) {
    return {
      types: {
        opplysningReference: ({ value }: any) =>
          renderToString(<BehandlingOpplysningReference value={value} behandling={behandling} />),
      },
    };
  }

  return {
    types: {
      opplysningReference: ({ value }: any) => (
        <BehandlingOpplysningReference value={value} behandling={behandling} />
      ),
    },
  };
}

export function UtvidetBeskrivelse(utvidetBeskrivelse: IUtvidetBeskrivelse) {
  const paragrafer = utvidetBeskrivelse.text.split(/\n+/);
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

  switch (props.value?.behandlingOpplysning.type) {
    case "penger":
      return <span>{formaterTallMedTusenSeperator(opplysning.verdi)} kr</span>;
    case "dato":
      return <span>{formaterNorskDato(opplysning.verdi)}</span>;
    default:
      return <span>{opplysning.verdi}</span>;
  }
}
