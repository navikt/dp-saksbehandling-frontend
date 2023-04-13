import type { Faktum, IGeneratorFaktum } from "../models/faktum.server";
import { mockVilkaar } from "../../mock-data/mock-vilkar";

export type VilkaarStatus = "Godkjent" | "Avslag" | "Manuell";

export interface IVilkaar {
  id: string;
  navn: string;
  status: VilkaarStatus;
  fakta: (Faktum | IGeneratorFaktum)[];
}

export async function mockHentVilkaarListe(): Promise<IVilkaar[]> {
  return Promise.resolve(mockVilkaar);
}
export async function mockHentVilkaar(id: string): Promise<IVilkaar | undefined> {
  const vilkaar = mockVilkaar.find((vilkaar) => vilkaar.id == id);
  return Promise.resolve(vilkaar);
}
