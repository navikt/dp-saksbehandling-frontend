interface IProps {
  date: string;
  short?: boolean;
}

export function FormattedDate(props: IProps) {
  const locale = "no-NO";

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: props.short ? "2-digit" : "long",
    day: props.short ? "2-digit" : "numeric",
  };

  const formattedDate = new Date(props.date).toLocaleDateString(locale, options);

  return <>{formattedDate}</>;
}
