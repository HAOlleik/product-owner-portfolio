import type { ArtifactRef, GoalsContent } from "../../types/caseStudy";
import { useGlossaryRenderer } from "../../hooks/useGlossaryRenderer";

import { RichText } from "../RichText/RichText";
import { SectionWrapper } from "../SectionWrapper/SectionWrapper";

import styles from "./GoalsSection.module.css";

interface GoalsSectionProps {
  content: GoalsContent;
  onOpenArtifact: (artifact: ArtifactRef) => void;
}

export const GoalsSection = ({
  content,
  onOpenArtifact,
}: GoalsSectionProps): React.ReactElement => {
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

        <div className={styles.statement}>
          <h3 className={styles.subheading}>Product Goal Statement</h3>
          <div className={styles.statementText}>
            <RichText
              sectionId={content.header.id}
              renderWithGlossaryTerms={renderWithGlossaryTerms}
              paragraphs={[content.goalStatement]}
            />
          </div>
        </div>

        <div className={styles.kpiGrid}>
          {content.kpis.map((kpi, index) => (
            <article key={kpi.metric} className={styles.kpiCard}>
              <p className={styles.kpiTarget}>{kpi.target}</p>
              <p className={styles.kpiDirection}>{kpi.directionLabel}</p>
              <p className={styles.kpiMetric}>
                {renderWithGlossaryTerms(
                  kpi.metric,
                  `${content.header.id}-metric-${index}`,
                )}
              </p>
              <p className={styles.kpiRationale}>
                {renderWithGlossaryTerms(
                  kpi.rationale,
                  `${content.header.id}-rationale-${index}`,
                )}
              </p>
            </article>
          ))}
        </div>

        <article className={styles.note}>
          <h3 className={styles.noteTitle}>
            How metrics influenced prioritization
          </h3>
          <RichText
            sectionId={content.header.id}
            renderWithGlossaryTerms={renderWithGlossaryTerms}
            paragraphs={[content.prioritizationNote]}
          />
        </article>
      </div>
    </SectionWrapper>
  );
};
