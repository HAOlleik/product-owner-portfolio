import { useEffect, useState } from "react";

export const useActiveSection = (sectionIds: string[]): string => {
  const [activeSection, setActiveSection] = useState<string>(
    sectionIds[0] ?? "",
  );

  useEffect(() => {
    if (sectionIds.length === 0) {
      return;
    }

    const observers: IntersectionObserver[] = [];
    const visibleRatios = new Map<string, number>();

    const updateActiveSection = (): void => {
      let nextSection = sectionIds[0] ?? "";
      let maxRatio = 0;

      sectionIds.forEach((sectionId) => {
        const ratio = visibleRatios.get(sectionId) ?? 0;
        if (ratio >= maxRatio) {
          maxRatio = ratio;
          nextSection = sectionId;
        }
      });

      if (nextSection) {
        setActiveSection(nextSection);
      }
    };

    sectionIds.forEach((sectionId) => {
      const sectionElement = document.getElementById(sectionId);
      if (!sectionElement) {
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            visibleRatios.set(sectionId, entry.intersectionRatio);
          });
          updateActiveSection();
        },
        {
          threshold: [0, 0.15, 0.25, 0.4, 0.6, 0.8],
          rootMargin: "-120px 0px -45% 0px",
        },
      );

      observer.observe(sectionElement);
      observers.push(observer);
    });

    const onScroll = (): void => {
      if (window.scrollY < 80) {
        setActiveSection(sectionIds[0] ?? "");
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observers.forEach((observer) => observer.disconnect());
      window.removeEventListener("scroll", onScroll);
    };
  }, [sectionIds]);

  return activeSection;
};
