import { components } from "../../openapi/behandling-typer";

export const mockVurderinger: components["schemas"]["SaksbehandlersVurderinger"] = {
  behandlingId: "019503bd-b922-7807-afa4-e0d615e40260",
  regelsett: [
    {
      navn: "Opphold",
      hjemmel: {
        kilde: {
          navn: "Folketrygdloven",
          kortnavn: "ftrl",
        },
        kapittel: "4",
        paragraf: "2",
        tittel: "§ 4-2. Opphold i Norge",
        url: "https://lovdata.no/nav/lov/1997-02-28-19/§4-2",
      },
      relevantForVedtak: true,
      status: "Info",
      avklaringer: [],
      opplysningIder: ["0195ccb3-75c9-720c-ac74-4b65a78f8bb7"],
      opplysningTypeIder: ["0194881f-9443-72b4-8b30-5f6cdb24d549"],
    },
    {
      navn: "Reell arbeidssøker",
      hjemmel: {
        kilde: {
          navn: "Folketrygdloven",
          kortnavn: "ftrl",
        },
        kapittel: "4",
        paragraf: "5",
        tittel: "§ 4-5. Reelle arbeidssøkere",
        url: "https://lovdata.no/nav/lov/1997-02-28-19/§4-5",
      },
      relevantForVedtak: true,
      status: "Info",
      avklaringer: [],
      opplysningIder: ["01950425-6498-756e-9a33-c8e9a0502f2d"],
      opplysningTypeIder: ["0194881f-9442-707b-a6ee-e96c06877bd9"],
    },
  ],
  avklaringer: [
    {
      id: "019503bd-b925-7ecc-af96-58379c9792f5",
      kode: "HarTilleggsopplysninger",
      tittel: "Sjekk hva bruker har oppgitt som tilleggsopplysninger i søknaden",
      beskrivelse: "Du må vurdere om tilleggsopplysninger har betydning for saken",
      kanKvitteres: true,
      status: "Avklart",
      maskinelt: false,
      begrunnelse: "Ok, er vurdert",
      sistEndret: "2025-02-14T12:08:52.283712",
      avklartAv: {
        ident: "Z993212",
      },
    },
  ],
  opplysninger: [
    {
      id: "01950425-6498-756e-9a33-c8e9a0502f2d",
      opplysningTypeId: "0194881f-9442-707b-a6ee-e96c06877bd9",
      navn: "Kan jobbe i hele Norge",
      verdien: {
        verdi: true,
        datatype: "boolsk",
      },
      verdi: "true",
      status: "Faktum",
      datatype: "boolsk",
      redigerbar: true,
      kanOppfriskes: false,
      kilde: {
        type: "Saksbehandler",
        registrert: "2025-02-14T12:08:34.158825",
        ident: "Z993212",
      },
      synlig: true,
      formål: "Bruker",
    },
    {
      id: "0195ccb3-75c9-720c-ac74-4b65a78f8bb7",
      opplysningTypeId: "0194881f-9443-72b4-8b30-5f6cdb24d549",
      navn: "Bruker oppholder seg i Norge",
      verdien: {
        verdi: false,
        datatype: "boolsk",
      },
      verdi: "false",
      status: "Faktum",
      datatype: "boolsk",
      redigerbar: true,
      kanOppfriskes: false,
      kilde: {
        type: "Saksbehandler",
        registrert: "2025-03-25T10:47:47.762571",
        ident: "Z993298",
      },
      synlig: true,
      formål: "Regel",
    },
  ],
};
