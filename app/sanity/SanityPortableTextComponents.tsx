import type { PortableTextComponents } from "@portabletext/react";
import type { PropsWithChildren } from "react";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { useMeldingOmVedtakTekst } from "~/hooks/useMeldingOmVedtakTekst";

export const SanityPortableTextComponents: PortableTextComponents = {
  types: {
    opplysningReference: ({ value }) => <BehandlingOpplysningReference value={value} />,
    fritekst: (value) => <Fritekst value={value} />,
  },
};

function Fritekst(props: PropsWithChildren<{ value: any }>) {
  const { fritekst } = useMeldingOmVedtakTekst();
  const paragrafer = fritekst.split(/\n+/);
  return (
    <>
      {paragrafer.map((paragraf, index) => (
        <p key={index}>{paragraf}</p>
      ))}
    </>
  );
}

function BehandlingOpplysningReference(props: PropsWithChildren<{ value: any }>) {
  const { behandling } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const opplysning = behandling.opplysning.find(
    (o) => o.navn === props.value?.behandlingOpplysning?.textId,
  );

  if (!opplysning) {
    throw new Error(`Opplysning for "${props.value?.behandlingOpplysning?.textId}" ikke funnet`);
  }

  return <span>{opplysning.verdi}</span>;
}
