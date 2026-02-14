import type { ReactNode } from "react";

import type { GlossaryTextRenderer } from "../../hooks/useGlossaryRenderer";

import styles from "./RichText.module.css";

interface RichTextProps {
  sectionId: string;
  renderWithGlossaryTerms: GlossaryTextRenderer;
  paragraphs?: string[];
  bullets?: string[];
  className?: string;
}

export const RichText = ({
  sectionId,
  renderWithGlossaryTerms,
  paragraphs = [],
  bullets = [],
  className,
}: RichTextProps): React.ReactElement => {
  const rootClassName = className
    ? `${styles.richText} ${className}`
    : styles.richText;

  const renderParagraph = (paragraph: string, index: number): ReactNode => (
    <p key={`${sectionId}-paragraph-${index}`} className={styles.paragraph}>
      {renderWithGlossaryTerms(paragraph, `${sectionId}-paragraph-${index}`)}
    </p>
  );

  const renderBullet = (bullet: string, index: number): ReactNode => (
    <li key={`${sectionId}-bullet-${index}`} className={styles.listItem}>
      <span className={styles.bullet} aria-hidden="true" />
      <span>
        {renderWithGlossaryTerms(bullet, `${sectionId}-bullet-${index}`)}
      </span>
    </li>
  );

  return (
    <div className={rootClassName}>
      {paragraphs.map(renderParagraph)}
      {bullets.length > 0 ? (
        <ul className={styles.list}>{bullets.map(renderBullet)}</ul>
      ) : null}
    </div>
  );
};
