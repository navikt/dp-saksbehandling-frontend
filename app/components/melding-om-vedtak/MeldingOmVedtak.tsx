import { Button, Detail, Select } from "@navikt/ds-react";
import { useFetcher, useLoaderData } from "@remix-run/react";
import type { loader } from "~/routes/oppgave.$oppgaveId.melding-om-vedtak";
import styles from "./MeldingOmVedtak.module.css";
import type { ChangeEvent } from "react";
import { FritekstEditor } from "~/components/fritekt-editor/FritekstEditor";
import { MeldingOmVedtakPreview } from "~/components/melding-om-vedtak-preview/MeldingOmVedtakPreview";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { useMeldingOmVedtakTekst } from "~/hooks/useMeldingOmVedtakTekst";
import { toHTML } from "@portabletext/to-html";
import { getSanityPortableTextComponents } from "~/sanity/SanityPortableTextComponents";
import type { action as sendBrevAction } from "~/routes/action-send-brev";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { getEnv } from "~/utils/env.utils";

export function MeldingOmVedtak() {
  const { brevMal } = useLoaderData<typeof loader>();
  const { behandling, oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const { valgtBrevMal, setValgtBrevMal } = useMeldingOmVedtakTekst();

  const sendBrevFetcher = useFetcher<typeof sendBrevAction>();
  useHandleAlertMessages(sendBrevFetcher.data);

  function handleBrevmalSelect(event: ChangeEvent<HTMLSelectElement>) {
    const selectedBrevMal = brevMal.find((brevMal) => brevMal.textId === event.currentTarget.value);
    setValgtBrevMal(selectedBrevMal);
  }

  const brevHtml = valgtBrevMal?.brevBlokker
    .map((blokk) =>
      toHTML(blokk.innhold, {
        components: getSanityPortableTextComponents(behandling, true),
      }),
    )
    .join("");

  return (
    <div className={styles.container}>
      <div>
        <Select label="Brevmal" onChange={handleBrevmalSelect}>
          <option value="" hidden={true}>
            Velg brevmal
          </option>

          {brevMal.map((brevMal) => (
            <option key={brevMal.textId} value={brevMal.textId}>
              {brevMal.textId}
            </option>
          ))}
        </Select>

        <FritekstEditor />

        <Detail className="my-4" textColor="subtle">
          Meldingen blir sendt til bruker når vedtaket er fattet.
        </Detail>

        {getEnv("GCP_ENV") !== "prod" && (
          <sendBrevFetcher.Form method="post" action="/action-send-brev">
            <input hidden={true} readOnly={true} name="oppgaveId" value={oppgave.oppgaveId} />
            <input hidden={true} readOnly={true} name="brevHtml" value={brevHtml || ""} />

            <Button
              variant="primary"
              size="small"
              loading={sendBrevFetcher.state !== "idle"}
              disabled={!brevHtml}
            >
              Send brev
            </Button>
          </sendBrevFetcher.Form>
        )}
      </div>

      {valgtBrevMal && (
        <div className={styles.previewContainer}>
          <MeldingOmVedtakPreview />
        </div>
      )}
    </div>
  );
}
