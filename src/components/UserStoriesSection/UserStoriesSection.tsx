import type { ArtifactRef, UserStoriesContent } from "../../types/caseStudy";
import { useGlossaryRenderer } from "../../hooks/useGlossaryRenderer";

import { RichText } from "../RichText/RichText";
import { SectionWrapper } from "../SectionWrapper/SectionWrapper";

import styles from "./UserStoriesSection.module.css";

interface UserStoriesSectionProps {
  content: UserStoriesContent;
  onOpenArtifact: (artifact: ArtifactRef) => void;
}

export const UserStoriesSection = ({
  content,
  onOpenArtifact,
}: UserStoriesSectionProps): React.ReactElement => {
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

        <div className={styles.grid}>
          {content.stories.map((story) => (
            <article key={story.id} className={styles.card}>
              <p className={styles.persona}>As a {story.persona}</p>
              <div className={styles.story}>
                <RichText
                  sectionId={content.header.id}
                  renderWithGlossaryTerms={renderWithGlossaryTerms}
                  paragraphs={[story.statement]}
                />
              </div>
              <h3 className={styles.criteriaTitle}>Acceptance Criteria</h3>
              <RichText
                sectionId={content.header.id}
                renderWithGlossaryTerms={renderWithGlossaryTerms}
                bullets={story.acceptanceCriteria}
              />
            </article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
