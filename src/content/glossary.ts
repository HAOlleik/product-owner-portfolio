import type { GlossaryDictionary } from "../types/glossary";

export const glossary: GlossaryDictionary = {
  INVEST: {
    term: "INVEST",
    aliases: ["INVEST"],
    shortDefinition:
      "INVEST is a quality checklist for writing useful backlog items: Independent, Negotiable, Valuable, Estimable, Small, and Testable.",
    longDefinition: [
      "INVEST is used to evaluate whether a user story is ready for planning and engineering collaboration.",
      "Each letter highlights a common failure mode such as oversized work, weak value signals, or vague acceptance boundaries.",
      "The framework does not replace discovery, but it improves story quality so teams can reason about trade-offs faster.",
      "In practice, teams apply INVEST during refinement to improve clarity before committing work to a sprint.",
    ],
    whyItMatters: [
      "Reduces ambiguity before development starts.",
      "Improves predictability for estimation and planning.",
      "Makes acceptance criteria easier to verify at delivery time.",
    ],
  },
  "User Story Mapping": {
    term: "User Story Mapping",
    aliases: ["User Story Mapping", "Story Mapping"],
    shortDefinition:
      "User Story Mapping organizes work by user activities and workflow steps so teams can prioritize end-to-end value.",
    longDefinition: [
      "A story map lays out the user journey horizontally and detailed stories vertically under each activity.",
      "This structure helps teams see the whole experience instead of prioritizing isolated tickets.",
      "It is especially useful for selecting a thin but coherent MVP that still solves a real user problem.",
      "The map also supports release planning by making dependencies and sequencing visible.",
    ],
    whyItMatters: [
      "Keeps prioritization tied to user outcomes.",
      "Prevents fragmented releases that feel incomplete.",
      "Enables transparent conversations about MVP scope.",
    ],
  },
  "Acceptance Criteria": {
    term: "Acceptance Criteria",
    aliases: ["Acceptance Criteria"],
    shortDefinition:
      "Acceptance Criteria are explicit conditions that define when a story is complete and acceptable.",
    longDefinition: [
      "They turn a high-level user story into verifiable behavior that product, design, and engineering can align on.",
      "Clear criteria reduce interpretation gaps and rework during implementation.",
      "They also support testing by defining expected outcomes and edge-case handling.",
      "Well-written criteria focus on behavior and value, not implementation details.",
    ],
    whyItMatters: [
      "Creates shared understanding across the team.",
      "Improves testability and release confidence.",
      "Limits scope creep inside a sprint.",
    ],
  },
  "MVP Slice": {
    term: "MVP Slice",
    aliases: ["MVP Slice", "MVP"],
    shortDefinition:
      "An MVP Slice is the smallest coherent scope that can validate a risky assumption and deliver measurable user value.",
    longDefinition: [
      "A slice should cover an end-to-end path, not just a technical component.",
      "It is chosen to maximize learning while minimizing cost and delivery time.",
      "A strong MVP slice includes clear metrics so the team can decide whether to iterate, expand, or stop.",
      "This approach protects focus by deferring lower-impact capabilities until evidence supports them.",
    ],
    whyItMatters: [
      "Speeds up learning cycles and decision quality.",
      "Reduces delivery risk by limiting initial scope.",
      "Connects shipping decisions to measurable outcomes.",
    ],
  },
  "Persona vs Proto-Persona": {
    term: "Persona vs Proto-Persona",
    aliases: ["Persona vs Proto-Persona", "Proto-Persona", "Persona"],
    shortDefinition:
      "A Proto-Persona is an assumption-based profile, while a Persona is validated with real user evidence.",
    longDefinition: [
      "Teams often begin discovery with proto-personas to make implicit assumptions explicit.",
      "As interviews and behavioral data accumulate, those assumptions are validated, corrected, or discarded.",
      "A mature persona reflects evidence-backed needs, constraints, and success signals.",
      "Distinguishing the two prevents false confidence and keeps research transparent.",
    ],
    whyItMatters: [
      "Makes assumptions visible early in discovery.",
      "Encourages evidence-based prioritization.",
      "Improves stakeholder trust in research outputs.",
    ],
  },
  "Product Vision vs Product Goal": {
    term: "Product Vision vs Product Goal",
    aliases: [
      "Product Vision vs Product Goal",
      "Product Vision",
      "Product Goal",
    ],
    shortDefinition:
      "Product Vision describes long-term direction, while a Product Goal defines a concrete near-term outcome.",
    longDefinition: [
      "The vision explains the strategic destination and why it matters over time.",
      "A product goal narrows that direction into a measurable objective for a planning horizon, often one quarter.",
      "Teams need both: vision for alignment and goals for execution focus.",
      "Confusing them leads to either abstract plans or short-term work with no strategic coherence.",
    ],
    whyItMatters: [
      "Aligns tactical decisions with long-term strategy.",
      "Improves prioritization during trade-off discussions.",
      "Clarifies success metrics for delivery teams.",
    ],
  },
  Traceability: {
    term: "Traceability",
    aliases: ["Traceability", "Traceability Matrix"],
    shortDefinition:
      "Traceability links goals, backlog items, acceptance criteria, and metrics so decisions remain auditable.",
    longDefinition: [
      "A traceable backlog shows why each item exists and what outcome it is expected to influence.",
      "This linkage helps teams challenge low-value work before implementation begins.",
      "Traceability also supports post-release evaluation by connecting delivered work to metric movement.",
      "In portfolio reviews, it demonstrates disciplined product ownership rather than ad-hoc feature shipping.",
    ],
    whyItMatters: [
      "Improves accountability for prioritization decisions.",
      "Makes stakeholder communication evidence-based.",
      "Supports continuous learning after release.",
    ],
  },
  "First Contact Resolution (FCR)": {
    term: "First Contact Resolution (FCR)",
    aliases: [
      "First Contact Resolution (FCR)",
      "First Contact Resolution",
      "FCR",
    ],
    shortDefinition:
      "First Contact Resolution (FCR) measures the percentage of cases solved in the first interaction without follow-up.",
    longDefinition: [
      "FCR is a quality and efficiency indicator for support workflows.",
      "Higher FCR usually signals clearer answers, better tooling, and more confident agents.",
      "It should be interpreted with quality safeguards so teams do not close tickets prematurely.",
      "When paired with customer satisfaction data, FCR helps evaluate true resolution quality.",
    ],
    whyItMatters: [
      "Captures customer impact of support quality.",
      "Reveals whether knowledge access improvements are effective.",
      "Helps leadership evaluate operational performance.",
    ],
  },
  "Average Handle Time (AHT)": {
    term: "Average Handle Time (AHT)",
    aliases: ["Average Handle Time (AHT)", "Average Handle Time", "AHT"],
    shortDefinition:
      "Average Handle Time (AHT) is the average time an agent spends to resolve a support interaction.",
    longDefinition: [
      "AHT includes research, response drafting, and case closure activity.",
      "Lower AHT can indicate better knowledge retrieval and reduced context switching.",
      "It should be interpreted alongside quality metrics to avoid optimizing speed at the expense of correctness.",
      "Trend analysis over time is usually more meaningful than a single period value.",
    ],
    whyItMatters: [
      "Shows operational efficiency gains from product changes.",
      "Supports capacity planning for support teams.",
      "Provides a measurable KPI for MVP outcomes.",
    ],
  },
  "Reopen Rate": {
    term: "Reopen Rate",
    aliases: ["Reopen Rate", "Re-open Rate"],
    shortDefinition:
      "Reopen Rate measures how often resolved tickets are reopened because the initial resolution was incomplete or incorrect.",
    longDefinition: [
      "This metric is a practical signal of answer quality and customer confidence.",
      "A lower reopen rate often indicates stronger resolution accuracy and clearer communication.",
      "It should be reviewed by issue category to identify where guidance is weak or ambiguous.",
      "Combined with FCR and AHT, it helps balance speed with quality.",
    ],
    whyItMatters: [
      "Highlights quality gaps hidden by speed metrics alone.",
      "Helps prioritize improvements in content and guidance.",
      "Protects customer trust by reducing repeat contact.",
    ],
  },
  "Assumptions vs Risks": {
    term: "Assumptions vs Risks",
    aliases: ["Assumptions vs Risks", "Assumptions", "Risks"],
    shortDefinition:
      "Assumptions are beliefs about unknowns, while risks are the potential negative outcomes if those assumptions are wrong.",
    longDefinition: [
      "Product planning always starts with uncertainty, so assumptions should be documented explicitly.",
      "Risk analysis then evaluates probability, impact, and mitigation options for critical assumptions.",
      "Teams can design experiments to convert assumptions into evidence and reduce uncertainty over time.",
      "Separating assumptions from risks supports better prioritization and governance decisions.",
    ],
    whyItMatters: [
      "Encourages disciplined validation before scaling investment.",
      "Improves stakeholder visibility into uncertainty.",
      "Reduces avoidable rework in later delivery stages.",
    ],
  },
};

export const glossaryTerms = Object.keys(glossary) as Array<
  keyof typeof glossary
>;
