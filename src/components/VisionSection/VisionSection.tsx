import type { ArtifactRef, VisionContent } from "../../types/caseStudy";
import { useGlossaryRenderer } from "../../hooks/useGlossaryRenderer";

import { RichText } from "../RichText/RichText";
import { SectionWrapper } from "../SectionWrapper/SectionWrapper";

import styles from "./VisionSection.module.css";

interface VisionSectionProps {
  content: VisionContent;
  onOpenArtifact: (artifact: ArtifactRef) => void;
}

export const VisionSection = ({
  content,
  onOpenArtifact,
}: VisionSectionProps): React.ReactElement => {
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

        <div>
          <h3 className={styles.subheading}>Problem Context</h3>
          <RichText
            sectionId={content.header.id}
            renderWithGlossaryTerms={renderWithGlossaryTerms}
            paragraphs={content.problemContext}
          />
        </div>

        <div className={styles.statement}>
          <h3 className={styles.subheading}>Product Vision Statement</h3>
          <div className={styles.statementText}>
            <RichText
              sectionId={content.header.id}
              renderWithGlossaryTerms={renderWithGlossaryTerms}
              paragraphs={[content.visionStatement]}
            />
          </div>
        </div>

        <div>
          <h3 className={styles.subheading}>Strategic Intent</h3>
          <div className={styles.intentGrid}>
            {content.strategicIntent.map((item) => (
              <article key={item.title} className={styles.intentCard}>
                <h4 className={styles.intentTitle}>{item.title}</h4>
                <RichText
                  sectionId={content.header.id}
                  renderWithGlossaryTerms={renderWithGlossaryTerms}
                  bullets={item.bullets}
                />
              </article>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
