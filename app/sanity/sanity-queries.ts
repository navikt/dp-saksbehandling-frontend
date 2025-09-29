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
        }
      }
    }
  }
}`;
