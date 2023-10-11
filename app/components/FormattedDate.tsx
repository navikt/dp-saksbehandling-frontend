interface IProps {
  date: string;
  kort?: boolean;
  ukedag?: boolean;
}

export function FormattedDate(props: IProps) {
  const { kort, ukedag, date } = props;
  const locale = "no-NO";

  let options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: kort ? "2-digit" : "long",
    day: kort ? "2-digit" : "numeric",
  };

  if (ukedag) {
    options.weekday = "long";
  }

  const formattedDate = new Date(date).toLocaleDateString(locale, options);

  return <>{formattedDate}</>;
}
