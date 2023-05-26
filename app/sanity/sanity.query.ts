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

const appTextsFields = `{
  textId,
  valueText
}`;

const infosideFields = `{
  "slug": slug.current,
  body
}`;

const faktaGroq = `* [_type=="faktum" && __i18n_lang==$baseLang]{
...coalesce(* [_id==^._id + "__i18n_" + $lang][0]${faktumFields}, ${faktumFields})
}`;

const svaralternativerGroq = `* [_type=="svaralternativ" && __i18n_lang==$baseLang]{
...coalesce(* [_id==^._id + "__i18n_" + $lang][0]${svaralternativFields}, ${svaralternativFields})
}`;

const appTextsGroq = `* [_type=="saksbehandlingAppText" && __i18n_lang==$baseLang]{
  ...coalesce(* [_id==^._id + "__i18n_" + $lang][0]${appTextsFields}, ${appTextsFields})
  }`;

const infosiderGroq = `* [_type=="saksbehandlingInfoText"  && __i18n_lang==$baseLang]{
  ...coalesce(* [_id==^._id + "__i18n_" + $lang][0]${infosideFields}, ${infosideFields})
  }`;

export const allTextsQuery = groq`{
  "fakta": ${faktaGroq},
  "svaralternativer": ${svaralternativerGroq},
  "apptekster": ${appTextsGroq},
  "infosider": ${infosiderGroq}
}`;
