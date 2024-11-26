import type { PortableTextComponents } from "@portabletext/react";
import type { PortableTextHtmlComponents } from "@portabletext/to-html";
import type { PropsWithChildren } from "react";
import { renderToString } from "react-dom/server";

import type { IUtvidetBeskrivelse } from "~/context/melding-om-vedtak-context";
import type { IBrevOpplysning } from "~/models/melding-om-vedtak.server";
import { ISanityOpplysningReferenceValue } from "~/sanity/sanity-types";
import { formaterNorskDatoITekst } from "~/utils/dato.utils";
import { formaterTallMedTusenSeperator } from "~/utils/number.utils";

export function getSanityPortableTextComponents(
  opplysninger: IBrevOpplysning[],
  asHtmlString: true,
): PortableTextHtmlComponents;

export function getSanityPortableTextComponents(
  opplysninger: IBrevOpplysning[],
  asHtmlString: false,
): PortableTextComponents;

export function getSanityPortableTextComponents(
  opplysninger: IBrevOpplysning[],
  asHtmlString: boolean,
): PortableTextComponents | PortableTextHtmlComponents {
  if (asHtmlString) {
    return {
      types: {
        opplysningReference: ({ value }: { value: ISanityOpplysningReferenceValue }) =>
          renderToString(
            <BehandlingOpplysningReference value={value} opplysninger={opplysninger} />,
          ),
      },
    };
  }

  return {
    types: {
      opplysningReference: ({ value }: { value: ISanityOpplysningReferenceValue }) => (
        <BehandlingOpplysningReference value={value} opplysninger={opplysninger} />
      ),
    },
  };
}

export function UtvidetBeskrivelse(utvidetBeskrivelse: IUtvidetBeskrivelse) {
  const paragrafer = utvidetBeskrivelse.tekst.split(/\n+/);
  return (
    <>
      {paragrafer.map((paragraf, index) => (
        <p key={index}>{paragraf}</p>
      ))}
    </>
  );
}

function BehandlingOpplysningReference(
  props: PropsWithChildren<{
    value: ISanityOpplysningReferenceValue;
    opplysninger: IBrevOpplysning[];
  }>,
) {
  const opplysning = props.opplysninger.find(
    (o) => o.tekstId === props.value?.behandlingOpplysning?.textId,
  );

  if (!opplysning) {
    throw new Error(`Opplysning for "${props.value?.behandlingOpplysning?.textId}" ikke funnet`);
  }

  switch (props.value?.behandlingOpplysning.type) {
    case "penger":
      return (
        <span className={"melding-om-vedtak__opplysning-verdi"}>
          {formaterTallMedTusenSeperator(opplysning.verdi)} kroner
        </span>
      );
    case "dato":
      return (
        <span className={"melding-om-vedtak__opplysning-verdi"}>
          {formaterNorskDatoITekst(opplysning.verdi)}
        </span>
      );
    case "grunnbelop":
      return (
        <span className={"melding-om-vedtak__opplysning-verdi"}>
          {formaterTallMedTusenSeperator(opplysning.verdi)} G
        </span>
      );
    default:
      return <span className={"melding-om-vedtak__opplysning-verdi"}>{opplysning.verdi}</span>;
  }
}
