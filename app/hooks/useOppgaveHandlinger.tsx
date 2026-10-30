import {
  ArrowUndoIcon,
  EyeWithPupilIcon,
  PersonGavelIcon,
  PersonPencilIcon,
  SkipBackwardIcon,
  XMarkIcon,
} from "@navikt/aksel-icons";
import { useForm } from "@rvf/react-router";
import { useRef, useState } from "react";
import { useLocation, useNavigate, useNavigation, useParams } from "react-router";
import { z } from "zod";

import { components } from "@/openapi/saksbehandling-typer";
import {
  useLeggTilbakeOppgaveMutation,
  useReturnerTilSaksbehandlerMutation,
  useTildelOppgaveMutation,
} from "~/api/oppgave-hooks";
import { OppgaveValgHandling } from "~/components/oppgave-valg/OppgaveValgKnapp";
import { IGyldigeOppgaveHandlinger } from "~/context/oppgave-context";
import { useAktivOppgavelisteUrl } from "~/hooks/useAktivOppgaveliste";
import { useAktivtOppgaveSok } from "~/hooks/useAktivtOppgaveSok";
import { hentValideringAvbrytOppgave } from "~/utils/validering.util";

interface Oppgave {
  oppgaveId: string;
  behandlingId: string;
  behandlingType: components["schemas"]["BehandlingType"];
}

export function useOppgaveHandlinger({ oppgaveId, behandlingId, behandlingType }: Oppgave) {
  const params = useParams();
  const { pathname } = useLocation();
  const navigation = useNavigation();
  const navigate = useNavigate();
  const aktivtOppgaveSok = useAktivtOppgaveSok();
  const oppgavelisteUrl = useAktivOppgavelisteUrl();
  const [aktivHandling, setAktivHandling] = useState<IGyldigeOppgaveHandlinger>();
  const handlingPågårRef = useRef(false);
  const { mutateAsync: returnerTilMeg, isPending: returnererTilMeg } =
    useReturnerTilSaksbehandlerMutation();
  const { mutateAsync: tildelOppgave, isPending: tildelerOppgave } = useTildelOppgaveMutation();
  const { mutateAsync: leggTilbakeOppgave, isPending: leggerTilbakeOppgave } =
    useLeggTilbakeOppgaveMutation();
  const leggTilbakeModalRef = useRef<HTMLDialogElement>(null);
  const avbrytModalRef = useRef<HTMLDialogElement>(null);

  function navigerTilOppgaveliste() {
    if (params.oppgaveId === oppgaveId && aktivtOppgaveSok) {
      return navigate(oppgavelisteUrl);
    }
  }

  const leggTilbakeForm = useForm({
    schema: z.object({
      årsak: z.enum(["MANGLER_KOMPETANSE", "FRAVÆR", "INHABILITET", "KONTROLL_AV_KLAGE", "ANNET"], {
        message: "Du må velge en årsak",
      }),
    }),
    defaultValues: {
      årsak: "" as components["schemas"]["LeggTilbakeAarsak"],
    },
    submitSource: "state",
    resetAfterSubmit: true,
    handleSubmit: (data) =>
      utforHandling("legg-tilbake-oppgave", async () => {
        await leggTilbakeOppgave({ oppgaveId, årsak: data.årsak });
        await navigerTilOppgaveliste();
        leggTilbakeModalRef.current?.close();
      }),
  });
  const avbrytForm = useForm({
    method: "post",
    action: pathname,
    submitSource: "state",
    schema: hentValideringAvbrytOppgave(),
    onSubmitSuccess: () => avbrytModalRef.current?.close(),
    defaultValues: {
      _action: "avbryt-oppgave",
      oppgaveId,
      årsak: "" as components["schemas"]["AvbrytOppgaveAarsak"],
    },
  });
  const isPending =
    aktivHandling !== undefined ||
    returnererTilMeg ||
    tildelerOppgave ||
    leggerTilbakeOppgave ||
    avbrytForm.formState.isSubmitting ||
    navigation.state !== "idle";
  const oppgaveUrl = {
    RETT_TIL_DAGPENGER: `/oppgave/${oppgaveId}/dagpenger-rett/${behandlingId}/behandle`,
    KLAGE: `/oppgave/${oppgaveId}/klage/${behandlingId}`,
    INNSENDING: `/oppgave/${oppgaveId}/innsending/${behandlingId}`,
    TILBAKEKREVING: `/oppgave/${oppgaveId}/tilbakekreving/${behandlingId}`,
    OPPFØLGING: `/oppgave/${oppgaveId}/oppfolging/${behandlingId}`,
  }[behandlingType];

  function utforHandling(valg: IGyldigeOppgaveHandlinger, handling: () => Promise<unknown>) {
    if (handlingPågårRef.current || isPending) {
      return Promise.resolve();
    }
    handlingPågårRef.current = true;
    setAktivHandling(valg);

    function avsluttHandling() {
      handlingPågårRef.current = false;
      setAktivHandling(undefined);
    }

    return handling().then(avsluttHandling, avsluttHandling);
  }

  const handlinger: Partial<Record<IGyldigeOppgaveHandlinger, OppgaveValgHandling>> = {
    "se-oppgave": {
      label: "Se oppgave",
      icon: <EyeWithPupilIcon aria-hidden />,
      loading: navigation.state === "loading" && navigation.location.pathname === oppgaveUrl,
      to: oppgaveUrl,
    },
    "behandle-oppgave": {
      label: "Behandle oppgave",
      icon: <PersonPencilIcon aria-hidden />,
      loading: aktivHandling === "behandle-oppgave",
      onClick: () => {
        void utforHandling("behandle-oppgave", async () => {
          await tildelOppgave({ oppgaveId, behandlingId });
        });
      },
    },
    "kontroller-oppgave": {
      label: "Kontroller oppgave",
      icon: <PersonGavelIcon aria-hidden />,
      loading: aktivHandling === "kontroller-oppgave",
      onClick: () => {
        void utforHandling("kontroller-oppgave", async () => {
          await tildelOppgave({ oppgaveId, behandlingId });
        });
      },
    },
    "legg-tilbake-oppgave": {
      label: "Legg tilbake",
      icon: <ArrowUndoIcon aria-hidden />,
      loading: aktivHandling === "legg-tilbake-oppgave",
      onClick: () => {
        if (!isPending) {
          leggTilbakeModalRef.current?.showModal();
        }
      },
    },
    "avbryt-behandling": {
      label: "Avbryt oppgave",
      icon: <XMarkIcon aria-hidden />,
      loading: avbrytForm.formState.isSubmitting,
      onClick: () => {
        if (!isPending) {
          avbrytModalRef.current?.showModal();
        }
      },
    },
    "returner-oppgave-til-meg": {
      label: "Returner til meg",
      icon: <SkipBackwardIcon aria-hidden />,
      loading: aktivHandling === "returner-oppgave-til-meg",
      onClick: () => {
        void utforHandling("returner-oppgave-til-meg", async () => {
          await returnerTilMeg({ oppgaveId, årsak: "ANNET" });
          await navigerTilOppgaveliste();
        });
      },
    },
  };

  return {
    handlinger,
    isPending,
    leggTilbake: { modalRef: leggTilbakeModalRef, form: leggTilbakeForm },
    avbryt: { modalRef: avbrytModalRef, form: avbrytForm },
  };
}
