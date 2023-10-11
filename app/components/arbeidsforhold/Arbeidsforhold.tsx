import { Heading } from "@navikt/ds-react";

interface IProps {
  arbeidsforhold: any;
}

export function Arbeidsforhold(props: IProps) {
  const { arbeidsforhold } = props;

  return (
    <>
      <Heading size="small" level="3">
        Arbeidsforhold
      </Heading>
      <ul>
        {arbeidsforhold.map((forhold: any) => {
          const orgnr = forhold.arbeidssted.identer[0].ident;

          return (
            <li key={forhold.id}>
              Orgnummer: {orgnr}, ansettelsesdato: {forhold.ansettelsesperiode.startdato}{" "}
            </li>
          );
        })}
      </ul>
      <span>Heia!</span>
    </>
  );
}
