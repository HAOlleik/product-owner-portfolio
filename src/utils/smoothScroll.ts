export const scrollToSection = (sectionId: string): void => {
  const targetElement = document.getElementById(sectionId);

  if (!targetElement) {
    return;
  }

  const headerHeight = 80;
  const mobileNavHeight = window.innerWidth < 1024 ? 56 : 0;
  const targetTop =
    targetElement.getBoundingClientRect().top +
    window.scrollY -
    headerHeight -
    mobileNavHeight -
    12;

  window.scrollTo({
    top: Math.max(targetTop, 0),
    behavior: "smooth",
  });
};
