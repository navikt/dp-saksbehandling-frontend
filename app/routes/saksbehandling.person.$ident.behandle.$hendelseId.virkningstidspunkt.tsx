import { BodyLong, Heading, UNSAFE_DatePicker } from "@navikt/ds-react";
import { Form } from "@remix-run/react";
import styles from "~/route-styles/mangelbrev.module.css";

export default function SendMangelbrev() {
  return (
    <div className={styles.container}>
      <Form>
        <Heading size={"large"} level={"1"}>
          Sett virkningstidspunkt
        </Heading>

        <BodyLong spacing>Virkningstidspunkt for dagpenger</BodyLong>

        <UNSAFE_DatePicker.Standalone
          onSelect={console.log}
          dropdownCaption
          fromDate={new Date("1 Oct 2020")}
          toDate={new Date("1 Oct 2024")}
          disableWeekends
        />
      </Form>
    </div>
  );
}
