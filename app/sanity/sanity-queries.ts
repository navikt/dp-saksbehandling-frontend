export const brevMalQuery = `*[_type == "brevMal"]{
...,
  brevBlokker[]->{
  ...,
    innhold[]{
    ...,
      children[]{
      ...,
        _type == "opplysningReference" => {
          "reference": @->{ 
     
            ...
          }
        },
        _type == "regelmotorOpplysningReference" => {
          "reference": @->{ 
     
            ...
          }
        }
      }
    }
  }
}`;

export const regelmotorOpplysningQuery = `*[_type == "regelmotorOpplysning"]{
...
}`;
