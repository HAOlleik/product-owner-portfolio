import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import type { HeroContent, SiteMeta } from "../../types/caseStudy";
import { useGlossaryRenderer } from "../../hooks/useGlossaryRenderer";

import styles from "./Hero.module.css";

interface HeroProps {
  siteMeta: SiteMeta;
  hero: HeroContent;
  onNavigate: (sectionId: string) => void;
}

export const Hero = ({
  siteMeta,
  hero,
  onNavigate,
}: HeroProps): React.ReactElement => {
  const { renderWithGlossaryTerms } = useGlossaryRenderer();

  return (
    <section id={hero.sectionId} className={styles.section}>
      <div className={styles.content}>
        <div className={styles.badge}>{siteMeta.badge}</div>
        <h1 className={styles.title}>
          {hero.titleLines.map((line, index) => (
            <span key={`${hero.sectionId}-line-${index}`}>
              {line}
              {index < hero.titleLines.length - 1 ? <br /> : null}
            </span>
          ))}
        </h1>
        <div className={styles.subtitle}>
          {renderWithGlossaryTerms(hero.subtitle, `${hero.sectionId}-subtitle`)}
        </div>
        <div className={styles.badge}>{hero.roleTitle}</div>

        <ul className={styles.highlightList}>
          {hero.highlights.map((highlight, index) => (
            <li key={`${highlight}-${index}`} className={styles.highlightItem}>
              <span className={styles.highlightDot} aria-hidden="true" />
              <span className={styles.highlightText}>
                {renderWithGlossaryTerms(
                  highlight,
                  `${hero.sectionId}-highlight-${index}`,
                )}
              </span>
            </li>
          ))}
        </ul>

        <div className={styles.support}>
          {renderWithGlossaryTerms(
            hero.supportText,
            `${hero.sectionId}-support`,
          )}
        </div>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.primaryButton}
            onClick={() => onNavigate(hero.ctaPrimary.targetId)}
          >
            {hero.ctaPrimary.label}
          </button>
          <button
            type="button"
            className={styles.secondaryButton}
            onClick={() => onNavigate(hero.ctaSecondary.targetId)}
          >
            {hero.ctaSecondary.label}
          </button>
        </div>
      </div>

      <div className={styles.flow} aria-label="Case study flow">
        {hero.flow.map((node, index) => {
          const isLast = index === hero.flow.length - 1;
          return (
            <article key={node.label} className={styles.flowNode}>
              <h3 className={styles.flowLabel}>{node.label}</h3>
              <div className={styles.flowDescription}>
                {renderWithGlossaryTerms(
                  node.description,
                  `${hero.sectionId}-flow-${index}`,
                )}
              </div>
              {!isLast ? (
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={styles.flowChevron}
                />
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
};
