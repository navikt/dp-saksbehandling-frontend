import { type IProps } from "~/views/behandling-steg/BehandlingSteg";
import { Alert, BodyLong, Button, Heading, Table } from "@navikt/ds-react";
import { hentValideringRegler } from "~/utils/validering.util";
import { BehandlingStegInputSelect } from "~/components/behandling-steg-input/BehandlingStegInputSelect";
import { ValidatedForm } from "remix-validated-form";
import type { Metadata } from "~/routes/saksbehandling.oppgave.$oppgaveId.steg.$stegId";
import { BehandlingStegInputDato } from "~/components/behandling-steg-input/BehandlingStegInputDato";
import { BehandlingStegLagretAv } from "~/components/behandling-steg-lagret-av/BehandlingStegLagretAv";
import { useState } from "react";
import { BehandlingStegGenerell } from "~/views/behandling-steg/BehandlingStegGenerell";

export function BehandlingStegMinsteinntekt(props: IProps) {
  const { steg } = props;
  const [manuellBehandling, setManuellBehandling] = useState(() => false);

  const metadata: Metadata = {
    svartype: steg.svartype,
    id: steg.id,
  };

  return (
    <>
      <Heading size="large">Vurder vilkår om minste arbeidsinntekt</Heading>
      <BodyLong>
        Hatt en brutto arbeidsinntekt som minst svarer til 1,5 ganger grunnbeløpet siste 12
        månedene, eller 3 ganger grunnbeløpet siste 36 månedene.
      </BodyLong>

      <ValidatedForm
        key={"readonly-greier, trenger egentlig ikke validatedform"} // Keyen gjør at React refresher alt. Uten den kan svaret noen ganger bli igjen når neste steg vises.
        validator={hentValideringRegler(steg.svartype, steg.id, steg.uuid)}
        method="post"
      >
        <input name="metadata" type="hidden" value={JSON.stringify(metadata)} />
        <BehandlingStegInputSelect
          placeholder="Regel brukt"
          options={[
            { value: "ordinaer", text: "Ordinær" },
            { value: "verneplikt", text: "Verneplikt" },
          ]}
          name={"Bruk uuid til koblingen mot utregning"}
          svartype={steg.svartype}
          label={"Regel"}
          verdi={"ordinaer"}
          readonly={true}
        />
        <div>
          <BehandlingStegInputDato
            name={"virkningsdato"}
            label={"Virkningsdato (hardkodet)"}
            verdi={"12.06.2023"}
            readonly={true}
            svartype={"LocalDate"}
          />
        </div>
        <BodyLong>Inntektsopplysninger</BodyLong>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell scope="col">Type vurdering</Table.HeaderCell>
              <Table.HeaderCell scope="col">Periode</Table.HeaderCell>
              <Table.HeaderCell scope="col">Inntekt</Table.HeaderCell>
              <Table.HeaderCell scope="col">Oppfyller kravene</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {inntekter.map(({ perioder, id, inntekt, periode, oppfyllerKrav }, i) => {
              return (
                <Table.ExpandableRow
                  key={i + id}
                  content="Her lister vi ut inntektene per periode/måned?"
                >
                  <Table.DataCell scope="row">{id}</Table.DataCell>
                  <Table.DataCell>{periode}</Table.DataCell>
                  <Table.DataCell>{inntekt}</Table.DataCell>
                  <Table.DataCell>{oppfyllerKrav}</Table.DataCell>
                </Table.ExpandableRow>
              );
            })}
          </Table.Body>
        </Table>
      </ValidatedForm>
      <BehandlingStegLagretAv steg={steg} />
      <Alert variant={"success"}>Vilkåret om minste arbeidsinntekt er oppfylt</Alert>
      {!manuellBehandling && (
        <>
          <Button type={"button"} onClick={() => setManuellBehandling(true)}>
            Behandle manuelt
          </Button>
          <Button
            type={"button"}
            onClick={() => console.log("BEEP BOP! Bruker maskinell beregning!")}
          >
            Dette stemmer
          </Button>
        </>
      )}

      {manuellBehandling ||
        (steg.svar?.begrunnelse && (
          <>
            <Alert variant={"warning"}>Manuelt besvart!</Alert>
            <BehandlingStegGenerell {...props} />
          </>
        ))}
    </>
  );
}

const inntekter = [
  {
    periode: "april 2022 - april 2023",
    perioder: [{ periode: "april 2022", inntekt: "500000" }],
    id: "siste-12",
    oppfyllerKrav: true,
    inntekt: "500000",
  },
  {
    periode: "april 2020 - april 2023",
    perioder: [
      { periode: "april 2020", inntekt: "500000" },
      { periode: "april 2021", inntekt: "500000" },
      { periode: "april 2022", inntekt: "500000" },
    ],
    id: "siste-36",
    oppfyllerKrav: true,
    inntekt: "1500000",
  },
];
