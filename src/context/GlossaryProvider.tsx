import type { ReactNode } from "react";

import type { GlossaryContextValue } from "./glossary-context";
import { GlossaryContext } from "./glossary-context";

interface GlossaryProviderProps {
  children: ReactNode;
  value: GlossaryContextValue;
}

export const GlossaryProvider = ({
  children,
  value,
}: GlossaryProviderProps): React.ReactElement => (
  <GlossaryContext.Provider value={value}>{children}</GlossaryContext.Provider>
);
