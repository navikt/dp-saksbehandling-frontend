export const brevMalQuery = `*[_type == "brevMal"]{
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
