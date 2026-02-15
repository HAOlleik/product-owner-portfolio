import type { ArtifactRef, RisksContent } from "../../types/caseStudy";
import { useGlossaryRenderer } from "../../hooks/useGlossaryRenderer";

import { RichText } from "../RichText/RichText";
import { SectionWrapper } from "../SectionWrapper/SectionWrapper";

import styles from "./RisksSection.module.css";

interface RisksSectionProps {
  content: RisksContent;
  onOpenArtifact: (artifact: ArtifactRef) => void;
}

export const RisksSection = ({
  content,
  onOpenArtifact,
}: RisksSectionProps): React.ReactElement => {
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

        <div className={styles.columns}>
          <section>
            <h3 className={styles.groupTitle}>Key Assumptions</h3>
            <ul className={styles.assumptionList}>
              {content.assumptions.map((assumption, index) => (
                <li
                  key={`${content.header.id}-assumption-${index}`}
                  className={styles.assumptionCard}
                >
                  <p className={styles.assumptionLabel}>
                    Assumption {index + 1}
                  </p>
                  <div className={styles.assumptionText}>
                    <RichText
                      sectionId={content.header.id}
                      renderWithGlossaryTerms={renderWithGlossaryTerms}
                      paragraphs={[assumption]}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className={styles.groupTitle}>Risk Impact Analysis</h3>
            <ul className={styles.narrativeList}>
              {content.riskNarrative.map((risk, index) => (
                <li
                  key={`${content.header.id}-risk-narrative-${index}`}
                  className={styles.narrativeCard}
                >
                  <p className={styles.assumptionLabel}>Risk {index + 1}</p>
                  <div className={styles.assumptionText}>
                    <RichText
                      sectionId={content.header.id}
                      renderWithGlossaryTerms={renderWithGlossaryTerms}
                      paragraphs={[risk]}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className={styles.criticalList}>
          {content.criticalAssumptions.map((assumption, index) => (
            <article
              key={`${content.header.id}-critical-assumption-${index}`}
              className={styles.critical}
            >
              <h3 className={styles.criticalTitle}>{assumption.title}</h3>
              <p className={styles.criticalLabel}>Validation Method</p>
              <RichText
                sectionId={content.header.id}
                renderWithGlossaryTerms={renderWithGlossaryTerms}
                paragraphs={[assumption.validationMethod]}
              />
              <p className={styles.criticalLabel}>Success Criteria</p>
              <RichText
                sectionId={content.header.id}
                renderWithGlossaryTerms={renderWithGlossaryTerms}
                paragraphs={[assumption.successCriteria]}
              />
            </article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
