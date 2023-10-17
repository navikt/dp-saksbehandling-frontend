import { Box, Heading, VStack } from "@navikt/ds-react";
import styles from "./Arbeidsforhold.module.css";
import type { IArbeidsforhold } from "~/models/arbeidsforhold.server";

interface IProps {
  arbeidsforhold: IArbeidsforhold[];
}

export function Arbeidsforhold(props: IProps) {
  const { arbeidsforhold } = props;

  return (
    <>
      <Heading size="small" level="3">
        Arbeidsforhold
      </Heading>
      <VStack gap="4" className={styles.arbeidsforhold}>
        {Object.keys(arbeidsforhold).length > 0 &&
          arbeidsforhold.map(
            ({
              orgnr,
              ansettelsestype,
              yrke,
              startdato,
              sluttdato,
              sluttaarsak,
            }: IArbeidsforhold) => {
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
                        {sluttaarsak && (
                          <>
                            <dt>Sluttårsak</dt>
                            <dd>{sluttaarsak}</dd>
                          </>
                        )}
                      </>
                    )}
                  </dl>
                </Box>
              );
            },
          )}
      </VStack>
    </>
  );
}
