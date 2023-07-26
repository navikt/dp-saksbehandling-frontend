interface IRettighetstype {
  value: string;
  text: string;
}

export const rettighetstyper: IRettighetstype[] = [
  { value: "Ordinær", text: "Ordinær" },
  { value: "Permittering", text: "Permittering" },
  { value: "PermitteringFraFiskeindustrien", text: "Permittering fra fiskeindustrien" },
  { value: "ForskutterteLønnsgarantimidler", text: "Forskutterte lønnsgarantimidler" },
];
