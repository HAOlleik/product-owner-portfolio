import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import type { ArtifactRef } from "../../types/caseStudy";

import styles from "./ArtifactsPanel.module.css";

interface ArtifactsPanelProps {
  artifacts: ArtifactRef[];
  onOpenArtifact: (artifact: ArtifactRef) => void;
}

export const ArtifactsPanel = ({
  artifacts,
  onOpenArtifact,
}: ArtifactsPanelProps): React.ReactElement | null => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  if (artifacts.length === 0) {
    return null;
  }

  return (
    <section className={styles.panel} aria-label="Section artifacts">
      <button
        type="button"
        className={styles.toggle}
        onClick={() => setIsOpen((value) => !value)}
        aria-expanded={isOpen}
      >
        <span>
          Artifacts <span className={styles.count}>({artifacts.length})</span>
        </span>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}
        />
      </button>

      {isOpen ? (
        <ul className={styles.list}>
          {artifacts.map((artifact) => (
            <li key={artifact.id} className={styles.item}>
              <div>
                <div className={styles.itemTitle}>{artifact.label}</div>
                <p className={styles.itemDescription}>{artifact.description}</p>
              </div>
              <button
                type="button"
                className={styles.viewButton}
                onClick={() => onOpenArtifact(artifact)}
              >
                View artifact (PDF)
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
};
