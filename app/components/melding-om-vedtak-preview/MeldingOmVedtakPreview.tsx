import { PortableText } from "@portabletext/react";
import {
  getSanityPortableTextComponents,
  UtvidetBeskrivelse,
} from "~/sanity/SanityPortableTextComponents";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { useMeldingOmVedtakTekst } from "~/hooks/useMeldingOmVedtakTekst";
import { useLoaderData } from "@remix-run/react";
import type { loader } from "~/routes/oppgave.$oppgaveId.melding-om-vedtak";
import { formaterNorskDatoITekst } from "~/utils/dato.utils";

export function MeldingOmVedtakPreview() {
  const { utvidetBeskrivelser } = useMeldingOmVedtakTekst();
  const { sanityBrevBlokker, meldingOmVedtakOpplysninger } = useLoaderData<typeof loader>();
  const { oppgave, behandling } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const { saksbehandler } = useTypedRouteLoaderData("root");
  const fagsakId = behandling.opplysning.find((o) => o.navn === "fagsakId")?.verdi;

  return (
    <div className="melding-om-vedtak">
      <div className="melding-om-vedtak__header">
        <NavLogo />

        <p>{`Navn: ${oppgave.person.fornavn} ${oppgave.person.mellomnavn ?? ""} ${oppgave.person.etternavn}`}</p>
        <p>{`Fødselsnummer: ${oppgave.person.ident.slice(0, 6)} ${oppgave.person.ident.slice(6)}`}</p>

        <div className="melding-om-vedtak__saksnummer-dato">
          <p className="melding-om-vedtak__saksnummer-dato--left">{`Saksnummer: ${fagsakId}`}</p>
          <p className="melding-om-vedtak__saksnummer-dato--right">
            {formaterNorskDatoITekst(new Date().toString())}
          </p>
        </div>
      </div>

      <div>
        {sanityBrevBlokker.map((brevBlokk) => (
          <div key={brevBlokk.textId} className="meldingOmVedtak__tekst-blokk">
            <PortableText
              value={brevBlokk.innhold}
              components={getSanityPortableTextComponents(meldingOmVedtakOpplysninger, false)}
            />

            {brevBlokk.utvidetBeskrivelse && (
              <UtvidetBeskrivelse
                id={brevBlokk.textId}
                text={utvidetBeskrivelser.find((ub) => ub.id === brevBlokk.textId)?.text || ""}
              />
            )}
          </div>
        ))}
      </div>

      <div className="meldingOmVedtak__signatur">
        <p>
          Med vennlig hilsen
          <br />
          {saksbehandler.givenName}
          <br />
          NAV
        </p>
      </div>
    </div>
  );
}

function NavLogo() {
  return (
    <svg
      className="melding-om-vedtak__logo"
      height="16"
      viewBox="0 0 193 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M190.8 0.799988H170.9C170.9 0.799988 169.5 0.8 169 2L158 35.8L147 2C146.5 0.8 145.1 0.799988 145.1 0.799988H106.8C106 0.799988 105.3 1.49999 105.3 2.29999V13.8C105.3 4.69999 95.6 0.799988 90 0.799988C77.3 0.799988 68.8 9.19999 66.2 21.9C66.1 13.5 65.4 10.4 63.1 7.39999C62.1 5.89999 60.6 4.60001 58.9 3.60001C55.5 1.60001 52.5 0.899994 46 0.899994H38.3C38.3 0.899994 36.9 0.900006 36.4 2.10001L29.4 19.4V2.39999C29.4 1.59999 28.7 0.899994 27.9 0.899994H10.2C10.2 0.899994 8.8 0.900006 8.3 2.10001L1.10002 20.1C1.10002 20.1 0.400012 21.9 2.00001 21.9H8.8V56.1C8.8 57 9.5 57.6 10.3 57.6H27.9C28.7 57.6 29.4 56.9 29.4 56.1V21.9H36.3C40.2 21.9 41.1 22 42.6 22.7C43.5 23.1 44.4 23.7 44.8 24.6C45.7 26.3 46 28.4 46 34.6V56.1C46 57 46.7 57.6 47.5 57.6H64.3C64.3 57.6 66.2 57.6 66.9 55.7L70.6 46.5C75.6 53.5 83.7 57.6 93.9 57.6H96.1C96.1 57.6 98 57.6 98.8 55.7L105.3 39.6V56.1C105.3 57 106 57.6 106.8 57.6H124C124 57.6 125.9 57.6 126.7 55.7C126.7 55.7 133.6 38.6 133.6 38.5C133.9 37.1 132.1 37.1 132.1 37.1H126V7.79999L145.3 55.7C146.1 57.6 147.9 57.6 147.9 57.6H168.2C168.2 57.6 170.1 57.6 170.9 55.7L192.3 2.70001C193 0.900012 190.9 0.899994 190.9 0.899994L190.8 0.799988ZM105.2 37H93.7C89.1 37 85.4 33.3 85.4 28.7C85.4 24.1 89.1 20.4 93.7 20.4H96.9C101.5 20.4 105.2 24.1 105.2 28.7V37Z"
        fill="#C30000"
      />
    </svg>
  );
}
