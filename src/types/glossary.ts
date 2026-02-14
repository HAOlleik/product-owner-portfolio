export type GlossaryKey =
  | "INVEST"
  | "User Story Mapping"
  | "Acceptance Criteria"
  | "MVP Slice"
  | "Persona vs Proto-Persona"
  | "Product Vision vs Product Goal"
  | "Traceability"
  | "First Contact Resolution (FCR)"
  | "Average Handle Time (AHT)"
  | "Reopen Rate"
  | "Assumptions vs Risks";

export interface GlossaryEntry {
  term: GlossaryKey;
  aliases: string[];
  shortDefinition: string;
  longDefinition: string[];
  whyItMatters: string[];
}

export type GlossaryDictionary = Record<GlossaryKey, GlossaryEntry>;
