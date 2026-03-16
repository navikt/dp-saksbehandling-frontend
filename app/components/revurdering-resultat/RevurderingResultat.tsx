import { BulletListIcon } from "@navikt/aksel-icons";
import { Heading, InfoCard, List } from "@navikt/ds-react";

import { VerdiMedTittel } from "~/components/verdi-med-tittel/VerdiMedTittel";
import { useBehandling } from "~/hooks/useBehandling";
import { formaterOpplysningVerdi } from "~/utils/opplysning.utils";

export function RevurderingResultat() {
  const { behandling } = useBehandling();

  const opplysningerMedNyPeriode = behandling.opplysninger.filter((opplysning) =>
    opplysning.perioder.some((periode) => periode.opprinnelse === "Ny"),
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
            {opplysningerMedNyPeriode.map((opplysning) => (
              <List.Item key={opplysning.opplysningTypeId}>{opplysning.navn}</List.Item>
            ))}
          </List>

          <Heading size={"xsmall"}>Hva er endret</Heading>
          <section className="grid grid-cols-3 gap-2">
            {opplysningerMedNyPeriode.map((opplysning) => (
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
