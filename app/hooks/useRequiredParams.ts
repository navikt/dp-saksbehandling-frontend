import { useParams } from "react-router";
/**
 * En React hook som gir typesikker tilgang til URL-parametere.
 *
 * Wrappet `useParams` fra react-router med en Proxy som sikrer at alle aksesserte
 * parametere eksisterer. Kaster en feil hvis en parameter ikke er definert i URL-en.
 *
 * @returns {Record<string, string>} Et proxy-objekt som wrapper URL-parametere.
 * Hver aksessert property må være definert, ellers kastes en feil.
 *
 * @throws {Error} Kastes når man forsøker å aksessere en URL-parameter som ikke
 * er definert i gjeldende rute.
 *
 * @example
 * ```tsx
 * function Oppgave() {
 *   const { oppgaveId } = useRequiredParams();
 *   // oppgaveId er garantert å være definert, ellers kastes en feil
 *   return <div>Oppgave-ID: {oppgaveId}</div>;
 * }
 */

export function useRequiredParams() {
  const params = useParams();

  return new Proxy(params, {
    get(urlParams, param: string) {
      // Hvis hooken brukes uten descrukture er param symbol. Returner params fra useParams uten typesikkerhet
      if (typeof param === "symbol") {
        return Reflect.get(urlParams, param);
      }

      const verdi = urlParams[param];
      if (verdi === undefined) {
        throw new Error(`Mangler påkrevd url parameter ${param}`);
      }
      return verdi;
    },
  }) as Record<string, string>;
}
