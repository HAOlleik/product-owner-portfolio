import { createContext, useContext } from "react";

import type { GlossaryKey } from "../types/glossary";

export interface GlossaryContextValue {
  openGlossary: (term: GlossaryKey) => void;
}

export const GlossaryContext = createContext<GlossaryContextValue | null>(null);

export const useGlossary = (): GlossaryContextValue => {
  const context = useContext(GlossaryContext);

  if (!context) {
    throw new Error("useGlossary must be used inside GlossaryProvider");
  }

  return context;
};
