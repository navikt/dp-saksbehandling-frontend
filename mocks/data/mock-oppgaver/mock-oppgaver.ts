import { arbeidsinntektAvslagGjenopptakIkkeRegistrertOppholdUtlandOrdinærReellArbeidssøkerVerneplikt } from "./arbeidsinntekt-avslag-gjenopptak-ikke-registrert-opphold-utland-ordinær-reell-arbeidssøker-verneplikt";
import { avslagManuellOrdinærReellArbeidssøkerVerneplikt } from "./avslag-manuell-ordinær-reell-arbeidssøker-verneplikt";
import { avslagMinsteinntektOrdinær } from "./avslag-minsteinntekt-ordinær";
import { innsending } from "./innsending";
import { klage } from "./klage";
import { ordinærAvslagReellArbeidssøker } from "./ordinær-avslag-reell-arbeidssøker";
import { ordinærInnvilgelse } from "./ordinær-innvilgelse";
import { ordinærVernepliktAvslagIkkeRegistrertMinsteinntekt } from "./ordinær-verneplikt-avslag-ikke-registrert-minsteinntekt";
export const mockOppgaver = [
  ordinærInnvilgelse,
  arbeidsinntektAvslagGjenopptakIkkeRegistrertOppholdUtlandOrdinærReellArbeidssøkerVerneplikt,
  ordinærAvslagReellArbeidssøker,
  avslagManuellOrdinærReellArbeidssøkerVerneplikt,
  klage,
  innsending,
  avslagMinsteinntektOrdinær,
  ordinærVernepliktAvslagIkkeRegistrertMinsteinntekt,
];
