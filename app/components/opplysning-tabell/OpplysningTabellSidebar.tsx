import { List } from "@navikt/ds-react";

interface IProps {
  kategori: string;
  onChange: (kategori: string) => void;
}

export function OpplysningTabellSidebar({ kategori, onChange }: IProps) {
  const kategorier = [
    { key: "virkningstidspunkt", label: "Virkningstidspunkt" },
    { key: "minste-arbeidsinntekt", label: "Minste arbeidsinntekt" },
    { key: "registrert-arbeidssoker", label: "Registrert arbeidssøker" },
    { key: "opphold-i-norge", label: "Opphold i Norge" },
    { key: "alt", label: "All informasjon" },
  ];

  return (
    <div>
      <List as="ul">
        {kategorier.map((kategori) => (
          <List.Item key={kategori.key} onClick={() => onChange(kategori.key)}>
            {kategori.label}
          </List.Item>
        ))}
      </List>
    </div>
  );
}
