import { Select, Textarea } from "@navikt/ds-react";
import { PortableText } from "@portabletext/react";
import { SanityPortableTextComponents } from "~/sanity/SanityPortableTextComponents";
import { useLoaderData } from "@remix-run/react";
import type { loader } from "~/routes/oppgave.$oppgaveId.melding-om-vedtak";
import styles from "./MeldingOmVedtak.module.css";
import type { ChangeEvent } from "react";
import { useState } from "react";
import type { ISanityBrevMal } from "~/sanity/sanity-types";

export function MeldingOmVedtak() {
  const { sanityTexts } = useLoaderData<typeof loader>();
  const [valgtBrevMal, setValgtBrevMal] = useState<ISanityBrevMal | undefined>();

  function handleBrevmalSelect(event: ChangeEvent<HTMLSelectElement>) {
    const selectedBrevMal = sanityTexts.find(
      (brevMal) => brevMal.textId === event.currentTarget.value,
    );
    setValgtBrevMal(selectedBrevMal);
  }

  return (
    <div className={styles.container}>
      <div>
        <Select label="Brevmal" onChange={handleBrevmalSelect}>
          <option value="" hidden={true}>
            Velg brevmal
          </option>
          {sanityTexts.map((brevMal) => (
            <option key={brevMal.textId} value={brevMal.textId}>
              {brevMal.textId}
            </option>
          ))}
        </Select>

        {/*<PortableTextEditor onChange={(change) => console.log(change)} schemaType={[]} />*/}
        <Textarea label={"Fritekst"} />
      </div>

      <div className={styles.preview}>
        {valgtBrevMal?.brevBlokker.map((brevBlokk) => (
          <PortableText
            key={brevBlokk.textId}
            value={brevBlokk.innhold}
            components={SanityPortableTextComponents}
          />
        ))}
      </div>
    </div>
  );
}
