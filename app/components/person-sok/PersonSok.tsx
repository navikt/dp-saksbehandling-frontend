import { Search } from "@navikt/ds-react";
import { Form } from "@remix-run/react";
import { useForm } from "@rvf/remix";
import { hentValideringForPersonIdent } from "~/utils/validering.util";
import styles from "./PersokSok.module.css";

export function PersonSok() {
  const validatedForm = useForm({
    validator: hentValideringForPersonIdent(),
    method: "post",
  });

  return (
    <Form className={styles.sokForm} {...validatedForm.getFormProps()}>
      <input hidden={true} readOnly={true} name="_action" value="sok-person" />
      <Search
        {...validatedForm.getInputProps("personIdent")}
        hideLabel={false}
        size="small"
        label=""
        placeholder="Søk etter person"
        variant="secondary"
        clearButton
        error={validatedForm.error("personIdent")}
      />
    </Form>
  );
}
