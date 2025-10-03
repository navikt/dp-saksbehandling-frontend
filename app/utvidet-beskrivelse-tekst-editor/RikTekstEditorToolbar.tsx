import { Button, Popover, TextField, Tooltip } from "@navikt/ds-react";
import { useEditor, useEditorSelector } from "@portabletext/editor";
import * as selectors from "@portabletext/editor/selectors";
import { ReactElement, useRef, useState } from "react";

import { schemaDefinition } from "~/utvidet-beskrivelse-tekst-editor/RikTekstEditor";

export function RikTekstEditorToolbar() {
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

  return (
    <div className={"border-b-1 border-(--a-border-default) py-1"}>
      <span className={"border-r-1 border-(--a-border-subtle) px-1"}>{styleButtons}</span>
      <span className={"border-r-1 border-(--a-border-subtle) px-1"}>{decoratorButtons}</span>
      <span className={"border-r-1 border-(--a-border-subtle) px-1"}>{annotationButtons}</span>
      <span className={"px-1"}>{listButtons}</span>
    </div>
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
