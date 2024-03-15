export function formaterTallMedTusenSeperator(verdi: string) {
  let nummer = parseFloat(verdi);

  if (!isNaN(nummer) && nummer % 1 === 0) {
    nummer = parseInt(verdi);
  }

  return new Intl.NumberFormat("no-NO").format(nummer);
}
