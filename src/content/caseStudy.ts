import type { CaseStudyContent } from "../types/caseStudy";

const artifactFiles = {
  vision: "vision.pdf",
  visionBoard: "vision-board.pdf",
  goal: "goal.pdf",
  personas: "personas.pdf",
  risks: "risks.pdf",
  roles: "roles.pdf",
  process: "process.pdf",
  journey: "journey.pdf",
  storyMap: "story-map.pdf",
  userStories: "user-stories.pdf",
  traceability: "traceability.pdf",
};

export const caseStudyContent: CaseStudyContent = {
  siteMeta: {
    title: "Product Owner Portfolio - AI Knowledge Copilot Case Study",
    description:
      "A strategic product ownership case study focused on measurable outcomes, structured prioritization, and decision traceability.",
    badge: "Product Owner Portfolio",
    shortTitle: "Case Study: AI Copilot",
  },
  navItems: [
    { label: "Overview", anchorId: "hero", sectionNumber: "00" },
    {
      label: "Product Philosophy",
      anchorId: "philosophy",
      sectionNumber: "00",
    },
    { label: "Framework", anchorId: "structure", sectionNumber: "00" },
    { label: "Vision", anchorId: "vision", sectionNumber: "01" },
    { label: "Goals", anchorId: "goals", sectionNumber: "02" },
    { label: "Personas", anchorId: "personas", sectionNumber: "03" },
    {
      label: "Assumptions and Risks",
      anchorId: "assumptions",
      sectionNumber: "04",
    },
    { label: "Core Journey", anchorId: "journey", sectionNumber: "05" },
    { label: "Story Map and MVP", anchorId: "storymap", sectionNumber: "06" },
    { label: "User Stories", anchorId: "stories", sectionNumber: "07" },
    { label: "Traceability", anchorId: "traceability", sectionNumber: "08" },
    { label: "Reflection", anchorId: "reflection", sectionNumber: "09" },
  ],
  hero: {
    sectionId: "hero",
    titleLines: [
      "AI Knowledge Copilot",
      "A Strategic End-to-End Product",
      "Ownership Case Study",
    ],
    subtitle:
      "A disciplined product journey focused on measurable impact, validated decision-making, and structured prioritization.",
    highlights: [
      "Vision-driven strategy",
      "Evidence-based discovery with personas",
      "User Story Mapping for MVP Slice definition",
      "Outcome metrics anchored in AHT, FCR, and Reopen Rate",
    ],
    supportText:
      "This case study documents strategy, discovery, prioritization, and delivery readiness with explicit Traceability.",
    ctaPrimary: {
      label: "View Case Study",
      targetId: "structure",
    },
    ctaSecondary: {
      label: "Product Philosophy",
      targetId: "philosophy",
    },
    flow: [
      {
        label: "Vision",
        description:
          "Problem framing with Product Vision vs Product Goal distinction",
      },
      {
        label: "Research",
        description:
          "Discovery interviews, Persona vs Proto-Persona validation, and pain mapping",
      },
      {
        label: "Mapping",
        description:
          "User Story Mapping to identify the highest-value MVP Slice",
      },
      {
        label: "Backlog",
        description:
          "INVEST-ready backlog items with explicit Acceptance Criteria",
      },
      {
        label: "Outcome",
        description:
          "Validation against Average Handle Time (AHT), First Contact Resolution (FCR), and Reopen Rate",
      },
    ],
  },
  philosophy: {
    sectionId: "philosophy",
    title: "Product Philosophy",
    subtitle: "How I operate as a Product Owner",
    narrative:
      "I treat product ownership as value maximization through clarity, alignment, and disciplined decisions. Product Vision vs Product Goal alignment keeps discovery and delivery focused on measurable outcomes rather than output volume.",
    principles: [
      {
        title: "Vision to Backlog Alignment",
        description:
          "Every backlog item must connect to a product goal and a measurable outcome.",
      },
      {
        title: "Conversation-First Requirements",
        description:
          "User stories are collaboration anchors, then refined with Acceptance Criteria to remove ambiguity.",
      },
      {
        title: "Outcome over Output",
        description:
          "Prioritization is based on impact signals such as Average Handle Time (AHT), First Contact Resolution (FCR), and Reopen Rate.",
      },
      {
        title: "Risk-First Delivery",
        description:
          "Assumptions vs Risks are documented early and validated through targeted experiments.",
      },
    ],
    operatingModelTitle: "Operating Model (repeatable cycle)",
    operatingModelItems: [
      "Define product goals and expected metric movement.",
      "Convert assumptions into testable risks and validation plans.",
      "Use User Story Mapping to shape a coherent MVP Slice.",
      "Maintain a prioritized backlog using INVEST quality checks.",
      "Write Acceptance Criteria that are testable and observable.",
      "Preserve Traceability from goals to delivered behavior.",
    ],
    artifacts: [
      {
        id: "roles",
        label: "Roles and Responsibilities",
        filename: artifactFiles.roles,
        description: "RACI and ownership boundaries for product decisions.",
      },
      {
        id: "process",
        label: "Product Process",
        filename: artifactFiles.process,
        description: "Discovery-to-delivery operating rhythm and governance.",
      },
    ],
  },
  structure: {
    sectionId: "structure",
    title: "How This Case Study Is Structured",
    cards: [
      {
        step: "Step 1",
        title: "Vision and Goals",
        description:
          "Define strategic context, desired outcomes, and measurable success before solution design.",
        icon: "compass",
        accent: "blue",
      },
      {
        step: "Step 2",
        title: "Research and Personas",
        description:
          "Validate assumptions through interviews and convert proto-personas into evidence-backed personas.",
        icon: "user",
        accent: "purple",
      },
      {
        step: "Step 3",
        title: "Story Mapping and MVP",
        description:
          "Use User Story Mapping to prioritize the MVP Slice that best validates value and risk.",
        icon: "list-check",
        accent: "orange",
      },
      {
        step: "Step 4",
        title: "Backlog and Traceability",
        description:
          "Translate scope into INVEST stories with Acceptance Criteria and explicit outcome linkage.",
        icon: "code-branch",
        accent: "teal",
      },
    ],
    footerHint: "Scroll to review each artifact and decision trail.",
  },
  vision: {
    header: {
      id: "vision",
      sectionNumber: "01",
      title: "Strategic Vision",
      subtitle: "Problem framing and long-term direction",
      artifacts: [
        {
          id: "vision",
          label: "Vision Statement",
          filename: artifactFiles.vision,
          description: "Formal vision statement and strategic context.",
        },
        {
          id: "vision-board",
          label: "Vision Board",
          filename: artifactFiles.visionBoard,
          description:
            "Visual map of opportunities, constraints, and outcomes.",
        },
      ],
    },
    introParagraphs: [
      "This section defines strategic intent before solution detail. Product Vision vs Product Goal framing was used to separate long-term direction from near-term execution targets.",
    ],
    problemContext: [
      "Support agents spend significant time searching fragmented knowledge sources, which slows responses and reduces consistency.",
      "The compounding effect is operational drag: slower resolution, lower confidence, and uneven customer experience quality.",
    ],
    visionStatement:
      "Enable support agents to deliver accurate, consistent answers in seconds by surfacing context-relevant knowledge with transparent citations and clear confidence signals.",
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
      artifacts: [
        {
          id: "goal",
          label: "Goal Definition",
          filename: artifactFiles.goal,
          description: "Goal metrics, baselines, and measurement method.",
        },
      ],
    },
    introParagraphs: [
      "The team committed to explicit outcome metrics before selecting scope. MVP Slice decisions were made against expected movement in service quality and operational efficiency.",
    ],
    kpis: [
      {
        metric: "Average Handle Time (AHT)",
        target: "30-40% reduction",
        directionLabel: "Reduction Target",
        rationale: "Lower search overhead and faster response composition.",
      },
      {
        metric: "First Contact Resolution (FCR)",
        target: "10-20% increase",
        directionLabel: "Increase Target",
        rationale: "Higher answer confidence and quality at first response.",
      },
      {
        metric: "Reopen Rate",
        target: "15% reduction",
        directionLabel: "Reduction Target",
        rationale: "More accurate answers with clearer contextual grounding.",
      },
      {
        metric: "Agent Confidence Score",
        target: "25% improvement",
        directionLabel: "Improvement Target",
        rationale: "Citation visibility and controllable AI assistance.",
      },
    ],
    prioritizationNote:
      "Prioritization favored work that moved AHT and FCR simultaneously while protecting quality through Acceptance Criteria. Lower-signal ideas were deferred until the initial MVP Slice validated core assumptions.",
  },
  personas: {
    header: {
      id: "personas",
      sectionNumber: "03",
      title: "User Research and Personas",
      subtitle: "From assumptions to validated user models",
      artifacts: [
        {
          id: "personas",
          label: "Personas",
          filename: artifactFiles.personas,
          description: "Research-backed persona sheets and evidence summary.",
        },
      ],
    },
    introParagraphs: [
      "Discovery started with assumptions and proto-personas, then evolved into validated personas through interviews and task analysis. Persona vs Proto-Persona clarity prevented premature certainty during planning.",
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
          "Uncertainty when AI output does not explain evidence.",
        ],
        success: [
          "Lower Average Handle Time (AHT) without reducing answer quality.",
          "Higher First Contact Resolution (FCR) with fewer escalations.",
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
          "Evidence that training effort maps to measurable team performance.",
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
      artifacts: [
        {
          id: "risks",
          label: "Risk Register",
          filename: artifactFiles.risks,
          description: "Assumption log, risk scoring, and mitigation plan.",
        },
      ],
    },
    introParagraphs: [
      "Assumptions vs Risks were tracked explicitly to avoid hidden decision debt. Each critical assumption had a validation method and success threshold before scale investment.",
    ],
    assumptions: [
      "Agents will adopt AI guidance when citations are transparent and verifiable.",
      "Reducing search time will improve Average Handle Time (AHT) and First Contact Resolution (FCR).",
      "Existing knowledge quality is sufficient for an initial MVP Slice with targeted curation.",
    ],
    riskNarrative: [
      "If trust assumptions fail, adoption drops even when answer quality is technically strong.",
      "If search is not the dominant bottleneck, expected metric movement will underperform and reprioritization is required.",
    ],
    criticalAssumption: {
      title: "Critical Assumption: Agent Trust in AI Guidance",
      validationMethod:
        "Run moderated scenario testing with support agents and observe citation checks, override behavior, and confidence ratings after each task.",
      successCriteria:
        "At least 80% of participants report confidence in cited answers and fewer than 20% perform a redundant manual search before responding.",
    },
  },
  journey: {
    header: {
      id: "journey",
      sectionNumber: "05",
      title: "Core User Journey",
      subtitle: "Primary workflow from ticket intake to resolution",
      artifacts: [
        {
          id: "journey",
          label: "Journey Map",
          filename: artifactFiles.journey,
          description: "Detailed end-to-end journey map with pain points.",
        },
      ],
    },
    introParagraphs: [
      "The journey model was used as the reference frame for User Story Mapping and Acceptance Criteria decisions.",
    ],
    steps: [
      {
        title: "Ticket Received",
        description:
          "Agent opens a customer ticket requiring domain knowledge retrieval.",
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
          "Agent adapts content to customer context and sends a final response.",
        icon: "reply",
        accent: "green",
      },
      {
        title: "Resolve",
        description:
          "Case is resolved with quality safeguards and metric tracking for Traceability.",
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
      artifacts: [
        {
          id: "story-map",
          label: "Story Map",
          filename: artifactFiles.storyMap,
          description:
            "User Story Mapping board and release slicing decisions.",
        },
      ],
    },
    introParagraphs: [
      "User Story Mapping was used to identify a coherent MVP Slice that tests trust and speed assumptions before expanding scope.",
    ],
    focusLabel: "MVP Focus: trust and speed validation",
    embed: {
      title: "Story map board embed",
      embedUrl: "",
      fallbackUrl: "/artifacts/story-map.pdf",
    },
    activities: [
      {
        title: "Ask Question",
        items: [
          { label: "Natural language input", inMvp: true },
          { label: "Query suggestions", inMvp: false },
        ],
      },
      {
        title: "Get Answer",
        items: [
          { label: "AI-generated response", inMvp: true },
          { label: "Source citations", inMvp: true },
        ],
      },
      {
        title: "Verify",
        items: [
          { label: "Open source documents", inMvp: true },
          { label: "Confidence rating", inMvp: false },
        ],
      },
      {
        title: "Use Answer",
        items: [
          { label: "Copy response into ticket tool", inMvp: true },
          { label: "Answer history", inMvp: false },
        ],
      },
    ],
    legend:
      "Highlighted items represent MVP Slice scope. Muted items are post-MVP backlog candidates.",
  },
  userStories: {
    header: {
      id: "stories",
      sectionNumber: "07",
      title: "User Stories",
      subtitle: "Backlog examples with Acceptance Criteria",
      artifacts: [
        {
          id: "user-stories",
          label: "User Stories",
          filename: artifactFiles.userStories,
          description:
            "Story set with INVEST checks and acceptance boundaries.",
        },
      ],
    },
    introParagraphs: [
      "Stories are written to satisfy INVEST quality and include Acceptance Criteria that are behavior-focused and testable.",
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
      artifacts: [
        {
          id: "traceability",
          label: "Traceability Matrix",
          filename: artifactFiles.traceability,
          description: "Goal-backlog-metric linkage used for governance.",
        },
      ],
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
