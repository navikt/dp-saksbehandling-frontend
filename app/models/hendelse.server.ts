export interface IHendelse {
  id: string;
  dato: string;
  type: HendelseType;
}

type HendelseType = SoknadType | "Ettersendelse" | "Endring" | "Klage" | "Barnetilegg";
type SoknadType = "Ordinær" | "Utdanning" | "Gjenopptak";
