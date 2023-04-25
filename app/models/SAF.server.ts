import { getAzureSession } from "~/utils/auth.utils";
import { logger } from "../../server/logger";
import { mockSaksbehandler } from "../../mock-data/mock-saksbehandler";

export async function hentDokumenter(request: Request) {
  const session = await getAzureSession(request);

  // Wonderwall tar seg av session, hvis vi ikke har en session kjører vi uten sidecar og skal være i dev
  if (!session || session.expiresIn === 0) {
    logger.debug("no session, mocker saksbehandler");
    return mockSaksbehandler;
  }

  // try {
  const oboToken = await session.apiToken("https://graph.microsoft.com/.default");
  console.log(oboToken);
  return oboToken;
  // } catch (error: unknown) {
  //   throw new Response("Unauthorized", { status: 401 });
  // }

  // const payload = decodeJwt(session.token);
  // if (!session.token) return res.status(401).end();
  //
  // const fnr = payload.pid as string;
  //
  // let jposter;
  // try {
  //     const {
  //         dokumentoversiktSelvbetjening: { journalposter },
  //     } = await hentDokumentOversikt(await session.apiToken(safAudience), fnr);
  //     jposter = journalposter;
  //
  //     logger.info(`Hentet ${jposter.length} journalposter`);
  // } catch (errors) {
  //     logger.error(`Feil fra SAF: ${errors.response}`);
  //     return res.status(500).end();
  // }
  //
  // const mapTilRettDato = ({ relevanteDatoer, ...rest }) => {
  //     const { dato } = relevanteDatoer.find(
  //         (dato) => dato.datotype == Datotype.DatoOpprettet
  //     );
  //     return {
  //         dato,
  //         ...rest,
  //     };
  // };
  //
  // const berikAvsenderMottaker = ({ avsender, mottaker, ...rest }) => {
  //     const brukerEr = (am: AvsenderMottaker) =>
  //         am.type == "FNR" && am.id === fnr;
  //
  //     const brukerErAvsenderEllerMottaker = () => {
  //         if (avsender) return brukerEr(avsender);
  //         if (mottaker) return brukerEr(mottaker);
  //         return false;
  //     };
  //     return {
  //         brukerErAvsenderMottaker: brukerErAvsenderEllerMottaker(),
  //         ...rest,
  //     };
  // };
  //
  // const journalpostRespons: Journalpost[] = jposter
  //     .map(mapTilRettDato)
  //     .map(berikAvsenderMottaker)
  //     .map(({ journalpostId, dokumenter, ...rest }) => {
  //         const berikDokmedType = (dok, index) => ({
  //             // Første vedlegg er alltid hoveddokument
  //             type: index == 0 ? "Hoved" : "Vedlegg",
  //             ...dok,
  //         });
  //
  //         const berikMedBrukerTilgang = ({ dokumentvarianter, ...rest }) => {
  //             const erArkiv = (variant) => variant.variantformat === "ARKIV";
  //             const getArkivVariant = (dokVarianter) => {
  //                 if (dokVarianter) return dokVarianter.find(erArkiv);
  //                 return null;
  //             };
  //
  //             const dokumentetKanVises = () => {
  //                 const variant = getArkivVariant(dokumentvarianter);
  //                 if (variant) return variant.brukerHarTilgang;
  //                 return false;
  //             };
  //             return { brukerHarTilgang: dokumentetKanVises(), ...rest };
  //         };
  //
  //         const byggForhandsvisningLink = ({ dokumentInfoId, ...rest }) => ({
  //             links: [
  //                 {
  //                     href: `${process.env.NEXT_PUBLIC_BASE_PATH}/api/dokumenter/${journalpostId}/${dokumentInfoId}/forhandsvisning`,
  //                     rel: "preview",
  //                     type: "GET",
  //                 },
  //             ],
  //             dokumentInfoId,
  //             ...rest,
  //         });
  //
  //         return {
  //             journalpostId,
  //             ...rest,
  //             dokumenter: dokumenter
  //                 .map(berikDokmedType)
  //                 .map(berikMedBrukerTilgang)
  //                 .map(byggForhandsvisningLink)
  //                 .map(({ dokumentInfoId, ...rest }) => ({
  //                     id: dokumentInfoId,
  //                     ...rest,
  //                 })),
  //         };
  //     });
  //
  // res.json(journalpostRespons);
}
