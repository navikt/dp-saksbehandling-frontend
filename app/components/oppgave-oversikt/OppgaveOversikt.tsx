import { ChevronLeftDoubleIcon, ChevronRightDoubleIcon } from "@navikt/aksel-icons";
import { BodyShort, Button, Detail, Heading, Tag } from "@navikt/ds-react";
import { differenceInCalendarDays } from "date-fns";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { DokumentOversikt } from "~/components/dokument-oversikt/DokumentOversikt";
import { FagsystemLenker } from "~/components/fagsystem-lenker/FagsystemLenker";
import { OppgaveÅrsakEmneknagger } from "~/components/oppgave-årsak-emneknagger/OppgaveÅrsakEmneknagger";
import { OppgaveHistorikk } from "~/components/oppgave-historikk/OppgaveHistorikk";
import { OppgaveKontroll } from "~/components/oppgave-kontroll/OppgaveKontroll";
import { OppgaveOversiktVisArvedeOpplysninger } from "~/components/oppgave-oversikt/OppgaveOversiktVisArvedeOpplysninger";
import { VerdiMedTittel } from "~/components/verdi-med-tittel/VerdiMedTittel";
import { useOppgave } from "~/hooks/useOppgave";
import { hentJournalpost } from "~/models/saf.server";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import {
  hentFargevariantForSøknadsresultat,
  hentOppgaveTilstandTekst,
  hentUtløstAvTekstForVisning,
} from "~/utils/tekst.utils";

interface IProps {
  journalposterPromises: Promise<Awaited<ReturnType<typeof hentJournalpost>>[]>;
}

export function OppgaveOversikt({ journalposterPromises }: IProps) {
  const [erLukket, setErLukket] = useState(false);
  const { oppgave, underKontroll } = useOppgave();

  const dagerIgjenTilUtsattDato = oppgave.utsattTilDato
    ? differenceInCalendarDays(oppgave.utsattTilDato, new Date())
    : undefined;

  return (
    <div className="relative">
      <AnimatePresence initial={false}>
        {!erLukket && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 350, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <aside className={"flex flex-col gap-4"}>
              <div className={"card flex flex-col gap-4 p-4"}>
                <Heading size={"small"}>Oppgaveinformasjon</Heading>

                <VerdiMedTittel
                  visBorder={true}
                  label={"Opprettet"}
                  verdi={formaterTilNorskDato(oppgave.tidspunktOpprettet)}
                />

                <VerdiMedTittel
                  visBorder={true}
                  label={"Utløst av"}
                  verdi={hentUtløstAvTekstForVisning(oppgave.utlostAv)}
                />

                <VerdiMedTittel
                  visBorder={true}
                  label={"Rettighet"}
                  verdi={oppgave.emneknagger
                    .filter((emneknagg) => emneknagg.kategori === "RETTIGHET")
                    .map((emneknagg) => emneknagg.visningsnavn)
                    .join(", ")}
                />

                <VerdiMedTittel
                  visBorder={true}
                  label={"Status"}
                  verdi={
                    <>
                      <BodyShort size={"small"}>
                        {hentOppgaveTilstandTekst(oppgave.tilstand)}
                      </BodyShort>

                      {oppgave.tilstand === "PAA_VENT" && oppgave.utsattTilDato && (
                        <Tag size={"xsmall"} variant={"alt1"}>
                          <Detail>{`${dagerIgjenTilUtsattDato} ${dagerIgjenTilUtsattDato === 1 ? "dag" : "dager"} igjen`}</Detail>
                        </Tag>
                      )}
                    </>
                  }
                />

                <VerdiMedTittel
                  visBorder={true}
                  label={"Søknadsresultat"}
                  verdi={
                    <div>
                      {oppgave.emneknagger
                        .filter((emneknagg) => emneknagg.kategori === "SØKNADSRESULTAT")
                        .map((emneknagg) => (
                          <Tag
                            key={emneknagg.visningsnavn}
                            size={"xsmall"}
                            variant={hentFargevariantForSøknadsresultat(emneknagg.visningsnavn)}
                          >
                            <Detail>{emneknagg.visningsnavn}</Detail>
                          </Tag>
                        ))}
                    </div>
                  }
                />

                <VerdiMedTittel
                  visBorder={true}
                  label={"Årsak"}
                  verdi={<OppgaveÅrsakEmneknagger oppgave={oppgave} />}
                />

                {oppgave.saksbehandler && (
                  <VerdiMedTittel
                    visBorder={true}
                    label={"Saksbehandler"}
                    verdi={`${oppgave.saksbehandler.fornavn} ${oppgave.saksbehandler.etternavn}`}
                  />
                )}

                {oppgave.beslutter && (
                  <VerdiMedTittel
                    label={"Beslutter"}
                    verdi={`${oppgave.beslutter.fornavn} ${oppgave.beslutter.etternavn}`}
                  />
                )}
              </div>

              {underKontroll && (
                <div className={"card p-4"}>
                  <Heading className={"pb-2"} size={"small"}>
                    Kontroll
                  </Heading>
                  <OppgaveKontroll />
                </div>
              )}

              {oppgave.behandlingType === "RETT_TIL_DAGPENGER" && (
                <OppgaveOversiktVisArvedeOpplysninger />
              )}

              <div className={"card p-4"}>
                <Heading className={"pb-2"} size={"small"}>
                  Dokumenter
                </Heading>
                <DokumentOversikt journalposterPromises={journalposterPromises} />
              </div>

              <div className={"card p-4"}>
                <Heading className={"pb-2"} size={"small"}>
                  Historikk
                </Heading>
                <OppgaveHistorikk />
              </div>

              <div className={"card p-4"}>
                <Heading className={"pb-2"} size={"small"}>
                  Fagsystemer
                </Heading>

                <FagsystemLenker />
              </div>
            </aside>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="absolute top-4"
        initial={false}
        animate={{
          right: erLukket ? -12 : -6,
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <Button
          size={"xsmall"}
          variant={"primary"}
          icon={erLukket ? <ChevronRightDoubleIcon /> : <ChevronLeftDoubleIcon />}
          onClick={() => setErLukket(!erLukket)}
          aria-label={erLukket ? "Åpne oppgaveoversikt" : "Lukk oppgaveoversikt"}
        />
      </motion.div>
    </div>
  );
}
