import { arbeidsinntektAvslagGjenopptakIkkeRegistrertOppholdUtlandOrdinærReellArbeidssøkerVerneplikt } from "./arbeidsinntekt-avslag-gjenopptak-ikke-registrert-opphold-utland-ordinær-reell-arbeidssøker-verneplikt";
import { avslagManuellOrdinærReellArbeidssøkerVerneplikt } from "./avslag-manuell-ordinær-reell-arbeidssøker-verneplikt";
import { avslagMinsteinntektOrdinær } from "./avslag-minsteinntekt-ordinær";
import { innsending } from "./innsending";
import { innvilgelseOrdinærTidligereKontrollert } from "./innvilgelse-ordinær-tidligere-kontrollert";
import { klage } from "./klage";
import { ordinærAvslagMinsteinntekt } from "./ordinær-avslag-minsteinntekt";
import { ordinærAvslagReellArbeidssøker } from "./ordinær-avslag-reell-arbeidssøker";
import { ordinærInnvilgelse } from "./ordinær-innvilgelse";

export const mockOppgaver = [
  ordinærInnvilgelse,
  arbeidsinntektAvslagGjenopptakIkkeRegistrertOppholdUtlandOrdinærReellArbeidssøkerVerneplikt,
  ordinærAvslagReellArbeidssøker,
  avslagManuellOrdinærReellArbeidssøkerVerneplikt,
  klage,
  avslagMinsteinntektOrdinær,
  ordinærAvslagMinsteinntekt,
  innvilgelseOrdinærTidligereKontrollert,
  innsending,
];
