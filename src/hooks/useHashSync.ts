import { useEffect } from "react";

export const useHashSync = (activeSectionId: string): void => {
  useEffect(() => {
    if (!activeSectionId) {
      return;
    }

    const nextHash = `#${activeSectionId}`;

    if (window.location.hash !== nextHash) {
      window.history.replaceState(null, "", nextHash);
    }
  }, [activeSectionId]);
};
