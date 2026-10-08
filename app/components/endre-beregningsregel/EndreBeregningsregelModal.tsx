import {
  Button,
  DatePicker,
  Modal,
  Radio,
  RadioGroup,
  Textarea,
  useDatepicker,
  VStack,
} from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { useEffect, useRef } from "react";
import { useActionData } from "react-router";

import { components } from "@/openapi/behandling-typer";
import { endreBeregningsregelAction } from "~/server-side-actions/endre-beregningsregel-action";
import {
  BEREGNINGSREGEL_OPPLYSNINGER,
  endreBeregningsregelSkjema,
} from "~/utils/beregningsregel.utils";
import { formaterTilNorskDato } from "~/utils/dato.utils";

interface Props {
  behandlingId: string;
  opplysninger: components["schemas"]["RedigerbareOpplysninger"][];
  sistePrøvingsdato?: Date;
}

export function EndreBeregningsregelModal({
  behandlingId,
  opplysninger,
  sistePrøvingsdato,
}: Props) {
  const modalRef = useRef<HTMLDialogElement>(null);
  const actionData = useActionData<typeof endreBeregningsregelAction>();
  const form = useForm({
    method: "post",
    schema: endreBeregningsregelSkjema,
    submitSource: "state",
    defaultValues: {
      _action: "endre-beregningsregel",
      behandlingId,
      beregningsregel: "" as (typeof BEREGNINGSREGEL_OPPLYSNINGER)[number],
      begrunnelse: "",
      gyldigFraOgMed: sistePrøvingsdato ? formaterTilNorskDato(sistePrøvingsdato) : "",
    },
  });
  const datepicker = useDatepicker({
    defaultSelected: sistePrøvingsdato,
    onDateChange: (dato) => {
      form.field("gyldigFraOgMed").setValue(dato ? formaterTilNorskDato(dato) : "");
      form.field("gyldigFraOgMed").clearError();
    },
    onValidate: (validation) => {
      if (validation.isInvalid) {
        form.field("gyldigFraOgMed").setValue("Ugyldig dato");
      }
      if (validation.isEmpty) {
        form.field("gyldigFraOgMed").setValue("");
      }
    },
  });

  useEffect(() => {
    if (actionData && "variant" in actionData && actionData.variant === "success") {
      modalRef.current?.close();
    }
  }, [actionData]);

  return (
    <>
      <Button
        className="width-content"
        type="button"
        variant="secondary"
        onClick={() => modalRef.current?.showModal()}
      >
        Endre beregningsregel
      </Button>
      <Modal ref={modalRef} header={{ heading: "Endre beregningsregel" }}>
        <form {...form.getFormProps()}>
          <Modal.Body>
            <VStack gap="space-16">
              <RadioGroup
                legend="Velg beregningsregel"
                name="beregningsregel"
                value={form.field("beregningsregel").value()}
                onChange={(value) => form.field("beregningsregel").setValue(value)}
                error={form.field("beregningsregel").error()}
              >
                {opplysninger.map((opplysning) => (
                  <Radio key={opplysning.opplysningTypeId} value={opplysning.opplysningTypeId}>
                    {opplysning.navn}
                  </Radio>
                ))}
              </RadioGroup>
              <Textarea
                {...form.getInputProps("begrunnelse")}
                label="Begrunnelse"
                resize="vertical"
                error={form.field("begrunnelse").error()}
              />
              <DatePicker {...datepicker.datepickerProps}>
                <DatePicker.Input
                  {...datepicker.inputProps}
                  label="Fra og med"
                  name="gyldigFraOgMed"
                  error={form.field("gyldigFraOgMed").error()}
                />
              </DatePicker>
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" loading={form.formState.isSubmitting}>
              Endre beregningsregel
            </Button>
            <Button
              variant="secondary"
              type="button"
              disabled={form.formState.isSubmitting}
              onClick={() => modalRef.current?.close()}
            >
              Lukk
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}
