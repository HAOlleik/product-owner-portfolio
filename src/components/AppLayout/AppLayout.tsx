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
}: AppLayoutProps): React.ReactElement => (
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
          <span className={styles.brandBadge}>PO</span>
          <span className={styles.brandText}>{siteMeta.shortTitle}</span>
        </a>
        <span className={styles.headerMeta}>
          Single-page portfolio case study
        </span>
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
  </div>
);
