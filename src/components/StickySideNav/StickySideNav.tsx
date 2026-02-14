import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import type { NavItem } from "../../types/caseStudy";

import styles from "./StickySideNav.module.css";

interface StickySideNavProps {
  navItems: NavItem[];
  activeSectionId: string;
  onNavigate: (sectionId: string) => void;
  onOpenGlossary: () => void;
}

export const StickySideNav = ({
  navItems,
  activeSectionId,
  onNavigate,
  onOpenGlossary,
}: StickySideNavProps): React.ReactElement => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const handleNavigate = (sectionId: string): void => {
    onNavigate(sectionId);
    setMobileOpen(false);
  };

  return (
    <>
      <nav className={styles.desktopNav} aria-label="Case study sections">
        <div className={styles.navLabel}>Case Study Navigation</div>
        <ul className={styles.navList}>
          {navItems.map((item) => {
            const isActive = item.anchorId === activeSectionId;
            return (
              <li key={item.anchorId}>
                <button
                  type="button"
                  className={`${styles.navItem} ${isActive ? styles.navItemActive : ""}`}
                  onClick={() => handleNavigate(item.anchorId)}
                  aria-current={isActive ? "true" : undefined}
                >
                  <span className={styles.navNumber}>{item.sectionNumber}</span>
                  <span className={styles.navText}>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className={styles.footer}>
          <button
            type="button"
            className={styles.glossaryButton}
            onClick={onOpenGlossary}
          >
            Glossary
          </button>
        </div>
      </nav>

      <div className={styles.mobileWrap}>
        <button
          type="button"
          className={styles.mobileToggle}
          onClick={() => setMobileOpen((value) => !value)}
          aria-expanded={mobileOpen}
        >
          <span>Case Study Navigation</span>
          <FontAwesomeIcon icon={faChevronDown} />
        </button>

        {mobileOpen ? (
          <div className={styles.mobilePanel}>
            {navItems.map((item) => {
              const isActive = item.anchorId === activeSectionId;
              return (
                <button
                  key={item.anchorId}
                  type="button"
                  className={`${styles.mobileLink} ${isActive ? styles.mobileLinkActive : ""}`}
                  onClick={() => handleNavigate(item.anchorId)}
                  aria-current={isActive ? "true" : undefined}
                >
                  <span className={styles.navNumber}>{item.sectionNumber}</span>
                  <span className={styles.navText}>{item.label}</span>
                </button>
              );
            })}
            <button
              type="button"
              className={styles.mobileGlossary}
              onClick={onOpenGlossary}
            >
              Glossary
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
};
