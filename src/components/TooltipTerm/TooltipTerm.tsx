import { useMemo, useState } from "react";

import { glossary } from "../../content/glossary";
import { useIsMobile } from "../../hooks/useIsMobile";
import type { GlossaryKey } from "../../types/glossary";

import styles from "./TooltipTerm.module.css";

interface TooltipTermProps {
  term: GlossaryKey;
  matchedText?: string;
  onOpenGlossary: (term: GlossaryKey) => void;
}

export const TooltipTerm = ({
  term,
  matchedText,
  onOpenGlossary,
}: TooltipTermProps): React.ReactElement => {
  const isMobile = useIsMobile();
  const [isTooltipVisible, setIsTooltipVisible] = useState<boolean>(false);
  const entry = glossary[term];
  const label = matchedText ?? term;

  const tooltipId = useMemo(
    () => `tooltip-${term.replace(/[^a-z0-9]/gi, "-").toLowerCase()}`,
    [term],
  );

  const showTooltip = (): void => {
    if (!isMobile) {
      setIsTooltipVisible(true);
    }
  };

  const hideTooltip = (): void => {
    setIsTooltipVisible(false);
  };

  const handleClick = (): void => {
    onOpenGlossary(term);
  };

  return (
    <button
      type="button"
      className={styles.termButton}
      aria-describedby={!isMobile && isTooltipVisible ? tooltipId : undefined}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
      onClick={handleClick}
    >
      {label}
      {!isMobile && isTooltipVisible ? (
        <span id={tooltipId} role="tooltip" className={styles.tooltip}>
          <span className={styles.tooltipTitle}>{entry.term}</span>
          {entry.shortDefinition}
        </span>
      ) : null}
    </button>
  );
};
