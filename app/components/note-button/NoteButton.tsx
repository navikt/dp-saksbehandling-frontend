import { DocPencilIcon } from "@navikt/aksel-icons";
import { BodyShort, Button, Heading, Label, Modal, Textarea } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import z from "zod";

export const getStorage = (key: string): string | null => {
  const item = localStorage.getItem(key);

  return item;
};

export const setStorage = (key: string, value?: string) => {
  if (value === undefined) {
    return localStorage.removeItem(key);
  }
  localStorage.setItem(key, value);
};

export const makeDataQuery = (key: string) => ({
  queryKey: [key] as const,
  queryFn: () => getStorage(key),
});

export const useUpdateData = (key: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [key],
    mutationFn: async (updates: string | undefined) => {
      setStorage(key, updates);
    },
    onMutate: (updates) => {
      if (updates === undefined) {
        return queryClient.removeQueries({ queryKey: [key] });
      }
      queryClient.setQueryData([key], updates);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [key] });
    },
  });
};

const useUpdateNoteData = (noteKey: string) => {
  const { data: note } = useQuery(makeDataQuery(`note_${noteKey}`));
  const { data: color } = useQuery(makeDataQuery(`note_color_${noteKey}`));
  const { mutate } = useUpdateData(`note_${noteKey}`);
  const { mutate: mutateColor } = useUpdateData(`note_color_${noteKey}`);

  const updateNote = (note?: string, color?: string) => {
    mutate(note);
    mutateColor(color);
  };
  return { note, color, updateNote };
};

const COLOR_MAP: Record<string, string> = {
  "meta-lime-400": "Gul",
  "danger-600": "Rød",
  "success-600": "Grønn",
  "accent-600": "Blå",
  "warning-400": "Oransje",
  "meta-purple-600": "Lilla",
  "brand-blue-400": "Grå",
};

interface NoteButtonProps {
  onClick: () => void;
  noteKey: string;
}

export function NoteButton({ onClick, noteKey }: NoteButtonProps) {
  const { note, color } = useUpdateNoteData(noteKey);
  const hasNote = typeof note === "string";

  const title = note || COLOR_MAP[color!];

  return (
    <button
      title={title || "Legg til huskelapp"}
      style={hasNote ? { backgroundColor: `var(--ax-${color})` } : {}}
      className="box-content size-4 align-middle"
      onClick={onClick}
    >
      {!hasNote && <DocPencilIcon />}
    </button>
  );
}

interface NoteModalProps {
  onClose: () => void;
  noteKey: string;
}

export function NoteModal({ onClose, noteKey }: NoteModalProps) {
  const { note, color, updateNote } = useUpdateNoteData(noteKey);
  const [localColor, setLocalColor] = useState(color || "meta-lime");

  const form = useForm({
    schema: z.object({ note: z.string().max(124, "Max 124 tegn.") }),
    defaultValues: { note: note || "" },
    handleSubmit: (values) => {
      updateNote(values.note, localColor);
      onClose();
      form.resetForm();
    },
  });

  const handleDelete = () => {
    updateNote(undefined, undefined);
    onClose();
    form.resetForm();
  };

  return (
    <Modal open={!!noteKey} onClose={onClose} aria-labelledby="modal-heading">
      <Modal.Header>
        <Heading level="1" size="large" id="modal-heading">
          Huskelapp
        </Heading>
        <BodyShort>
          Her kan du legge inn en huskelapp som er synlig kun for deg. <br />
          <strong>OBS!</strong> Dette notatet skal ikke inneholde noen sensitive opplysninger.
        </BodyShort>
      </Modal.Header>
      <Modal.Body className="width-100">
        <form {...form.getFormProps()}>
          <Textarea
            name="note"
            defaultValue={note || ""}
            error={form.error("note")}
            label="Huskelapp"
            placeholder="Skriv ditt notat her..."
          />
          <div className="mt-4">
            <Label>Farge</Label>
            <div className="flex flex-row flex-wrap gap-2">
              {Object.entries(COLOR_MAP).map(([colorKey, label]) => (
                <button
                  key={colorKey}
                  type="button"
                  onClick={() => setLocalColor(colorKey)}
                  className="size-12 cursor-pointer rounded"
                  style={{
                    backgroundColor: `var(--ax-${colorKey})`,
                    border: localColor === colorKey ? "3px solid black" : "1px solid #999",
                  }}
                  title={label}
                />
              ))}
            </div>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Avbryt
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Slett
        </Button>
        <Button onClick={() => form.submit()}>Lagre</Button>
      </Modal.Footer>
    </Modal>
  );
}
