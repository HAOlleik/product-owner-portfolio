import { useEffect, useMemo, useState } from "react";

import { AppLayout } from "./components/AppLayout/AppLayout";
import { GlossaryDrawer } from "./components/GlossaryDrawer/GlossaryDrawer";
import { GoalsSection } from "./components/GoalsSection/GoalsSection";
import { Hero } from "./components/Hero/Hero";
import { JourneySection } from "./components/JourneySection/JourneySection";
import { PdfArtifactModal } from "./components/PdfArtifactModal/PdfArtifactModal";
import { PersonasSection } from "./components/PersonasSection/PersonasSection";
import { PhilosophySection } from "./components/PhilosophySection/PhilosophySection";
import { ReflectionSection } from "./components/ReflectionSection/ReflectionSection";
import { RisksSection } from "./components/RisksSection/RisksSection";
import { StoryMapSection } from "./components/StoryMapSection/StoryMapSection";
import { TraceabilitySection } from "./components/TraceabilitySection/TraceabilitySection";
import { UserStoriesSection } from "./components/UserStoriesSection/UserStoriesSection";
import { VisionSection } from "./components/VisionSection/VisionSection";
import { caseStudyContent } from "./content/caseStudy";
import { GlossaryProvider } from "./context/GlossaryProvider";
import { useActiveSection } from "./hooks/useActiveSection";
import { useHashSync } from "./hooks/useHashSync";
import { scrollToSection } from "./utils/smoothScroll";

import type { ArtifactRef } from "./types/caseStudy";
import type { GlossaryKey } from "./types/glossary";

const App = (): React.ReactElement => {
  const [activeArtifact, setActiveArtifact] = useState<ArtifactRef | null>(
    null,
  );
  const [isGlossaryOpen, setIsGlossaryOpen] = useState<boolean>(false);
  const [selectedGlossaryTerm, setSelectedGlossaryTerm] =
    useState<GlossaryKey | null>(null);

  const sectionIds = useMemo(
    () => caseStudyContent.navItems.map((item) => item.anchorId),
    [],
  );

  const activeSectionId = useActiveSection(sectionIds);

  useHashSync(activeSectionId);

  useEffect(() => {
    document.title = caseStudyContent.siteMeta.title;

    const currentMetaDescription = document.querySelector(
      'meta[name="description"]',
    );

    if (currentMetaDescription) {
      currentMetaDescription.setAttribute(
        "content",
        caseStudyContent.siteMeta.description,
      );
      return;
    }

    const descriptionTag = document.createElement("meta");
    descriptionTag.name = "description";
    descriptionTag.content = caseStudyContent.siteMeta.description;
    document.head.appendChild(descriptionTag);
  }, []);

  useEffect(() => {
    const hashTarget = window.location.hash.replace("#", "");

    if (hashTarget) {
      scrollToSection(hashTarget);
    }
  }, []);

  const handleNavigate = (sectionId: string): void => {
    scrollToSection(sectionId);
  };

  const handleOpenGlossaryFromTerm = (term: GlossaryKey): void => {
    setSelectedGlossaryTerm(term);
    setIsGlossaryOpen(true);
  };

  const handleOpenGlossaryFromNav = (): void => {
    setSelectedGlossaryTerm(null);
    setIsGlossaryOpen(true);
  };

  const handleCloseGlossary = (): void => {
    setIsGlossaryOpen(false);
  };

  return (
    <GlossaryProvider value={{ openGlossary: handleOpenGlossaryFromTerm }}>
      <AppLayout
        siteMeta={caseStudyContent.siteMeta}
        navItems={caseStudyContent.navItems}
        activeSectionId={activeSectionId}
        onNavigate={handleNavigate}
        onOpenGlossary={handleOpenGlossaryFromNav}
      >
        <Hero
          siteMeta={caseStudyContent.siteMeta}
          hero={caseStudyContent.hero}
          onNavigate={handleNavigate}
        />

        <PhilosophySection content={caseStudyContent.philosophy} />

        <VisionSection
          content={caseStudyContent.vision}
          onOpenArtifact={(artifact) => setActiveArtifact(artifact)}
        />

        <GoalsSection
          content={caseStudyContent.goals}
          onOpenArtifact={(artifact) => setActiveArtifact(artifact)}
        />

        <PersonasSection
          content={caseStudyContent.personas}
          onOpenArtifact={(artifact) => setActiveArtifact(artifact)}
        />

        <RisksSection
          content={caseStudyContent.risks}
          onOpenArtifact={(artifact) => setActiveArtifact(artifact)}
        />

        <JourneySection
          content={caseStudyContent.journey}
          onOpenArtifact={(artifact) => setActiveArtifact(artifact)}
        />

        <StoryMapSection
          content={caseStudyContent.storyMap}
          onOpenArtifact={(artifact) => setActiveArtifact(artifact)}
        />

        <UserStoriesSection
          content={caseStudyContent.userStories}
          onOpenArtifact={(artifact) => setActiveArtifact(artifact)}
        />

        <TraceabilitySection
          content={caseStudyContent.traceability}
          onOpenArtifact={(artifact) => setActiveArtifact(artifact)}
        />

        <ReflectionSection
          content={caseStudyContent.reflection}
          onOpenArtifact={(artifact) => setActiveArtifact(artifact)}
        />
      </AppLayout>

      <PdfArtifactModal
        artifact={activeArtifact}
        onClose={() => setActiveArtifact(null)}
      />

      <GlossaryDrawer
        isOpen={isGlossaryOpen}
        initialTerm={selectedGlossaryTerm}
        onClose={handleCloseGlossary}
      />
    </GlossaryProvider>
  );
};

export default App;
