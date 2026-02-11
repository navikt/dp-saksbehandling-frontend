import { Button, Heading } from "@navikt/ds-react";

import { KlageOpplysning } from "~/components/klage/klage-opplysning/KlageOpplysning";
import { hentKlage } from "~/models/saksbehandling.server";

interface IProps {
  klage: Awaited<ReturnType<typeof hentKlage>>;
  readonly?: boolean;
  setAktivTab: (tab: string) => void;
}

export function KlageBehandling({ klage, readonly, setAktivTab }: IProps) {
  const klageSakOpplysninger = klage.behandlingOpplysninger.filter(
    (opplysning) => opplysning.gruppe === "KLAGESAK",
  );
  const fristOpplysninger = klage.behandlingOpplysninger.filter(
    (opplysning) => opplysning.gruppe === "FRIST",
  );

  const formkravOpplysninger = klage.behandlingOpplysninger.filter(
    (opplysning) => opplysning.gruppe === "FORMKRAV",
  );

  return (
    <div className={"flex flex-col gap-8 p-4"}>
      <div>
        <Heading size={"small"} spacing={true}>
          Klagesak
        </Heading>

        <div className={"flex flex-col gap-4"}>
          {klageSakOpplysninger.map((opplysning) => (
            <KlageOpplysning
              key={opplysning.opplysningId}
              opplysning={opplysning}
              behandlingId={klage.behandlingId}
              readonly={readonly}
              visningType={"horisontal"}
            />
          ))}
        </div>
      </div>

      <div>
        <Heading size={"small"} spacing={true}>
          Frist
        </Heading>
        <div className={"flex flex-col gap-4"}>
          {fristOpplysninger.map((opplysning) => (
            <KlageOpplysning
              key={opplysning.opplysningId}
              opplysning={opplysning}
              behandlingId={klage.behandlingId}
              readonly={readonly}
              visningType={"horisontal"}
            />
          ))}
        </div>
      </div>

      <div>
        <Heading size={"small"} spacing={true}>
          Formkrav
        </Heading>
        <div className={"flex flex-col gap-4"}>
          {formkravOpplysninger.map((opplysning) => (
            <KlageOpplysning
              key={opplysning.opplysningId}
              opplysning={opplysning}
              behandlingId={klage.behandlingId}
              readonly={readonly}
              visningType={"horisontal"}
            />
          ))}
        </div>
      </div>

      <Button
        variant="primary"
        size="small"
        className="mt-4"
        disabled={readonly}
        onClick={() => setAktivTab("utfall")}
      >
        Sett utfall
      </Button>
    </div>
  );
}
