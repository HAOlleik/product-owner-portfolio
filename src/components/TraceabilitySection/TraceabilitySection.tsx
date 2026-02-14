import type { ArtifactRef, TraceabilityContent } from "../../types/caseStudy";

import { RichText } from "../RichText/RichText";
import { SectionWrapper } from "../SectionWrapper/SectionWrapper";
import { useGlossaryRenderer } from "../../hooks/useGlossaryRenderer";

import styles from "./TraceabilitySection.module.css";

interface TraceabilitySectionProps {
  content: TraceabilityContent;
  onOpenArtifact: (artifact: ArtifactRef) => void;
}

export const TraceabilitySection = ({
  content,
  onOpenArtifact,
}: TraceabilitySectionProps): React.ReactElement => {
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

        <div className={styles.tableWrap}>
          <p className={styles.tableLabel}>{content.tableLabel}</p>

          <div className={styles.overflow}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th scope="col" className={styles.headerCell}>
                    Product Goal
                  </th>
                  <th scope="col" className={styles.headerCell}>
                    Backlog Item
                  </th>
                  <th scope="col" className={styles.headerCell}>
                    Acceptance Criteria
                  </th>
                  <th scope="col" className={styles.headerCell}>
                    Outcome Metric
                  </th>
                </tr>
              </thead>
              <tbody>
                {content.rows.map((row, index) => (
                  <tr key={`${content.header.id}-row-${index}`}>
                    <td className={styles.cell}>
                      {renderWithGlossaryTerms(
                        row.productGoal,
                        `${content.header.id}-goal-${index}`,
                      )}
                    </td>
                    <td className={styles.cell}>
                      {renderWithGlossaryTerms(
                        row.backlogItem,
                        `${content.header.id}-item-${index}`,
                      )}
                    </td>
                    <td className={styles.cell}>
                      {renderWithGlossaryTerms(
                        row.acceptanceCriteria,
                        `${content.header.id}-criteria-${index}`,
                      )}
                    </td>
                    <td className={styles.cell}>
                      {renderWithGlossaryTerms(
                        row.outcomeMetric,
                        `${content.header.id}-metric-${index}`,
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
