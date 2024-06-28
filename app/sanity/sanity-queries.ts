export const hentAlleBrevmaler = `*[_type == "brevMal"]{
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
