interface IProps {
  date: string;
  kort?: boolean;
  ukedag?: boolean;
}

export function FormattedDate(props: IProps) {
  const locale = "no-NO";

  let options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: props.kort ? "2-digit" : "long",
    day: props.kort ? "2-digit" : "numeric",
  };

  if (props.ukedag) {
    options.weekday = "long";
  }

  const formattedDate = new Date(props.date).toLocaleDateString(locale, options);

  return <>{formattedDate}</>;
}
