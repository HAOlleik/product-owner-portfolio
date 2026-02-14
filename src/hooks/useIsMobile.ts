import { useSyncExternalStore } from "react";

const MOBILE_MEDIA_QUERY = "(max-width: 1023px)";

const subscribe = (onStoreChange: () => void): (() => void) => {
  const mediaQuery = window.matchMedia(MOBILE_MEDIA_QUERY);

  const listener = (): void => {
    onStoreChange();
  };

  mediaQuery.addEventListener("change", listener);

  return () => {
    mediaQuery.removeEventListener("change", listener);
  };
};

const getSnapshot = (): boolean =>
  window.matchMedia(MOBILE_MEDIA_QUERY).matches;

const getServerSnapshot = (): boolean => false;

export const useIsMobile = (): boolean =>
  useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
