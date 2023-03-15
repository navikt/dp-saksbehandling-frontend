import type { TypedObject } from "@portabletext/types";

export interface ISanityHelpText {
  title?: string;
  body: TypedObject | TypedObject[];
}

export interface ISanityAlertText {
  title?: string;
  type: "info" | "warning" | "error" | "success";
  body: TypedObject | TypedObject[];
}

export interface ISanityFaktum {
  textId: string;
  text: string;
  description?: TypedObject | TypedObject[];
  errorMessage?: string;
  helpText?: ISanityHelpText;
  unit?: string;
}

export interface ISanitySvaralternativ {
  textId: string;
  text: string;
  alertText?: ISanityAlertText;
}

export interface ISanityTexts {
  fakta: ISanityFaktum[];
  svaralternativer: ISanitySvaralternativ[];
}