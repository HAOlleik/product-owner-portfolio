import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset, faUserTie } from "@fortawesome/free-solid-svg-icons";

import type {
  ArtifactRef,
  Persona,
  PersonasContent,
} from "../../types/caseStudy";
import { useGlossaryRenderer } from "../../hooks/useGlossaryRenderer";

import { RichText } from "../RichText/RichText";
import { SectionWrapper } from "../SectionWrapper/SectionWrapper";

import styles from "./PersonasSection.module.css";

interface PersonasSectionProps {
  content: PersonasContent;
  onOpenArtifact: (artifact: ArtifactRef) => void;
}

const resolvePersonaIcon = (icon: Persona["icon"]) => {
  switch (icon) {
    case "headset":
      return faHeadset;
    case "user-tie":
      return faUserTie;
    default:
      return faHeadset;
  }
};

const resolveAccentClass = (accent: Persona["accent"]): string => {
  switch (accent) {
    case "blue":
      return styles.iconBlue;
    case "purple":
      return styles.iconPurple;
    default:
      return styles.iconBlue;
  }
};

export const PersonasSection = ({
  content,
  onOpenArtifact,
}: PersonasSectionProps): React.ReactElement => {
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

        <div className={styles.grid}>
          {content.personas.map((persona) => (
            <article key={persona.id} className={styles.card}>
              <header className={styles.cardHeader}>
                <div
                  className={`${styles.iconWrap} ${resolveAccentClass(persona.accent)}`}
                >
                  <FontAwesomeIcon icon={resolvePersonaIcon(persona.icon)} />
                </div>
                <div>
                  <h3 className={styles.name}>{persona.name}</h3>
                  <p className={styles.role}>
                    {persona.role} ({persona.type})
                  </p>
                </div>
              </header>

              <section className={styles.group}>
                <h4 className={styles.groupTitle}>Goals</h4>
                <RichText
                  sectionId={content.header.id}
                  renderWithGlossaryTerms={renderWithGlossaryTerms}
                  bullets={persona.goals}
                />
              </section>

              <section className={styles.group}>
                <h4 className={styles.groupTitle}>Pains</h4>
                <RichText
                  sectionId={content.header.id}
                  renderWithGlossaryTerms={renderWithGlossaryTerms}
                  bullets={persona.pains}
                />
              </section>

              <section className={styles.group}>
                <h4 className={styles.groupTitle}>Success Signals</h4>
                <RichText
                  sectionId={content.header.id}
                  renderWithGlossaryTerms={renderWithGlossaryTerms}
                  bullets={persona.success}
                />
              </section>
            </article>
          ))}
        </div>

        <article className={styles.insights}>
          <h3 className={styles.insightsTitle}>Key Behavioral Insights</h3>
          <RichText
            sectionId={content.header.id}
            renderWithGlossaryTerms={renderWithGlossaryTerms}
            bullets={content.keyInsights}
          />
        </article>
      </div>
    </SectionWrapper>
  );
};
