import type { CaseStudyContent } from "../types/caseStudy";

// const artifactFiles = {
//   vision: "vision.pdf",
//   visionBoard: "vision-board.pdf",
//   goal: "goal.pdf",
//   personas: "personas.pdf",
//   risks: "risks.pdf",
//   roles: "roles.pdf",
//   process: "process.pdf",
//   journey: "journey.pdf",
//   storyMap: "story-map.pdf",
//   userStories: "user-stories.pdf",
//   traceability: "traceability.pdf",
// };

export const caseStudyContent: CaseStudyContent = {
  siteMeta: {
    title: "Product Owner Portfolio - Case Study",
    description:
      "A strategic product ownership case study focused on measurable outcomes, structured prioritization, and decision traceability.",
    badge: "Product Owner Portfolio",
    shortTitle: "Product Owner Portfolio - Case Study",
  },
  navItems: [
    { label: "Overview", anchorId: "hero", sectionNumber: "" },
    { label: "Product Philosophy", anchorId: "philosophy", sectionNumber: "" },
    { label: "Vision", anchorId: "vision", sectionNumber: "01" },
    { label: "Goals", anchorId: "goals", sectionNumber: "02" },
    { label: "Personas", anchorId: "personas", sectionNumber: "03" },
    { label: "Assumptions and Risks", anchorId: "assumptions", sectionNumber: "04"},
    { label: "Core Journey", anchorId: "journey", sectionNumber: "05" },
    { label: "Story Map and MVP", anchorId: "storymap", sectionNumber: "06" },
    { label: "User Stories", anchorId: "stories", sectionNumber: "07" },
    { label: "Traceability", anchorId: "traceability", sectionNumber: "08" },
    { label: "Reflection", anchorId: "reflection", sectionNumber: "09" },
  ],
  hero: {
    sectionId: "hero",
    titleLines: [
      "AI Knowledge Copilot -",
      "PO Case Study",
    ],
    subtitle:
      "A structured Product Ownership initiative designed to reduce Average Handle Time (AHT) and increase First Contact Resolution (FCR) by solving fragmented support knowledge retrieval.",
    roleTitle: "My Role as Product Owner",
    highlights: [
      "Defined measurable success outcomes aligned to operational KPIs",
      "Conducted discovery interviews and persona validation",
      "Facilitated story mapping workshops",
      "Owned backlog ordering and made value-based trade-off decisions under delivery constraints",
      "Defined acceptance criteria and quality alignment",
      "Led Sprint Reviews and stakeholder alignment",
    ],
    supportText:
      "This case study demonstrates how measurable Product Goals, explicit risk validation, and disciplined backlog ordering were used to drive operational KPI movement under delivery constraints.",
    ctaPrimary: {
      label: "View Case Study",
      targetId: "vision",
    },
    ctaSecondary: {
      label: "Product Philosophy",
      targetId: "philosophy",
    },
    flow: [
      {
        label: "Vision",
        description:
          "Framed the operational support problem and clarified the distinction between long-term Product Vision and measurable Product Goal.",
      },
      {
        label: "Research",
        description:
          "Conducted structured discovery interviews, validated personas, and mapped key support pain points affecting efficiency and consistency.",
      },
      {
        label: "Mapping",
        description:
          "Applied User Story Mapping to identify the highest-value vertical MVP slice directly tied to measurable outcomes.",
      },
      {
        label: "Backlog",
        description:
          "Ordered the Product Backlog using value, cost, risk, and learning considerations, with INVEST-ready stories and explicit acceptance criteria.",
      },
      {
        label: "Outcome",
        description:
          "Measured KPI movement against defined baselines to confirm whether the MVP Slice meaningfully impacted AHT, FCR, and Reopen Rate.",
      },
    ],
  },
  philosophy: {
    sectionId: "philosophy",
    title: "Product Philosophy",
    subtitle: "How I operate as a Product Owner",
    narrative:
      "As a Scrum Product Owner, I am accountable for maximizing product value through disciplined Product Backlog management — defining a clear Product Goal, ordering work by measurable impact, and ensuring transparency from strategy to delivered behavior.",
    principles: [
      {
        title: "Vision to Backlog Alignment",
        description:
          "Every backlog item must trace directly to a Product Goal and measurable outcome. I order work based on value, cost, risk, and learning impact — ensuring alignment across stakeholders and the Scrum Team.",
      },
      {
        title: "Conversation-First Requirements",
        description:
          "User stories are conversation starters — not specifications. Written stories anchor discussion, and Acceptance Criteria clarify expectations without replacing team collaboration.",
      },
      {
        title: "Outcome over Output",
        description:
          "Prioritization decisions are guided by expected movement in operational KPIs such as Average Handle Time (AHT), First Contact Resolution (FCR), and Reopen Rate. I prioritize work based on value relative to cost, risk, and learning impact — not feature volume.",
      },
      {
        title: "Risk-First Delivery",
        description:
          "Assumptions are converted into testable risks early and validated through incremental delivery. I rely on empiricism — leveraging Sprint Reviews, Retrospectives, and continuous backlog refinement — to adapt decisions based on evidence rather than upfront certainty.",
      },
    ],
    operatingModelTitle: "Operating Model (repeatable cycle)",
    operatingModelItems: [
      "Define a measurable Product Goal and expected metric movement.",
      "Translate assumptions into explicit risks and validation experiments.",
      "Use User Story Mapping to define a coherent, value-driven MVP slice.",
      "Order the Product Backlog based on value, cost, risk, and learning.",
      "Ensure stories meet INVEST quality and include explicit Acceptance Criteria.",
      "Maintain end-to-end traceability from Product Goal → backlog capability → Acceptance Criteria → measurable outcome.",
    ]
  },
  vision: {
    header: {
      id: "vision",
      sectionNumber: "01",
      title: "Strategic Vision",
      subtitle: "Problem framing and long-term direction",
      artifacts: [],
    },
    introParagraphs: [
    ],
    problemContext: [
      "Support agents spend significant time searching fragmented knowledge sources, which slows responses and reduces consistency.",
      "The compounding effect is operational drag: slower resolution, lower confidence, and uneven customer experience quality.",
    ],
    visionStatement:
      "Empower SaaS customer support teams to deliver fast, consistent, and citation-backed answers through an AI knowledge copilot grounded in approved internal knowledge sources — replacing fragmented documentation workflows and unreliable generic AI tools.",
    strategicIntent: [
      {
        title: "Business Impact",
        bullets: [
          "Reduce support cost per case through lower Average Handle Time (AHT).",
          "Improve throughput without equivalent headcount growth.",
          "Raise service quality by improving First Contact Resolution (FCR).",
        ],
      },
      {
        title: "User Value",
        bullets: [
          "Reduce search friction during live interactions.",
          "Increase trust in guidance through citation transparency.",
          "Lower avoidable follow-up through stronger answer quality and reduced Reopen Rate.",
        ],
      },
      {
        title: "Strategic Foundation",
        bullets: [
          "Create reusable knowledge retrieval capabilities for future channels.",
          "Build measurable Traceability from product decisions to outcomes.",
          "Support future self-service and learning loops.",
        ],
      },
    ],
  },
  goals: {
    header: {
      id: "goals",
      sectionNumber: "02",
      title: "Measurable Product Goals",
      subtitle: "Outcome targets used for prioritization",
      artifacts: [],
    },
    introParagraphs: [],
    goalStatement:
      "Within 6 months, improve SaaS customer support efficiency by enabling agents to resolve common questions in under 30 seconds using citation-backed AI assistance — targeting a 35% reduction in Average Handle Time and a 15% increase in First Contact Resolution.",
    kpis: [
      {
        metric: "Average Handle Time (AHT)",
        target: "35% reduction",
        directionLabel: "Reduction Target",
        rationale: "Lower search overhead and faster response composition.",
      },
      {
        metric: "First Contact Resolution (FCR)",
        target: "15% increase",
        directionLabel: "Increase Target",
        rationale: "Higher answer confidence and quality at first response.",
      },
    ],
    prioritizationNote:
      "Backlog prioritization favored work expected to move AHT and FCR simultaneously while protecting answer quality through explicit Acceptance Criteria. Lower-signal ideas were deferred until the MVP validated core assumptions.",
  },
  personas: {
    header: {
      id: "personas",
      sectionNumber: "03",
      title: "User Research and Personas",
      subtitle: "From assumptions to validated user models",
      artifacts: [],
    },
    introParagraphs: [
      "Discovery began with proto-persona hypotheses and evolved into validated ones through 5 structured interviews and workflow walkthroughs with SaaS support professionals.",
    ],
    personas: [
      {
        id: "support-agent",
        name: "Support Agent",
        role: "Frontline support representative",
        type: "Primary User",
        icon: "headset",
        accent: "blue",
        goals: [
          "Find accurate answers quickly during live support interactions.",
          "Verify confidence with transparent source citations.",
          "Respond consistently without escalating routine tickets.",
        ],
        pains: [
          "Context switching across multiple knowledge sources.",
          "Conflicting guidance between docs and internal chat threads.",
          "Reduced trust when AI output lacks clear supporting evidence.",
        ],
        success: [
          "Resolve tickets faster without sacrificing answer quality.",
          "Higher First Contact Resolution with fewer escalations.",
        ],
      },
      {
        id: "support-lead",
        name: "Support Lead",
        role: "Team lead and quality owner",
        type: "Secondary User",
        icon: "user-tie",
        accent: "purple",
        goals: [
          "Improve team-level quality and throughput metrics.",
          "Identify knowledge gaps and stale guidance.",
          "Onboard new agents faster with clear process support.",
        ],
        pains: [
          "Limited visibility into where answer quality fails.",
          "Manual effort to keep internal content consistent.",
          "Difficulty linking process improvements to measurable outcomes.",
        ],
        success: [
          "Reduced Reopen Rate and clearer Traceability to backlog decisions.",
          "Clear linkage between process changes and measurable team performance.",
        ],
      },
    ],
    keyInsights: [
      "Search latency was the primary bottleneck for both speed and confidence.",
      "Citation transparency was essential for trust and adoption.",
      "Agents preferred guided AI support over opaque automation.",
    ],
  },
  risks: {
    header: {
      id: "assumptions",
      sectionNumber: "04",
      title: "Assumptions and Risk Management",
      subtitle: "Validation strategy for uncertain decisions",
      artifacts: [],
    },
    introParagraphs: [
      "Assumptions and risks were tracked explicitly to avoid hidden decision debt. Each critical assumption included a defined validation method and measurable success threshold before scaling investment.",
    ],
    assumptions: [
      "Agents will adopt AI guidance when citations are transparent and verifiable.",
      "Reducing search time is the primary lever for improving Average Handle Time (AHT) and First Contact Resolution (FCR).",
      "Existing knowledge quality is sufficient to support reliable AI answers in an initial MVP slice with targeted curation.",
    ],
    riskNarrative: [
      "If trust assumptions fail, adoption drops regardless of technical answer quality.",
      "If search is not the dominant bottleneck, expected metric movement will underperform, requiring backlog reprioritization.",
    ],
    criticalAssumptions: [
      {
        title: "Critical Assumption: Agent Trust in AI Guidance",
        validationMethod:
          "Run moderated scenario testing with support agents and observe citation checks, override behavior, and confidence ratings after each task.",
        successCriteria:
          "At least 80% of participants report confidence in cited answers and fewer than 20% perform a redundant manual search before responding.",
      },
      {
        title: "Critical Assumption: Search Time Is the Primary Bottleneck",
        validationMethod:
          "Shadow agents and measure time spent on search versus response composition across common ticket types.",
        successCriteria:
          "Search activity accounts for more than 40% of handling time on common tickets.",
      },
    ],
  },
  journey: {
    header: {
      id: "journey",
      sectionNumber: "05",
      title: "Core User Journey",
      subtitle: "Primary workflow from ticket intake to resolution",
      artifacts: [],
    },
    introParagraphs: [
      "This core journey served as the reference frame for Story Mapping and Acceptance Criteria decisions.",
    ],
    steps: [
      {
        title: "Ticket Received",
        description:
          "Agent receives a customer ticket requiring domain knowledge.",
        icon: "ticket",
        accent: "blue",
      },
      {
        title: "Ask Copilot",
        description:
          "Agent submits a natural language query to retrieve targeted knowledge.",
        icon: "comment-dots",
        accent: "purple",
      },
      {
        title: "Receive Cited Answer",
        description:
          "System returns a synthesized answer with explicit citations and confidence signals.",
        icon: "file-lines",
        accent: "teal",
      },
      {
        title: "Review Sources",
        description:
          "Agent checks citation context before finalizing the response.",
        icon: "magnifying-glass",
        accent: "orange",
      },
      {
        title: "Respond",
        description:
          "Agent adapts the cited answer to the customer context and responds.",
        icon: "reply",
        accent: "green",
      },
      {
        title: "Resolve",
        description:
          "Customer issue is resolved without escalation or follow-up.",
        icon: "check",
        accent: "accent",
      },
    ],
  },
  storyMap: {
    header: {
      id: "storymap",
      sectionNumber: "06",
      title: "Story Mapping and MVP Slice",
      subtitle: "Scope selection for highest learning value",
      artifacts: [],
    },
    introParagraphs: [
      "User Story Mapping was used to identify a coherent MVP Slice. The MVP slice was intentionally constrained to validate the Agent Trust and Search Bottleneck assumptions before expanding feature depth.",
    ],
    embedTitle: "Whimsical story map board",
    embedUrl: "https://whimsical.com/embed/X2LmBjyKEA7Wfy1H47adJW",
  },
  userStories: {
    header: {
      id: "stories",
      sectionNumber: "07",
      title: "User Stories",
      subtitle: "Backlog examples with Acceptance Criteria",
      artifacts: [],
    },
    introParagraphs: [
      "Stories are written to satisfy INVEST quality and include Acceptance Criteria that are behavior-focused and testable.",
    ],
    trelloColumns: [
      {
        id: "backlog",
        title: "Backlog",
        cardUrls: [
          "https://trello.com/c/eve6xSMD/3-knowledge-source-admin-curation",
          "https://trello.com/c/ZXgsNpmc/2-integrations-with-ticketing-systems",
          "https://trello.com/c/XoBxDVbq/5-known-issue-detection-reuse",
          "https://trello.com/c/h3oEQh53/12-outcome-measurement-snapshot",
          "https://trello.com/c/doTIXmNs/6-multi-tenant-workspaces",
          "https://trello.com/c/pRwMDOIR/7-enterprise-security-compliance",
        ],
      },
      {
        id: "mvp-slice",
        title: "MVP Slice",
        cardUrls: [
          "https://trello.com/c/8VWXnxCx/8-authentication-roles",
          "https://trello.com/c/gPjjHxsq/9-ticket-context-experience",
          "https://trello.com/c/othXu99A/10-copilot-qa-citations",
          "https://trello.com/c/P5uHHved/11-draft-human-control-and-resolution",
          "https://trello.com/c/BzENsQQd/4-feedback-loop-quality-triage",
          "https://trello.com/c/XzzAQh8T/26-handle-no-answer-found-safely",
          "https://trello.com/c/k0T2Wii3/27-ask-follow-up-questions-threaded",
          "https://trello.com/c/V3n1L2pW/28-regenerate-answer",
          "https://trello.com/c/qaAKl6od/29-send-response-and-close-ticket",
          "https://trello.com/c/0FnOSSzE/30-confirm-before-sending",
          "https://trello.com/c/DimNt7JW/31-separate-internal-note-vs-customer-reply",
          "https://trello.com/c/tEecrQ70/32-rate-copilot-answer-after-resolution",
          "https://trello.com/c/C9BkZC63/33-flag-unsafe-incorrect-answer",
        ],
      },
      {
        id: "sprint-2",
        title: "Sprint 2",
        cardUrls: [
          "https://trello.com/c/V9XH2OVT/13-login-as-support-agent",
          "https://trello.com/c/BlyOwU5T/25-role-based-access-agent-vs-admin",
          "https://trello.com/c/pi1cWBCP/14-ask-the-copilot-for-an-answer-free-text",
          "https://trello.com/c/LbsyXkS2/15-show-citations-and-open-source-without-losing-draft-context",
          "https://trello.com/c/crwGvm34/16-insert-ai-answer-into-draft-and-edit",
        ],
      },
      {
        id: "done",
        title: "Done",
        cardUrls: [
          "https://trello.com/c/KdemXZrA/1-platform-infra-baseline",
          "https://trello.com/c/XNHHRTpK/17-repo-ci-pipeline",
          "https://trello.com/c/i2gzhyJx/18-staging-deployment",
          "https://trello.com/c/qqBkFRZ9/19-initial-data-model-seed",
          "https://trello.com/c/88wdJwMP/20-basic-observability",
          "https://trello.com/c/NUP7sa9x/21-ticket-context-prototype",
          "https://trello.com/c/oGdSGw6U/22-view-assigned-tickets",
          "https://trello.com/c/4zOYvL3f/23-open-ticket-details",
          "https://trello.com/c/tvuFpXP8/24-identify-known-issue-manual-check",
        ],
      },
    ],
    stories: [
      {
        id: "story-agent-answer",
        persona: "Support Agent",
        statement:
          "As a Support Agent, I want to ask a question in natural language so that I can receive a context-relevant answer quickly.",
        acceptanceCriteria: [
          "System returns a cited answer within the agreed response-time threshold.",
          "At least one citation is directly navigable before the response is used.",
          "The agent can edit the response before sending it to the customer.",
        ],
      },
      {
        id: "story-agent-verify",
        persona: "Support Agent",
        statement:
          "As a Support Agent, I want transparent evidence so that I can trust and verify AI guidance before replying.",
        acceptanceCriteria: [
          "Each response shows source title and location metadata.",
          "Citation click opens evidence without losing the draft response context.",
          "Agent can reject a suggestion and continue manual search if needed.",
        ],
      },
      {
        id: "story-lead-outcomes",
        persona: "Support Lead",
        statement:
          "As a Support Lead, I want outcome visibility so that I can evaluate whether the MVP Slice is moving AHT, FCR, and Reopen Rate.",
        acceptanceCriteria: [
          "Dashboard view exposes baseline versus current values for target metrics.",
          "Changes are segmented by ticket category to avoid aggregate bias.",
          "Metrics can be traced back to the related backlog capability.",
        ],
      },
    ],
  },
  traceability: {
    header: {
      id: "traceability",
      sectionNumber: "08",
      title: "Traceability Matrix",
      subtitle: "Goal to backlog to outcome linkage",
      artifacts: [],
    },
    introParagraphs: [
      "Traceability was used to challenge low-value requests and keep scope connected to measurable outcomes.",
    ],
    tableLabel:
      "Product Goal to Backlog Item to Acceptance Criteria to Outcome",
    rows: [
      {
        productGoal: "Reduce Average Handle Time (AHT) by 30-40%",
        backlogItem: "Search to answer workflow",
        acceptanceCriteria:
          "Cited answer rendered within target threshold after query submission.",
        outcomeMetric: "AHT reduction from baseline by release cohort.",
      },
      {
        productGoal: "Increase First Contact Resolution (FCR) by 10-20%",
        backlogItem: "Citation transparency and confidence cues",
        acceptanceCriteria:
          "Agent confirms citation relevance before sending response.",
        outcomeMetric: "Higher FCR in categories covered by curated knowledge.",
      },
      {
        productGoal: "Reduce Reopen Rate by 15%",
        backlogItem: "Answer quality safeguards",
        acceptanceCriteria:
          "Response includes policy-aligned guidance and source backing.",
        outcomeMetric:
          "Reduced reopened tickets tied to knowledge-driven issues.",
      },
      {
        productGoal: "Improve agent confidence by 25%",
        backlogItem: "Evidence-first response presentation",
        acceptanceCriteria:
          "Agents can inspect and edit suggestions before send.",
        outcomeMetric:
          "Post-task confidence score improvement in pilot testing.",
      },
    ],
  },
  reflection: {
    header: {
      id: "reflection",
      sectionNumber: "09",
      title: "Reflection and Lessons Learned",
      subtitle: "What worked, what changed, and what is next",
      artifacts: [],
    },
    introParagraphs: [
      "Reflection focuses on decision quality, measurable outcomes, and how assumptions were handled through evidence.",
    ],
    successFactors: [
      "Starting with Product Vision vs Product Goal clarity before feature selection.",
      "Treating Assumptions vs Risks as explicit and testable artifacts.",
      "Using User Story Mapping to protect a coherent MVP Slice.",
      "Maintaining Traceability from strategy through Acceptance Criteria and outcomes.",
    ],
    challenges: [
      {
        challenge:
          "Early skepticism about AI reliability among experienced agents.",
        learning:
          "Citations and transparent evidence reduced resistance faster than additional automation.",
      },
      {
        challenge:
          "Initial baseline data quality was inconsistent across ticket categories.",
        learning:
          "Metric definitions and instrumentation were standardized before interpreting impact.",
      },
      {
        challenge: "Knowledge source quality varied across teams and owners.",
        learning:
          "Governance for content freshness became a dependency for sustained outcome gains.",
      },
    ],
    roadmap: [
      {
        item: "Expand coverage to additional support domains after validating current metrics.",
      },
      {
        item: "Introduce guided content quality workflows tied to Reopen Rate patterns.",
      },
      {
        item: "Add comparative cohort analysis for deeper Traceability in quarterly reviews.",
      },
      {
        item: "Evolve from pilot workflow to production operating model with ongoing risk review.",
      },
    ],
  },
};
