import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass, faUser } from "@fortawesome/free-regular-svg-icons";
import { faCodeBranch, faListCheck } from "@fortawesome/free-solid-svg-icons";

import type { StructureContent } from "../../types/caseStudy";
import { useGlossaryRenderer } from "../../hooks/useGlossaryRenderer";

import styles from "./CaseStudyStructureCards.module.css";

interface CaseStudyStructureCardsProps {
  content: StructureContent;
}

const iconClassMap: Record<
  StructureContent["cards"][number]["accent"],
  string
> = {
  blue: styles.iconBlue,
  purple: styles.iconPurple,
  orange: styles.iconOrange,
  teal: styles.iconTeal,
};

const resolveIcon = (icon: StructureContent["cards"][number]["icon"]) => {
  switch (icon) {
    case "compass":
      return faCompass;
    case "user":
      return faUser;
    case "list-check":
      return faListCheck;
    case "code-branch":
      return faCodeBranch;
    default:
      return faCompass;
  }
};

export const CaseStudyStructureCards = ({
  content,
}: CaseStudyStructureCardsProps): React.ReactElement => {
  const { renderWithGlossaryTerms } = useGlossaryRenderer();

  return (
    <>
      <div className={styles.divider} aria-hidden="true">
        <div className={styles.dividerLine} />
      </div>

      <section id={content.sectionId} className={styles.section}>
        <div className={styles.container}>
          <header className={styles.header}>
            <h2 className={styles.title}>{content.title}</h2>
            <div className={styles.titleUnderline} aria-hidden="true" />
          </header>

          <div className={styles.grid}>
            {content.cards.map((card, index) => (
              <article key={card.title} className={styles.card}>
                <span className={styles.cardNumber}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className={styles.cardStep}>{card.step}</p>
                <div
                  className={`${styles.iconWrap} ${iconClassMap[card.accent]}`}
                >
                  <FontAwesomeIcon icon={resolveIcon(card.icon)} />
                </div>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardText}>
                  {renderWithGlossaryTerms(
                    card.description,
                    `${content.sectionId}-description-${index}`,
                  )}
                </p>
              </article>
            ))}
          </div>

          <p className={styles.hint}>{content.footerHint}</p>
        </div>
      </section>
    </>
  );
};
