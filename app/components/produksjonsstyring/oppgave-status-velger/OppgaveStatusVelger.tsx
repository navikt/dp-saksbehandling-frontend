import { BodyShort, Button, Detail } from "@navikt/ds-react";
import { useSearchParams } from "react-router";

export function OppgaveStatusVelger() {
  const [searchParams, setSearchParams] = useSearchParams();
  const emneknaggerParams = searchParams.getAll("emneknagg");

  function toggleOppgaveStatus(key: string, value: string, checked: boolean) {
    if (!checked) {
      searchParams.delete(key, value);
    } else {
      searchParams.append(key, value);
    }
    setSearchParams(searchParams);
  }

  return (
    <div>
      <BodyShort weight={"semibold"}>Status</BodyShort>
      <div className={"flex gap-2"}>
        <Button className={"h-[120px] w-[120px] text-left"}>
          <Detail>Alle statuser</Detail>
          <BodyShort weight={"semibold"} className={"mt-2"}>
            16
          </BodyShort>
        </Button>

        <Button
          className={"h-[120px] w-[120px] text-left"}
          variant={emneknaggerParams.includes("Til behandling") ? "primary" : "secondary"}
          onClick={() =>
            toggleOppgaveStatus(
              "emneknagg",
              "Til behandling",
              !emneknaggerParams.includes("Til behandling"),
            )
          }
        >
          <Detail>Til behandling</Detail>
          <BodyShort weight={"semibold"} className={"mt-2"}>
            5
          </BodyShort>
        </Button>

        <Button
          className={"h-[120px] w-[120px] text-left"}
          variant={emneknaggerParams.includes("Til kontrollxx") ? "primary" : "secondary"}
          onClick={() =>
            toggleOppgaveStatus(
              "emneknagg",
              "Til kontroll",
              !emneknaggerParams.includes("Til kontrollxx"),
            )
          }
        >
          <Detail>Til kontroll</Detail>
          <BodyShort weight={"semibold"} className={"mt-2"}>
            11
          </BodyShort>
        </Button>
      </div>
    </div>
  );
}
