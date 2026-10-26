import { ExternalLinkIcon, PadlockLockedIcon } from "@navikt/aksel-icons";
import { BodyShort, Detail, Heading, InlineMessage, Link, Loader, Tag } from "@navikt/ds-react";
import { Suspense } from "react";
import { Await } from "react-router";

import { components } from "@/openapi/behandling-typer";
import { useBehandling } from "~/hooks/useBehandling";
import { hentRapporteringPersonId } from "~/models/rapportering.server";
import { getEnv } from "~/utils/env.utils";
import { formaterOpplysningFormål } from "~/utils/opplysning.utils";

interface IProps {
  readonly: boolean;
  opplysninger: components["schemas"]["RedigerbareOpplysninger"][];
  redigertAvSaksbehandler: boolean;
  regelsettHjemmel?: string;
  opplysningKilde?: components["schemas"]["Formål"];
  tittel: string;
  rapporteringPersonIdPromise?: Promise<Awaited<ReturnType<typeof hentRapporteringPersonId>>>;
}

export function OpplysningerTittel(props: IProps) {
  const { behandling } = useBehandling();
  return (
    <div className={`flex content-center justify-between`}>
      <div>
        <div className={"flex items-center gap-1"}>
          {props.readonly ||
            (props.opplysninger.length === 1 && !props.opplysninger[0].redigerbar && (
              <PadlockLockedIcon aria-label={"Opplysning er ikke redigerbar"} />
            ))}
          <Heading level="3" size={"small"}>
            {props.tittel}
          </Heading>
        </div>

        {props.regelsettHjemmel && <Detail textColor="subtle">{props.regelsettHjemmel}</Detail>}
      </div>

      <BodyShort size={"small"}>
        {props.redigertAvSaksbehandler && (
          <>
            Opplysning redigert av:{" "}
            <Tag size={"small"} variant={"warning"} className={"ml-1"}>
              Saksbehandler
            </Tag>
          </>
        )}

        {!props.redigertAvSaksbehandler && props.opplysningKilde && (
          <>
            Opplysning hentet fra:{" "}
            <Tag size={"small"} variant={"warning"} className={"ml-1"}>
              {formaterOpplysningFormål(props.opplysningKilde)}
            </Tag>
          </>
        )}
      </BodyShort>
      {props.rapporteringPersonIdPromise && (
        <Suspense
          fallback={
            <div className="flex items-center justify-end gap-1">
              <Loader size="small" />
              <BodyShort textColor={"subtle"}>Henter meldekort-url</BodyShort>
            </div>
          }
        >
          <Await resolve={props.rapporteringPersonIdPromise}>
            {(rapporteringPersonId) => {
              const meldekortId =
                behandling.behandletHendelse.type === "Meldekort"
                  ? behandling.behandletHendelse.id
                  : null;

              return meldekortId && rapporteringPersonId ? (
                <div className="flex justify-end">
                  <Link
                    href={`${getEnv("DP_RAPPORTERING_SAKSBEHANDLING_FRONTEND_URL")}/person/${rapporteringPersonId?.personId}/perioder?meldekortId=${meldekortId}`}
                    target="_blank"
                  >
                    Meldekort for perioden <ExternalLinkIcon />
                  </Link>
                </div>
              ) : (
                <InlineMessage status="warning">Klarte ikke hente meldekort-url</InlineMessage>
              );
            }}
          </Await>
        </Suspense>
      )}
    </div>
  );
}
