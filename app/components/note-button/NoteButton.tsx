import { DocPencilIcon } from "@navikt/aksel-icons";
import { Button, Modal, Textarea } from "@navikt/ds-react";
import { useEffect, useState } from "react";

type ColorKey =
  | "neutral"
  | "accent"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "brand-magenta"
  | "brand-beige"
  | "brand-blue"
  | "meta-purple"
  | "meta-lime";

const COLOR_OPTIONS: { label: string; value: ColorKey }[] = [
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
  const storedNote = localStorage?.getItem(`note_${noteKey}`);
  const storedColor = (localStorage?.getItem(`note_color_${noteKey}`) as ColorKey) || "meta-lime";
  const hasNote = typeof storedNote === "string";

  const title = storedNote || storedColor;

  return (
    <button
      title={title || "Legg til notat"}
      style={hasNote ? { backgroundColor: `var(--ax-bg-${storedColor}-strong)` } : {}}
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
  const [note, setNote] = useState("");
  const [color, setColor] = useState<ColorKey>("meta-lime");

  useEffect(() => {
    if (noteKey) {
      const storedNote = localStorage.getItem(`note_${noteKey}`);
      const storedColor =
        (localStorage.getItem(`note_color_${noteKey}`) as ColorKey) || "meta-lime";
      setNote(storedNote || "");
      setColor(storedColor);
    }
  }, [noteKey]);

  const handleSave = () => {
    localStorage.setItem(`note_${noteKey}`, note);
    localStorage.setItem(`note_color_${noteKey}`, color);
    onClose();
  };

  const handleDelete = () => {
    localStorage.removeItem(`note_${noteKey}`);
    localStorage.removeItem(`note_color_${noteKey}`);
    onClose();
  };

  return (
    <Modal
      open={!!noteKey}
      onClose={onClose}
      header={{ heading: "Notat" }}
      aria-labelledby="modal-heading"
    >
      <Modal.Body>
        <Textarea
          label="Skriv notat"
          value={note}
          onChange={(e) => setNote(e.target.value)}
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
                onClick={() => setColor(option.value)}
                style={{
                  width: "2rem",
                  height: "2rem",
                  backgroundColor: `var(--ax-bg-${option.value}-strong)`,
                  border: color === option.value ? "3px solid black" : "1px solid #999",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
                title={option.label}
              />
            ))}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Avbryt
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Slett
        </Button>
        <Button onClick={handleSave}>Lagre</Button>
      </Modal.Footer>
    </Modal>
  );
}
