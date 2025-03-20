/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/melding-om-vedtak/{behandlingId}/html": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Hent vedtak som HTML for en gitt behandlingId
         * @description Henter HTML for en gitt behandlingId. Henter alltid nyeste Sanity innhold og behandling
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description id for behandling */
                    behandlingId: string;
                };
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["MeldingOmVedtakData"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["MeldingOmVedtakResponse"];
                    };
                };
                /** @description Behandlingen finnes ikke */
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
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/melding-om-vedtak/{behandlingId}/vedtaksmelding": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Hent vedtaks HTML for en gitt behandlingId
         * @description Henter vedtaksHTML for en gitt behandlingId, bruker garantert samme Sanity innhold som da sa
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description id for behandling */
                    behandlingId: string;
                };
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["MeldingOmVedtakData"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            /** @description HTML for melding om vedtak */
                            html?: string;
                        };
                    };
                };
                /** @description Behandlingen finnes ikke */
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
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/melding-om-vedtak/{behandlingId}/{brevblokkId}/utvidet-beskrivelse": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Lagrer utvidet beskrivelse for en gitt brevblokk i meldingen om vedtak */
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    behandlingId: string;
                    brevblokkId: string;
                };
                cookie?: never;
            };
            requestBody: {
                content: {
                    "text/plain": string;
                };
            };
            responses: {
                /** @description Utvidet beskrivelse for brevblokk er lagret og returnerer sistEndretTidspunkt */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["UtvidetBeskrivelseSistEndretTidspunkt"];
                    };
                };
                /** @description ContentType må være text/plain */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/problem+json": components["schemas"]["HttpProblem"];
                    };
                };
                /** @description Behandlingen finnes ikke */
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
    "/melding-om-vedtak/{behandlingId}/{brevblokkId}/utvidet-beskrivelse-json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Lagrer utvidet beskrivelse for en gitt brevblokk i meldingen om vedtak */
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    behandlingId: string;
                    brevblokkId: string;
                };
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["UtvidetBeskrivelseTekst"];
                };
            };
            responses: {
                /** @description Utvidet beskrivelse for brevblokk er lagret og returnerer sistEndretTidspunkt */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["UtvidetBeskrivelseSistEndretTidspunkt"];
                    };
                };
                /** @description ContentType må være text/plain */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/problem+json": components["schemas"]["HttpProblem"];
                    };
                };
                /** @description Behandlingen finnes ikke */
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
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        UtvidetBeskrivelseTekst: {
            /** @description Utvidet beskrivelse som skal inngå i vedtaksmeldingen */
            tekst: string;
        };
        UtvidetBeskrivelseSistEndretTidspunkt: {
            /**
             * Format: date-time
             * @description Tidspunkt utvidet beskrivelse sist ble endret
             */
            sistEndretTidspunkt?: string;
        };
        MeldingOmVedtakResponse: {
            /** @description HTML for melding om vedtak */
            html?: string;
            utvidedeBeskrivelser?: components["schemas"]["UtvidetBeskrivelse"][];
        };
        UtvidetBeskrivelse: {
            brevblokkId: string;
            tekst: string;
            /** Format: date-time */
            sistEndretTidspunkt?: string;
            tittel: string;
        };
        MeldingOmVedtakData: {
            fornavn: string;
            mellomnavn?: string;
            etternavn: string;
            /** @description Må være et gyldig fødselsnummer med nøyaktig 11 sifre. */
            fodselsnummer: string;
            saksbehandler: components["schemas"]["Behandler"];
            beslutter?: components["schemas"]["Behandler"];
        };
        Behandler: {
            fornavn: string;
            etternavn: string;
            ident?: string;
            enhet: {
                navn: string;
                enhetNr?: string;
                postadresse: string;
            };
        };
        HttpProblem: {
            type?: string;
            title?: string;
            /** Format: int32 */
            status?: number;
            detail?: string;
            instance?: string;
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
