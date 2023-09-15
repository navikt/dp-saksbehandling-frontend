import { json, type LoaderArgs } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { Navnestripe } from "~/components/brodsmuler/Navnestripe";
import { hentOppgave } from "~/models/oppgave.server";
import { hentPDL } from "~/models/pdl.server";
import { type IPerson, mockHentPerson } from "~/models/person.server";
import { logger, sikkerLogger } from "../../server/logger";
import { getSession } from "~/models/auth.server";

export const shouldRevalidate = () => false;
export async function loader({ request, params }: LoaderArgs) {
  invariant(params.oppgaveId, "Fant ikke oppgaveId");
  const session = await getSession(request);
  const oppgave = await hentOppgave(params.oppgaveId, session);

  if (process.env.IS_LOCALHOST === "true") {
    const person: IPerson = await mockHentPerson(oppgave.person);

    return json({
      fulltNavn: `${person.forNavn} ${person.etterNavn}`,
      FNR: oppgave.person,
    });
  } else {
    let data;
    try {
      const response = await hentPDL(request, oppgave.person);
      data = {
        fulltNavn: `${response.hentPerson?.navn[0].fornavn} ${response.hentPerson?.navn[0].etternavn}`,
      };
      sikkerLogger.info(`Sikkerlogg debug PDL kall: ${JSON.stringify(response)}`);
    } catch (error: unknown) {
      logger.warn(`Feil fra PDL, sjekk sikkerlogg`);
      sikkerLogger.warn(`PDL kall feilet, error: ${error}`);
      data = { errors: [`Feil ved henting av pdl.`], fulltNavn: `` };
      if (error instanceof Error) {
        data = { errors: [`Feil ved henting av pdl, debug: ${error.message}`], fulltNavn: `` };
      }
    }
    return json({ ...data, FNR: oppgave.person });
  }
}

export default function Person() {
  const loaderData = useLoaderData<typeof loader>();

  return (
    <>
      {loaderData.fulltNavn && <Navnestripe navn={loaderData.fulltNavn} ident={loaderData.FNR} />}
      <main>
        <Outlet />
      </main>
    </>
  );
}
