export function hentBrevBlokkerMedId(textIds: string[]) {
  const tekstBlokkSortering = textIds
    .map((id, index) => `textId == "${id}" => ${index}`)
    .join(", ");

  return `*[_type == "brevBlokk" && textId in ${JSON.stringify(textIds)}] | order(select(
    ${tekstBlokkSortering},
    ${textIds.length}
  )) {
    ...,
    innhold[]{
      ...,
      _type == "block" => {
        ...,
        children[]{
          ...,
          _type == "opplysningReference" => {
            ...,
            "behandlingOpplysning": @->{
              ...
            }
          },
        }
      }
    },
  }`;
}

export const hentBrevmalMedId = `*[_type == "brevMal" && textId == $brevmalId] | order(_createdAt desc)[0] {
  ...,
  brevBlokker[]->{
    ...,
    innhold[]{
      ...,
      _type == "block" => {
        ...,
        children[]{
          ...,
          _type == "opplysningReference" => {
            ...,
            "behandlingOpplysning": @->{
              ...
            }
          },
          _type == "fritekst" => {
            ...
          }
        }
      }
    }
  }
}`;
