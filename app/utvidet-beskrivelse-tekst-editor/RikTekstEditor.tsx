import { BulletListIcon, LinkIcon, NumberListIcon } from "@navikt/aksel-icons";
import { Heading } from "@navikt/ds-react";
import { htmlToBlocks } from "@portabletext/block-tools";
import {
  BlockAnnotationRenderProps,
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
    { name: "strong", title: "B", description: "Fet" },
    { name: "em", title: "I", description: "Kursiv" },
  ],
  // Annotations are more complex marks that can hold data
  annotations: [
    {
      name: "link",
      title: "Lenke",
      icon: <LinkIcon title={"Lenke"} />,
      fields: [{ name: "href", type: "string" }],
    },
  ],
  // Styles apply to entire text blocks
  // There's always a 'normal' style that can be considered the paragraph style
  styles: [
    { name: "normal", title: "Brødtekst" },
    { name: "h1", title: "Tittel" },
    { name: "h2", title: "Undertittel" },
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
  // @ts-expect-error // TODO Må fikes typefeil her
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
                props.onChange(toHTML(event.value));
              }
            }
          }}
        />
        <div className={"rounded-(--a-border-radius-medium) border-1 border-(--a-border-default)"}>
          <RikTekstEditorToolbar />
          <PortableTextEditable
            className={"p-2"}
            readOnly={props.readOnly}
            renderStyle={renderStyle}
            renderDecorator={renderDecorator}
            renderAnnotation={renderAnnotation}
            renderListItem={renderListItem}
          />
        </div>
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

function renderAnnotation(props: PropsWithChildren<BlockAnnotationRenderProps>) {
  if (props.schemaType.name === "link") {
    return <span className={"text-(--a-text-action) underline"}>{props.children}</span>;
  }

  return <>{props.children}</>;
}
