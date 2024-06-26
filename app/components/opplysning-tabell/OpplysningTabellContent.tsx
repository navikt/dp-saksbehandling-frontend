import { KategoriAllInformasjon } from "./KategoriAlt";
import { KategoriVirkningstidspunkt } from "./KategoriVirkningstidspunkt";
import type { IOpplysning } from "~/models/behandling.server";

const KategoriMap: { [key: string]: React.FC<KategoriProps> } = {
  virkningstidspunkt: KategoriVirkningstidspunkt,
  alt: KategoriAllInformasjon,
};

export interface KategoriProps {
  opplysninger: IOpplysning[];
  readonly: boolean;
}

interface IProps {
  componentType: string;
  opplysninger: IOpplysning[];
  readonly: boolean;
}
export function OpplysningTabellContent({ componentType, opplysninger, readonly }: IProps) {
  const Component = KategoriMap[componentType] || null;
  return Component ? <Component opplysninger={opplysninger} readonly={readonly} /> : null;
}
