import { BulletListIcon, LinkIcon, NumberListIcon } from "@navikt/aksel-icons";
import { Alert, Heading, Select } from "@navikt/ds-react";
import { htmlToBlocks } from "@portabletext/block-tools";
import {
  defineAnnotation,
  defineDecorator,
  defineInlineObject,
  defineSchema,
  defineTextBlock,
  EditorProvider,
  PortableTextEditable,
} from "@portabletext/editor";
import { EventListenerPlugin, NodePlugin } from "@portabletext/editor/plugins";
import { ListIndexProvider } from "@portabletext/plugin-list-index";
import { toHTML } from "@portabletext/to-html";
import classnames from "classnames";
import { ChangeEvent, useState } from "react";

import { useSanityBrevMalerQuery } from "~/api/sanity-hooks";
import { RikTekstEditorToolbar } from "~/components/melding-om-vedtak/utvidet-beskrivelse-tekst-editor/RikTekstEditorToolbar";
import { IOpplysningPeriodeVerdi } from "~/context/melding-om-vedtak-context";
import { useMeldingOmVedtak } from "~/hooks/useMeldingOmVedtak";
import { ISanityBrevMal } from "~/sanity/sanity-types";

import { ListItemWrapper } from "./editor-komponenter/ListItemWrapper";
import { RegelmotorOpplysning } from "./editor-komponenter/RegelmotorOpplysning";
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
    { name: "h3", title: "Deloverskrift" },
  ],
  // Lists apply to entire text blocks as well
  lists: [
    { name: "bullet", title: "Kulepunkt", icon: <BulletListIcon title={"Kulepunkt"} /> },
    { name: "number", title: "Nummerliste", icon: <NumberListIcon title={"Nummerliste"} /> },
  ],
  // Inline objects hold arbitrary data that can be inserted into the text
  inlineObjects: [
    {
      name: "regelmotorOpplysningReference",
      title: "RegelmotorOpplysning",
      fields: [
        { name: "opplysningTypeId", type: "string" },
        { name: "navn", type: "string" },
        { name: "datatype", type: "string" },
      ],
    },

    {
      name: "regelmotorOpplysning",
      title: "RegelmotorOpplysning",
      fields: [
        { name: "uuid", type: "string" },
        { name: "opplysningTypeId", type: "string" },
        { name: "navn", type: "string" },
        { name: "datatype", type: "string" },
      ],
    },
  ],
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

function lagHtmlKomponenter(opplysningPeriodeVerdier: IOpplysningPeriodeVerdi[]) {
  return {
    components: {
      types: {
        regelmotorOpplysningReference: ({
          value,
        }: {
          value: { _key: string; reference?: { opplysningTypeId?: string; navn?: string } };
        }) => {
          const verdi = opplysningPeriodeVerdier.find(
            (periode) => periode.uuid === value?._key,
          )?.verdi;

          if (!verdi) {
            return `<span class="regelmotor-opplysning">** MANGLER VERDI FOR OPPLYSNING ${value?.reference?.navn ?? ""} **</span>`;
          }
          return `<span class="regelmotor-opplysning">${verdi}</span>`;
        },
        regelmotorOpplysning: ({
          value,
        }: {
          value: { uuid?: string; opplysningTypeId?: string; navn?: string };
        }) => {
          const verdi = opplysningPeriodeVerdier.find(
            (periode) => periode.uuid === value?.uuid,
          )?.verdi;

          if (!verdi) {
            return `<span class="regelmotor-opplysning">** MANGLER VERDI FOR OPPLYSNING ${value?.navn ?? ""} **</span>`;
          }
          return `<span class="regelmotor-opplysning">${verdi}</span>`;
        },
      },
    },
  };
}

const textBlock = defineTextBlock({
  type: "block",
  render: ({ attributes, children, node, path }) => {
    let content = children;

    if (node.style === "h1") {
      content = (
        <Heading size={"large"} level={"1"}>
          {content}
        </Heading>
      );
    }

    if (node.style === "h2") {
      content = (
        <Heading size={"medium"} level={"2"}>
          {content}
        </Heading>
      );
    }

    if (node.style === "h3") {
      content = (
        <Heading size={"small"} level={"3"}>
          {content}
        </Heading>
      );
    }

    if (node.listItem !== undefined) {
      content = (
        <ListItemWrapper node={node} path={path}>
          {content}
        </ListItemWrapper>
      );
    }

    return (
      <div {...attributes} style={{ marginBlockEnd: "0.5em" }}>
        {content}
      </div>
    );
  },
});

const regelmotorOpplysning = defineInlineObject({
  type: "regelmotorOpplysning",
  render: ({ node }) => {
    const value = node as unknown as {
      opplysningTypeId?: string;
      navn: string;
      uuid: string;
    };
    return (
      <RegelmotorOpplysning
        opplysningTypeId={value.opplysningTypeId}
        navn={value.navn}
        uuid={value.uuid}
      />
    );
  },
});

const regelmotorOpplysningReference = defineInlineObject({
  type: "regelmotorOpplysningReference",
  render: ({ node }) => {
    const value = node as unknown as {
      _key: string;
      reference: { opplysningTypeId?: string; navn: string };
    };

    return (
      <RegelmotorOpplysning
        opplysningTypeId={value.reference.opplysningTypeId}
        navn={value.reference.navn}
        uuid={value._key}
      />
    );
  },
});

const strong = defineDecorator({
  type: "strong",
  render: (props) => <strong>{props.children}</strong>,
});

const em = defineDecorator({
  type: "em",
  render: (props) => <em>{props.children}</em>,
});

const underline = defineDecorator({
  type: "underline",
  render: (props) => <u>{props.children}</u>,
});

const link = defineAnnotation({
  type: "link",
  render: ({ children }) => <span className={"text-(--ax-text-accent) underline"}>{children}</span>,
});

const nodes = [
  textBlock,
  regelmotorOpplysning,
  regelmotorOpplysningReference,
  strong,
  em,
  underline,
  link,
];

interface IProps {
  tekst: string;
  onChange: (tekst: string, flushDebounce?: boolean) => void;
  readOnly?: boolean;
}

export function RikTekstEditor(props: IProps) {
  const { opplysningPeriodeVerdier } = useMeldingOmVedtak();
  const sanityBrevMaler = useSanityBrevMalerQuery();
  const [valgtBrevMal, setValgtBrevMal] = useState<ISanityBrevMal | undefined>();
  // @ts-expect-error // Det er feil i typene fra Sanity.
  const initialBlocks = htmlToBlocks(props.tekst, blockContentType);
  const htmlKomponenter = lagHtmlKomponenter(opplysningPeriodeVerdier);
  const initialValue = valgtBrevMal
    ? (valgtBrevMal?.brevBlokker?.flatMap((blokk) => blokk.innhold) ?? [])
    : initialBlocks;

  function handleBrevmalSelect(event: ChangeEvent<HTMLSelectElement>) {
    const selectedBrevMal = sanityBrevMaler.find(
      (brevMal) => brevMal.textId === event.currentTarget.value,
    );
    const html = toHTML(
      selectedBrevMal?.brevBlokker?.flatMap((blokk) => blokk.innhold) ?? [],
      htmlKomponenter,
    );
    props.onChange(html);
    setValgtBrevMal(selectedBrevMal);
  }

  return (
    <>
      <Select
        size={"small"}
        className={"mb-4"}
        label="Brevmal"
        value={valgtBrevMal?.textId}
        onChange={handleBrevmalSelect}
        readOnly={props.readOnly}
      >
        <option value="" hidden={true}>
          Velg brevmal
        </option>
        <option value={"ingen"}>Ingen</option>

        {sanityBrevMaler.map((brevMal) => (
          <option key={brevMal.textId} value={brevMal.textId}>
            {brevMal.navn}
          </option>
        ))}
      </Select>

      {!props.readOnly && (
        <Alert variant={"info"} size={"small"} className={"mb-4"}>
          Hvis du endrer brevmal forsvinner all nåværende tekst i editoren.
        </Alert>
      )}

      <div className={styles.editor}>
        {initialValue && (
          <input
            name={"utvidet-beskrivelse"}
            value={toHTML(initialValue, htmlKomponenter)}
            hidden={true}
            readOnly={true}
          />
        )}

        <EditorProvider
          key={valgtBrevMal?.textId || "default"}
          initialConfig={{
            schemaDefinition,
            readOnly: props.readOnly,
            initialValue: initialValue,
          }}
        >
          <EventListenerPlugin
            on={(event) => {
              if (event.type === "mutation" && event.value) {
                console.log(toHTML(event.value, htmlKomponenter));
                props.onChange(toHTML(event.value, htmlKomponenter));
              }
            }}
          />
          <ListIndexProvider>
            <div
              className={classnames(styles.editorWrapper, {
                [styles.editorWrapperReadonly]: props.readOnly,
              })}
            >
              {!props.readOnly && <RikTekstEditorToolbar />}

              <NodePlugin nodes={nodes} />
              <PortableTextEditable className={"p-2"} readOnly={props.readOnly} />
            </div>
          </ListIndexProvider>
        </EditorProvider>
      </div>
    </>
  );
}
