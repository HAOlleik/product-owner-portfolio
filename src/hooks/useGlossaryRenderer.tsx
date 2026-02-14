import type { ReactNode } from "react";

import { glossary } from "../content/glossary";
import { useGlossary } from "../context/glossary-context";
import type { GlossaryKey } from "../types/glossary";
import { tokenizeByGlossaryTerms } from "../utils/textTokenize";
import { TooltipTerm } from "../components/TooltipTerm/TooltipTerm";

export type GlossaryTextRenderer = (
  text: string,
  keyPrefix: string,
) => ReactNode[];

interface UseGlossaryRendererResult {
  renderWithGlossaryTerms: GlossaryTextRenderer;
}

export const useGlossaryRenderer = (): UseGlossaryRendererResult => {
  const { openGlossary } = useGlossary();
  const seenTerms = new Set<GlossaryKey>();

  const renderWithGlossaryTerms: GlossaryTextRenderer = (text, keyPrefix) => {
    const segments = tokenizeByGlossaryTerms(text, glossary);

    return segments.map((segment, index) => {
      if (segment.type === "text") {
        return <span key={`${keyPrefix}-text-${index}`}>{segment.value}</span>;
      }

      const hasSeenTerm = seenTerms.has(segment.canonicalTerm);

      if (hasSeenTerm) {
        return <span key={`${keyPrefix}-plain-${index}`}>{segment.value}</span>;
      }

      seenTerms.add(segment.canonicalTerm);

      return (
        <TooltipTerm
          key={`${keyPrefix}-term-${index}`}
          term={segment.canonicalTerm}
          matchedText={segment.value}
          onOpenGlossary={openGlossary}
        />
      );
    });
  };

  return {
    renderWithGlossaryTerms,
  };
};
