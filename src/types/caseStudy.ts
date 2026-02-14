export interface SiteMeta {
  title: string;
  description: string;
  badge: string;
  shortTitle: string;
}

export interface NavItem {
  label: string;
  anchorId: string;
  sectionNumber: string;
}

export interface ArtifactRef {
  id: string;
  label: string;
  filename: string;
  description: string;
}

export interface FlowNode {
  label: string;
  description: string;
}

export interface HeroContent {
  sectionId: string;
  titleLines: string[];
  subtitle: string;
  highlights: string[];
  supportText: string;
  ctaPrimary: {
    label: string;
    targetId: string;
  };
  ctaSecondary: {
    label: string;
    targetId: string;
  };
  flow: FlowNode[];
}

export interface PhilosophyPrinciple {
  title: string;
  description: string;
}

export interface StructureCard {
  step: string;
  title: string;
  description: string;
  icon: "compass" | "user" | "list-check" | "code-branch";
  accent: "blue" | "purple" | "orange" | "teal";
}

export interface KpiCard {
  metric: string;
  target: string;
  directionLabel: string;
  rationale: string;
}

export interface Persona {
  id: string;
  name: string;
  role: string;
  type: string;
  icon: "headset" | "user-tie";
  accent: "blue" | "purple";
  goals: string[];
  pains: string[];
  success: string[];
}

export interface StoryMapActivityItem {
  label: string;
  inMvp: boolean;
}

export interface StoryMapActivity {
  title: string;
  items: StoryMapActivityItem[];
}

export interface StoryMapEmbedConfig {
  title: string;
  embedUrl: string;
  fallbackUrl: string;
}

export interface UserStory {
  id: string;
  persona: string;
  statement: string;
  acceptanceCriteria: string[];
}

export interface TraceabilityRow {
  productGoal: string;
  backlogItem: string;
  acceptanceCriteria: string;
  outcomeMetric: string;
}

export interface ReflectionChallenge {
  challenge: string;
  learning: string;
}

export interface ReflectionRoadmapItem {
  item: string;
}

export interface SectionHeader {
  id: string;
  sectionNumber: string;
  title: string;
  subtitle?: string;
  artifacts: ArtifactRef[];
}

export interface SectionContent {
  header: SectionHeader;
  introParagraphs: string[];
}

export interface VisionContent extends SectionContent {
  problemContext: string[];
  visionStatement: string;
  strategicIntent: Array<{
    title: string;
    bullets: string[];
  }>;
}

export interface GoalsContent extends SectionContent {
  kpis: KpiCard[];
  prioritizationNote: string;
}

export interface PersonasContent extends SectionContent {
  personas: Persona[];
  keyInsights: string[];
}

export interface RisksContent extends SectionContent {
  assumptions: string[];
  riskNarrative: string[];
  criticalAssumption: {
    title: string;
    validationMethod: string;
    successCriteria: string;
  };
}

export interface JourneyStep {
  title: string;
  description: string;
  icon:
    | "ticket"
    | "comment-dots"
    | "file-lines"
    | "magnifying-glass"
    | "reply"
    | "check";
  accent: "blue" | "purple" | "teal" | "orange" | "green" | "accent";
}

export interface JourneyContent extends SectionContent {
  steps: JourneyStep[];
}

export interface StoryMapContent extends SectionContent {
  focusLabel: string;
  embed: StoryMapEmbedConfig;
  activities: StoryMapActivity[];
  legend: string;
}

export interface UserStoriesContent extends SectionContent {
  stories: UserStory[];
}

export interface TraceabilityContent extends SectionContent {
  tableLabel: string;
  rows: TraceabilityRow[];
}

export interface ReflectionContent extends SectionContent {
  successFactors: string[];
  challenges: ReflectionChallenge[];
  roadmap: ReflectionRoadmapItem[];
}

export interface PhilosophyContent {
  sectionId: string;
  title: string;
  subtitle: string;
  narrative: string;
  principles: PhilosophyPrinciple[];
  operatingModelTitle: string;
  operatingModelItems: string[];
  artifacts: ArtifactRef[];
}

export interface StructureContent {
  sectionId: string;
  title: string;
  cards: StructureCard[];
  footerHint: string;
}

export interface CaseStudyContent {
  siteMeta: SiteMeta;
  navItems: NavItem[];
  hero: HeroContent;
  philosophy: PhilosophyContent;
  structure: StructureContent;
  vision: VisionContent;
  goals: GoalsContent;
  personas: PersonasContent;
  risks: RisksContent;
  journey: JourneyContent;
  storyMap: StoryMapContent;
  userStories: UserStoriesContent;
  traceability: TraceabilityContent;
  reflection: ReflectionContent;
}
