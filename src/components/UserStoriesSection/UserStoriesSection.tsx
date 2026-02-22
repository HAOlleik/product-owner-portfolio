import { useEffect } from "react";

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
  const hasTrelloCardEmbeds = content.trelloColumns?.some(
    (column) => (column.cardUrls?.length ?? 0) > 0,
  );

  useEffect(() => {
    if (!hasTrelloCardEmbeds) {
      return;
    }

    const scriptSrc = "https://p.trellocdn.com/embed.min.js";
    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[src="${scriptSrc}"]`,
    );

    if (existingScript) {
      return;
    }

    const script = document.createElement("script");
    script.src = scriptSrc;
    script.async = true;
    document.body.appendChild(script);
  }, [hasTrelloCardEmbeds]);

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

        {content.trelloColumns?.length ? (
          <section className={styles.workflowSection}>

            <div className={styles.workflowScroller}>
              <div className={styles.workflowGrid}>
                {content.trelloColumns.map((column) => {
                  const cardUrls = column.cardUrls ?? [];

                  return (
                    <article key={column.id} className={styles.workflowColumn}>
                      <div className={styles.columnHeader}>
                        <h4 className={styles.columnTitle}>{column.title}</h4>
                        <span className={styles.columnCount}>
                          {cardUrls.length} card{cardUrls.length === 1 ? "" : "s"}
                        </span>
                      </div>

                      {cardUrls.length > 0 ? (
                        <div className={styles.columnCards}>
                          {cardUrls.map((cardUrl) => (
                            <blockquote
                              key={`${column.id}-${cardUrl}`}
                              className="trello-card"
                            >
                              <a href={cardUrl}>Trello Card</a>
                            </blockquote>
                          ))}
                        </div>
                      ) : (
                        <p className={styles.emptyState}>
                          Add Trello card links here later.
                        </p>
                      )}
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        ) : null}
      </div>
    </SectionWrapper>
  );
};
