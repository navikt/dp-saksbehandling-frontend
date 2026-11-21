import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router";
import invariant from "tiny-invariant";

import { vurderingerQueryOptions } from "~/api/behandling-hooks";
import { isAlert } from "~/utils/type-guards";

export function useOpplysningLagret() {
  const queryClient = useQueryClient();
  const { behandlingId } = useParams();
  invariant(behandlingId, "behandlingId er påkrevd");

  return async (responseData: unknown) => {
    if (isAlert(responseData) && responseData.variant === "success") {
      await queryClient.invalidateQueries({
        queryKey: vurderingerQueryOptions(behandlingId).queryKey,
      });
    }
  };
}
