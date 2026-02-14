import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import type { ArtifactRef } from "../../types/caseStudy";

import styles from "./PdfArtifactModal.module.css";

interface PdfArtifactModalProps {
  artifact: ArtifactRef | null;
  onClose: () => void;
}

export const PdfArtifactModal = ({
  artifact,
  onClose,
}: PdfArtifactModalProps): React.ReactElement | null => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!artifact) {
      return;
    }

    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [artifact, onClose]);

  if (!artifact) {
    return null;
  }

  const artifactPath = `/artifacts/${artifact.filename}`;

  return (
    <div className={styles.overlay} role="presentation" onClick={onClose}>
      <section
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="artifact-title"
        onClick={(event) => event.stopPropagation()}
      >
        <header className={styles.header}>
          <div className={styles.titleWrap}>
            <h2 id="artifact-title" className={styles.title}>
              {artifact.label}
            </h2>
            <p className={styles.subTitle}>{artifact.description}</p>
          </div>
          <div className={styles.headerActions}>
            <a
              className={styles.linkButton}
              href={artifactPath}
              target="_blank"
              rel="noreferrer"
            >
              Open in new tab
            </a>
            <button
              ref={closeButtonRef}
              type="button"
              className={styles.closeButton}
              onClick={onClose}
              aria-label="Close artifact preview"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        </header>

        <iframe
          className={styles.frame}
          title={artifact.label}
          src={artifactPath}
        />
      </section>
    </div>
  );
};
