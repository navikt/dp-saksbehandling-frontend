import { BulletListIcon, NumberListIcon } from "@navikt/aksel-icons";
import { Heading } from "@navikt/ds-react";
import { htmlToBlocks } from "@portabletext/block-tools";
import {
  BlockDecoratorRenderProps,
  BlockListItemRenderProps,
  BlockStyleRenderProps,
  defineSchema,
  EditorProvider,
  PortableTextBlock,
  PortableTextEditable,
} from "@portabletext/editor";
import { EventListenerPlugin } from "@portabletext/editor/plugins";
import { toHTML } from "@portabletext/to-html";
import { PropsWithChildren, useState } from "react";

import { RikTekstEditorToolbar } from "~/utvidet-beskrivelse-tekst-editor/RikTekstEditorToolbar";

import styles from "./RikTekstEditor.module.css";

export const schemaDefinition = defineSchema({
  // Decorators are simple marks that don't hold any data
  decorators: [
    { name: "strong", title: "B" },
    { name: "em", title: "I" },
  ],
  // Annotations are more complex marks that can hold data
  annotations: [],
  // Styles apply to entire text blocks
  // There's always a 'normal' style that can be considered the paragraph style
  styles: [
    { name: "normal", title: "T" },
    { name: "h1", title: "H1" },
    { name: "h2", title: "H2" },
  ],
  // Lists apply to entire text blocks as well
  lists: [
    { name: "bullet", title: "Kulepunkt", icon: <BulletListIcon title={"Kulepunkt"} /> },
    { name: "number", title: "Nummerliste", icon: <NumberListIcon title={"Nummerliste"} /> },
  ],
  // Inline objects hold arbitrary data that can be inserted into the text
  inlineObjects: [],
  // Block objects hold arbitrary data that live side-by-side with text blocks
  blockObjects: [],
});

const blockContentType = {
  block: {
    name: "block",
  },
  span: { name: "span" },
  styles: schemaDefinition.styles,
  lists: schemaDefinition.lists,
  decorators: schemaDefinition.decorators,
  annotations: schemaDefinition.annotations,
  blockObjects: schemaDefinition.blockObjects,
  inlineObjects: schemaDefinition.inlineObjects,
};

interface IProps {
  tekst: string;
  onChange: (tekst: string) => void;
  readOnly?: boolean;
}

export function RikTekstEditor(props: IProps) {
  // TODO Konverter HTML til blokker igjen

  // @ts-expect-error // sad panda
  const blocks = htmlToBlocks(props.tekst, blockContentType);
  const [value, setValue] = useState<Array<PortableTextBlock> | undefined>(blocks);

  return (
    <div className={styles.editor}>
      {value && (
        <input name={"utvidet-beskrivelse"} value={toHTML(value)} hidden={true} readOnly={true} />
      )}
      <EditorProvider
        initialConfig={{
          schemaDefinition,
          initialValue: value,
        }}
      >
        <EventListenerPlugin
          on={(event) => {
            if (event.type === "mutation") {
              setValue(event.value);

              if (event.value) {
                console.log("change");
                props.onChange(toHTML(event.value));
              }
            }
          }}
        />

        <RikTekstEditorToolbar />
        <PortableTextEditable
          readOnly={props.readOnly}
          className={"rounded-(--a-border-radius-medium) border-1 border-(--a-border-default) p-2"}
          renderDecorator={renderDecorator}
          renderStyle={renderStyle}
          renderListItem={renderListItem}
        />
      </EditorProvider>
    </div>
  );
}

function renderDecorator(props: PropsWithChildren<BlockDecoratorRenderProps>) {
  if (props.value === "strong") {
    return <strong>{props.children}</strong>;
  }

  if (props.value === "em") {
    return <em>{props.children}</em>;
  }

  if (props.value === "underline") {
    return <u>{props.children}</u>;
  }

  return <>{props.children}</>;
}

function renderStyle(props: PropsWithChildren<BlockStyleRenderProps>) {
  if (props.schemaType.value === "h1") {
    return (
      <Heading size={"large"} level={"1"}>
        {props.children}
      </Heading>
    );
  }

  if (props.schemaType.value === "h2") {
    return (
      <Heading size={"medium"} level={"2"}>
        {props.children}
      </Heading>
    );
  }

  return <>{props.children}</>;
}

// CSSen bestemmer hvordan listeelementer skal se ut
function renderListItem(props: PropsWithChildren<BlockListItemRenderProps>) {
  return <>{props.children}</>;
}
