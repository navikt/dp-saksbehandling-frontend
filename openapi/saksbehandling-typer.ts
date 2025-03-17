/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/oppgave": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Hent alle oppgaver med status Klar til behandling */
        get: {
            parameters: {
                query?: {
                    emneknagg?: string[];
                    tilstand?: components["schemas"]["OppgaveTilstand"][];
                    fom?: string;
                    tom?: string;
                    mineOppgaver?: boolean;
                    antallOppgaver?: number;
                    side?: number;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Vellykket respons med en liste over oppgaver */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["OppgaveOversiktResultat"];
                    };
                };
                /** @description Feil */
                default: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/problem+json": components["schemas"]["HttpProblem"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/oppgave/neste": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Hent neste oppgave og tildel denne til saksbehandler */
        put: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["NesteOppgave"];
                };
            };
            responses: {
                /** @description Vellykket respons med detaljer om oppgaven som tildeles */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Oppgave"];
                    };
                };
                /** @description Ingen flere oppgaver å behandle akkurat nå */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/problem+json": components["schemas"]["HttpProblem"];
                    };
                };
                /** @description Feil */
                default: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/problem+json": components["schemas"]["HttpProblem"];
                    };
                };
            };
        };
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/oppgave/{oppgaveId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Hent en oppgave ved hjelp av dens ID */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    oppgaveId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Vellykket respons med detaljer om oppgaven */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Oppgave"];
                    };
                };
                /** @description Oppgaven ble ikke funnet */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/problem+json": components["schemas"]["HttpProblem"];
                    };
                };
                /** @description Feil */
                default: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/problem+json": components["schemas"]["HttpProblem"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/oppgave/{oppgaveId}/notat": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Legg til et notat på en oppgave */
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    oppgaveId: string;
                };
                cookie?: never;
            };
            requestBody: {
                content: {
                    "text/plain": string;
                };
            };
            responses: {
                /** @description Notatet ble lagt til */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["LagreNotatResponse"];
                    };
                };
                /** @description Oppgaven ble ikke funnet */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/problem+json": components["schemas"]["HttpProblem"];
                    };
                };
                /** @description Feil */
                default: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/problem+json": components["schemas"]["HttpProblem"];
                    };
                };
            };
        };
        post?: never;
        /** Slett notat på en oppgave */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    oppgaveId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Notatet slettet */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["LagreNotatResponse"];
                    };
                };
                /** @description Oppgaven ble ikke funnet */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/problem+json": components["schemas"]["HttpProblem"];
                    };
                };
                /** @description Feil */
                default: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/problem+json": components["schemas"]["HttpProblem"];
                    };
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/oppgave/{oppgaveId}/send-til-kontroll": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Saksbehandler sender oppgaven til kontroll og innstiller vedtaket */
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    oppgaveId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Vellykket respons */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Oppgaven ble ikke funnet */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/problem+json": components["schemas"]["HttpProblem"];
                    };
                };
                /** @description Oppgaven er allerede sendt til kontroll eller den krever ikke kontroll. */
                409: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/problem+json": components["schemas"]["HttpProblem"];
                    };
                };
                /** @description Feil */
                default: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/problem+json": components["schemas"]["HttpProblem"];
                    };
                };
            };
        };
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/oppgave/{oppgaveId}/returner-til-saksbehandler": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Beslutter sender oppgaven tilbake til saksbehandler */
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    oppgaveId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Vellykket respons */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Oppgaven ble ikke funnet */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/problem+json": components["schemas"]["HttpProblem"];
                    };
                };
                /** @description Oppgaven er allerede sendt tilbake til saksbehandler */
                409: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/problem+json": components["schemas"]["HttpProblem"];
                    };
                };
                /** @description Feil */
                default: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/problem+json": components["schemas"]["HttpProblem"];
                    };
                };
            };
        };
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/oppgave/{oppgaveId}/ferdigstill/melding-om-vedtak": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Ferdigstill en Oppgave ved å godkjenne behandlingen og starte utsending. */
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    oppgaveId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Oppgaven er ferdig behandlet og utsending av melding om vedtak har startet */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Oppgaven ble ikke funnet */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/problem+json": components["schemas"]["HttpProblem"];
                    };
                };
                /** @description Feil */
                default: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/problem+json": components["schemas"]["HttpProblem"];
                    };
                };
            };
        };
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/oppgave/{oppgaveId}/ferdigstill/melding-om-vedtak-arena": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Ferdigstill en Oppgave ved å la arena lage melding om vedtak. */
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    oppgaveId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Oppgaven er ferdig behandlet og utsending av melding om vedtak håndteres i Arena */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Oppgaven ble ikke funnet */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/problem+json": components["schemas"]["HttpProblem"];
                    };
                };
                /** @description Feil */
                default: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/problem+json": components["schemas"]["HttpProblem"];
                    };
                };
            };
        };
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/oppgave/{oppgaveId}/utsett": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Saksbehandler utsetter oppgaven */
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    oppgaveId: string;
                };
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["UtsettOppgave"];
                };
            };
            responses: {
                /** @description Vellykket respons */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Oppgaven ble ikke funnet */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/problem+json": components["schemas"]["HttpProblem"];
                    };
                };
                /** @description Oppgaven er allerede tatt til behandling */
                409: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/problem+json": components["schemas"]["HttpProblem"];
                    };
                };
                /** @description Feil */
                default: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/problem+json": components["schemas"]["HttpProblem"];
                    };
                };
            };
        };
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/oppgave/{oppgaveId}/tildel": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Saksbehandler blir tildelt ansvaret for oppgaven */
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    oppgaveId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Returnerer oppdatert tilstand etter tildeling av oppgave til saksbehandler eller beslutter */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["OppdatertTilstand"];
                    };
                };
                /** @description Oppgaven ble ikke funnet */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/problem+json": components["schemas"]["HttpProblem"];
                    };
                };
                /** @description Oppgaven er allerede tatt til behandling */
                409: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/problem+json": components["schemas"]["HttpProblem"];
                    };
                };
                /** @description Feil */
                default: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/problem+json": components["schemas"]["HttpProblem"];
                    };
                };
            };
        };
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/oppgave/{oppgaveId}/legg-tilbake": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Saksbehandler/beslutter fjernes som ansvarlig for oppgaven, og oppgaven går tilbake til oppgavelisten */
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    oppgaveId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Fjernet saksbehandler/beslutter som ansvarlig for oppgaven, og oppgaven gjøres klar til behandling/kontroll */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Oppgaven ble ikke funnet */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/problem+json": components["schemas"]["HttpProblem"];
                    };
                };
                /** @description Oppgaven kan ikke legges tilbake i oppgavelisten igjen */
                409: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/problem+json": components["schemas"]["HttpProblem"];
                    };
                };
                /** @description Feil */
                default: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/problem+json": components["schemas"]["HttpProblem"];
                    };
                };
            };
        };
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/person/oppgaver": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Hent alle oppgaver til en person */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["PersonIdent"];
                };
            };
            responses: {
                /** @description Vellykket respons med en liste over oppgaver som samsvarer med ident */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["OppgaveOversikt"][];
                    };
                };
                /** @description Feil */
                default: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/problem+json": components["schemas"]["HttpProblem"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/behandling/{behandlingId}/oppgaveId": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Henter oppgaveId basert på en behandlingId */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    behandlingId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Fant oppgaveId for behandlingId */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": string;
                    };
                };
                /** @description Fant ikke oppgaveId for behandlingId */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/problem+json": components["schemas"]["HttpProblem"];
                    };
                };
                /** @description Feil */
                default: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/problem+json": components["schemas"]["HttpProblem"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/statistikk": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Hent statistikk
         * @description Henter statistikk for innlogget saksbehandler samt generell statistikk.
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Statistikk hentet */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            individuellStatistikk: components["schemas"]["Statistikk"];
                            generellStatistikk: components["schemas"]["Statistikk"];
                            beholdningsinfo: components["schemas"]["BeholdningsInfo"];
                        };
                    };
                };
                /** @description Uautorisert tilgang */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/problem+json": components["schemas"]["HttpProblem"];
                    };
                };
                /** @description Feil */
                default: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/problem+json": components["schemas"]["HttpProblem"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        Person: {
            ident: string;
            fornavn: string;
            etternavn: string;
            mellomnavn?: string;
            /** Format: date */
            fodselsdato: string;
            alder: number;
            statsborgerskap?: string;
            kjonn: components["schemas"]["Kjonn"];
            skjermesSomEgneAnsatte: boolean;
            adressebeskyttelseGradering: components["schemas"]["AdressebeskyttelseGradering"];
            sikkerhetstiltak: components["schemas"]["Sikkerhetstiltak"][];
        };
        OppgaveOversiktResultat: {
            oppgaver: components["schemas"]["OppgaveOversikt"][];
            totaltAntallOppgaver: number;
        };
        OppgaveOversikt: {
            /** Format: uuid */
            oppgaveId: string;
            /** Format: uuid */
            behandlingId: string;
            personIdent: string;
            behandlerIdent?: string;
            /** Format: date-time */
            tidspunktOpprettet: string;
            emneknagger: string[];
            skjermesSomEgneAnsatte: boolean;
            adressebeskyttelseGradering: components["schemas"]["AdressebeskyttelseGradering"];
            tilstand: components["schemas"]["OppgaveTilstand"];
            /** Format: date */
            utsattTilDato?: string;
        };
        Oppgave: {
            /** Format: uuid */
            oppgaveId: string;
            /** Format: uuid */
            behandlingId: string;
            saksbehandler?: components["schemas"]["Behandler"];
            beslutter?: components["schemas"]["Behandler"];
            person: components["schemas"]["Person"];
            /** Format: date-time */
            tidspunktOpprettet: string;
            /** Format: date */
            utsattTilDato?: string;
            journalpostIder: string[];
            historikk: components["schemas"]["OppgaveHistorikk"][];
            emneknagger: string[];
            tilstand: components["schemas"]["OppgaveTilstand"];
            notat?: components["schemas"]["Notat"];
            lovligeEndringer: components["schemas"]["LovligeEndringer"];
            /** Format: uuid */
            soknadId?: string;
        };
        /** @enum {string} */
        Kjonn: "MANN" | "KVINNE" | "UKJENT";
        /** @enum {string} */
        OppgaveTilstand: "KLAR_TIL_BEHANDLING" | "UNDER_BEHANDLING" | "KLAR_TIL_KONTROLL" | "UNDER_KONTROLL" | "FERDIG_BEHANDLET" | "PAA_VENT" | "AVVENTER_LÅS_AV_BEHANDLING" | "AVVENTER_OPPLÅSING_AV_BEHANDLING" | "BEHANDLES_I_ARENA";
        LovligeEndringer: {
            /** @description Årsaker til at oppgaven settes på vent */
            paaVentAarsaker: string[];
        };
        /** @enum {string} */
        AdressebeskyttelseGradering: "UGRADERT" | "FORTROLIG" | "STRENGT_FORTROLIG" | "STRENGT_FORTROLIG_UTLAND";
        Sikkerhetstiltak: {
            beskrivelse: string;
            /** Format: date */
            gyldigTom: string;
        };
        PersonIdent: {
            ident: string;
        };
        OppgaveHistorikk: {
            /** @enum {string} */
            type: "notat" | "statusendring";
            /** Format: date-time */
            tidspunkt: string;
            tittel: string;
            behandler: {
                navn: string;
                /** @enum {string} */
                rolle?: "saksbehandler" | "beslutter" | "system";
            };
            body?: string;
        };
        NesteOppgave: {
            queryParams: string;
        };
        UtsettOppgave: {
            /** Format: date */
            utsettTilDato: string;
            beholdOppgave: boolean;
            aarsak: components["schemas"]["UtsettOppgaveAarsak"];
        };
        /** @enum {string} */
        UtsettOppgaveAarsak: "AVVENT_SVAR" | "AVVENT_DOKUMENTASJON" | "AVVENT_MELDEKORT" | "AVVENT_RAPPORTERINGSFRIST" | "AVVENT_SVAR_PÅ_FORESPØRSEL" | "ANNET";
        LagreNotatResponse: {
            /**
             * Format: date-time
             * @description Tidspunkt notat sist ble endret
             */
            sistEndretTidspunkt: string;
        };
        Notat: {
            tekst: string;
            /**
             * Format: date-time
             * @description Tidspunkt notat sist ble endret
             */
            sistEndretTidspunkt: string;
        };
        Behandler: {
            ident: string;
            fornavn: string;
            etternavn: string;
            enhet?: {
                navn: string;
                enhetNr: string;
                postadresse: string;
            };
        };
        Statistikk: {
            /**
             * @description Antall behandlede oppgaver i løpet av dagen.
             * @default 0
             * @example 5
             */
            dag: number;
            /**
             * @description Antall behandlede oppgaver i løpet av uken.
             * @default 0
             * @example 30
             */
            uke: number;
            /**
             * @description Totalt antall behandlede oppgaver.
             * @default 0
             * @example 200
             */
            totalt: number;
        };
        BeholdningsInfo: {
            /**
             * @description Antall oppgaver som er klar til behandling
             * @default 0
             */
            antallOppgaverKlarTilBehandling: number;
            /**
             * @description Antall oppgaver som er klar til kontroll
             * @default 0
             */
            antallOppgaverKlarTilKontroll: number;
            /**
             * Format: date-time
             * @description Dato for eldste oppgave som er klar til behandling
             */
            datoEldsteUbehandledeOppgave?: string;
        };
        OppdatertTilstand: {
            nyTilstand: components["schemas"]["OppgaveTilstand"];
        };
        HttpProblem: {
            type: string;
            title: string;
            /** Format: int32 */
            status: number;
            detail?: string;
            instance: string;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
