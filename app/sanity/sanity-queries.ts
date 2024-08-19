export function hentBrevBlokkerMedId(textIds: string[]) {
  return `*[_type == "brevBlokk" && textId in ${JSON.stringify(textIds)}]{
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
