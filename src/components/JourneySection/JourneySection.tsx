import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCommentDots,
  faFileLines,
  faMagnifyingGlass,
  faReply,
  faTicket,
} from "@fortawesome/free-solid-svg-icons";

import type {
  ArtifactRef,
  JourneyContent,
  JourneyStep,
} from "../../types/caseStudy";
import { useGlossaryRenderer } from "../../hooks/useGlossaryRenderer";

import { RichText } from "../RichText/RichText";
import { SectionWrapper } from "../SectionWrapper/SectionWrapper";

import styles from "./JourneySection.module.css";

interface JourneySectionProps {
  content: JourneyContent;
  onOpenArtifact: (artifact: ArtifactRef) => void;
}

const iconForStep = (icon: JourneyStep["icon"]) => {
  switch (icon) {
    case "ticket":
      return faTicket;
    case "comment-dots":
      return faCommentDots;
    case "file-lines":
      return faFileLines;
    case "magnifying-glass":
      return faMagnifyingGlass;
    case "reply":
      return faReply;
    case "check":
      return faCheck;
    default:
      return faTicket;
  }
};

const accentClassForStep = (accent: JourneyStep["accent"]): string => {
  switch (accent) {
    case "blue":
      return styles.iconBlue;
    case "purple":
      return styles.iconPurple;
    case "teal":
      return styles.iconTeal;
    case "orange":
      return styles.iconOrange;
    case "green":
      return styles.iconGreen;
    case "accent":
      return styles.iconAccent;
    default:
      return styles.iconBlue;
  }
};

export const JourneySection = ({
  content,
  onOpenArtifact,
}: JourneySectionProps): React.ReactElement => {
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

        <div className={styles.timeline}>
          {content.steps.map((step, index) => {
            const isLast = index === content.steps.length - 1;

            return (
              <article key={step.title} className={styles.step}>
                <div className={styles.stepRail}>
                  <span
                    className={`${styles.stepIcon} ${accentClassForStep(step.accent)}`}
                  >
                    <FontAwesomeIcon icon={iconForStep(step.icon)} />
                  </span>
                  {!isLast ? (
                    <span className={styles.rail} aria-hidden="true" />
                  ) : null}
                </div>

                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <div className={styles.stepText}>
                    <RichText
                      sectionId={content.header.id}
                      renderWithGlossaryTerms={renderWithGlossaryTerms}
                      paragraphs={[step.description]}
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};
