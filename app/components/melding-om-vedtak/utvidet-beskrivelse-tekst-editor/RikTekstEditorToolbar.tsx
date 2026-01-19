import { Button, Popover, TextField, Tooltip, UNSAFE_Combobox } from "@navikt/ds-react";
import { useEditor, useEditorSelector } from "@portabletext/editor";
import * as selectors from "@portabletext/editor/selectors";
import { ReactElement, useRef, useState } from "react";

import { schemaDefinition } from "~/components/melding-om-vedtak/utvidet-beskrivelse-tekst-editor/RikTekstEditor";
import { useBehandling } from "~/hooks/useBehandling";
import { useMeldingOmVedtak } from "~/hooks/useMeldingOmVedtak";
import { ISanityRegelmotorOpplysning } from "~/sanity/sanity-types";

import styles from "./RikTekstEditor.module.css";

export function RikTekstEditorToolbar() {
  const { behandling } = useBehandling();
  const { sanityRegelmotorOpplysninger } = useMeldingOmVedtak();
  const decoratorButtons = schemaDefinition.decorators.map((decorator) => (
    <DecoratorButton key={decorator.name} {...decorator} />
  ));

  const styleButtons = schemaDefinition.styles.map((style) => (
    <StyleButton key={style.name} {...style} />
  ));

  const listButtons = schemaDefinition.lists.map((list) => (
    <ListButton key={list.name} {...list} />
  ));

  const annotationButtons = schemaDefinition.annotations.map((annotation) => (
    <AnnotationButton key={annotation.name} {...annotation} />
  ));

  const tilgjengeligeOpplysninger = sanityRegelmotorOpplysninger.filter((opplysning) =>
    behandling.opplysninger.some((o) => o.opplysningTypeId === opplysning.opplysningTypeId),
  );

  return (
    <div className={styles.editorToolbar}>
      <span className={styles.editorToolbarButton}>{styleButtons}</span>
      <span className={styles.editorToolbarButton}>{decoratorButtons}</span>
      <span className={styles.editorToolbarButton}>{annotationButtons}</span>
      <span className={styles.editorToolbarButton}>{listButtons}</span>
      <span className={styles.editorToolbarButton}>
        <OpplysningInlineButton opplysninger={tilgjengeligeOpplysninger} />
      </span>
    </div>
  );
}

function OpplysningInlineButton({ opplysninger }: { opplysninger: ISanityRegelmotorOpplysning[] }) {
  const editor = useEditor();
  const [erÅpen, setErÅpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  function handleInsertOpplysning(opplysning: ISanityRegelmotorOpplysning) {
    editor.send({
      type: "insert.inline object",
      inlineObject: {
        name: "regelmotorOpplysning",
        value: {
          opplysningTypeId: opplysning.opplysningTypeId,
          navn: opplysning.navn,
          datatype: opplysning.datatype,
        },
      },
    });
    setErÅpen(false);
    editor.send({ type: "focus" });
  }

  function handleOpplysningToggle(opplysningTypeId: string) {
    const opplysning = opplysninger.find((o) => o.opplysningTypeId === opplysningTypeId);
    if (opplysning) {
      handleInsertOpplysning(opplysning);
    }
  }

  return (
    <>
      <Button
        className={"ml-1"}
        ref={buttonRef}
        size="xsmall"
        variant="tertiary-neutral"
        onClick={() => setErÅpen(!erÅpen)}
        aria-expanded={erÅpen}
      >
        Sett inn opplysning
      </Button>

      <Popover
        className={"w-[450px]"}
        open={erÅpen}
        onClose={() => setErÅpen(false)}
        anchorEl={buttonRef.current}
        placement={"bottom-start"}
      >
        <Popover.Content>
          <UNSAFE_Combobox
            size={"small"}
            label="Velg opplysning"
            isListOpen={true}
            hideLabel={false}
            options={opplysninger.map((o) => ({
              label: o.navn,
              value: o.opplysningTypeId,
            }))}
            selectedOptions={[]}
            onToggleSelected={handleOpplysningToggle}
          />
        </Popover.Content>
      </Popover>
    </>
  );
}

interface IToolbarButton {
  name: string;
  title: string;
  icon?: ReactElement;
  description?: string;
}

function DecoratorButton(props: IToolbarButton) {
  const editor = useEditor();
  const active = useEditorSelector(editor, selectors.isActiveDecorator(props.name));

  return (
    <Tooltip content={props.description || ""}>
      <Button
        size={"xsmall"}
        variant={active ? "tertiary" : "tertiary-neutral"}
        onClick={() => {
          // Toggle the decorator
          editor.send({
            type: "decorator.toggle",
            decorator: props.name,
          });
          // Pressing this button steals focus so let's focus the editor again
          editor.send({ type: "focus" });
        }}
      >
        {props.icon ? props.icon : props.title === "I" ? <em>I</em> : props.title}
      </Button>
    </Tooltip>
  );
}

function StyleButton(props: IToolbarButton) {
  const editor = useEditor();
  const active = useEditorSelector(editor, selectors.isActiveStyle(props.name));

  return (
    <Button
      size={"xsmall"}
      variant={active ? "tertiary" : "tertiary-neutral"}
      onClick={() => {
        editor.send({ type: "style.toggle", style: props.name });
        editor.send({ type: "focus" });
      }}
    >
      {props.icon ? props.icon : props.title}
    </Button>
  );
}

function ListButton(props: IToolbarButton) {
  const editor = useEditor();
  const active = useEditorSelector(editor, selectors.isActiveListItem(props.name));
  return (
    <Button
      size={"xsmall"}
      variant={active ? "tertiary" : "tertiary-neutral"}
      onClick={() => {
        editor.send({
          type: "list item.toggle",
          listItem: props.name,
        });
        editor.send({ type: "focus" });
      }}
    >
      {props.icon ? props.icon : props.title}
    </Button>
  );
}

function AnnotationButton(props: IToolbarButton) {
  const editor = useEditor();
  const active = useEditorSelector(editor, selectors.isActiveAnnotation(props.name));
  const [erÅpen, setErÅpen] = useState(false);
  const [lenkeUrl, setLenkeUrl] = useState("");
  const buttonRef = useRef<HTMLButtonElement>(null);

  function handleLinkSubmit() {
    if (lenkeUrl.trim()) {
      editor.send({
        type: "annotation.add",
        annotation: {
          name: props.name,
          value: { href: lenkeUrl.trim() },
        },
      });
      setErÅpen(false);
      setLenkeUrl("");
      editor.send({ type: "focus" });
    }
  }

  if (props.name === "link") {
    return (
      <>
        <Button
          ref={buttonRef}
          size="xsmall"
          variant={active ? "tertiary" : "tertiary-neutral"}
          onClick={() => {
            if (active) {
              editor.send({
                type: "annotation.remove",
                annotation: {
                  name: props.name,
                },
              });
              editor.send({ type: "focus" });
            } else {
              setErÅpen(!erÅpen);
            }
          }}
          aria-expanded={erÅpen}
        >
          {props.icon ? props.icon : props.title}
        </Button>

        <Popover open={erÅpen} onClose={() => setErÅpen(false)} anchorEl={buttonRef.current}>
          <Popover.Content>
            <TextField
              size={"small"}
              label="URL"
              value={lenkeUrl}
              onChange={(e) => setLenkeUrl(e.target.value)}
              placeholder="Skriv inn url"
            />
            <div className="mt-2 flex gap-2">
              <Button size="xsmall" variant="secondary" onClick={() => setErÅpen(false)}>
                Avbryt
              </Button>
              <Button size="xsmall" onClick={handleLinkSubmit}>
                Legg til
              </Button>
            </div>
          </Popover.Content>
        </Popover>
      </>
    );
  }

  return (
    <button
      style={{
        textDecoration: active ? "underline" : "unset",
      }}
      onClick={() => {
        if (active) {
          editor.send({
            type: "annotation.remove",
            annotation: {
              name: props.name,
            },
          });
        } else {
          editor.send({
            type: "annotation.add",
            annotation: {
              name: props.name,
              value: props.name === "link" ? { href: "https://example.com" } : {},
            },
          });
        }
        editor.send({ type: "focus" });
      }}
    >
      {props.icon ? props.icon : props.title}
    </button>
  );
}
