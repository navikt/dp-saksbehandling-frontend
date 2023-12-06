import { useNavigate } from "@remix-run/react";
import { RemixLink } from "~/components/RemixLink";
import { BodyShort } from "@navikt/ds-react";

export default function Dummy() {
  const navigate = useNavigate();
  return (
    <>
      <main>
        <BodyShort>
          Her skulle det vært en app som kunne redigere på inntekten, men i stedet har vi bare en
          tom nettside!
        </BodyShort>
        <RemixLink
          as={"Button"}
          to={""}
          onClick={() => {
            navigate(-1);
          }}
        >
          Gå tilbake
        </RemixLink>
      </main>
    </>
  );
}
