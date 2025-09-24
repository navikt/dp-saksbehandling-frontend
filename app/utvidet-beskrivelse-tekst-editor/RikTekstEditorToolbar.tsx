import { Button } from "@navikt/ds-react";
import { useEditor, useEditorSelector } from "@portabletext/editor";
import * as selectors from "@portabletext/editor/selectors";
import { ReactElement } from "react";

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

  return (
    <div className={"mb-1 flex gap-2"}>
      {decoratorButtons}
      {styleButtons}
      {listButtons}
    </div>
  );
}

interface IToolbarButton {
  name: string;
  title: string;
  icon?: ReactElement;
}

function DecoratorButton(props: IToolbarButton) {
  const editor = useEditor();
  const active = useEditorSelector(editor, selectors.isActiveDecorator(props.name));

  return (
    <Button
      size={"xsmall"}
      variant={active ? "primary" : "primary-neutral"}
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
      {props.icon ? props.icon : props.title}
    </Button>
  );
}

function StyleButton(props: IToolbarButton) {
  const editor = useEditor();
  const active = useEditorSelector(editor, selectors.isActiveStyle(props.name));

  return (
    <Button
      size={"xsmall"}
      variant={active ? "primary" : "primary-neutral"}
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
      variant={active ? "primary" : "primary-neutral"}
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
