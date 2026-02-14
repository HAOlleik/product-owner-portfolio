import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import type { ArtifactRef, PhilosophyContent } from "../../types/caseStudy";
import { useGlossaryRenderer } from "../../hooks/useGlossaryRenderer";

import { ArtifactsPanel } from "../ArtifactsPanel/ArtifactsPanel";
import { RichText } from "../RichText/RichText";

import styles from "./PhilosophySection.module.css";

interface PhilosophySectionProps {
  content: PhilosophyContent;
  onOpenArtifact: (artifact: ArtifactRef) => void;
}

export const PhilosophySection = ({
  content,
  onOpenArtifact,
}: PhilosophySectionProps): React.ReactElement => {
  const { renderWithGlossaryTerms } = useGlossaryRenderer();

  return (
    <>
      <div className={styles.divider} aria-hidden="true">
        <div className={styles.dividerLine} />
      </div>

      <section id={content.sectionId} className={styles.section}>
        <div className={styles.container}>
          <header className={styles.header}>
            <h2 className={styles.title}>{content.title}</h2>
            <p className={styles.subtitle}>{content.subtitle}</p>
          </header>

          <ArtifactsPanel
            artifacts={content.artifacts}
            onOpenArtifact={onOpenArtifact}
          />

          <div className={styles.content}>
            <div>
              <div className={styles.narrative}>
                <RichText
                  sectionId={content.sectionId}
                  renderWithGlossaryTerms={renderWithGlossaryTerms}
                  paragraphs={[content.narrative]}
                />
              </div>

              <div className={styles.principles}>
                {content.principles.map((principle) => (
                  <article
                    key={principle.title}
                    className={styles.principleCard}
                  >
                    <h3 className={styles.principleTitle}>{principle.title}</h3>
                    <div className={styles.principleText}>
                      <RichText
                        sectionId={content.sectionId}
                        renderWithGlossaryTerms={renderWithGlossaryTerms}
                        paragraphs={[principle.description]}
                      />
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <aside className={styles.modelCard}>
              <h3 className={styles.modelTitle}>
                {content.operatingModelTitle}
              </h3>
              <ul className={styles.modelList}>
                {content.operatingModelItems.map((item, index) => (
                  <li
                    key={`${content.sectionId}-model-${index}`}
                    className={styles.modelItem}
                  >
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={styles.modelIcon}
                    />
                    <div>
                      <RichText
                        sectionId={content.sectionId}
                        renderWithGlossaryTerms={renderWithGlossaryTerms}
                        paragraphs={[item]}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};
