import type { IBehandling } from "~/models/oppgave.server";

export const mockBehandling: IBehandling = {
  behandlingId: "018dc0e6-0be3-7f17-b410-08f2072ffcb1",
  opplysning: [
    {
      id: "018dc0e6-0d4b-7f11-a881-1377d9b38a2a",
      opplysningstype: "Søknadstidspunkt",
      verdi: "2024-02-19",
      status: "Hypotese",
      gyldigFraOgMed: null,
      gyldigTilOgMed: "2024-03-21T11:24:08.331818Z",
      datatype: "LocalDate",
    },
    {
      id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186a",
      opplysningstype: "Fødselsdato",
      verdi: "1999-03-31",
      status: "Hypotese",
      gyldigFraOgMed: null,
      gyldigTilOgMed: null,
      datatype: "LocalDate",
    },
    {
      id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186b",
      opplysningstype: "Virkningsdato",
      verdi: "2024-02-19",
      status: "Hypotese",
      gyldigFraOgMed: null,
      gyldigTilOgMed: null,
      datatype: "LocalDate",
      utledetAv: {
        regel: {
          navn: "SisteAv",
        },
        opplysninger: [
          {
            id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186a",
            opplysningstype: "Fødselsdato",
            verdi: "1999-03-31",
            status: "Hypotese",
            gyldigFraOgMed: null,
            gyldigTilOgMed: null,
            datatype: "LocalDate",
          },
          {
            id: "018dc0e6-0d4b-7f11-a881-1377d9b38a2a",
            opplysningstype: "Søknadstidspunkt",
            verdi: "2024-02-19",
            status: "Hypotese",
            gyldigFraOgMed: null,
            gyldigTilOgMed: null,
            datatype: "LocalDate",
          },
        ],
      },
    },
    {
      id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186c",
      opplysningstype: "Aldersgrense",
      verdi: "67",
      status: "Hypotese",
      gyldigFraOgMed: null,
      gyldigTilOgMed: null,
      datatype: "int",
      utledetAv: {
        regel: {
          navn: "Oppslag",
        },
        opplysninger: [
          {
            id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186b",
            opplysningstype: "Virkningsdato",
            verdi: "2024-02-19",
            status: "Hypotese",
            gyldigFraOgMed: null,
            gyldigTilOgMed: null,
            datatype: "LocalDate",
            utledetAv: {
              regel: {
                navn: "SisteAv",
              },
              opplysninger: [
                {
                  id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186a",
                  opplysningstype: "Fødselsdato",
                  verdi: "1999-03-31",
                  status: "Faktum",
                  gyldigFraOgMed: null,
                  gyldigTilOgMed: null,
                  datatype: "LocalDate",
                },
                {
                  id: "018dc0e6-0d4b-7f11-a881-1377d9b38a2a",
                  opplysningstype: "Søknadstidspunkt",
                  verdi: "2024-02-19",
                  status: "Hypotese",
                  gyldigFraOgMed: null,
                  gyldigTilOgMed: null,
                  datatype: "LocalDate",
                },
              ],
            },
          },
        ],
      },
    },
    {
      id: "018dc0e6-0d52-7a5c-a956-7eacb880f9a6",
      opplysningstype: "Grunnbeløp",
      verdi: "118620.0",
      status: "Hypotese",
      gyldigFraOgMed: null,
      gyldigTilOgMed: null,
      datatype: "double",
      utledetAv: {
        regel: {
          navn: "Oppslag",
        },
        opplysninger: [
          {
            id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186b",
            opplysningstype: "Virkningsdato",
            verdi: "2024-02-19",
            status: "Hypotese",
            gyldigFraOgMed: null,
            gyldigTilOgMed: null,
            datatype: "LocalDate",
            utledetAv: {
              regel: {
                navn: "SisteAv",
              },
              opplysninger: [
                {
                  id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186a",
                  opplysningstype: "Fødselsdato",
                  verdi: "1999-03-31",
                  status: "Hypotese",
                  gyldigFraOgMed: null,
                  gyldigTilOgMed: null,
                  datatype: "LocalDate",
                },
                {
                  id: "018dc0e6-0d4b-7f11-a881-1377d9b38a2a",
                  opplysningstype: "Søknadstidspunkt",
                  verdi: "2024-02-19",
                  status: "Hypotese",
                  gyldigFraOgMed: null,
                  gyldigTilOgMed: null,
                  datatype: "LocalDate",
                },
              ],
            },
          },
        ],
      },
    },
    {
      id: "018dc0e6-0d54-79b8-962a-360720ab260e",
      opplysningstype: "Antall G for krav til 12 mnd inntekt",
      verdi: "1.5",
      status: "Hypotese",
      gyldigFraOgMed: null,
      gyldigTilOgMed: null,
      datatype: "double",
      utledetAv: {
        regel: {
          navn: "Oppslag",
        },
        opplysninger: [
          {
            id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186b",
            opplysningstype: "Virkningsdato",
            verdi: "2024-02-19",
            status: "Hypotese",
            gyldigFraOgMed: null,
            gyldigTilOgMed: null,
            datatype: "LocalDate",
            utledetAv: {
              regel: {
                navn: "SisteAv",
              },
              opplysninger: [
                {
                  id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186a",
                  opplysningstype: "Fødselsdato",
                  verdi: "1999-03-31",
                  status: "Hypotese",
                  gyldigFraOgMed: null,
                  gyldigTilOgMed: null,
                  datatype: "LocalDate",
                },
                {
                  id: "018dc0e6-0d4b-7f11-a881-1377d9b38a2a",
                  opplysningstype: "Søknadstidspunkt",
                  verdi: "2024-02-19",
                  status: "Hypotese",
                  gyldigFraOgMed: null,
                  gyldigTilOgMed: null,
                  datatype: "LocalDate",
                },
              ],
            },
          },
        ],
      },
    },
    {
      id: "018dc0e6-0d54-79b8-962a-360720ab260f",
      opplysningstype: "Antall G for krav til 36 mnd inntekt",
      verdi: "3.0",
      status: "Hypotese",
      gyldigFraOgMed: null,
      gyldigTilOgMed: null,
      datatype: "double",
      utledetAv: {
        regel: {
          navn: "Oppslag",
        },
        opplysninger: [
          {
            id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186b",
            opplysningstype: "Virkningsdato",
            verdi: "2024-02-19",
            status: "Hypotese",
            gyldigFraOgMed: null,
            gyldigTilOgMed: null,
            datatype: "LocalDate",
            utledetAv: {
              regel: {
                navn: "SisteAv",
              },
              opplysninger: [
                {
                  id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186a",
                  opplysningstype: "Fødselsdato",
                  verdi: "1999-03-31",
                  status: "Hypotese",
                  gyldigFraOgMed: null,
                  gyldigTilOgMed: null,
                  datatype: "LocalDate",
                },
                {
                  id: "018dc0e6-0d4b-7f11-a881-1377d9b38a2a",
                  opplysningstype: "Søknadstidspunkt",
                  verdi: "2024-02-19",
                  status: "Hypotese",
                  gyldigFraOgMed: null,
                  gyldigTilOgMed: null,
                  datatype: "LocalDate",
                },
              ],
            },
          },
        ],
      },
    },
    {
      id: "018dc0e6-0d54-79b8-962a-360720ab2610",
      opplysningstype: "Dato søker når maks alder",
      verdi: "2066-03-31",
      status: "Hypotese",
      gyldigFraOgMed: null,
      gyldigTilOgMed: null,
      datatype: "LocalDate",
      utledetAv: {
        regel: {
          navn: "LeggTilÅr",
        },
        opplysninger: [
          {
            id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186a",
            opplysningstype: "Fødselsdato",
            verdi: "1999-03-31",
            status: "Hypotese",
            gyldigFraOgMed: null,
            gyldigTilOgMed: null,
            datatype: "LocalDate",
          },
          {
            id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186c",
            opplysningstype: "Aldersgrense",
            verdi: "67",
            status: "Hypotese",
            gyldigFraOgMed: null,
            gyldigTilOgMed: null,
            datatype: "int",
            utledetAv: {
              regel: {
                navn: "Oppslag",
              },
              opplysninger: [
                {
                  id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186b",
                  opplysningstype: "Virkningsdato",
                  verdi: "2024-02-19",
                  status: "Hypotese",
                  gyldigFraOgMed: null,
                  gyldigTilOgMed: null,
                  datatype: "LocalDate",
                  utledetAv: {
                    regel: {
                      navn: "SisteAv",
                    },
                    opplysninger: [
                      {
                        id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186a",
                        opplysningstype: "Fødselsdato",
                        verdi: "1999-03-31",
                        status: "Hypotese",
                        gyldigFraOgMed: null,
                        gyldigTilOgMed: null,
                        datatype: "LocalDate",
                      },
                      {
                        id: "018dc0e6-0d4b-7f11-a881-1377d9b38a2a",
                        opplysningstype: "Søknadstidspunkt",
                        verdi: "2024-02-19",
                        status: "Hypotese",
                        gyldigFraOgMed: null,
                        gyldigTilOgMed: null,
                        datatype: "LocalDate",
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      id: "018dc0e6-0d54-79b8-962a-360720ab2611",
      opplysningstype: "Inntektskrav for siste 12 mnd",
      verdi: "177930.0",
      status: "Hypotese",
      gyldigFraOgMed: null,
      gyldigTilOgMed: null,
      datatype: "double",
      utledetAv: {
        regel: {
          navn: "Multiplikasjon",
        },
        opplysninger: [
          {
            id: "018dc0e6-0d54-79b8-962a-360720ab260e",
            opplysningstype: "Antall G for krav til 12 mnd inntekt",
            verdi: "1.5",
            status: "Hypotese",
            gyldigFraOgMed: null,
            gyldigTilOgMed: null,
            datatype: "double",
            utledetAv: {
              regel: {
                navn: "Oppslag",
              },
              opplysninger: [
                {
                  id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186b",
                  opplysningstype: "Virkningsdato",
                  verdi: "2024-02-19",
                  status: "Hypotese",
                  gyldigFraOgMed: null,
                  gyldigTilOgMed: null,
                  datatype: "LocalDate",
                  utledetAv: {
                    regel: {
                      navn: "SisteAv",
                    },
                    opplysninger: [
                      {
                        id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186a",
                        opplysningstype: "Fødselsdato",
                        verdi: "1999-03-31",
                        status: "Hypotese",
                        gyldigFraOgMed: null,
                        gyldigTilOgMed: null,
                        datatype: "LocalDate",
                      },
                      {
                        id: "018dc0e6-0d4b-7f11-a881-1377d9b38a2a",
                        opplysningstype: "Søknadstidspunkt",
                        verdi: "2024-02-19",
                        status: "Hypotese",
                        gyldigFraOgMed: null,
                        gyldigTilOgMed: null,
                        datatype: "LocalDate",
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            id: "018dc0e6-0d52-7a5c-a956-7eacb880f9a6",
            opplysningstype: "Grunnbeløp",
            verdi: "118620.0",
            status: "Hypotese",
            gyldigFraOgMed: null,
            gyldigTilOgMed: null,
            datatype: "double",
            utledetAv: {
              regel: {
                navn: "Oppslag",
              },
              opplysninger: [
                {
                  id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186b",
                  opplysningstype: "Virkningsdato",
                  verdi: "2024-02-19",
                  status: "Hypotese",
                  gyldigFraOgMed: null,
                  gyldigTilOgMed: null,
                  datatype: "LocalDate",
                  utledetAv: {
                    regel: {
                      navn: "SisteAv",
                    },
                    opplysninger: [
                      {
                        id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186a",
                        opplysningstype: "Fødselsdato",
                        verdi: "1999-03-31",
                        status: "Hypotese",
                        gyldigFraOgMed: null,
                        gyldigTilOgMed: null,
                        datatype: "LocalDate",
                      },
                      {
                        id: "018dc0e6-0d4b-7f11-a881-1377d9b38a2a",
                        opplysningstype: "Søknadstidspunkt",
                        verdi: "2024-02-19",
                        status: "Hypotese",
                        gyldigFraOgMed: null,
                        gyldigTilOgMed: null,
                        datatype: "LocalDate",
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      id: "018dc0e6-0d54-79b8-962a-360720ab2612",
      opplysningstype: "Inntektskrav for siste 36 mnd",
      verdi: "355860.0",
      status: "Hypotese",
      gyldigFraOgMed: null,
      gyldigTilOgMed: null,
      datatype: "double",
      utledetAv: {
        regel: {
          navn: "Multiplikasjon",
        },
        opplysninger: [
          {
            id: "018dc0e6-0d54-79b8-962a-360720ab260f",
            opplysningstype: "Antall G for krav til 36 mnd inntekt",
            verdi: "3.0",
            status: "Hypotese",
            gyldigFraOgMed: null,
            gyldigTilOgMed: null,
            datatype: "double",
            utledetAv: {
              regel: {
                navn: "Oppslag",
              },
              opplysninger: [
                {
                  id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186b",
                  opplysningstype: "Virkningsdato",
                  verdi: "2024-02-19",
                  status: "Hypotese",
                  gyldigFraOgMed: null,
                  gyldigTilOgMed: null,
                  datatype: "LocalDate",
                  utledetAv: {
                    regel: {
                      navn: "SisteAv",
                    },
                    opplysninger: [
                      {
                        id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186a",
                        opplysningstype: "Fødselsdato",
                        verdi: "1999-03-31",
                        status: "Hypotese",
                        gyldigFraOgMed: null,
                        gyldigTilOgMed: null,
                        datatype: "LocalDate",
                      },
                      {
                        id: "018dc0e6-0d4b-7f11-a881-1377d9b38a2a",
                        opplysningstype: "Søknadstidspunkt",
                        verdi: "2024-02-19",
                        status: "Hypotese",
                        gyldigFraOgMed: null,
                        gyldigTilOgMed: null,
                        datatype: "LocalDate",
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            id: "018dc0e6-0d52-7a5c-a956-7eacb880f9a6",
            opplysningstype: "Grunnbeløp",
            verdi: "118620.0",
            status: "Hypotese",
            gyldigFraOgMed: null,
            gyldigTilOgMed: null,
            datatype: "double",
            utledetAv: {
              regel: {
                navn: "Oppslag",
              },
              opplysninger: [
                {
                  id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186b",
                  opplysningstype: "Virkningsdato",
                  verdi: "2024-02-19",
                  status: "Hypotese",
                  gyldigFraOgMed: null,
                  gyldigTilOgMed: null,
                  datatype: "LocalDate",
                  utledetAv: {
                    regel: {
                      navn: "SisteAv",
                    },
                    opplysninger: [
                      {
                        id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186a",
                        opplysningstype: "Fødselsdato",
                        verdi: "1999-03-31",
                        status: "Hypotese",
                        gyldigFraOgMed: null,
                        gyldigTilOgMed: null,
                        datatype: "LocalDate",
                      },
                      {
                        id: "018dc0e6-0d4b-7f11-a881-1377d9b38a2a",
                        opplysningstype: "Søknadstidspunkt",
                        verdi: "2024-02-19",
                        status: "Hypotese",
                        gyldigFraOgMed: null,
                        gyldigTilOgMed: null,
                        datatype: "LocalDate",
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      id: "018dc0e6-0d54-79b8-962a-360720ab2613",
      opplysningstype: "Siste mulige dag bruker kan oppfylle alderskrav",
      verdi: "2066-03-31",
      status: "Hypotese",
      gyldigFraOgMed: null,
      gyldigTilOgMed: null,
      datatype: "LocalDate",
      utledetAv: {
        regel: {
          navn: "SisteDagIMåned",
        },
        opplysninger: [
          {
            id: "018dc0e6-0d54-79b8-962a-360720ab2610",
            opplysningstype: "Dato søker når maks alder",
            verdi: "2066-03-31",
            status: "Hypotese",
            gyldigFraOgMed: null,
            gyldigTilOgMed: null,
            datatype: "LocalDate",
            utledetAv: {
              regel: {
                navn: "LeggTilÅr",
              },
              opplysninger: [
                {
                  id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186a",
                  opplysningstype: "Fødselsdato",
                  verdi: "1999-03-31",
                  status: "Hypotese",
                  gyldigFraOgMed: null,
                  gyldigTilOgMed: null,
                  datatype: "LocalDate",
                },
                {
                  id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186c",
                  opplysningstype: "Aldersgrense",
                  verdi: "67",
                  status: "Hypotese",
                  gyldigFraOgMed: null,
                  gyldigTilOgMed: null,
                  datatype: "int",
                  utledetAv: {
                    regel: {
                      navn: "Oppslag",
                    },
                    opplysninger: [
                      {
                        id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186b",
                        opplysningstype: "Virkningsdato",
                        verdi: "2024-02-19",
                        status: "Hypotese",
                        gyldigFraOgMed: null,
                        gyldigTilOgMed: null,
                        datatype: "LocalDate",
                        utledetAv: {
                          regel: {
                            navn: "SisteAv",
                          },
                          opplysninger: [
                            {
                              id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186a",
                              opplysningstype: "Fødselsdato",
                              verdi: "1999-03-31",
                              status: "Hypotese",
                              gyldigFraOgMed: null,
                              gyldigTilOgMed: null,
                              datatype: "LocalDate",
                            },
                            {
                              id: "018dc0e6-0d4b-7f11-a881-1377d9b38a2a",
                              opplysningstype: "Søknadstidspunkt",
                              verdi: "2024-02-19",
                              status: "Hypotese",
                              gyldigFraOgMed: null,
                              gyldigTilOgMed: null,
                              datatype: "LocalDate",
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      id: "018dc0e6-0d54-79b8-962a-360720ab2614",
      opplysningstype: "Oppfyller kravet til alder",
      verdi: "true",
      status: "Hypotese",
      gyldigFraOgMed: null,
      gyldigTilOgMed: null,
      datatype: "boolean",
      utledetAv: {
        regel: {
          navn: "FørEllerLik",
        },
        opplysninger: [
          {
            id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186b",
            opplysningstype: "Virkningsdato",
            verdi: "2024-02-19",
            status: "Hypotese",
            gyldigFraOgMed: null,
            gyldigTilOgMed: null,
            datatype: "LocalDate",
            utledetAv: {
              regel: {
                navn: "SisteAv",
              },
              opplysninger: [
                {
                  id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186a",
                  opplysningstype: "Fødselsdato",
                  verdi: "1999-03-31",
                  status: "Hypotese",
                  gyldigFraOgMed: null,
                  gyldigTilOgMed: null,
                  datatype: "LocalDate",
                },
                {
                  id: "018dc0e6-0d4b-7f11-a881-1377d9b38a2a",
                  opplysningstype: "Søknadstidspunkt",
                  verdi: "2024-02-19",
                  status: "Hypotese",
                  gyldigFraOgMed: null,
                  gyldigTilOgMed: null,
                  datatype: "LocalDate",
                },
              ],
            },
          },
          {
            id: "018dc0e6-0d54-79b8-962a-360720ab2613",
            opplysningstype: "Siste mulige dag bruker kan oppfylle alderskrav",
            verdi: "2066-03-31",
            status: "Hypotese",
            gyldigFraOgMed: null,
            gyldigTilOgMed: null,
            datatype: "LocalDate",
            utledetAv: {
              regel: {
                navn: "SisteDagIMåned",
              },
              opplysninger: [
                {
                  id: "018dc0e6-0d54-79b8-962a-360720ab2610",
                  opplysningstype: "Dato søker når maks alder",
                  verdi: "2066-03-31",
                  status: "Hypotese",
                  gyldigFraOgMed: null,
                  gyldigTilOgMed: null,
                  datatype: "LocalDate",
                  utledetAv: {
                    regel: {
                      navn: "LeggTilÅr",
                    },
                    opplysninger: [
                      {
                        id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186a",
                        opplysningstype: "Fødselsdato",
                        verdi: "1999-03-31",
                        status: "Hypotese",
                        gyldigFraOgMed: null,
                        gyldigTilOgMed: null,
                        datatype: "LocalDate",
                      },
                      {
                        id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186c",
                        opplysningstype: "Aldersgrense",
                        verdi: "67",
                        status: "Hypotese",
                        gyldigFraOgMed: null,
                        gyldigTilOgMed: null,
                        datatype: "int",
                        utledetAv: {
                          regel: {
                            navn: "Oppslag",
                          },
                          opplysninger: [
                            {
                              id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186b",
                              opplysningstype: "Virkningsdato",
                              verdi: "2024-02-19",
                              status: "Hypotese",
                              gyldigFraOgMed: null,
                              gyldigTilOgMed: null,
                              datatype: "LocalDate",
                              utledetAv: {
                                regel: {
                                  navn: "SisteAv",
                                },
                                opplysninger: [
                                  {
                                    id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186a",
                                    opplysningstype: "Fødselsdato",
                                    verdi: "1999-03-31",
                                    status: "Hypotese",
                                    gyldigFraOgMed: null,
                                    gyldigTilOgMed: null,
                                    datatype: "LocalDate",
                                  },
                                  {
                                    id: "018dc0e6-0d4b-7f11-a881-1377d9b38a2a",
                                    opplysningstype: "Søknadstidspunkt",
                                    verdi: "2024-02-19",
                                    status: "Hypotese",
                                    gyldigFraOgMed: null,
                                    gyldigTilOgMed: null,
                                    datatype: "LocalDate",
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      id: "018dc0e6-11ea-7ef9-a69e-68fc2ff39b4e",
      opplysningstype: "InntektSiste12Mnd",
      verdi: "0.0",
      status: "Hypotese",
      gyldigFraOgMed: null,
      gyldigTilOgMed: null,
      datatype: "double",
    },
    {
      id: "018dc0e6-11eb-7b02-8f56-071d747cb862",
      opplysningstype: "Inntekt er over kravet for siste 12 mnd",
      verdi: "false",
      status: "Hypotese",
      gyldigFraOgMed: null,
      gyldigTilOgMed: null,
      datatype: "boolean",
      utledetAv: {
        regel: {
          navn: "StørreEnnEllerLik",
        },
        opplysninger: [
          {
            id: "018dc0e6-11ea-7ef9-a69e-68fc2ff39b4e",
            opplysningstype: "InntektSiste12Mnd",
            verdi: "0.0",
            status: "Hypotese",
            gyldigFraOgMed: null,
            gyldigTilOgMed: null,
            datatype: "double",
          },
          {
            id: "018dc0e6-0d54-79b8-962a-360720ab2611",
            opplysningstype: "Inntektskrav for siste 12 mnd",
            verdi: "177930.0",
            status: "Hypotese",
            gyldigFraOgMed: null,
            gyldigTilOgMed: null,
            datatype: "double",
            utledetAv: {
              regel: {
                navn: "Multiplikasjon",
              },
              opplysninger: [
                {
                  id: "018dc0e6-0d54-79b8-962a-360720ab260e",
                  opplysningstype: "Antall G for krav til 12 mnd inntekt",
                  verdi: "1.5",
                  status: "Hypotese",
                  gyldigFraOgMed: null,
                  gyldigTilOgMed: null,
                  datatype: "double",
                  utledetAv: {
                    regel: {
                      navn: "Oppslag",
                    },
                    opplysninger: [
                      {
                        id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186b",
                        opplysningstype: "Virkningsdato",
                        verdi: "2024-02-19",
                        status: "Hypotese",
                        gyldigFraOgMed: null,
                        gyldigTilOgMed: null,
                        datatype: "LocalDate",
                        utledetAv: {
                          regel: {
                            navn: "SisteAv",
                          },
                          opplysninger: [
                            {
                              id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186a",
                              opplysningstype: "Fødselsdato",
                              verdi: "1999-03-31",
                              status: "Hypotese",
                              gyldigFraOgMed: null,
                              gyldigTilOgMed: null,
                              datatype: "LocalDate",
                            },
                            {
                              id: "018dc0e6-0d4b-7f11-a881-1377d9b38a2a",
                              opplysningstype: "Søknadstidspunkt",
                              verdi: "2024-02-19",
                              status: "Hypotese",
                              gyldigFraOgMed: null,
                              gyldigTilOgMed: null,
                              datatype: "LocalDate",
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  id: "018dc0e6-0d52-7a5c-a956-7eacb880f9a6",
                  opplysningstype: "Grunnbeløp",
                  verdi: "118620.0",
                  status: "Hypotese",
                  gyldigFraOgMed: null,
                  gyldigTilOgMed: null,
                  datatype: "double",
                  utledetAv: {
                    regel: {
                      navn: "Oppslag",
                    },
                    opplysninger: [
                      {
                        id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186b",
                        opplysningstype: "Virkningsdato",
                        verdi: "2024-02-19",
                        status: "Hypotese",
                        gyldigFraOgMed: null,
                        gyldigTilOgMed: null,
                        datatype: "LocalDate",
                        utledetAv: {
                          regel: {
                            navn: "SisteAv",
                          },
                          opplysninger: [
                            {
                              id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186a",
                              opplysningstype: "Fødselsdato",
                              verdi: "1999-03-31",
                              status: "Hypotese",
                              gyldigFraOgMed: null,
                              gyldigTilOgMed: null,
                              datatype: "LocalDate",
                            },
                            {
                              id: "018dc0e6-0d4b-7f11-a881-1377d9b38a2a",
                              opplysningstype: "Søknadstidspunkt",
                              verdi: "2024-02-19",
                              status: "Hypotese",
                              gyldigFraOgMed: null,
                              gyldigTilOgMed: null,
                              datatype: "LocalDate",
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      id: "018dc0e6-14ab-7b49-8f76-e5499dd81bd4",
      opplysningstype: "InntektSiste36Mnd",
      verdi: "0.0",
      status: "Hypotese",
      gyldigFraOgMed: null,
      gyldigTilOgMed: null,
      datatype: "double",
    },
    {
      id: "018dc0e6-14ab-7b49-8f76-e5499dd81bd5",
      opplysningstype: "Inntekt er over kravet for siste 36 mnd",
      verdi: "false",
      status: "Hypotese",
      gyldigFraOgMed: null,
      gyldigTilOgMed: null,
      datatype: "boolean",
      utledetAv: {
        regel: {
          navn: "StørreEnnEllerLik",
        },
        opplysninger: [
          {
            id: "018dc0e6-14ab-7b49-8f76-e5499dd81bd4",
            opplysningstype: "InntektSiste36Mnd",
            verdi: "0.0",
            status: "Hypotese",
            gyldigFraOgMed: null,
            gyldigTilOgMed: null,
            datatype: "double",
          },
          {
            id: "018dc0e6-0d54-79b8-962a-360720ab2612",
            opplysningstype: "Inntektskrav for siste 36 mnd",
            verdi: "355860.0",
            status: "Hypotese",
            gyldigFraOgMed: null,
            gyldigTilOgMed: null,
            datatype: "double",
            utledetAv: {
              regel: {
                navn: "Multiplikasjon",
              },
              opplysninger: [
                {
                  id: "018dc0e6-0d54-79b8-962a-360720ab260f",
                  opplysningstype: "Antall G for krav til 36 mnd inntekt",
                  verdi: "3.0",
                  status: "Hypotese",
                  gyldigFraOgMed: null,
                  gyldigTilOgMed: null,
                  datatype: "double",
                  utledetAv: {
                    regel: {
                      navn: "Oppslag",
                    },
                    opplysninger: [
                      {
                        id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186b",
                        opplysningstype: "Virkningsdato",
                        verdi: "2024-02-19",
                        status: "Hypotese",
                        gyldigFraOgMed: null,
                        gyldigTilOgMed: null,
                        datatype: "LocalDate",
                        utledetAv: {
                          regel: {
                            navn: "SisteAv",
                          },
                          opplysninger: [
                            {
                              id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186a",
                              opplysningstype: "Fødselsdato",
                              verdi: "1999-03-31",
                              status: "Hypotese",
                              gyldigFraOgMed: null,
                              gyldigTilOgMed: null,
                              datatype: "LocalDate",
                            },
                            {
                              id: "018dc0e6-0d4b-7f11-a881-1377d9b38a2a",
                              opplysningstype: "Søknadstidspunkt",
                              verdi: "2024-02-19",
                              status: "Hypotese",
                              gyldigFraOgMed: null,
                              gyldigTilOgMed: null,
                              datatype: "LocalDate",
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  id: "018dc0e6-0d52-7a5c-a956-7eacb880f9a6",
                  opplysningstype: "Grunnbeløp",
                  verdi: "118620.0",
                  status: "Hypotese",
                  gyldigFraOgMed: null,
                  gyldigTilOgMed: null,
                  datatype: "double",
                  utledetAv: {
                    regel: {
                      navn: "Oppslag",
                    },
                    opplysninger: [
                      {
                        id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186b",
                        opplysningstype: "Virkningsdato",
                        verdi: "2024-02-19",
                        status: "Hypotese",
                        gyldigFraOgMed: null,
                        gyldigTilOgMed: null,
                        datatype: "LocalDate",
                        utledetAv: {
                          regel: {
                            navn: "SisteAv",
                          },
                          opplysninger: [
                            {
                              id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186a",
                              opplysningstype: "Fødselsdato",
                              verdi: "1999-03-31",
                              status: "Hypotese",
                              gyldigFraOgMed: null,
                              gyldigTilOgMed: null,
                              datatype: "LocalDate",
                            },
                            {
                              id: "018dc0e6-0d4b-7f11-a881-1377d9b38a2a",
                              opplysningstype: "Søknadstidspunkt",
                              verdi: "2024-02-19",
                              status: "Hypotese",
                              gyldigFraOgMed: null,
                              gyldigTilOgMed: null,
                              datatype: "LocalDate",
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      id: "018dc0e6-14ab-7b49-8f76-e5499dd81bd6",
      opplysningstype: "Krav til minsteinntekt",
      verdi: "false",
      status: "Hypotese",
      gyldigFraOgMed: null,
      gyldigTilOgMed: null,
      datatype: "boolean",
      utledetAv: {
        regel: {
          navn: "EnAv",
        },
        opplysninger: [
          {
            id: "018dc0e6-11eb-7b02-8f56-071d747cb862",
            opplysningstype: "Inntekt er over kravet for siste 12 mnd",
            verdi: "false",
            status: "Hypotese",
            gyldigFraOgMed: null,
            gyldigTilOgMed: null,
            datatype: "boolean",
            utledetAv: {
              regel: {
                navn: "StørreEnnEllerLik",
              },
              opplysninger: [
                {
                  id: "018dc0e6-11ea-7ef9-a69e-68fc2ff39b4e",
                  opplysningstype: "InntektSiste12Mnd",
                  verdi: "0.0",
                  status: "Hypotese",
                  gyldigFraOgMed: null,
                  gyldigTilOgMed: null,
                  datatype: "double",
                },
                {
                  id: "018dc0e6-0d54-79b8-962a-360720ab2611",
                  opplysningstype: "Inntektskrav for siste 12 mnd",
                  verdi: "177930.0",
                  status: "Hypotese",
                  gyldigFraOgMed: null,
                  gyldigTilOgMed: null,
                  datatype: "double",
                  utledetAv: {
                    regel: {
                      navn: "Multiplikasjon",
                    },
                    opplysninger: [
                      {
                        id: "018dc0e6-0d54-79b8-962a-360720ab260e",
                        opplysningstype: "Antall G for krav til 12 mnd inntekt",
                        verdi: "1.5",
                        status: "Hypotese",
                        gyldigFraOgMed: null,
                        gyldigTilOgMed: null,
                        datatype: "double",
                        utledetAv: {
                          regel: {
                            navn: "Oppslag",
                          },
                          opplysninger: [
                            {
                              id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186b",
                              opplysningstype: "Virkningsdato",
                              verdi: "2024-02-19",
                              status: "Hypotese",
                              gyldigFraOgMed: null,
                              gyldigTilOgMed: null,
                              datatype: "LocalDate",
                              utledetAv: {
                                regel: {
                                  navn: "SisteAv",
                                },
                                opplysninger: [
                                  {
                                    id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186a",
                                    opplysningstype: "Fødselsdato",
                                    verdi: "1999-03-31",
                                    status: "Hypotese",
                                    gyldigFraOgMed: null,
                                    gyldigTilOgMed: null,
                                    datatype: "LocalDate",
                                  },
                                  {
                                    id: "018dc0e6-0d4b-7f11-a881-1377d9b38a2a",
                                    opplysningstype: "Søknadstidspunkt",
                                    verdi: "2024-02-19",
                                    status: "Hypotese",
                                    gyldigFraOgMed: null,
                                    gyldigTilOgMed: null,
                                    datatype: "LocalDate",
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        id: "018dc0e6-0d52-7a5c-a956-7eacb880f9a6",
                        opplysningstype: "Grunnbeløp",
                        verdi: "118620.0",
                        status: "Hypotese",
                        gyldigFraOgMed: null,
                        gyldigTilOgMed: null,
                        datatype: "double",
                        utledetAv: {
                          regel: {
                            navn: "Oppslag",
                          },
                          opplysninger: [
                            {
                              id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186b",
                              opplysningstype: "Virkningsdato",
                              verdi: "2024-02-19",
                              status: "Hypotese",
                              gyldigFraOgMed: null,
                              gyldigTilOgMed: null,
                              datatype: "LocalDate",
                              utledetAv: {
                                regel: {
                                  navn: "SisteAv",
                                },
                                opplysninger: [
                                  {
                                    id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186a",
                                    opplysningstype: "Fødselsdato",
                                    verdi: "1999-03-31",
                                    status: "Hypotese",
                                    gyldigFraOgMed: null,
                                    gyldigTilOgMed: null,
                                    datatype: "LocalDate",
                                  },
                                  {
                                    id: "018dc0e6-0d4b-7f11-a881-1377d9b38a2a",
                                    opplysningstype: "Søknadstidspunkt",
                                    verdi: "2024-02-19",
                                    status: "Hypotese",
                                    gyldigFraOgMed: null,
                                    gyldigTilOgMed: null,
                                    datatype: "LocalDate",
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            id: "018dc0e6-14ab-7b49-8f76-e5499dd81bd5",
            opplysningstype: "Inntekt er over kravet for siste 36 mnd",
            verdi: "false",
            status: "Hypotese",
            gyldigFraOgMed: null,
            gyldigTilOgMed: null,
            datatype: "boolean",
            utledetAv: {
              regel: {
                navn: "StørreEnnEllerLik",
              },
              opplysninger: [
                {
                  id: "018dc0e6-14ab-7b49-8f76-e5499dd81bd4",
                  opplysningstype: "InntektSiste36Mnd",
                  verdi: "0.0",
                  status: "Hypotese",
                  gyldigFraOgMed: null,
                  gyldigTilOgMed: null,
                  datatype: "double",
                },
                {
                  id: "018dc0e6-0d54-79b8-962a-360720ab2612",
                  opplysningstype: "Inntektskrav for siste 36 mnd",
                  verdi: "355860.0",
                  status: "Hypotese",
                  gyldigFraOgMed: null,
                  gyldigTilOgMed: null,
                  datatype: "double",
                  utledetAv: {
                    regel: {
                      navn: "Multiplikasjon",
                    },
                    opplysninger: [
                      {
                        id: "018dc0e6-0d54-79b8-962a-360720ab260f",
                        opplysningstype: "Antall G for krav til 36 mnd inntekt",
                        verdi: "3.0",
                        status: "Hypotese",
                        gyldigFraOgMed: null,
                        gyldigTilOgMed: null,
                        datatype: "double",
                        utledetAv: {
                          regel: {
                            navn: "Oppslag",
                          },
                          opplysninger: [
                            {
                              id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186b",
                              opplysningstype: "Virkningsdato",
                              verdi: "2024-02-19",
                              status: "Hypotese",
                              gyldigFraOgMed: null,
                              gyldigTilOgMed: null,
                              datatype: "LocalDate",
                              utledetAv: {
                                regel: {
                                  navn: "SisteAv",
                                },
                                opplysninger: [
                                  {
                                    id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186a",
                                    opplysningstype: "Fødselsdato",
                                    verdi: "1999-03-31",
                                    status: "Hypotese",
                                    gyldigFraOgMed: null,
                                    gyldigTilOgMed: null,
                                    datatype: "LocalDate",
                                  },
                                  {
                                    id: "018dc0e6-0d4b-7f11-a881-1377d9b38a2a",
                                    opplysningstype: "Søknadstidspunkt",
                                    verdi: "2024-02-19",
                                    status: "Hypotese",
                                    gyldigFraOgMed: null,
                                    gyldigTilOgMed: null,
                                    datatype: "LocalDate",
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        id: "018dc0e6-0d52-7a5c-a956-7eacb880f9a6",
                        opplysningstype: "Grunnbeløp",
                        verdi: "118620.0",
                        status: "Hypotese",
                        gyldigFraOgMed: null,
                        gyldigTilOgMed: null,
                        datatype: "double",
                        utledetAv: {
                          regel: {
                            navn: "Oppslag",
                          },
                          opplysninger: [
                            {
                              id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186b",
                              opplysningstype: "Virkningsdato",
                              verdi: "2024-02-19",
                              status: "Hypotese",
                              gyldigFraOgMed: null,
                              gyldigTilOgMed: null,
                              datatype: "LocalDate",
                              utledetAv: {
                                regel: {
                                  navn: "SisteAv",
                                },
                                opplysninger: [
                                  {
                                    id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186a",
                                    opplysningstype: "Fødselsdato",
                                    verdi: "1999-03-31",
                                    status: "Hypotese",
                                    gyldigFraOgMed: null,
                                    gyldigTilOgMed: null,
                                    datatype: "LocalDate",
                                  },
                                  {
                                    id: "018dc0e6-0d4b-7f11-a881-1377d9b38a2a",
                                    opplysningstype: "Søknadstidspunkt",
                                    verdi: "2024-02-19",
                                    status: "Hypotese",
                                    gyldigFraOgMed: null,
                                    gyldigTilOgMed: null,
                                    datatype: "LocalDate",
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      id: "018dc0e6-14ab-7b49-8f76-e5499dd81bd7",
      opplysningstype: "Krav på dagpenger",
      verdi: "false",
      status: "Hypotese",
      gyldigFraOgMed: null,
      gyldigTilOgMed: null,
      datatype: "boolean",
      utledetAv: {
        regel: {
          navn: "Alle",
        },
        opplysninger: [
          {
            id: "018dc0e6-0d54-79b8-962a-360720ab2614",
            opplysningstype: "Oppfyller kravet til alder",
            verdi: "true",
            status: "Hypotese",
            gyldigFraOgMed: null,
            gyldigTilOgMed: null,
            datatype: "boolean",
            utledetAv: {
              regel: {
                navn: "FørEllerLik",
              },
              opplysninger: [
                {
                  id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186b",
                  opplysningstype: "Virkningsdato",
                  verdi: "2024-02-19",
                  status: "Hypotese",
                  gyldigFraOgMed: null,
                  gyldigTilOgMed: null,
                  datatype: "LocalDate",
                  utledetAv: {
                    regel: {
                      navn: "SisteAv",
                    },
                    opplysninger: [
                      {
                        id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186a",
                        opplysningstype: "Fødselsdato",
                        verdi: "1999-03-31",
                        status: "Hypotese",
                        gyldigFraOgMed: null,
                        gyldigTilOgMed: null,
                        datatype: "LocalDate",
                      },
                      {
                        id: "018dc0e6-0d4b-7f11-a881-1377d9b38a2a",
                        opplysningstype: "Søknadstidspunkt",
                        verdi: "2024-02-19",
                        status: "Hypotese",
                        gyldigFraOgMed: null,
                        gyldigTilOgMed: null,
                        datatype: "LocalDate",
                      },
                    ],
                  },
                },
                {
                  id: "018dc0e6-0d54-79b8-962a-360720ab2613",
                  opplysningstype: "Siste mulige dag bruker kan oppfylle alderskrav",
                  verdi: "2066-03-31",
                  status: "Hypotese",
                  gyldigFraOgMed: null,
                  gyldigTilOgMed: null,
                  datatype: "LocalDate",
                  utledetAv: {
                    regel: {
                      navn: "SisteDagIMåned",
                    },
                    opplysninger: [
                      {
                        id: "018dc0e6-0d54-79b8-962a-360720ab2610",
                        opplysningstype: "Dato søker når maks alder",
                        verdi: "2066-03-31",
                        status: "Hypotese",
                        gyldigFraOgMed: null,
                        gyldigTilOgMed: null,
                        datatype: "LocalDate",
                        utledetAv: {
                          regel: {
                            navn: "LeggTilÅr",
                          },
                          opplysninger: [
                            {
                              id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186a",
                              opplysningstype: "Fødselsdato",
                              verdi: "1999-03-31",
                              status: "Hypotese",
                              gyldigFraOgMed: null,
                              gyldigTilOgMed: null,
                              datatype: "LocalDate",
                            },
                            {
                              id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186c",
                              opplysningstype: "Aldersgrense",
                              verdi: "67",
                              status: "Hypotese",
                              gyldigFraOgMed: null,
                              gyldigTilOgMed: null,
                              datatype: "int",
                              utledetAv: {
                                regel: {
                                  navn: "Oppslag",
                                },
                                opplysninger: [
                                  {
                                    id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186b",
                                    opplysningstype: "Virkningsdato",
                                    verdi: "2024-02-19",
                                    status: "Hypotese",
                                    gyldigFraOgMed: null,
                                    gyldigTilOgMed: null,
                                    datatype: "LocalDate",
                                    utledetAv: {
                                      regel: {
                                        navn: "SisteAv",
                                      },
                                      opplysninger: [
                                        {
                                          id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186a",
                                          opplysningstype: "Fødselsdato",
                                          verdi: "1999-03-31",
                                          status: "Hypotese",
                                          gyldigFraOgMed: null,
                                          gyldigTilOgMed: null,
                                          datatype: "LocalDate",
                                        },
                                        {
                                          id: "018dc0e6-0d4b-7f11-a881-1377d9b38a2a",
                                          opplysningstype: "Søknadstidspunkt",
                                          verdi: "2024-02-19",
                                          status: "Hypotese",
                                          gyldigFraOgMed: null,
                                          gyldigTilOgMed: null,
                                          datatype: "LocalDate",
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            id: "018dc0e6-14ab-7b49-8f76-e5499dd81bd6",
            opplysningstype: "Minsteinntekt",
            verdi: "false",
            status: "Hypotese",
            gyldigFraOgMed: null,
            gyldigTilOgMed: null,
            datatype: "boolean",
            utledetAv: {
              regel: {
                navn: "EnAv",
              },
              opplysninger: [
                {
                  id: "018dc0e6-11eb-7b02-8f56-071d747cb862",
                  opplysningstype: "Inntekt er over kravet for siste 12 mnd",
                  verdi: "false",
                  status: "Hypotese",
                  gyldigFraOgMed: null,
                  gyldigTilOgMed: null,
                  datatype: "boolean",
                  utledetAv: {
                    regel: {
                      navn: "StørreEnnEllerLik",
                    },
                    opplysninger: [
                      {
                        id: "018dc0e6-11ea-7ef9-a69e-68fc2ff39b4e",
                        opplysningstype: "InntektSiste12Mnd",
                        verdi: "0.0",
                        status: "Hypotese",
                        gyldigFraOgMed: null,
                        gyldigTilOgMed: null,
                        datatype: "double",
                      },
                      {
                        id: "018dc0e6-0d54-79b8-962a-360720ab2611",
                        opplysningstype: "Inntektskrav for siste 12 mnd",
                        verdi: "177930.0",
                        status: "Hypotese",
                        gyldigFraOgMed: null,
                        gyldigTilOgMed: null,
                        datatype: "double",
                        utledetAv: {
                          regel: {
                            navn: "Multiplikasjon",
                          },
                          opplysninger: [
                            {
                              id: "018dc0e6-0d54-79b8-962a-360720ab260e",
                              opplysningstype: "Antall G for krav til 12 mnd inntekt",
                              verdi: "1.5",
                              status: "Hypotese",
                              gyldigFraOgMed: null,
                              gyldigTilOgMed: null,
                              datatype: "double",
                              utledetAv: {
                                regel: {
                                  navn: "Oppslag",
                                },
                                opplysninger: [
                                  {
                                    id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186b",
                                    opplysningstype: "Virkningsdato",
                                    verdi: "2024-02-19",
                                    status: "Hypotese",
                                    gyldigFraOgMed: null,
                                    gyldigTilOgMed: null,
                                    datatype: "LocalDate",
                                    utledetAv: {
                                      regel: {
                                        navn: "SisteAv",
                                      },
                                      opplysninger: [
                                        {
                                          id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186a",
                                          opplysningstype: "Fødselsdato",
                                          verdi: "1999-03-31",
                                          status: "Hypotese",
                                          gyldigFraOgMed: null,
                                          gyldigTilOgMed: null,
                                          datatype: "LocalDate",
                                        },
                                        {
                                          id: "018dc0e6-0d4b-7f11-a881-1377d9b38a2a",
                                          opplysningstype: "Søknadstidspunkt",
                                          verdi: "2024-02-19",
                                          status: "Hypotese",
                                          gyldigFraOgMed: null,
                                          gyldigTilOgMed: null,
                                          datatype: "LocalDate",
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              id: "018dc0e6-0d52-7a5c-a956-7eacb880f9a6",
                              opplysningstype: "Grunnbeløp",
                              verdi: "118620.0",
                              status: "Hypotese",
                              gyldigFraOgMed: null,
                              gyldigTilOgMed: null,
                              datatype: "double",
                              utledetAv: {
                                regel: {
                                  navn: "Oppslag",
                                },
                                opplysninger: [
                                  {
                                    id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186b",
                                    opplysningstype: "Virkningsdato",
                                    verdi: "2024-02-19",
                                    status: "Hypotese",
                                    gyldigFraOgMed: null,
                                    gyldigTilOgMed: null,
                                    datatype: "LocalDate",
                                    utledetAv: {
                                      regel: {
                                        navn: "SisteAv",
                                      },
                                      opplysninger: [
                                        {
                                          id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186a",
                                          opplysningstype: "Fødselsdato",
                                          verdi: "1999-03-31",
                                          status: "Hypotese",
                                          gyldigFraOgMed: null,
                                          gyldigTilOgMed: null,
                                          datatype: "LocalDate",
                                        },
                                        {
                                          id: "018dc0e6-0d4b-7f11-a881-1377d9b38a2a",
                                          opplysningstype: "Søknadstidspunkt",
                                          verdi: "2024-02-19",
                                          status: "Hypotese",
                                          gyldigFraOgMed: null,
                                          gyldigTilOgMed: null,
                                          datatype: "LocalDate",
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  id: "018dc0e6-14ab-7b49-8f76-e5499dd81bd5",
                  opplysningstype: "Inntekt er over kravet for siste 36 mnd",
                  verdi: "false",
                  status: "Hypotese",
                  gyldigFraOgMed: null,
                  gyldigTilOgMed: null,
                  datatype: "boolean",
                  utledetAv: {
                    regel: {
                      navn: "StørreEnnEllerLik",
                    },
                    opplysninger: [
                      {
                        id: "018dc0e6-14ab-7b49-8f76-e5499dd81bd4",
                        opplysningstype: "InntektSiste36Mnd",
                        verdi: "0.0",
                        status: "Hypotese",
                        gyldigFraOgMed: null,
                        gyldigTilOgMed: null,
                        datatype: "double",
                      },
                      {
                        id: "018dc0e6-0d54-79b8-962a-360720ab2612",
                        opplysningstype: "Inntektskrav for siste 36 mnd",
                        verdi: "355860.0",
                        status: "Hypotese",
                        gyldigFraOgMed: null,
                        gyldigTilOgMed: null,
                        datatype: "double",
                        utledetAv: {
                          regel: {
                            navn: "Multiplikasjon",
                          },
                          opplysninger: [
                            {
                              id: "018dc0e6-0d54-79b8-962a-360720ab260f",
                              opplysningstype: "Antall G for krav til 36 mnd inntekt",
                              verdi: "3.0",
                              status: "Hypotese",
                              gyldigFraOgMed: null,
                              gyldigTilOgMed: null,
                              datatype: "double",
                              utledetAv: {
                                regel: {
                                  navn: "Oppslag",
                                },
                                opplysninger: [
                                  {
                                    id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186b",
                                    opplysningstype: "Virkningsdato",
                                    verdi: "2024-02-19",
                                    status: "Hypotese",
                                    gyldigFraOgMed: null,
                                    gyldigTilOgMed: null,
                                    datatype: "LocalDate",
                                    utledetAv: {
                                      regel: {
                                        navn: "SisteAv",
                                      },
                                      opplysninger: [
                                        {
                                          id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186a",
                                          opplysningstype: "Fødselsdato",
                                          verdi: "1999-03-31",
                                          status: "Hypotese",
                                          gyldigFraOgMed: null,
                                          gyldigTilOgMed: null,
                                          datatype: "LocalDate",
                                        },
                                        {
                                          id: "018dc0e6-0d4b-7f11-a881-1377d9b38a2a",
                                          opplysningstype: "Søknadstidspunkt",
                                          verdi: "2024-02-19",
                                          status: "Hypotese",
                                          gyldigFraOgMed: null,
                                          gyldigTilOgMed: null,
                                          datatype: "LocalDate",
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              id: "018dc0e6-0d52-7a5c-a956-7eacb880f9a6",
                              opplysningstype: "Grunnbeløp",
                              verdi: "118620.0",
                              status: "Hypotese",
                              gyldigFraOgMed: null,
                              gyldigTilOgMed: null,
                              datatype: "double",
                              utledetAv: {
                                regel: {
                                  navn: "Oppslag",
                                },
                                opplysninger: [
                                  {
                                    id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186b",
                                    opplysningstype: "Virkningsdato",
                                    verdi: "2024-02-19",
                                    status: "Hypotese",
                                    gyldigFraOgMed: null,
                                    gyldigTilOgMed: null,
                                    datatype: "LocalDate",
                                    utledetAv: {
                                      regel: {
                                        navn: "SisteAv",
                                      },
                                      opplysninger: [
                                        {
                                          id: "018dc0e6-0d4f-7eb1-8035-f3c666f4186a",
                                          opplysningstype: "Fødselsdato",
                                          verdi: "1999-03-31",
                                          status: "Hypotese",
                                          gyldigFraOgMed: null,
                                          gyldigTilOgMed: null,
                                          datatype: "LocalDate",
                                        },
                                        {
                                          id: "018dc0e6-0d4b-7f11-a881-1377d9b38a2a",
                                          opplysningstype: "Søknadstidspunkt",
                                          verdi: "2024-02-19",
                                          status: "Hypotese",
                                          gyldigFraOgMed: null,
                                          gyldigTilOgMed: null,
                                          datatype: "LocalDate",
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
};
