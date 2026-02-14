import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { glossary, glossaryTerms } from "../../content/glossary";
import type { GlossaryKey } from "../../types/glossary";

import styles from "./GlossaryDrawer.module.css";

interface GlossaryDrawerProps {
  isOpen: boolean;
  initialTerm: GlossaryKey | null;
  onClose: () => void;
}

export const GlossaryDrawer = ({
  isOpen,
  initialTerm,
  onClose,
}: GlossaryDrawerProps): React.ReactElement | null => {
  const [manualSelectedTerm, setManualSelectedTerm] =
    useState<GlossaryKey | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const selectedTerm = manualSelectedTerm ?? initialTerm ?? "INVEST";

  const handleClose = useCallback((): void => {
    setManualSelectedTerm(null);
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, handleClose]);

  const selectedEntry = useMemo(() => glossary[selectedTerm], [selectedTerm]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.overlay} role="presentation" onClick={handleClose}>
      <section
        className={styles.drawer}
        role="dialog"
        aria-modal="true"
        aria-labelledby="glossary-title"
        onClick={(event) => event.stopPropagation()}
      >
        <header className={styles.header}>
          <div className={styles.titleWrap}>
            <span className={styles.kicker}>Case Study Glossary</span>
            <h2 id="glossary-title" className={styles.title}>
              Product Owner Terms and Explanations
            </h2>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            className={styles.closeButton}
            onClick={handleClose}
            aria-label="Close glossary"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </header>

        <div className={styles.body}>
          <ul className={styles.termList}>
            {glossaryTerms.map((term) => {
              const isActive = term === selectedTerm;
              return (
                <li key={term}>
                  <button
                    type="button"
                    className={`${styles.termButton} ${isActive ? styles.termButtonActive : ""}`}
                    onClick={() => setManualSelectedTerm(term)}
                  >
                    {term}
                  </button>
                </li>
              );
            })}
          </ul>

          <article className={styles.details}>
            <h3 className={styles.termTitle}>{selectedEntry.term}</h3>
            <p className={styles.shortDefinition}>
              {selectedEntry.shortDefinition}
            </p>

            <div className={styles.longList}>
              {selectedEntry.longDefinition.map((paragraph, index) => (
                <p
                  key={`${selectedEntry.term}-long-${index}`}
                  className={styles.longText}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <h4 className={styles.subHeading}>Why it matters</h4>
            <ul className={styles.whyList}>
              {selectedEntry.whyItMatters.map((bullet, index) => (
                <li
                  key={`${selectedEntry.term}-why-${index}`}
                  className={styles.whyItem}
                >
                  <span className={styles.whyBullet} aria-hidden="true" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </div>
  );
};
