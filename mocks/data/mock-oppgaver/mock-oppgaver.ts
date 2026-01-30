import { arbeidsinntektAvslagGjenopptakIkkeRegistrertOppholdUtlandOrdinærReellArbeidssøkerVerneplikt } from "./arbeidsinntekt-avslag-gjenopptak-ikke-registrert-opphold-utland-ordinær-reell-arbeidssøker-verneplikt";
import { avslagManuellOrdinærReellArbeidssøkerVerneplikt } from "./avslag-manuell-ordinær-reell-arbeidssøker-verneplikt";
import { avslagMinsteinntektOrdinær } from "./avslag-minsteinntekt-ordinær";
import { innsending } from "./innsending";
import { innvilgelseOrdinærTidligereKontrollert } from "./innvilgelse-ordinær-tidligere-kontrollert";
import { klage } from "./klage";
import { ordinær } from "./ordinær";
import { ordinærAvslagReellArbeidssøker } from "./ordinær-avslag-reell-arbeidssøker";
import { ordinærInnvilgelse } from "./ordinær-innvilgelse";
import { ordinærVernepliktAvslagIkkeRegistrertMinsteinntekt } from "./ordinær-verneplikt-avslag-ikke-registrert-minsteinntekt";

export const mockOppgaver = [
  klage,
  innsending,
  arbeidsinntektAvslagGjenopptakIkkeRegistrertOppholdUtlandOrdinærReellArbeidssøkerVerneplikt,
  avslagManuellOrdinærReellArbeidssøkerVerneplikt,
  avslagMinsteinntektOrdinær,
  innvilgelseOrdinærTidligereKontrollert,
  ordinær,
  ordinærInnvilgelse,
  ordinærAvslagReellArbeidssøker,
  ordinærVernepliktAvslagIkkeRegistrertMinsteinntekt,
];
