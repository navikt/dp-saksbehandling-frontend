import { PadlockLockedIcon, PencilWritingIcon } from "@navikt/aksel-icons";
import { BodyLong, BodyShort, Button, Detail, Heading } from "@navikt/ds-react";
import classnames from "classnames";
import { useEffect, useRef } from "react";

import { formaterOpplysningVerdi } from "~/components/opplysning-linje/OpplysningLinje";
import { formaterTilNorskDato } from "~/utils/dato.utils";

import { components } from "../../../openapi/behandling-typer";

interface IProps {
  behandlingId: string;
  periodeNummer: number;
  opplysning: components["schemas"]["Opplysning"];
  aktivOpplysning?: components["schemas"]["Opplysning"];
  setAktivOpplysning: (opplysning: components["schemas"]["Opplysning"]) => void;
}

export function OpplysningKortVisning({
  setAktivOpplysning,
  aktivOpplysning,
  periodeNummer,
  opplysning,
}: IProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (opplysning.id === aktivOpplysning?.id && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [aktivOpplysning]);

  return (
    <div
      ref={ref}
      className={classnames("card mt-2 p-4", {
        "border-1 border-blue-400": aktivOpplysning?.id === opplysning.id,
      })}
    >
      <Heading className={"mb-2 flex items-center gap-1"} size={"xsmall"}>
        Periode {periodeNummer + 1}{" "}
        {opplysning.redigerbar ? (
          <Button
            size={"xsmall"}
            className={"ml-auto"}
            variant={"tertiary"}
            icon={<PencilWritingIcon />}
            onClick={() => setAktivOpplysning(opplysning)}
            aria-label={"Rediger opplsyning"}
          >
            Endre
          </Button>
        ) : (
          <PadlockLockedIcon className={"ml-auto"} />
        )}
      </Heading>
      <Detail textColor={"subtle"}>{opplysning.navn}</Detail>
      <BodyShort size={"small"}>{formaterOpplysningVerdi(opplysning)}</BodyShort>

      <div className={"mt-4 flex gap-6"}>
        <div>
          <Detail textColor={"subtle"}>Fra og med</Detail>
          {opplysning.gyldigFraOgMed ? (
            <BodyShort size={"small"}>{formaterTilNorskDato(opplysning.gyldigFraOgMed)}</BodyShort>
          ) : (
            <BodyShort size={"small"}>--</BodyShort>
          )}
        </div>
        <div>
          <Detail textColor={"subtle"}>Til og med</Detail>

          {opplysning.gyldigTilOgMed ? (
            <BodyShort size={"small"}>{formaterTilNorskDato(opplysning.gyldigTilOgMed)}</BodyShort>
          ) : (
            <BodyShort size={"small"}>--</BodyShort>
          )}
        </div>
      </div>

      <Detail textColor={"subtle"} className={"mt-4"}>
        Begrunnelse
      </Detail>
      {opplysning.kilde?.begrunnelse ? (
        <BodyLong size={"small"}>{opplysning.kilde.begrunnelse.verdi}</BodyLong>
      ) : (
        <BodyShort size={"small"}>--</BodyShort>
      )}

      {/*<Button className={"mt-2"} size={"xsmall"} onClick={() => setRedigeringsModus(true)}>*/}
      {/*  Rediger*/}
      {/*</Button>*/}
    </div>
  );
}
