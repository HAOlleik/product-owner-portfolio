import type { ArtifactRef } from "../../types/caseStudy";

import { ArtifactsPanel } from "../ArtifactsPanel/ArtifactsPanel";

import styles from "./SectionWrapper.module.css";

interface SectionWrapperProps {
  id: string;
  sectionNumber: string;
  title: string;
  subtitle?: string;
  artifacts: ArtifactRef[];
  onOpenArtifact: (artifact: ArtifactRef) => void;
  children: React.ReactNode;
}

export const SectionWrapper = ({
  id,
  sectionNumber,
  title,
  subtitle,
  artifacts,
  onOpenArtifact,
  children,
}: SectionWrapperProps): React.ReactElement => (
  <>
    <div className={styles.divider} aria-hidden="true">
      <div className={styles.dividerLine} />
    </div>

    <section id={id} className={styles.root}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.numberedTitle}>
            {sectionNumber} - {title}
          </h2>
          {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
        </header>

        <ArtifactsPanel artifacts={artifacts} onOpenArtifact={onOpenArtifact} />

        <div className={styles.body}>{children}</div>
      </div>
    </section>
  </>
);
