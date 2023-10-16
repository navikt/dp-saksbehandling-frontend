import { Box, Heading, VStack } from "@navikt/ds-react";
import styles from "./Arbeidsforhold.module.css";

interface IProps {
  arbeidsforhold: any;
}

export function Arbeidsforhold(props: IProps) {
  const { arbeidsforhold } = props;

  console.log(arbeidsforhold);

  return (
    <>
      <Heading size="small" level="3">
        Arbeidsforhold
      </Heading>
      <VStack gap="4" className={styles.arbeidsforhold}>
        {Object.keys(arbeidsforhold).length > 0 &&
          arbeidsforhold.map((forhold: any) => {
            const orgnr = forhold.arbeidssted.identer[0].ident;
            const ansettelsestype =
              forhold.ansettelsesdetaljer[0].ansettelsesform?.beskrivelse ||
              forhold.ansettelsesdetaljer[0].type;
            const yrke = forhold.ansettelsesdetaljer[0].yrke?.beskrivelse;
            const startdato = forhold.ansettelsesperiode.startdato;
            const sluttdato = forhold.ansettelsesperiode.sluttdato;

            console.log(forhold);

            return (
              <Box padding="2" background="surface-alt-3-subtle" key={orgnr}>
                <dl>
                  <dt>Orgnummer</dt>
                  <dd>{orgnr}</dd>
                  <dt>Ansettelsesform</dt>
                  <dd>{ansettelsestype}</dd>
                  <dt>Yrke</dt>
                  <dd>{yrke}</dd>
                  <dt>Startdato</dt>
                  <dd>{startdato}</dd>
                  {sluttdato && (
                    <>
                      <dt>Sluttdato</dt>
                      <dd>{sluttdato}</dd>
                    </>
                  )}
                </dl>
              </Box>
            );
          })}
      </VStack>
    </>
  );
}
