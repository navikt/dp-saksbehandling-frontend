import { PencilWritingIcon } from "@navikt/aksel-icons";
import { Button, Heading, Modal } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import classNames from "classnames";
import classnames from "classnames";
import { useRef } from "react";
import { useNavigation } from "react-router";

import { useBehandling } from "~/hooks/useBehandling";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { hentValideringForRedigeringBarn } from "~/utils/validering.util";

import {
  components,
  components as orkestratorComponents,
} from "../../../../openapi/soknad-orkestrator-typer";
import styles from "./OrkestratorBarn.module.css";
import { OrkestratorOpplysningLinje } from "./OrkestratorOpplysningLinje";

interface IProps {
  orkestratorBarn: orkestratorComponents["schemas"]["BarnResponse"][];
  orkestratorLandliste: components["schemas"]["Land"][];
}

export function OrkestratorBarn({ orkestratorBarn, orkestratorLandliste }: IProps) {
  if (!orkestratorBarn) {
    return null;
  }

  return (
    <>
      {orkestratorBarn.map(
        (barn: orkestratorComponents["schemas"]["BarnResponse"], index: number) => (
          <Barn
            key={barn.barnId}
            barnNummer={index + 1}
            barn={barn}
            orkestratorLandliste={orkestratorLandliste}
          />
        ),
      )}
    </>
  );
}

interface IOrkestratorBarnProps {
  barnNummer: number;
  barn: components["schemas"]["BarnResponse"];
  orkestratorLandliste: components["schemas"]["Land"][];
}

function Barn({ barnNummer, barn, orkestratorLandliste }: IOrkestratorBarnProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const { state } = useNavigation();
  const { behandling } = useBehandling();

  const fornavnOgMellomnavn = barn.opplysninger.find((o) => o.id === "fornavnOgMellomnavn")?.verdi;
  const etternavn = barn.opplysninger.find((o) => o.id === "etternavn")?.verdi;
  const fodselsdato = barn.opplysninger.find((o) => o.id === "fodselsdato")?.verdi;
  const oppholdssted = barn.opplysninger.find((o) => o.id === "oppholdssted")?.verdi;
  const forsorgerBarnet =
    barn.opplysninger.find((o) => o.id === "forsorgerBarnet")?.verdi === "true";
  const kvalifisererTilBarnetillegg =
    barn.opplysninger.find((o) => o.id === "kvalifisererTilBarnetillegg")?.verdi === "true";
  const barnetilleggFom = barn.opplysninger.find((o) => o.id === "barnetilleggFom")?.verdi;
  const barnetilleggTom = barn.opplysninger.find((o) => o.id === "barnetilleggTom")?.verdi;
  const begrunnelse = barn.opplysninger.find((o) => o.id === "begrunnelse")?.verdi;

  const orkestratorBarnForm = useForm({
    schema: hentValideringForRedigeringBarn(),
    submitSource: "state",
    defaultValues: {
      _action: "rediger-barn",
      behandlingId: behandling.behandlingId,
      opplysningTypeId: "0194881f-9428-74d5-b160-f63a4c61a23b",
      barnId: barn.barnId,
      fornavnOgMellomnavn: fornavnOgMellomnavn,
      etternavn: etternavn,
      fodselsdato: fodselsdato ? formaterTilNorskDato(fodselsdato) : undefined,
      oppholdssted: oppholdssted,
      forsorgerBarnet: forsorgerBarnet,
      kvalifisererTilBarnetillegg: kvalifisererTilBarnetillegg,
      barnetilleggFom: barnetilleggFom ? formaterTilNorskDato(barnetilleggFom) : undefined,
      barnetilleggTom: barnetilleggTom ? formaterTilNorskDato(barnetilleggTom) : undefined,
      begrunnelse: begrunnelse,
    },
    onSubmitSuccess: () => {
      ref.current?.close();
    },
  });

  function avbryt() {
    orkestratorBarnForm.resetForm();
    ref.current?.close();
  }

  return (
    <div className={classnames(styles.orkestratorBarn, "card-raised m-4 p-2")}>
      <Heading
        level="4"
        size="xsmall"
        className={classnames(styles.opplysningBarnHeader, "mt-1 mb-0")}
        spacing
      >
        Barn {barnNummer}
      </Heading>
      <div className={styles.orkestratorOpplysning}>
        {barn.opplysninger.map((opplysning, index) => (
          <OrkestratorOpplysningLinje
            key={index}
            opplysning={opplysning}
            formScope={orkestratorBarnForm.scope(opplysning.id)}
            orkestratorLandliste={orkestratorLandliste}
            readOnly
          />
        ))}
      </div>

      <Button
        variant="secondary"
        size="small"
        className={styles.endreKnapp}
        icon={<PencilWritingIcon />}
        onClick={() => ref.current?.showModal()}
      >
        Endre
      </Button>

      <Modal
        ref={ref}
        header={{ heading: `Barn ${barnNummer}` }}
        closeOnBackdropClick
        className={styles.modal}
      >
        <Modal.Body>
          <div className={classNames(styles.orkestratorOpplysning)}>
            {barn.opplysninger.map((opplysning, index) => (
              <OrkestratorOpplysningLinje
                key={index}
                opplysning={opplysning}
                formScope={orkestratorBarnForm.scope(opplysning.id)}
                orkestratorLandliste={orkestratorLandliste}
              />
            ))}
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button
            type="button"
            size="small"
            loading={state !== "idle"}
            onClick={() => orkestratorBarnForm.submit()}
            disabled={!orkestratorBarnForm.formState.isDirty}
          >
            Lagre endringer
          </Button>

          <Button type="button" variant="secondary" size="small" onClick={avbryt}>
            Avbryt
          </Button>

          <Button
            type="button"
            variant="tertiary"
            size="small"
            onClick={() => ref.current?.close()}
          >
            Lukk
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
