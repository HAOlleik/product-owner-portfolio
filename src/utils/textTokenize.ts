import type { GlossaryDictionary, GlossaryKey } from "../types/glossary";

export interface TextSegment {
  type: "text";
  value: string;
}

export interface TermSegment {
  type: "term";
  value: string;
  canonicalTerm: GlossaryKey;
}

export type TokenSegment = TextSegment | TermSegment;

const escapeRegExp = (value: string): string =>
  value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const buildAliasLookup = (
  dictionary: GlossaryDictionary,
): Map<string, GlossaryKey> => {
  const entries = Object.entries(dictionary) as Array<
    [GlossaryKey, GlossaryDictionary[GlossaryKey]]
  >;
  const aliasLookup = new Map<string, GlossaryKey>();

  entries.forEach(([key, entry]) => {
    [entry.term, ...entry.aliases].forEach((alias) => {
      aliasLookup.set(alias.toLowerCase(), key);
    });
  });

  return aliasLookup;
};

const buildRegex = (dictionary: GlossaryDictionary): RegExp => {
  const aliases = new Set<string>();

  (Object.values(dictionary) as GlossaryDictionary[GlossaryKey][]).forEach(
    (entry) => {
      aliases.add(entry.term);
      entry.aliases.forEach((alias) => aliases.add(alias));
    },
  );

  const sortedAliases = Array.from(aliases)
    .sort((first, second) => second.length - first.length)
    .map((alias) => escapeRegExp(alias));

  return new RegExp(`(${sortedAliases.join("|")})`, "gi");
};

export const tokenizeByGlossaryTerms = (
  text: string,
  dictionary: GlossaryDictionary,
): TokenSegment[] => {
  const aliasLookup = buildAliasLookup(dictionary);
  const regex = buildRegex(dictionary);

  const segments: TokenSegment[] = [];
  let lastIndex = 0;

  let match: RegExpExecArray | null = regex.exec(text);
  while (match) {
    const matchValue = match[0];
    const matchIndex = match.index;

    if (matchIndex > lastIndex) {
      segments.push({ type: "text", value: text.slice(lastIndex, matchIndex) });
    }

    const canonicalTerm = aliasLookup.get(matchValue.toLowerCase());

    if (canonicalTerm) {
      segments.push({ type: "term", value: matchValue, canonicalTerm });
    } else {
      segments.push({ type: "text", value: matchValue });
    }

    lastIndex = matchIndex + matchValue.length;
    match = regex.exec(text);
  }

  if (lastIndex < text.length) {
    segments.push({ type: "text", value: text.slice(lastIndex) });
  }

  if (segments.length === 0) {
    return [{ type: "text", value: text }];
  }

  return segments;
};
