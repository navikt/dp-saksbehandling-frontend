import type { IOpplysning } from "~/models/behandling.server";

export interface IBehandling2 {
  behandlingId: string;
  tilstand: string;
  avklaringer: IAvklaring[];
  alleOpplysninger: IOpplysning[];
  vilkaar: IVilkaar[];
}

export interface IAvklaring {
  id: string;
  navn: string;
  status: string;
  kilde: {
    type: string;
    registrert: string;
    ident: string;
    meldingId: string;
  };
}

export interface IVilkaar {
  id: string;
  navn: string;
  status: string;
  opplysninger: IOpplysning[];
}

export const mockBehandling2: IBehandling2 = {
  behandlingId: "01923278-e031-7f08-84ee-7f18bc29acac",
  tilstand: "UnderBehandling",
  avklaringer: [],
  alleOpplysninger: [
    {
      id: "0191ea5d-5f40-758e-a612-30a413dc939f",
      navn: "Antall G for krav til 36 mnd arbeidsinntekt",
      verdi: "3.0",
      status: "Faktum",
      datatype: "desimaltall",
      redigerbar: false,
      tekstId: null,
      gyldigFraOgMed: null,
      gyldigTilOgMed: null,
      kilde: null,
      utledetAv: {
        regel: {
          navn: "Oppslag",
        },
        opplysninger: ["0191ea5d-5f3a-7031-bfca-7772f7c9d498"],
      },
    },
    {
      id: "0191ea5d-7398-77f6-80b9-41ae7e688c3f",
      navn: "Krav til minsteinntekt",
      verdi: "true",
      status: "Faktum",
      datatype: "boolsk",
      redigerbar: false,
      tekstId: null,
      gyldigFraOgMed: null,
      gyldigTilOgMed: null,
      kilde: null,
      utledetAv: {
        regel: {
          navn: "EnAv",
        },
        opplysninger: [
          "0191ea5d-6f09-7237-b44e-ec0d44938726",
          "0191ea5d-7398-77f6-80b9-41ae7e688bed",
          "0191ea5d-7398-77f6-80b9-41ae7e688c29",
        ],
      },
    },
    {
      id: "0191ea5d-6f09-7237-b44e-ec0d44938726",
      navn: "Har utført minst tre måneders militærtjeneste eller obligatorisk sivilforsvarstjeneste",
      verdi: "false",
      status: "Faktum",
      datatype: "boolsk",
      redigerbar: false,
      tekstId: null,
      gyldigFraOgMed: null,
      gyldigTilOgMed: null,
      kilde: null,
      utledetAv: {
        regel: {
          navn: "ErSann",
        },
        opplysninger: ["0191ea5d-6f09-7237-b44e-ec0d4493870f"],
      },
    },

    {
      id: "0191ea5d-7398-77f6-80b9-41ae7e688bed",
      navn: "Arbeidsinntekt er over kravet for siste 12 mnd",
      verdi: "true",
      status: "Faktum",
      datatype: "boolsk",
      redigerbar: false,
      tekstId: null,
      gyldigFraOgMed: null,
      gyldigTilOgMed: null,
      kilde: null,
      utledetAv: {
        regel: {
          navn: "StørreEnnEllerLik",
        },
        opplysninger: [
          "0191ea5d-5f41-73c2-bd1a-e6d233f42d8a",
          "0191ea5d-7397-75e4-9382-7068fb0dedef",
        ],
      },
    },
    {
      id: "0191ea5d-5f41-73c2-bd1a-e6d233f42d8a",
      navn: "Inntektskrav for siste 12 mnd",
      verdi: "186042",
      status: "Faktum",
      datatype: "penger",
      redigerbar: false,
      tekstId: null,
      gyldigFraOgMed: null,
      gyldigTilOgMed: null,
      kilde: null,
      utledetAv: {
        regel: {
          navn: "Multiplikasjon",
        },
        opplysninger: [
          "0191ea5d-5f40-758e-a612-30a413dc939b",
          "0191ea5d-5f40-758e-a612-30a413dc939d",
        ],
      },
    },
    {
      id: "0191ea5d-7397-75e4-9382-7068fb0dedef",
      navn: "Arbeidsinntekt siste 12 mnd",
      verdi: "611105",
      status: "Faktum",
      datatype: "penger",
      redigerbar: false,
      tekstId: null,
      gyldigFraOgMed: null,
      gyldigTilOgMed: null,
      kilde: {
        type: "System",
        registrert: "2024-09-13T09:51:18.490552+02:00",
        ident: null,
        meldingId: "d51dc51c-7307-4744-8e5b-0cc0fbd45f53",
      },
      utledetAv: null,
    },
    {
      id: "0191ea5d-7398-77f6-80b9-41ae7e688c29",
      navn: "Arbeidsinntekt er over kravet for siste 36 mnd",
      verdi: "true",
      status: "Faktum",
      datatype: "boolsk",
      redigerbar: false,
      tekstId: null,
      gyldigFraOgMed: null,
      gyldigTilOgMed: null,
      kilde: null,
      utledetAv: {
        regel: {
          navn: "StørreEnnEllerLik",
        },
        opplysninger: [
          "0191ea5d-5f41-73c2-bd1a-e6d233f42d8c",
          "0191ea5d-7398-77f6-80b9-41ae7e688c12",
        ],
      },
    },
    {
      id: "0191ea5d-5f41-73c2-bd1a-e6d233f42d8c",
      navn: "Inntektskrav for siste 36 mnd",
      verdi: "372084",
      status: "Faktum",
      datatype: "penger",
      redigerbar: false,
      tekstId: null,
      gyldigFraOgMed: null,
      gyldigTilOgMed: null,
      kilde: null,
      utledetAv: {
        regel: {
          navn: "Multiplikasjon",
        },
        opplysninger: [
          "0191ea5d-5f40-758e-a612-30a413dc939b",
          "0191ea5d-5f40-758e-a612-30a413dc939f",
        ],
      },
    },
    {
      id: "0191ea5d-7398-77f6-80b9-41ae7e688c12",
      navn: "Arbeidsinntekt siste 36 mnd",
      verdi: "611105",
      status: "Faktum",
      datatype: "penger",
      redigerbar: false,
      tekstId: null,
      gyldigFraOgMed: null,
      gyldigTilOgMed: null,
      kilde: {
        type: "System",
        registrert: "2024-09-13T09:51:18.490898+02:00",
        ident: null,
        meldingId: "d51dc51c-7307-4744-8e5b-0cc0fbd45f53",
      },
      utledetAv: null,
    },
    {
      id: "0191ea5d-5f40-758e-a612-30a413dc939b",
      navn: "Grunnbeløp",
      verdi: "124028",
      status: "Faktum",
      datatype: "penger",
      redigerbar: false,
      tekstId: null,
      gyldigFraOgMed: null,
      gyldigTilOgMed: null,
      kilde: null,
      utledetAv: {
        regel: {
          navn: "Oppslag",
        },
        opplysninger: ["0191ea5d-5f3a-7031-bfca-7772f7c9d498"],
      },
    },
    {
      id: "0191ea5d-5f3a-7031-bfca-7772f7c9d498",
      navn: "Søknadstidspunkt",
      verdi: "2024-09-13",
      status: "Faktum",
      datatype: "dato",
      redigerbar: false,
      tekstId: null,
      gyldigFraOgMed: null,
      gyldigTilOgMed: null,
      kilde: null,
      utledetAv: {
        regel: {
          navn: "SisteAv",
        },
        opplysninger: [
          "0191ea5d-5f38-780e-b617-cc01601377ec",
          "0191ea5d-5f39-7ac0-b240-1f5b81595e14",
        ],
      },
    },
    {
      id: "0191ea5d-5f38-780e-b617-cc01601377ec",
      navn: "Ønsker dagpenger fra dato",
      verdi: "2024-09-13",
      status: "Faktum",
      datatype: "dato",
      redigerbar: false,
      tekstId: null,
      gyldigFraOgMed: null,
      gyldigTilOgMed: null,
      kilde: {
        type: "System",
        registrert: "2024-09-13T09:51:13.028101+02:00",
        ident: null,
        meldingId: "78d344b7-e6a7-4ddb-85f3-26791dbd12e0",
      },
      utledetAv: null,
    },
    {
      id: "0191ea5d-5f39-7ac0-b240-1f5b81595e14",
      navn: "Søknadsdato",
      verdi: "2024-09-13",
      status: "Faktum",
      datatype: "dato",
      redigerbar: false,
      tekstId: null,
      gyldigFraOgMed: null,
      gyldigTilOgMed: null,
      kilde: {
        type: "System",
        registrert: "2024-09-13T09:51:13.02863+02:00",
        ident: null,
        meldingId: "78d344b7-e6a7-4ddb-85f3-26791dbd12e0",
      },
      utledetAv: null,
    },
    {
      id: "0191ea5d-5f40-758e-a612-30a413dc939d",
      navn: "Antall G for krav til 12 mnd arbeidsinntekt",
      verdi: "1.5",
      status: "Faktum",
      datatype: "desimaltall",
      redigerbar: false,
      tekstId: null,
      gyldigFraOgMed: null,
      gyldigTilOgMed: null,
      kilde: null,
      utledetAv: {
        regel: {
          navn: "Oppslag",
        },
        opplysninger: ["0191ea5d-5f3a-7031-bfca-7772f7c9d498"],
      },
    },
    {
      id: "0191ea5d-6f09-7237-b44e-ec0d4493870f",
      navn: "Avtjent verneplikt",
      verdi: "false",
      status: "Faktum",
      datatype: "boolsk",
      redigerbar: false,
      tekstId: null,
      gyldigFraOgMed: null,
      gyldigTilOgMed: null,
      kilde: {
        type: "System",
        registrert: "2024-09-13T09:51:17.331501+02:00",
        ident: null,
        meldingId: "1f9be498-7083-49c7-b37c-c54a3985ead0",
      },
      utledetAv: null,
    },
  ],
  vilkaar: [
    {
      id: "01923278-e031-7f08-84ee-7f18bc29acaa",
      navn: "§ 4-4. Krav til minsteinntekt",
      status: "Oppfyllt",
      opplysninger: [
        {
          id: "0191ea5d-7398-77f6-80b9-41ae7e688c3f",
          navn: "Krav til minsteinntekt",
          verdi: "true",
          status: "Faktum",
          datatype: "boolsk",
          redigerbar: false,
          tekstId: null,
          gyldigFraOgMed: null,
          gyldigTilOgMed: null,
          kilde: null,
          utledetAv: {
            regel: {
              navn: "EnAv",
            },
            opplysninger: [
              "0191ea5d-6f09-7237-b44e-ec0d44938726",
              "0191ea5d-7398-77f6-80b9-41ae7e688bed",
              "0191ea5d-7398-77f6-80b9-41ae7e688c29",
            ],
          },
        },
        {
          id: "0191ea5d-6f09-7237-b44e-ec0d44938726",
          navn: "Har utført minst tre måneders militærtjeneste eller obligatorisk sivilforsvarstjeneste",
          verdi: "false",
          status: "Faktum",
          datatype: "boolsk",
          redigerbar: false,
          tekstId: null,
          gyldigFraOgMed: null,
          gyldigTilOgMed: null,
          kilde: null,
          utledetAv: {
            regel: {
              navn: "ErSann",
            },
            opplysninger: ["0191ea5d-6f09-7237-b44e-ec0d4493870f"],
          },
        },

        {
          id: "0191ea5d-7398-77f6-80b9-41ae7e688bed",
          navn: "Arbeidsinntekt er over kravet for siste 12 mnd",
          verdi: "true",
          status: "Faktum",
          datatype: "boolsk",
          redigerbar: false,
          tekstId: null,
          gyldigFraOgMed: null,
          gyldigTilOgMed: null,
          kilde: null,
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "0191ea5d-5f41-73c2-bd1a-e6d233f42d8a",
              "0191ea5d-7397-75e4-9382-7068fb0dedef",
            ],
          },
        },
        {
          id: "0191ea5d-7397-75e4-9382-7068fb0dedef",
          navn: "Arbeidsinntekt siste 12 mnd",
          verdi: "611105",
          status: "Faktum",
          datatype: "penger",
          redigerbar: false,
          tekstId: null,
          gyldigFraOgMed: null,
          gyldigTilOgMed: null,
          kilde: {
            type: "System",
            registrert: "2024-09-13T09:51:18.490552+02:00",
            ident: null,
            meldingId: "d51dc51c-7307-4744-8e5b-0cc0fbd45f53",
          },
          utledetAv: null,
        },
        {
          id: "0191ea5d-7398-77f6-80b9-41ae7e688c29",
          navn: "Arbeidsinntekt er over kravet for siste 36 mnd",
          verdi: "true",
          status: "Faktum",
          datatype: "boolsk",
          redigerbar: false,
          tekstId: null,
          gyldigFraOgMed: null,
          gyldigTilOgMed: null,
          kilde: null,
          utledetAv: {
            regel: {
              navn: "StørreEnnEllerLik",
            },
            opplysninger: [
              "0191ea5d-5f41-73c2-bd1a-e6d233f42d8c",
              "0191ea5d-7398-77f6-80b9-41ae7e688c12",
            ],
          },
        },
        {
          id: "0191ea5d-7398-77f6-80b9-41ae7e688c12",
          navn: "Arbeidsinntekt siste 36 mnd",
          verdi: "611105",
          status: "Faktum",
          datatype: "penger",
          redigerbar: false,
          tekstId: null,
          gyldigFraOgMed: null,
          gyldigTilOgMed: null,
          kilde: {
            type: "System",
            registrert: "2024-09-13T09:51:18.490898+02:00",
            ident: null,
            meldingId: "d51dc51c-7307-4744-8e5b-0cc0fbd45f53",
          },
          utledetAv: null,
        },
      ],
    },
  ],
};
