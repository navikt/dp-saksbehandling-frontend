import { arbeidsforholdResponse } from "mocks/api-routes/arbeidsforholdResponse";

export async function hentArbeidsforhold(fnr: string): Promise<any> {
  // TODO fiks fetch

  const response: Promise<any> = new Promise((resolve, reject) => {
    resolve(arbeidsforholdResponse);
  });

  return await response;
}
