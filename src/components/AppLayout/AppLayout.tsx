import { useState } from "react";
import type { ReactNode } from "react";

import type { NavItem, SiteMeta } from "../../types/caseStudy";

import { StickySideNav } from "../StickySideNav/StickySideNav";

import styles from "./AppLayout.module.css";

interface AppLayoutProps {
  siteMeta: SiteMeta;
  navItems: NavItem[];
  activeSectionId: string;
  onNavigate: (sectionId: string) => void;
  onOpenGlossary: () => void;
  children: ReactNode;
}

export const AppLayout = ({
  siteMeta,
  navItems,
  activeSectionId,
  onNavigate,
  onOpenGlossary,
  children,
}: AppLayoutProps): React.ReactElement => {
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);
  const resumeHref = `${import.meta.env.BASE_URL}Resume.pdf`;

  return (
    <div className={styles.app}>
      <a href="#hero" className={styles.skipLink}>
        Skip to content
      </a>

      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a
            href="#hero"
            className={styles.brand}
            onClick={(event) => {
              event.preventDefault();
              onNavigate("hero");
            }}
          >
            <span className={styles.brandText}>{siteMeta.shortTitle}</span>
          </a>

          <div className={styles.headerActions}>
            <a
              href={resumeHref}
              download="Hussein_Olleik_Resume.pdf"
              className={styles.headerAction}
            >
              Resume
            </a>
            <button
              type="button"
              className={styles.headerAction}
              onClick={() => setIsContactOpen(true)}
            >
              Contact
            </button>
          </div>
        </div>
      </header>

      <StickySideNav
        navItems={navItems}
        activeSectionId={activeSectionId}
        onNavigate={onNavigate}
        onOpenGlossary={onOpenGlossary}
      />

      <main
        id="main-content"
        className={`${styles.main} ${styles.mainWithSideNav}`}
      >
        {children}
      </main>

      {isContactOpen ? (
        <div
          className={styles.contactOverlay}
          role="presentation"
          onClick={() => setIsContactOpen(false)}
        >
          <div
            className={styles.contactDialog}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-dialog-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className={styles.contactHeader}>
              <h2 id="contact-dialog-title" className={styles.contactTitle}>
                Contact
              </h2>
              <button
                type="button"
                className={styles.contactClose}
                aria-label="Close contact dialog"
                onClick={() => setIsContactOpen(false)}
              >
                Close
              </button>
            </div>

            <div className={styles.contactDetails}>
              <p className={styles.contactRow}>
                <span className={styles.contactLabel}>Name</span>
                <span>Hussein Olleik</span>
              </p>
              <p className={styles.contactRow}>
                <span className={styles.contactLabel}>Phone</span>
                <a href="tel:+15142438744" className={styles.contactLink}>
                  +1 (514) 243-8744
                </a>
              </p>
              <p className={styles.contactRow}>
                <span className={styles.contactLabel}>Email</span>
                <a
                  href="mailto:hussein.olleik5@gmail.com"
                  className={styles.contactLink}
                >
                  hussein.olleik5@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
