import { PencilWritingIcon } from "@navikt/aksel-icons";
import { Button, Heading, Modal } from "@navikt/ds-react";
import { useRef } from "react";

import { FormScope, useForm } from "@rvf/remix";
import { withZod } from "@rvf/zod";
import { z } from "zod";
import { IOrkestratorBarn } from "~/models/orkestrator-opplysning.server";
import styles from "./OrkestratorBarn.module.css";
import { OrkestratorOpplysningRad } from "./OrkestratorOpplysningRad";
import classNames from "classnames";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { hentFormatertOpplysninigsverdi } from "~/utils/orkestrator-opplysninger.utils";

interface IProps {
  barnNummer: number;
  barn: IOrkestratorBarn;
}

const validator = withZod(
  z.object({
    fornavnOgMellomnavn: z.string().min(1, { message: "Du må skrive fornavn" }),
    etternavn: z.string().min(1, { message: "Du må skrive etternavn" }),
    fødselsdato: z.string().regex(
      new RegExp("^(0[1-9]|[12][0-9]|3[01])[\\.-](0[1-9]|1[012])[\\.-](19|20|)\\d\\d$"), // Regex for å matche norsk dato format, eks. 01.02.2023
      "Ugyldig dato. Gylige datoformat er dd.mm.åååå",
    ),
    oppholdssted: z.string().min(1, { message: "Du må velge et land" }),
    forsørgerBarnet: z.enum(["true", "false"], {
      required_error: "Du må velge et svar",
      invalid_type_error: "Ugyldig svar",
    }),
    kvalifisererTilBarnetillegg: z.enum(["true", "false"], {
      required_error: "Du må velge et svar",
      invalid_type_error: "Ugyldig svar",
    }),
    barnetilleggFom: z.string().regex(
      new RegExp("^(0[1-9]|[12][0-9]|3[01])[\\.-](0[1-9]|1[012])[\\.-](19|20|)\\d\\d$"), // Regex for å matche norsk dato format, eks. 01.02.2023
      "Ugyldig dato. Gylige datoformat er dd.mm.åååå",
    ),
    barnetilleggTom: z.string().regex(
      new RegExp("^(0[1-9]|[12][0-9]|3[01])[\\.-](0[1-9]|1[012])[\\.-](19|20|)\\d\\d$"), // Regex for å matche norsk dato format, eks. 01.02.2023
      "Ugyldig dato. Gylige datoformat er dd.mm.åååå",
    ),
    begrunnelse: z.string().min(1, { message: "Du må skrive begrunnelse" }),
  }),
);

export function OrkestratorBarn({ barnNummer, barn }: IProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");

  const formattertDefaultValues = barn.opplysninger.reduce(
    (acc, opplysning) => {
      acc[opplysning.id] = hentFormatertOpplysninigsverdi(opplysning);
      return acc;
    },
    {} as Record<string, string>,
  );

  console.log(formattertDefaultValues);

  const orkestratorBarnForm = useForm({
    validator: validator,
    method: "put",
    defaultValues: formattertDefaultValues,
  });

  return (
    <div className={styles.orkestratorBarn}>
      <>
        <Heading level="4" size="xsmall" className={styles.opplysningBarnHeader} spacing>
          Barn {barnNummer}
        </Heading>
        <table className={classNames(styles.opplysningBarnTabell, styles.background)}>
          <tbody>
            {barn.opplysninger.map((opplysning, index) => (
              <OrkestratorOpplysningRad
                key={index}
                opplysning={opplysning}
                formScope={orkestratorBarnForm.scope(opplysning.id as any)}
                readOnly
              />
            ))}
          </tbody>
        </table>
      </>
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
        <form {...orkestratorBarnForm.getFormProps()}>
          <Modal.Body>
            <table className={styles.opplysningBarnTabell}>
              <tbody>
                <input
                  hidden={true}
                  readOnly={true}
                  name="_action"
                  value="oppdater-orkestrator-barn"
                />
                <input hidden={true} readOnly={true} name="soknadId" value={oppgave.soknadId} />
                <input hidden={true} readOnly={true} name="barnId" value={barn.barnId} />
                {barn.opplysninger.map((opplysning, index) => (
                  <OrkestratorOpplysningRad
                    key={index}
                    opplysning={opplysning}
                    formScope={orkestratorBarnForm.scope(opplysning.id as string)}
                  />
                ))}
              </tbody>
            </table>
          </Modal.Body>
          <Modal.Footer>
            <Button
              type="button"
              variant="tertiary"
              size="small"
              onClick={() => ref.current?.close()}
            >
              Lukk
            </Button>
            <Button
              type="button"
              variant="secondary"
              size="small"
              onClick={() => ref.current?.close()}
            >
              Avbryt
            </Button>
            <Button type="submit" onClick={() => console.log("close")} size="small">
              Lagre endringer
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
}
