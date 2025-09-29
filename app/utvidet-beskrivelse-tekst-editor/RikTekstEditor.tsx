import {
  BulletListIcon,
  LinkIcon,
  NumberListIcon,
  QuestionmarkDiamondIcon,
} from "@navikt/aksel-icons";
import { Heading, Select, Tooltip } from "@navikt/ds-react";
import { htmlToBlocks } from "@portabletext/block-tools";
import {
  BlockAnnotationRenderProps,
  BlockChildRenderProps,
  BlockDecoratorRenderProps,
  BlockListItemRenderProps,
  BlockStyleRenderProps,
  defineSchema,
  EditorProvider,
  PortableTextEditable,
} from "@portabletext/editor";
import { EventListenerPlugin } from "@portabletext/editor/plugins";
import { toHTML } from "@portabletext/to-html";
import { ChangeEvent, PropsWithChildren, useState } from "react";

import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { ISanityBrevMal } from "~/sanity/sanity-types";
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
  inlineObjects: [{ name: "opplysningReference", title: "Opplysning" }],
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
  const { sanityBrevMaler } = useTypedRouteLoaderData(
    "routes/oppgave.$oppgaveId.dagpenger-rett.$behandlingId.melding-om-vedtak",
  );

  const [valgtBrevMal, setValgtBrevMal] = useState<ISanityBrevMal | undefined>();
  // @ts-expect-error // TODO Må fikes typefeil her
  const initialBlocks = htmlToBlocks(props.tekst, blockContentType);
  const initialValue = [
    ...initialBlocks,
    ...(valgtBrevMal?.brevBlokker?.flatMap((blokk) => blokk.innhold) ?? []),
  ];

  function handleBrevmalSelect(event: ChangeEvent<HTMLSelectElement>) {
    const selectedBrevMal = sanityBrevMaler.find(
      (brevMal) => brevMal.textId === event.currentTarget.value,
    );
    setValgtBrevMal(selectedBrevMal);
  }

  return (
    <>
      <Select className={"mb-2"} label="Brevmal" onChange={handleBrevmalSelect}>
        <option value="" hidden={true}>
          Velg brevmal
        </option>
        <option value={"ingen"}>Ingen</option>

        {sanityBrevMaler.map((brevMal) => (
          <option key={brevMal.textId} value={brevMal.textId}>
            {brevMal.textId}
          </option>
        ))}
      </Select>

      <div className={styles.editor}>
        {initialValue && (
          <input
            name={"utvidet-beskrivelse"}
            value={toHTML(initialValue)}
            hidden={true}
            readOnly={true}
          />
        )}
        <EditorProvider
          key={valgtBrevMal?.textId || "default"}
          initialConfig={{
            schemaDefinition,
            initialValue: initialValue,
          }}
        >
          <EventListenerPlugin
            on={(event) => {
              if (event.type === "mutation" && event.value) {
                props.onChange(toHTML(event.value));
              }
            }}
          />
          <div
            className={"rounded-(--a-border-radius-medium) border-1 border-(--a-border-default)"}
          >
            <RikTekstEditorToolbar />
            <PortableTextEditable
              className={"p-2"}
              readOnly={props.readOnly}
              renderStyle={renderStyle}
              renderDecorator={renderDecorator}
              renderAnnotation={renderAnnotation}
              renderListItem={renderListItem}
              renderChild={renderChild}
            />
          </div>
        </EditorProvider>
      </div>
    </>
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

function renderChild(props: PropsWithChildren<BlockChildRenderProps>) {
  if (props.schemaType.name === "opplysningReference") {
    return (
      // @ts-expect-error Denne blir generert basert på spørringen brevMalQuery i sanity-queries.ts. Usikker på hvordan vi skal få typet det riktig.
      <Tooltip content={`Mangler opplysning: ${props.value?.reference?.textId}`}>
        {/* @ts-expect-error Denne blir generert basert på spørringen brevMalQuery i sanity-queries.ts. Usikker på hvordan vi skal få typet det riktig.*/}
        <QuestionmarkDiamondIcon title={`Mangler opplysning: ${props.value?.reference?.textId}`} />
      </Tooltip>
    );
  }

  return <>{props.children}</>;
}
