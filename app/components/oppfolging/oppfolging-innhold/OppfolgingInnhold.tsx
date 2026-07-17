import { PencilIcon } from "@navikt/aksel-icons";
import {
  BodyLong,
  BodyShort,
  Button,
  DatePicker,
  Heading,
  Textarea,
  TextField,
  useDatepicker,
} from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { useEffect, useState } from "react";

import { components } from "@/openapi/saksbehandling-typer";
import { useOppgave } from "~/hooks/useOppgave";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { hentValideringForRedigerOppfolgingSkjema } from "~/utils/validering.util";

interface IProps {
  oppfolging: components["schemas"]["Oppfolging"];
}

export function OppfolgingInnhold({ oppfolging }: IProps) {
  const { readonly } = useOppgave();
  const [redigerer, setRedigerer] = useState(false);

  return (
    <div className="card flex flex-1 flex-col gap-6 p-6">
      {redigerer ? (
        <RedigerOppfolgingSkjema oppfolging={oppfolging} lukk={() => setRedigerer(false)} />
      ) : (
        <>
          <div className="flex items-center justify-between gap-2">
            <Heading size="medium" level="2">
              {oppfolging.tittel}
            </Heading>
            {!readonly && (
              <Button
                variant="tertiary"
                size="small"
                icon={<PencilIcon aria-hidden />}
                onClick={() => setRedigerer(true)}
              >
                Rediger
              </Button>
            )}
          </div>

          {oppfolging.beskrivelse && (
            <div className="flex flex-col gap-1">
              <BodyShort size="small" weight="semibold">
                Beskrivelse
              </BodyShort>
              <BodyLong>{oppfolging.beskrivelse}</BodyLong>
            </div>
          )}
        </>
      )}

      {oppfolging.strukturertData && Object.keys(oppfolging.strukturertData).length > 0 && (
        <div className="flex flex-col gap-2">
          <Heading size="small" level="3">
            Data
          </Heading>
          <div className="rounded-(--ax-radius-8) border border-(--ax-border-neutral-subtle) p-4">
            <dl className="flex flex-col gap-3">
              {Object.entries(oppfolging.strukturertData).map(([key, value]) => (
                <div
                  key={key}
                  className="flex flex-col gap-0.5 border-b border-(--ax-border-neutral-subtle) pb-2 last:border-b-0 last:pb-0"
                >
                  <dt>
                    <BodyShort size="small" weight="semibold">
                      {key}
                    </BodyShort>
                  </dt>
                  <dd>
                    <BodyShort size="small">{String(value)}</BodyShort>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      )}
    </div>
  );
}

interface IRedigerOppfolgingSkjemaProps {
  oppfolging: components["schemas"]["Oppfolging"];
  lukk: () => void;
}

function RedigerOppfolgingSkjema({ oppfolging, lukk }: IRedigerOppfolgingSkjemaProps) {
  const form = useForm({
    method: "post",
    submitSource: "state",
    schema: hentValideringForRedigerOppfolgingSkjema(),
    defaultValues: {
      _action: "rediger-oppfolging" as const,
      behandlingId: oppfolging.behandlingId,
      tittel: oppfolging.tittel,
      beskrivelse: oppfolging.beskrivelse,
      frist: oppfolging.frist ? formaterTilNorskDato(oppfolging.frist) : undefined,
    },
  });

  useEffect(() => {
    if (form.formState.submitStatus === "success") {
      lukk();
    }
  }, [form.formState.submitStatus, lukk]);

  const { datepickerProps, inputProps } = useDatepicker({
    defaultSelected: oppfolging.frist ? new Date(oppfolging.frist) : undefined,
    onDateChange: (date) => {
      form.field("frist").setValue(date ? formaterTilNorskDato(date) : undefined);
    },
  });

  return (
    <form {...form.getFormProps()} className="flex flex-col gap-4">
      <TextField
        {...form.field("tittel").getInputProps()}
        error={form.field("tittel").error()}
        label="Tittel"
      />

      <Textarea
        {...form.field("beskrivelse").getInputProps()}
        error={form.field("beskrivelse").error()}
        label="Beskrivelse"
      />

      <DatePicker {...datepickerProps}>
        <DatePicker.Input
          {...inputProps}
          form={form.field("frist").getInputProps().form}
          name={form.field("frist").getInputProps().name}
          error={form.field("frist").error()}
          label="Frist"
        />
      </DatePicker>

      <div className="flex gap-2">
        <Button size="small" onClick={() => form.submit()} loading={form.formState.isSubmitting}>
          Lagre
        </Button>
        <Button size="small" variant="secondary" onClick={lukk} type="button">
          Avbryt
        </Button>
      </div>
    </form>
  );
}
