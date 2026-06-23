import { DocPencilIcon } from "@navikt/aksel-icons";
import { Button, Modal, Textarea } from "@navikt/ds-react";
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

const COLOR_OPTIONS: { label: string; value: string }[] = [
  { label: "Neutral", value: "neutral" },
  { label: "Accent", value: "accent" },
  { label: "Success", value: "success" },
  { label: "Danger", value: "danger" },
  { label: "Warning", value: "warning" },
  { label: "Info", value: "info" },
  { label: "Brand Magenta", value: "brand-magenta" },
  { label: "Brand Beige", value: "brand-beige" },
  { label: "Brand Blue", value: "brand-blue" },
  { label: "Meta Purple", value: "meta-purple" },
  { label: "Meta Lime", value: "meta-lime" },
];

interface NoteButtonProps {
  onClick: () => void;
  noteKey: string;
}

export function NoteButton({ onClick, noteKey }: NoteButtonProps) {
  const { note, color } = useUpdateNoteData(noteKey);
  const hasNote = typeof note === "string";

  const title = note || color;

  return (
    <button
      title={title || "Legg til notat"}
      style={hasNote ? { backgroundColor: `var(--ax-bg-${color}-strong)` } : {}}
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
    schema: z.object({ note: z.string().optional() }),
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
    <Modal
      open={!!noteKey}
      onClose={onClose}
      header={{ heading: "Notat" }}
      aria-labelledby="modal-heading"
    >
      <Modal.Body>
        <form {...form.getFormProps()}>
          <Textarea
            {...form.getInputProps("note")}
            label="Skriv notat"
            placeholder="Skriv ditt notat her..."
          />
          <div style={{ marginTop: "1rem" }}>
            <p style={{ marginBottom: "0.5rem", fontSize: "0.875rem", fontWeight: "500" }}>Farge</p>
            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                flexWrap: "wrap",
              }}
            >
              {COLOR_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setLocalColor(option.value)}
                  style={{
                    width: "2rem",
                    height: "2rem",
                    backgroundColor: `var(--ax-bg-${option.value}-strong)`,
                    border: localColor === option.value ? "3px solid black" : "1px solid #999",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                  title={option.label}
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
