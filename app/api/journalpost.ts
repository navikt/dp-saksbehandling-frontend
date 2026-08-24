import { JournalpostQuery } from "@/graphql/generated/saf/graphql";
import { IAlert } from "~/context/alert-context";

import { apiGet } from "./util";

export type Journalpost = JournalpostQuery["journalpost"];
export type JournalpostResponse = Journalpost | IAlert;

export function fetchJournalpost(journalpostId: string) {
  return apiGet<JournalpostResponse>(`/api/journalpost/${journalpostId}`);
}
