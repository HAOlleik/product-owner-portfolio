import type { ArtifactRef, StoryMapContent } from "../../types/caseStudy";
import { useGlossaryRenderer } from "../../hooks/useGlossaryRenderer";

import { RichText } from "../RichText/RichText";
import { SectionWrapper } from "../SectionWrapper/SectionWrapper";

import styles from "./StoryMapSection.module.css";

interface StoryMapSectionProps {
  content: StoryMapContent;
  onOpenArtifact: (artifact: ArtifactRef) => void;
}

export const StoryMapSection = ({
  content,
  onOpenArtifact,
}: StoryMapSectionProps): React.ReactElement => {
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

        <div className={styles.mapCard}>
          <iframe
            className={styles.embedFrame}
            style={{ border: "none" }}
            width={800}
            height={450}
            src={content.embedUrl}
            title={content.embedTitle}
            loading="lazy"
          />
        </div>
      </div>
    </SectionWrapper>
  );
};
