import { arbeidsinntektAvslagGjenopptakIkkeRegistrertOppholdUtlandOrdinærReellArbeidssøkerVerneplikt } from "./arbeidsinntekt-avslag-gjenopptak-ikke-registrert-opphold-utland-ordinær-reell-arbeidssøker-verneplikt";
import { avslagIkkeRegistrertMinsteinntektOrdinærVerneplikt } from "./avslag-ikke-registrert-minsteinntekt-ordinær-verneplikt";
import { avslagManuellOrdinærReellArbeidssøkerVerneplikt } from "./avslag-manuell-ordinær-reell-arbeidssøker-verneplikt";
import { avslagMinsteinntektOrdinær } from "./avslag-minsteinntekt-ordinær";
import { avslagOrdinærReellArbeidssøker } from "./avslag-ordinær-reell-arbeidssøker";
import { innsending } from "./innsending";
import { innvilgelseOrdinær } from "./innvilgelse-ordinær";
import { innvilgelseOrdinærTidligereKontrollert } from "./innvilgelse-ordinær-tidligere-kontrollert";
import { klage } from "./klage";

export const mockOppgaver = [
  klage,
  innsending,
  arbeidsinntektAvslagGjenopptakIkkeRegistrertOppholdUtlandOrdinærReellArbeidssøkerVerneplikt,
  avslagManuellOrdinærReellArbeidssøkerVerneplikt,
  avslagMinsteinntektOrdinær,
  innvilgelseOrdinærTidligereKontrollert,
  innvilgelseOrdinær,
  avslagOrdinærReellArbeidssøker,
  avslagIkkeRegistrertMinsteinntektOrdinærVerneplikt,
];
