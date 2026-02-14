import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCheck,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

import type { ArtifactRef, ReflectionContent } from "../../types/caseStudy";
import { useGlossaryRenderer } from "../../hooks/useGlossaryRenderer";

import { RichText } from "../RichText/RichText";
import { SectionWrapper } from "../SectionWrapper/SectionWrapper";

import styles from "./ReflectionSection.module.css";

interface ReflectionSectionProps {
  content: ReflectionContent;
  onOpenArtifact: (artifact: ArtifactRef) => void;
}

export const ReflectionSection = ({
  content,
  onOpenArtifact,
}: ReflectionSectionProps): React.ReactElement => {
  const { renderWithGlossaryTerms } = useGlossaryRenderer();

  return (
    <SectionWrapper
      id={content.header.id}
      sectionNumber={content.header.sectionNumber}
      title={content.header.title}
      subtitle={content.header.subtitle}
      artifacts={content.header.artifacts}
      onOpenArtifact={onOpenArtifact}
    >
      <div className={styles.layout}>
        <RichText
          sectionId={content.header.id}
          renderWithGlossaryTerms={renderWithGlossaryTerms}
          paragraphs={content.introParagraphs}
        />

        <article className={styles.card}>
          <h3 className={styles.title}>Key Success Factors</h3>
          <ul className={styles.list}>
            {content.successFactors.map((item, index) => (
              <li
                key={`${content.header.id}-success-${index}`}
                className={styles.item}
              >
                <FontAwesomeIcon icon={faCheck} className={styles.icon} />
                <div>
                  <RichText
                    sectionId={content.header.id}
                    renderWithGlossaryTerms={renderWithGlossaryTerms}
                    paragraphs={[item]}
                  />
                </div>
              </li>
            ))}
          </ul>
        </article>

        <article className={styles.card}>
          <h3 className={styles.title}>Challenges and Learnings</h3>
          <ul className={styles.list}>
            {content.challenges.map((entry, index) => (
              <li
                key={`${content.header.id}-challenge-${index}`}
                className={styles.item}
              >
                <FontAwesomeIcon
                  icon={faTriangleExclamation}
                  className={styles.icon}
                />
                <div>
                  <div className={styles.challengeText}>
                    <RichText
                      sectionId={content.header.id}
                      renderWithGlossaryTerms={renderWithGlossaryTerms}
                      paragraphs={[entry.challenge]}
                    />
                  </div>
                  <div className={styles.learning}>
                    <RichText
                      sectionId={content.header.id}
                      renderWithGlossaryTerms={renderWithGlossaryTerms}
                      paragraphs={[entry.learning]}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </article>

        <article className={styles.card}>
          <h3 className={styles.title}>Future Roadmap</h3>
          <ul className={styles.list}>
            {content.roadmap.map((entry, index) => (
              <li
                key={`${content.header.id}-roadmap-${index}`}
                className={styles.item}
              >
                <FontAwesomeIcon icon={faArrowRight} className={styles.icon} />
                <div>
                  <RichText
                    sectionId={content.header.id}
                    renderWithGlossaryTerms={renderWithGlossaryTerms}
                    paragraphs={[entry.item]}
                  />
                </div>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </SectionWrapper>
  );
};
