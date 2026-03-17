import { BulletListIcon } from "@navikt/aksel-icons";
import { Heading, InfoCard, List } from "@navikt/ds-react";

import { VerdiMedTittel } from "~/components/verdi-med-tittel/VerdiMedTittel";
import { useBehandling } from "~/hooks/useBehandling";
import { formaterOpplysningVerdi } from "~/utils/opplysning.utils";

const omgjøringRegelsettId = "Nzc0ODQwNzYy";
const opplysningerSomSkalVises = [
  "0194881f-9428-74d5-b160-f63a4c61a24f",
  "0194881f-943f-78d9-b874-00a4944c54ef",
  "0194881f-9428-74d5-b160-f63a4c61a23d",
  "01992956-e349-76b1-8f68-c9d481df3a32",
];

export function RevurderingResultat() {
  const { behandling } = useBehandling();
  const omgjøringRegelsett = behandling.fastsettelser.find(
    (regelsett) => regelsett.id === omgjøringRegelsettId,
  );

  if (!omgjøringRegelsett) {
    return null;
  }

  const omgjøringOpplysninger = behandling.opplysninger.filter((opplysninger) =>
    omgjøringRegelsett.opplysninger.includes(opplysninger.opplysningTypeId),
  );

  const opplysninger = behandling.opplysninger.filter((opplysning) =>
    opplysningerSomSkalVises.includes(opplysning.opplysningTypeId),
  );

  return (
    <InfoCard data-color="info">
      <InfoCard.Header icon={<BulletListIcon aria-hidden />}>
        <InfoCard.Title>Resultat av revurdering</InfoCard.Title>
      </InfoCard.Header>
      <InfoCard.Content>
        <div className={"flex flex-col gap-4"}>
          <Heading size={"xsmall"}>Vedtaket omgjøres fordi</Heading>
          <List as="ul">
            {omgjøringOpplysninger.map((opplysning) => {
              if (opplysning.perioder[0]?.kilde?.begrunnelse) {
                return (
                  <List.Item key={opplysning.opplysningTypeId}>
                    {opplysning.perioder[0].kilde.begrunnelse.verdi}
                  </List.Item>
                );
              }
            })}
          </List>

          <Heading size={"xsmall"}>Hva er endret</Heading>
          <section className="grid grid-cols-3 gap-2">
            {opplysninger.map((opplysning) => (
              <VerdiMedTittel
                key={opplysning.opplysningTypeId}
                visBorder={true}
                label={opplysning.navn}
                verdi={
                  <div>
                    <span className={"line-through"}>
                      {opplysning.perioder.at(-2)?.verdi
                        ? formaterOpplysningVerdi(opplysning.perioder.at(-2)!.verdi)
                        : "Fant ingen tidligere verdi"}
                    </span>

                    {opplysning.perioder.at(-1)?.verdi &&
                      ` ${formaterOpplysningVerdi(opplysning.perioder.at(-1)!.verdi)}`}
                  </div>
                }
              />
            ))}
          </section>
        </div>
      </InfoCard.Content>
    </InfoCard>
  );
}
