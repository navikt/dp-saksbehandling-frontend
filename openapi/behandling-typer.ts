/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/opplysningstyper": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Lister ut alle registrerte opplysningstyper */
    get: {
      parameters: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description OK */
        200: {
          headers: {
            [name: string]: unknown;
          };

          content: {
            "application/json": components["schemas"]["Opplysningstype"][];
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
  "/behandling": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /** @description Hent alle behandlinger for en gitt person */
    post: {
      parameters: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody: {
        content: {
          "application/json": components["schemas"]["IdentForesporsel"];
        };
      };
      responses: {
        /** @description OK */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "application/json": components["schemas"]["Behandling"][];
          };
        };
        /** @description Feil ved henting av behandlinger */
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
  "/behandling/{behandlingId}": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Behandlingens id */
        behandlingId: string;
      };
      cookie?: never;
    };
    /** Hent en spesifikk behandling */
    get: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description Behandlingens id */
          behandlingId: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description OK */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "application/json": components["schemas"]["Behandling"];
          };
        };
        /** @description Feil ved henting av behandling */
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
  "/behandling/{behandlingId}/vurderinger": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Behandlingens id */
        behandlingId: string;
      };
      cookie?: never;
    };
    /** Hent en oppsummering av saksbehandlers vurderinger */
    get: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description Behandlingens id */
          behandlingId: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description OK */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "application/json": components["schemas"]["SaksbehandlersVurderinger"];
          };
        };
        /** @description Feil ved henting av behandling */
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
  "/behandling/{behandlingId}/vurderinger/{opplysningId}": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Behandlingens id */
        behandlingId: string;
        /** @description Opplysningens ID */
        opplysningId: string;
      };
      cookie?: never;
    };
    get?: never;
    /** Lagre saksbehandlers begrunnelse for endringen av opplysningen */
    put: operations["lagreOpplysningBegrunnelse"];
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/behandling/{behandlingId}/avbryt": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Behandlingens id */
        behandlingId: string;
      };
      cookie?: never;
    };
    get?: never;
    put?: never;
    /** Avbryt en behandling */
    post: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description Behandlingens id */
          behandlingId: string;
        };
        cookie?: never;
      };
      requestBody: {
        content: {
          "application/json": components["schemas"]["IdentForesporsel"];
        };
      };
      responses: {
        /** @description OK */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        /** @description Feil ved avbryt av behandling */
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
  "/behandling/{behandlingId}/godkjenn": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Behandlingens id */
        behandlingId: string;
      };
      cookie?: never;
    };
    get?: never;
    put?: never;
    /** Send behandlingen til beslutter eller vedtak om det ikke kreves totrinnskontroll */
    post: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description Behandlingens id */
          behandlingId: string;
        };
        cookie?: never;
      };
      requestBody: {
        content: {
          "application/json": components["schemas"]["IdentForesporsel"];
        };
      };
      responses: {
        /** @description OK */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        /** @description Feil ved godkjenn av behandling */
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
  "/behandling/{behandlingId}/beslutt": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Behandlingens id */
        behandlingId: string;
      };
      cookie?: never;
    };
    get?: never;
    put?: never;
    /** Beslutt en behandling */
    post: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description Behandlingens id */
          behandlingId: string;
        };
        cookie?: never;
      };
      requestBody: {
        content: {
          "application/json": components["schemas"]["IdentForesporsel"];
        };
      };
      responses: {
        /** @description OK */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        /** @description Feil ved beslutt av behandling */
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
  "/behandling/{behandlingId}/send-tilbake": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Behandlingens id */
        behandlingId: string;
      };
      cookie?: never;
    };
    get?: never;
    put?: never;
    /** Send behandlingen tilbake til saksbehandler */
    post: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description Behandlingens id */
          behandlingId: string;
        };
        cookie?: never;
      };
      requestBody: {
        content: {
          "application/json": components["schemas"]["IdentForesporsel"];
        };
      };
      responses: {
        /** @description OK */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        /** @description Feil ved send tilbake behandling */
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
  "/behandling/{behandlingId}/rekjor": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Behandlingens id */
        behandlingId: string;
      };
      cookie?: never;
    };
    get?: never;
    put?: never;
    /** Rekjør en behandling med gjeldende regelverk */
    post: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description Behandlingens id */
          behandlingId: string;
        };
        cookie?: never;
      };
      requestBody: {
        content: {
          "application/json": components["schemas"]["IdentForesporsel"];
        };
      };
      responses: {
        /** @description OK */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        /** @description Feil ved rekjøring av behandlinger */
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
  "/behandling/{behandlingId}/opplysning": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Behandlingens id */
        behandlingId: string;
      };
      cookie?: never;
    };
    /** Hent opplysninger for en spesifikk behandling */
    get: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description Behandlingens id */
          behandlingId: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description OK */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "application/json": components["schemas"]["BehandlingOpplysninger"];
          };
        };
        /** @description Feil ved henting av opplysninger for en behandling */
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
  "/behandling/{behandlingId}/opplysning/{opplysningId}": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Behandlingens id */
        behandlingId: string;
        /** @description Opplysningens id */
        opplysningId: string;
      };
      cookie?: never;
    };
    get?: never;
    /** Overskriv en opplysning */
    put: operations["oppdaterOpplysning"];
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/behandling/{behandlingId}/avklaring": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Behandlingens id */
        behandlingId: string;
      };
      cookie?: never;
    };
    /** @description Hent avklaringer for en behandling */
    get: operations["hentAvklaringer"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/behandling/{behandlingId}/avklaring/{avklaringId}": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Behandlingens id */
        behandlingId: string;
        /** @description Avklaringens id */
        avklaringId: string;
      };
      cookie?: never;
    };
    get?: never;
    /** @description Kvittér ut en avklaring */
    put: operations["kvitterAvklaring"];
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/behandling/{behandlingId}/vedtak": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        behandlingId: string;
      };
      cookie?: never;
    };
    /** @description Viser et vedtak / resultat av en behandling */
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
        /** @description OK */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "application/json": components["schemas"]["Vedtak"];
          };
        };
        /** @description Feil ved uthenting av vedtak */
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
    IdentForesporsel: {
      ident: string;
    };
    Behandling: {
      /** Format: uuid */
      behandlingId: string;
      /** @enum {string} */
      tilstand: "UnderOpprettelse" | "UnderBehandling" | "Redigert" | "ForslagTilVedtak" | "Låst" | "Avbrutt" | "Ferdig" | "TilGodkjenning" | "TilBeslutning";
      kreverTotrinnskontroll: boolean;
      utfall?: boolean;
      "vilk\u00E5r": components["schemas"]["Regelsett"][];
      fastsettelser: components["schemas"]["Regelsett"][];
      avklaringer: components["schemas"]["Avklaring"][];
      opplysninger: components["schemas"]["Opplysning"][];
    };
    BehandlingOpplysninger: {
      /** Format: uuid */
      behandlingId: string;
      /** @enum {string} */
      tilstand: "UnderOpprettelse" | "UnderBehandling" | "Redigert" | "ForslagTilVedtak" | "Låst" | "Avbrutt" | "Ferdig" | "TilGodkjenning" | "TilBeslutning";
      opplysning: components["schemas"]["Opplysning"][];
      kreverTotrinnskontroll: boolean;
      aktiveAvklaringer: components["schemas"]["Avklaring"][];
      avklaringer: components["schemas"]["Avklaring"][];
    };
    SaksbehandlersVurderinger: {
      /** Format: uuid */
      behandlingId: string;
      regelsett: components["schemas"]["Regelsett"][];
      avklaringer: components["schemas"]["Avklaring"][];
      opplysninger: components["schemas"]["Opplysning"][];
    };
    Avklaring: {
      /** Format: uuid */
      id: string;
      kode: components["schemas"]["AvklaringKode"];
      tittel: string;
      beskrivelse: string;
      kanKvitteres: boolean;
      /** @enum {string} */
      status: "Åpen" | "Avbrutt" | "Avklart";
      maskinelt: boolean;
      begrunnelse?: string;
      /** Format: date-time */
      sistEndret: string;
      avklartAv?: components["schemas"]["Saksbehandler"];
    };
    Opplysningstype: {
      opplysningTypeId: components["schemas"]["opplysningTypeId"];
      behovId: string;
      navn: string;
      datatype: components["schemas"]["DataType"];
    };
    /** Format: uuid */
    OpplysningsId: string;
    /** Format: uuid */
    opplysningTypeId: string;
    AvklaringKode: string;
    Regelsett: {
      /** @description Kort navn som beskriver regelsettet */
      navn: string;
      /** @description Hvilken hjemmel er regelsettet basert på */
      hjemmel: components["schemas"]["Hjemmel"];
      /** @deprecated */
      relevantForVedtak?: boolean;
      /** @enum {string} */
      status?: "Oppfylt" | "HarAvklaring" | "IkkeOppfylt" | "Info" | "IkkeRelevant";
      /** @description Hvilke avklaringer som skal vises i dette regelsettet */
      avklaringer: components["schemas"]["Avklaring"][];
      opplysningIder?: components["schemas"]["OpplysningsId"][];
    };
    Hjemmel: {
      /** @description Lov, forskrift, eller rundskriv */
      kilde: components["schemas"]["Lovkilde"];
      kapittel: string;
      paragraf: string;
      tittel: string;
      /** Format: uri */
      url?: string;
    };
    Lovkilde: {
      navn: string;
      kortnavn: string;
    };
    Opplysning: {
      id: components["schemas"]["OpplysningsId"];
      opplysningTypeId: components["schemas"]["opplysningTypeId"];
      navn: string;
      verdi: string;
      /** @enum {string} */
      status: "Hypotese" | "Faktum";
      /**
       * Format: date
       * @description Om opplysningen er gyldig fra en bestemt dato. Er den null, er den gyldig fra tidens morgen.
       */
      gyldigFraOgMed?: string | null;
      /**
       * Format: date
       * @description Om opplysningen er gyldig fra en bestemt dato. Er den null, er den gyldig til evig tid.
       */
      gyldigTilOgMed?: string | null;
      datatype: components["schemas"]["DataType"];
      /** @description Indikerer om opplysningen kan redigeres */
      redigerbar: boolean;
      kilde?: components["schemas"]["Opplysningskilde"];
      utledetAv?: components["schemas"]["Utledning"];
      /** @description Indikerer om opplysningen skal vises i grensesnittet */
      synlig: boolean;
      /** @enum {string} */
      "form\u00E5l": "Legacy" | "Bruker" | "Register" | "Regel";
    };
    /** @description Kilde for opplysningen
     *      */
    Opplysningskilde: {
      /** @enum {string} */
      type: "Saksbehandler" | "System";
      /** Format: date-time */
      registrert: string;
      ident?: string | null;
      begrunnelse?: components["schemas"]["Begrunnelse"];
      /** Format: uuid */
      meldingId?: string | null;
    };
    Begrunnelse: {
      verdi: string;
      /** Format: date-time */
      sistEndret: string;
    };
    Utledning: {
      regel: components["schemas"]["Regel"];
      opplysninger: string[];
    };
    Regel: {
      navn: string;
    };
    Bekreftelse: {
      /** Format: uuid */
      bekreftelseId: string;
      /** Format: date-time */
      "utf\u00F8rt"?: string;
      saksbehandler?: components["schemas"]["Saksbehandler"];
      bekreftet: components["schemas"]["OpplysningsId"][];
    };
    Saksbehandler: {
      ident: string;
    };
    /**
     * @description Hvilken datatype opplysningen har, for å kunne validere at verdi er riktig format
     *
     * @enum {string}
     */
    DataType: "dato" | "desimaltall" | "heltall" | "boolsk" | "ulid" | "penger" | "inntekt" | "tekst" | "barn";
    Kvittering: {
      /** Format: uuid */
      behandlingId: string;
    };
    Saksbehandlerbegrunnelse: {
      begrunnelse: string;
    };
    HttpProblem: {
      /**
       * Format: uri
       * @description A URI reference [RFC3986] that identifies the problem type. This specification encourages that, when dereferenced, it provide human-readable documentation for the problem type
       */
      type: string;
      /** @description A short, human-readable summary of the problem type. It SHOULD NOT change from occurrence to occurrence of the problem, except for purposes of localization */
      title: string;
      /** @description The HTTP status code ([RFC7231], Section 6) generated by the origin server for this occurrence of the problem */
      status: number;
      /** @description A human-readable explanation specific to this occurrence of the problem */
      detail?: string;
      /**
       * Format: uri
       * @description A URI reference that identifies the specific occurrence of the problem. It may or may not yield further information if dereferenced
       */
      instance?: string;
    };
    Vedtak: {
      /** Format: uuid */
      behandlingId: string;
      fagsakId: string;
      "s\u00F8knadId": string;
      automatisk?: boolean;
      /** @description Person vedtak gjelder for */
      ident: string;
      /**
       * Format: date-time
       * @description Når vedtaket ble fattet
       */
      vedtakstidspunkt: string;
      /**
       * Format: date
       * @description Hvilken dato vedtaket har virkning fra
       */
      virkningsdato: string;
      /** @description Hvilke saksbehandlere har vært involvert i behandlingen */
      behandletAv: components["schemas"]["BehandletAv"][];
      /**
       * @description En liste over vilkår som er vurdert i behandlingen
       * @example [
       *       {
       *         "navn": "Opphold i Norge",
       *         "hjemmel": "Folketrygdloven § 4-2",
       *         "status": "Oppfylt",
       *         "virkningsdato": "2021-01-01T12:00:00Z"
       *       },
       *       {
       *         "navn": "Krav til minsteinntekt",
       *         "hjemmel": "Folketrygdloven § 4-4",
       *         "status": "IkkeOppfylt",
       *         "virkningsdato": "2021-01-01T12:00:00Z"
       *       }
       *     ]
       */
      "vilk\u00E5r": components["schemas"]["Vilkaar"][];
      /** @description Hvilke rettigheter som er fastsatt i vedtaket */
      fastsatt: {
        utfall: boolean;
        /** @enum {string} */
        status?: "Innvilget" | "Avslått" | "Stanset" | "Avsluttet";
        grunnlag?: {
          grunnlag: number;
          begrunnelse?: components["schemas"]["Forklaring"];
        };
        fastsattVanligArbeidstid?: {
          vanligArbeidstidPerUke: number;
          nyArbeidstidPerUke: number;
          begrunnelse?: components["schemas"]["Forklaring"];
        };
        sats?: {
          dagsats?: number;
          dagsatsMedBarnetillegg: number;
          begrunnelse?: components["schemas"]["Forklaring"];
          barn?: components["schemas"]["Barn"][];
        };
        samordning?: components["schemas"]["Samordning"][];
        /** @example [
         *       {
         *         "navn": "Dagpengeperiode",
         *         "type": "uker",
         *         "verdi": 52
         *       },
         *       {
         *         "navn": "Permitteringsperiode",
         *         "type": "uker",
         *         "verdi": 26
         *       },
         *       {
         *         "navn": "Egenandel",
         *         "type": "beløp",
         *         "verdi": 3000
         *       }
         *     ] */
        kvoter?: components["schemas"]["Kvote"][];
      };
      /** @example {
       *       "kvoter": [
       *         {
       *           "navn": "Dagpengeperiode",
       *           "type": "dager",
       *           "verdi": 230
       *         },
       *         {
       *           "navn": "Permitteringsperiode",
       *           "type": "dager",
       *           "verdi": 130
       *         },
       *         {
       *           "navn": "Egenandel",
       *           "type": "beløp",
       *           "verdi": 0
       *         }
       *       ]
       *     } */
      "gjenst\u00E5ende"?: {
        kvoter?: components["schemas"]["Kvote"][];
      };
      /** @example [
       *       {
       *         "dato": "2021-01-01",
       *         "sats": 1000,
       *         "gradertSats": 500,
       *         "egenandel": 200,
       *         "utbetaling": 300
       *       },
       *       {
       *         "dato": "2021-01-15",
       *         "sats": 1000,
       *         "gradertSats": 500,
       *         "egenandel": 0,
       *         "utbetaling": 500
       *       }
       *     ] */
      utbetalinger: components["schemas"]["Utbetaling"][];
      opplysninger: components["schemas"]["Opplysning"][];
    };
    /** @example [
     *       {
     *         "type": "Sykepenger",
     *         "beløp": 100,
     *         "grad": 20
     *       },
     *       {
     *         "type": "Pensjon fra en offentlig tjenestepensjonsordning beløp",
     *         "beløp": 100,
     *         "grad": 0
     *       }
     *     ] */
    Samordning: {
      type: string;
      "bel\u00F8p": number;
      grad: number;
    };
    /** @description En tynn versjon av regeltre og data som førte til resultatet */
    Forklaring: Record<string, never>;
    Vilkaar: {
      navn: string;
      hjemmel?: string;
      /** @enum {string} */
      status: "Oppfylt" | "IkkeOppfylt";
      /** Format: date-time */
      vurderingstidspunkt: string;
    };
    Barn: {
      /** Format: date */
      "f\u00F8dselsdato"?: string;
      kvalifiserer?: boolean;
    };
    Kvote: {
      navn?: string;
      /** @enum {string} */
      type?: "dager" | "uker" | "beløp";
      verdi?: number;
    };
    Utbetaling: {
      /** Format: date */
      dato?: string;
      sats?: number;
      gradertSats?: number;
      egenandel?: number;
      utbetaling?: number;
    };
    BehandletAv: {
      /** @enum {string} */
      rolle: "saksbehandler" | "beslutter";
      behandler?: components["schemas"]["Saksbehandler"];
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export interface operations {
  lagreOpplysningBegrunnelse: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Behandlingens id */
        behandlingId: string;
        /** @description Opplysningens ID */
        opplysningId: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["Saksbehandlerbegrunnelse"];
      };
    };
    responses: {
      /** @description Endringen ble lagret */
      204: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Feil ved lagring av begrunnelse */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/problem+json": components["schemas"]["HttpProblem"];
        };
      };
    };
  };
  oppdaterOpplysning: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Behandlingens id */
        behandlingId: string;
        /** @description Opplysningens id */
        opplysningId: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": {
          verdi: string;
          begrunnelse: string;
        };
      };
    };
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Kvittering"];
        };
      };
      /** @description Feil ved redigering av opplysninger */
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
  hentAvklaringer: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Behandlingens id */
        behandlingId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Avklaring"][];
        };
      };
    };
  };
  kvitterAvklaring: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Behandlingens id */
        behandlingId: string;
        /** @description Avklaringens id */
        avklaringId: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": {
          begrunnelse: string;
        };
      };
    };
    responses: {
      /** @description No Content */
      204: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Avklaringen kan ikke kvitteres ut */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Du har ikke tilgang til å kvittere ut denne avklaringen */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
}
