import { PortableText } from "@portabletext/react";
import { getSanityPortableTextComponents } from "~/sanity/SanityPortableTextComponents";
import type { ISanityBrevMal } from "~/sanity/sanity-types";
import styles from "./MeldingOmVedtakPreview.module.css";
import type { IBehandling } from "~/models/behandling.server";
import { Detail } from "@navikt/ds-react";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";

interface IProps {
  brevMal: ISanityBrevMal;
  fritekst: string;
  behandling: IBehandling;
}

export function MeldingOmVedtakPreview(props: IProps) {
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const fagsakId = props.behandling.opplysning.find((o) => o.navn === "fagsakId")?.verdi;

  return (
    <div className={styles.preview}>
      <div className={styles.header}>
        <div>
          <Detail>
            {`Navn: ${oppgave.person.fornavn} ${oppgave.person.mellomnavn ?? ""} ${oppgave.person.etternavn}`}
          </Detail>
          <Detail>{`Fødselsnummer: ${oppgave.person.ident}`}</Detail>
          <Detail>{`Fagsak Id: ${fagsakId}`}</Detail>
        </div>
        <NavLogo />
      </div>

      {props.brevMal?.brevBlokker.map((brevBlokk) => (
        <PortableText
          key={brevBlokk.textId}
          value={brevBlokk.innhold}
          components={getSanityPortableTextComponents(props.behandling, props.fritekst, false)}
        />
      ))}
    </div>
  );
}

function NavLogo() {
  return (
    <svg
      // width="100%"
      height="80px"
      viewBox="0 0 151 95"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_9800_2583)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M70.3403 94.9674C44.1589 94.9674 22.9297 73.7093 22.9297 47.4871C22.9297 21.262 44.1589 0 70.3403 0C96.5312 0 117.763 21.262 117.763 47.4871C117.763 73.7093 96.5312 94.9674 70.3403 94.9674Z"
          fill="#C30000"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 68.2195L9.6915 44.2002H19.0035L9.32439 68.2195H0Z"
          fill="#C30000"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M119.59 68.2195L129.157 44.2002H134.234L124.667 68.2195H119.59Z"
          fill="#C30000"
        />
        <mask id="mask0_9800_2583" maskUnits="userSpaceOnUse" x="138" y="44" width="13" height="25">
          <path d="M150.668 68.2195V44.2002H138.406V68.2195H150.668Z" fill="white" />
        </mask>
        <g mask="url(#mask0_9800_2583)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M138.406 68.2195L147.972 44.2002H150.668L141.101 68.2195H138.406Z"
            fill="#C30000"
          />
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M110.787 44.2002H102.358C102.358 44.2002 101.777 44.2002 101.571 44.714L96.9065 59.014L92.2457 44.714C92.0403 44.2002 91.4559 44.2002 91.4559 44.2002H75.249C74.8981 44.2002 74.604 44.4936 74.604 44.8427V49.699C74.604 45.8467 70.5107 44.2002 68.1138 44.2002C62.7463 44.2002 59.1532 47.7405 58.0344 53.1229C57.9738 49.5522 57.6774 48.2728 56.7169 46.9625C56.2757 46.3206 55.6381 45.7809 54.9437 45.3346C53.5139 44.4959 52.2302 44.2002 49.4712 44.2002H46.2317C46.2317 44.2002 45.6462 44.2002 45.4397 44.714L42.4921 52.029V44.8427C42.4921 44.4936 42.2002 44.2002 41.8499 44.2002H34.3538C34.3538 44.2002 33.775 44.2002 33.5645 44.714L30.5002 52.3202C30.5002 52.3202 30.1943 53.0807 30.8937 53.0807H33.775V67.5747C33.775 67.9345 34.058 68.2195 34.4189 68.2195H41.8499C42.2002 68.2195 42.4921 67.9345 42.4921 67.5747V53.0807H45.3886C47.0507 53.0807 47.4027 53.1263 48.0493 53.4281C48.4389 53.5754 48.7897 53.8733 48.9811 54.2168C49.373 54.9554 49.4712 55.8425 49.4712 58.4581V67.5747C49.4712 67.9345 49.7597 68.2195 50.1162 68.2195H57.2384C57.2384 68.2195 58.0434 68.2195 58.3617 67.4235L59.9401 63.5167C62.039 66.4605 65.4935 68.2195 69.7866 68.2195H70.7246C70.7246 68.2195 71.5346 68.2195 71.8551 67.4235L74.604 60.606V67.5747C74.604 67.9345 74.8981 68.2195 75.249 68.2195H82.5194C82.5194 68.2195 83.3216 68.2195 83.6438 67.4235C83.6438 67.4235 86.5515 60.1939 86.5627 60.1394H86.5672C86.6789 59.5379 85.92 59.5379 85.92 59.5379H83.3249V47.1328L91.4896 67.4235C91.8084 68.2195 92.6123 68.2195 92.6123 68.2195H101.201C101.201 68.2195 102.01 68.2195 102.328 67.4235L111.38 44.9782C111.693 44.2002 110.787 44.2002 110.787 44.2002ZM74.604 59.5379H69.7203C67.7764 59.5379 66.1951 57.9617 66.1951 56.0128C66.1951 54.0673 67.7764 52.4809 69.7203 52.4809H71.0861C73.0249 52.4809 74.604 54.0673 74.604 56.0128V59.5379Z"
          fill="#FEFEFE"
        />
      </g>
      <defs>
        <clipPath id="clip0_9800_2583">
          <rect width="151" height="95" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
