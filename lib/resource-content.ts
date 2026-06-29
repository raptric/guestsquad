import type { ComparisonRow } from "@/components/site/comparison-table";

export type ResourceSummary = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
};

export const RESOURCES: ResourceSummary[] = [
  {
    slug: "hotel-answering-service-vs-ai-voice",
    title: "Hotel Answering Service vs. AI Voice Agent",
    shortTitle: "Human vs. AI Voice",
    description:
      "Where a trained human answering service and an AI voice agent each hold up — and where AI still falls short for hospitality.",
  },
  {
    slug: "hotel-answering-service-vs-call-center",
    title: "Hotel Answering Service vs. Generic Call Center",
    shortTitle: "vs. Generic Call Center",
    description:
      "Why hospitality-trained, property-specific call answering performs differently than a shared, multi-industry call center.",
  },
];

export type ResourceArticleData = {
  slug: string;
  title: string;
  description: string;
  metaTitle?: string;
  metaDescription?: string;
  datePublished: string;
  dateModified?: string;
  intro: string[];
  columnA: string;
  columnB: string;
  rows: ComparisonRow[];
  verdictHeading: string;
  verdictParagraphs: string[];
  faqs: { q: string; a: string }[];
  relatedServiceSlugs: string[];
};

export const aiVoiceComparison: ResourceArticleData = {
  slug: "hotel-answering-service-vs-ai-voice",
  relatedServiceSlugs: ["hotel-answering-service", "reservation-support", "guest-messaging"],
  title: "Hotel Answering Service vs. AI Voice: Which Is Better for Guest Support?",
  description:
    "A direct comparison of a trained human hotel answering service against an AI voice agent — where each one holds up, and where AI still falls short for hospitality.",
  metaTitle: "Hotel Answering Service vs AI Voice | GuestSquad",
  metaDescription:
    "Compare human hotel answering services with AI voice agents for guest calls, reservations, escalations, and after-hours support.",
  datePublished: "2026-06-26",
  intro: [
    "AI voice agents are now pitched to hotels as a way to answer every call without staffing a single person. They're genuinely good at narrow, repetitive tasks. They're also frequently sold as a full replacement for a human answering service — and that's the part worth examining before you commit a property's phone line to one.",
    "GuestSquad is built the other way around: people answer your calls, with technology used only to route, log, and report on that work. Here's an honest, factor-by-factor comparison rather than a one-sided pitch.",
  ],
  columnA: "GuestSquad (Human)",
  columnB: "AI Voice Agent",
  rows: [
    {
      feature: "Unexpected, off-script situations",
      a: "A trained person adapts in real time — a confused guest, a booking that doesn't fit the usual pattern, a complaint that needs judgment.",
      b: "Tends to fall back to a transfer, a repeated phrase, or a dead end once the conversation leaves the scripted path.",
    },
    {
      feature: "Booking modifications & exceptions",
      a: "Applies your policies with judgment — what to bend, what to hold firm on, when to check with you first.",
      b: "Handles exceptions only as far as they were explicitly programmed; anything outside that often stalls or escalates broadly.",
    },
    {
      feature: "Tone and guest sentiment",
      a: "Reads a guest's mood and adjusts — particularly during complaints, where tone matters as much as the answer.",
      b: "Can sound scripted or oddly cheerful in situations that call for empathy, which guests notice quickly.",
    },
    {
      feature: "Setup and go-live time",
      a: "A property brief and a short onboarding call — live within about five business days.",
      b: "Often requires voice/PMS integration work and prompt tuning before it performs reliably.",
    },
    {
      feature: "Escalation judgment",
      a: "Decides what genuinely needs your attention right now versus what can wait for the daily summary.",
      b: "Escalation rules are typically broad (escalate anything unclear) or narrow (escalate almost nothing), with little judgment in between.",
    },
    {
      feature: "Best suited for",
      a: "Reservation calls, guest questions, complaints, and anything requiring a judgment call.",
      b: "High-volume, simple, repetitive questions with a small number of predictable answers.",
    },
  ],
  verdictHeading: "Where each one actually makes sense",
  verdictParagraphs: [
    "This isn't an anti-AI argument — AI voice can be genuinely useful for narrow, high-volume, predictable questions (hours of operation, basic directions, simple FAQ-style queries) where the cost of an occasional wrong or awkward answer is low.",
    "Where it gets risky is reservation calls, complaints, and anything involving exceptions to policy — situations where a guest's first impression of your property is being formed in real time, and where a stilted or wrong answer costs you a booking or a review.",
    "GuestSquad doesn't compete on being able to answer the highest possible call volume at the lowest possible cost per call. It competes on guest calls being handled the way your best front-desk person would handle them — because that's who's doing it.",
  ],
  faqs: [
    {
      q: "Is GuestSquad an AI voice agent?",
      a: "No. Every guest call is answered by a hospitality-trained person. We use software to route calls, log every interaction, and generate your reporting — never to talk to your guests in place of a person.",
    },
    {
      q: "Do you use any automation at all?",
      a: "Yes, behind the scenes — for call routing, logging, and the reports you receive. The guest-facing conversation itself is always handled by a person.",
    },
    {
      q: "Can AI voice handle hotel reservations well?",
      a: "For very simple, predictable cases, often yes. Once a call involves a rate exception, a multi-room group booking, or a guest who's frustrated, human judgment tends to perform noticeably better.",
    },
    {
      q: "Is human support more expensive than an AI voice platform?",
      a: "It depends on volume and how the AI platform is licensed — per-minute AI pricing plus integration costs can add up quickly at scale. We'd rather give you a real quote based on your call volume than make a blanket cost claim either way.",
    },
    {
      q: "Can we use both AI and a human answering service?",
      a: "Yes — some properties use a simple chat widget or FAQ bot to deflect the most basic website questions, then route every phone call and anything more nuanced to GuestSquad.",
    },
  ],
};

export const callCenterComparison: ResourceArticleData = {
  slug: "hotel-answering-service-vs-call-center",
  relatedServiceSlugs: ["hotel-answering-service", "after-hours-support", "vacation-rental-answering-service"],
  title: "Hotel Answering Service vs. Generic Call Center: What's the Real Difference?",
  description:
    "Why a hospitality-trained, property-specific answering service performs differently from a generic, multi-industry call center — and what to check before you sign with either.",
  metaTitle: "Hotel Answering Service vs Call Center | GuestSquad",
  metaDescription:
    "Compare hospitality-trained hotel answering services with generic call centers for reservations, guest questions, and front desk overflow.",
  datePublished: "2026-06-26",
  intro: [
    "\"Call center\" and \"hotel answering service\" often get used interchangeably when hotels start shopping for outsourced phone coverage — but the underlying operating models are usually quite different, and that difference shows up on the call itself.",
    "A generic call center is typically built to handle calls for many unrelated industries from a shared agent pool. A hotel-specific answering service like GuestSquad is built around one property at a time. Here's where that distinction actually matters.",
  ],
  columnA: "Hotel Answering Service",
  columnB: "Generic Call Center",
  rows: [
    {
      feature: "Agent training",
      a: "Hospitality-trained, briefed specifically on your property's rates, policies, and tone before going live.",
      b: "Generalist call-handling training, often shared across industries with no hospitality-specific grounding.",
    },
    {
      feature: "Agent consistency",
      a: "The same trained team becomes familiar with your property over time.",
      b: "Calls are typically picked up by whichever agent in the shared pool is available — a different person each time.",
    },
    {
      feature: "Familiarity with PMS / OTA tools",
      a: "Comfortable operating inside your actual PMS and OTA accounts, not just taking a message.",
      b: "Often limited to scripted call handling and message-taking, without working inside your systems.",
    },
    {
      feature: "Reporting",
      a: "Calls logged with context, summarized into a report that tells you what actually happened.",
      b: "Typically raw call logs only, with little operational insight into patterns or recovered revenue.",
    },
    {
      feature: "Escalation accuracy",
      a: "Knows what's genuinely urgent for your specific property and routes accordingly.",
      b: "Follows generic escalation rules not tailored to your operation.",
    },
    {
      feature: "Contract structure",
      a: "Pilot-first, month-to-month — you see results before committing further.",
      b: "Often requires longer lock-in contracts before you've seen real performance.",
    },
  ],
  verdictHeading: "What to ask before signing with either",
  verdictParagraphs: [
    "If you're evaluating outsourced phone coverage, ask directly: will the same agents handle our calls over time, or are we in a shared pool? Are agents trained on hospitality specifically, or generalist call-center scripts? Do agents work inside our actual PMS and OTA accounts? What do we actually receive in reporting — call counts, or real operational insight?",
    "Those four questions tend to separate a true hotel-specific answering service from a relabeled generic call center fairly quickly.",
  ],
  faqs: [
    {
      q: "What's the actual difference between an answering service and a call center?",
      a: "\"Call center\" usually describes the underlying infrastructure — a shared agent pool handling calls across many clients and industries. \"Hotel answering service\" describes the specialization — agents trained specifically on hospitality and, ideally, your property.",
    },
    {
      q: "Will agents actually know our rates and policies, or are they reading a generic script?",
      a: "With GuestSquad, every account gets a property-specific brief — rates, room types, policies, and tone — before a single call is answered.",
    },
    {
      q: "Do you require a long-term contract like some call centers do?",
      a: "No. Every engagement starts with a 30-day pilot, then continues month-to-month.",
    },
    {
      q: "We already use a call center for overflow — can you work alongside it?",
      a: "Yes. Many clients start by routing only specific overflow scenarios (after-hours, peak check-in/out) to GuestSquad while keeping existing arrangements for everything else.",
    },
    {
      q: "How fast can we switch from our current call center?",
      a: "Typical onboarding is about five business days from your discovery call to go-live.",
    },
  ],
};

export const RESOURCE_ARTICLES: Record<string, ResourceArticleData> = {
  "hotel-answering-service-vs-ai-voice": aiVoiceComparison,
  "hotel-answering-service-vs-call-center": callCenterComparison,
};
