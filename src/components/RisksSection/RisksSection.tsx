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
            <div className={styles.narrative}>
              <RichText
                sectionId={content.header.id}
                renderWithGlossaryTerms={renderWithGlossaryTerms}
                paragraphs={content.riskNarrative}
              />
            </div>
          </section>
        </div>

        <article className={styles.critical}>
          <h3 className={styles.criticalTitle}>
            {content.criticalAssumption.title}
          </h3>
          <p className={styles.criticalLabel}>Validation Method</p>
          <RichText
            sectionId={content.header.id}
            renderWithGlossaryTerms={renderWithGlossaryTerms}
            paragraphs={[content.criticalAssumption.validationMethod]}
          />
          <p className={styles.criticalLabel}>Success Criteria</p>
          <RichText
            sectionId={content.header.id}
            renderWithGlossaryTerms={renderWithGlossaryTerms}
            paragraphs={[content.criticalAssumption.successCriteria]}
          />
        </article>
      </div>
    </SectionWrapper>
  );
};
