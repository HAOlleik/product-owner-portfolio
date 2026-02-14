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

        <span className={styles.focusTag}>
          {renderWithGlossaryTerms(
            content.focusLabel,
            `${content.header.id}-focus`,
          )}
        </span>

        <div className={styles.mapCard}>
          {content.embed.embedUrl ? (
            <>
              <iframe
                className={styles.embedFrame}
                src={content.embed.embedUrl}
                title={content.embed.title}
              />
              <a
                className={styles.fallbackLink}
                href={content.embed.fallbackUrl}
                target="_blank"
                rel="noreferrer"
              >
                Open story map artifact
              </a>
            </>
          ) : (
            <>
              <div className={styles.grid}>
                {content.activities.map((activity, index) => (
                  <section key={activity.title}>
                    <p className={styles.columnLabel}>Activity {index + 1}</p>
                    <div className={styles.columnCard}>
                      <h3 className={styles.columnTitle}>{activity.title}</h3>
                      <ul className={styles.itemList}>
                        {activity.items.map((item) => (
                          <li
                            key={item.label}
                            className={`${styles.item} ${item.inMvp ? styles.itemMvp : styles.itemPost}`}
                          >
                            {renderWithGlossaryTerms(
                              item.label,
                              `${content.header.id}-item-${activity.title}-${item.label}`,
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </section>
                ))}
              </div>
              <p className={styles.legend}>{content.legend}</p>
            </>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
};
