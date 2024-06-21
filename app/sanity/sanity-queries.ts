export const brevMalQuery = `*[_type == "brevMal"]{
...,
  brevBlokker[]->{
  ...,
    innhold[]{
    ...,
      markDefs[]{
      ...,
        _type == "behandlingOpplysningReference" => {
          "reference": reference->{
          ...
          }
        }
      }
    }
  }
}`;
