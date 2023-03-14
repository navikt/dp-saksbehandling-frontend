import groq from "groq";

const faktumFields = `{
  textId,
  text,
  description,
  helpText,
  errorMessage,
  unit
}`;

const svaralternativFields = `{
  textId,
  text,
  alertText,
}`;

const faktaGroq = `* [_type=="faktum" && __i18n_lang==$baseLang]{
...coalesce(* [_id==^._id + "__i18n_" + $lang][0]${faktumFields}, ${faktumFields})
}`;

const svaralternativerGroq = `* [_type=="svaralternativ" && __i18n_lang==$baseLang]{
...coalesce(* [_id==^._id + "__i18n_" + $lang][0]${svaralternativFields}, ${svaralternativFields})
}`;

export const allTextsQuery = groq`{
  "fakta": ${faktaGroq},
  "svaralternativer": ${svaralternativerGroq},
}`;
