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

  const erForsteAdvent = dagensDato >= forsteAdventDato && dagensDato < andreAdventDato;
  const erAndreAdvent = dagensDato >= andreAdventDato && dagensDato < tredjeAdventDato;
  const erTredjeAdvent = dagensDato >= tredjeAdventDato && dagensDato < fjerdeAdventDato;
  const erFjerdeAdvent = dagensDato >= fjerdeAdventDato;

  return (
    <div
      className={classnames(styles.container, {
        [styles.forsteAdvent]: erForsteAdvent,
        [styles.andreAdvent]: erAndreAdvent,
        [styles.tredjeAdvent]: erTredjeAdvent,
        [styles.fjerdeAdvent]: erFjerdeAdvent,
      })}
    >
      {erAndreAdvent ? <CandleMeltSvg /> : erForsteAdvent ? <CandleLightMeltSvg /> : <CandleSvg />}
      {erTredjeAdvent ? <CandleMeltSvg /> : erAndreAdvent ? <CandleLightMeltSvg /> : <CandleSvg />}
      {erFjerdeAdvent ? <CandleMeltSvg /> : erTredjeAdvent ? <CandleLightMeltSvg /> : <CandleSvg />}
      {erFjerdeAdvent ? <CandleLightMeltSvg /> : <CandleSvg />}
    </div>
  );
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
