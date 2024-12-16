import classnames from "classnames";

import { CandleLightMeltSvg } from "~/components/jul/CandleLightMeltSvg";
import { CandleMeltSvg } from "~/components/jul/CandleMeltSvg";
import { CandleSvg } from "~/components/jul/CandleSvg";

import styles from "./Adventslys.module.css";

export function Adventslys() {
  const dagensDato = new Date();
  const aar = new Date().getFullYear();
  const [forsteAdventDato, andreAdventDato, tredjeAdventDato, fjerdeAdventDato] =
    hentAdventsDatoer(aar);

  const harTent = {
    forsteLys: dagensDato >= forsteAdventDato,
    andreLys: dagensDato >= andreAdventDato,
    tredjeLys: dagensDato >= tredjeAdventDato,
    fjerdeLys: dagensDato >= fjerdeAdventDato,
  };

  return (
    <div
      className={classnames(styles.container, {
        [styles.forsteAdvent]: harTent.forsteLys && !harTent.andreLys,
        [styles.andreAdvent]: harTent.andreLys && !harTent.tredjeLys,
        [styles.tredjeAdvent]: harTent.tredjeLys && !harTent.fjerdeLys,
        [styles.fjerdeAdvent]: harTent.fjerdeLys,
      })}
    >
      {hentLysSvg(harTent.forsteLys, harTent.andreLys)}
      {hentLysSvg(harTent.andreLys, harTent.tredjeLys)}
      {hentLysSvg(harTent.tredjeLys, harTent.fjerdeLys)}
      {hentLysSvg(harTent.fjerdeLys, false)}
    </div>
  );
}

function hentLysSvg(erTent: boolean, harSmeltet: boolean) {
  if (harSmeltet) return <CandleMeltSvg />;
  if (erTent) return <CandleLightMeltSvg />;
  return <CandleSvg />;
}

function hentAdventsDatoer(aar: number) {
  const julemorgen = new Date(aar, 11, 25);
  const julemorgenDag = julemorgen.getDay(); // Day of the week for Christmas (0 = Sunday, 6 = Saturday)
  const fjerdeAdvent = new Date(julemorgen);
  fjerdeAdvent.setDate(julemorgen.getDate() - (julemorgenDag === 0 ? 7 : julemorgenDag)); // Adjust to the last Sunday before Christmas

  const tredjeAdvent = new Date(fjerdeAdvent);
  tredjeAdvent.setDate(fjerdeAdvent.getDate() - 7);

  const andreAdvent = new Date(tredjeAdvent);
  andreAdvent.setDate(tredjeAdvent.getDate() - 7);

  const forsteAdvent = new Date(andreAdvent);
  forsteAdvent.setDate(andreAdvent.getDate() - 7);

  return [forsteAdvent, andreAdvent, tredjeAdvent, fjerdeAdvent];
}
