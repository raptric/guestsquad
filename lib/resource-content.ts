import type { ComparisonRow } from "@/components/site/comparison-table";

export type ResourceSummary = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  type: "comparison" | "guide";
};

export const RESOURCES: ResourceSummary[] = [
  {
    slug: "hotel-answering-service-vs-ai-voice",
    title: "Hotel Answering Service vs. AI Voice Agent",
    shortTitle: "Human vs. AI Voice",
    description:
      "Where a trained human answering service and an AI voice agent each hold up — and where AI still falls short for hospitality.",
    type: "comparison",
  },
  {
    slug: "hotel-answering-service-vs-call-center",
    title: "Hotel Answering Service vs. Generic Call Center",
    shortTitle: "vs. Generic Call Center",
    description:
      "Why hospitality-trained, property-specific call answering performs differently than a shared, multi-industry call center.",
    type: "comparison",
  },
  {
    slug: "hotel-answering-service-cost",
    title: "How Much Does a Hotel Answering Service Cost?",
    shortTitle: "Pricing Guide",
    description:
      "The pricing models hotel answering services actually use, what drives the price up or down, and the hidden costs to watch for.",
    type: "guide",
  },
  {
    slug: "after-hours-hotel-support-checklist",
    title: "After-Hours Hotel Front Desk Support: A Practical Checklist",
    shortTitle: "After-Hours Checklist",
    description:
      "What a real after-hours setup needs to cover — overnight calls, night audit phone coverage, and emergency escalation — in checklist form.",
    type: "guide",
  },
  {
    slug: "hotel-front-desk-overflow-support",
    title: "Hotel Front Desk Overflow Support: When to Outsource and What to Keep In-House",
    shortTitle: "Overflow Support Guide",
    description:
      "How overflow coverage actually works, the signs your property needs it, and how to set it up without disrupting your existing team.",
    type: "guide",
  },
  {
    slug: "booking-com-message-support",
    title: "Booking.com and Expedia Message Support: An OTA Inbox Checklist",
    shortTitle: "OTA Inbox Checklist",
    description:
      "Why OTA response time affects bookings and rankings, and a practical checklist for keeping Booking.com and Expedia inboxes under control.",
    type: "guide",
  },
  {
    slug: "hotel-guest-messaging-sop-template",
    title: "Hotel Guest Messaging SOP Template",
    shortTitle: "Messaging SOP Template",
    description:
      "What to include in a guest messaging SOP — response-time targets, escalation rules, tone guidelines, and a sample outline to start from.",
    type: "guide",
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

export type GuideSection = {
  heading: string;
  paragraphs: string[];
  checklist?: string[];
};

export type GuideArticleData = {
  slug: string;
  title: string;
  description: string;
  metaTitle?: string;
  metaDescription?: string;
  datePublished: string;
  dateModified?: string;
  intro: string[];
  sections: GuideSection[];
  faqs: { q: string; a: string }[];
  relatedServiceSlugs: string[];
};

export const answeringServiceCostGuide: GuideArticleData = {
  slug: "hotel-answering-service-cost",
  title: "How Much Does a Hotel Answering Service Cost?",
  description:
    "The pricing models hotel answering services actually use, what drives the price up or down, and the hidden costs worth asking about before you sign.",
  metaTitle: "Hotel Answering Service Cost Guide | GuestSquad",
  metaDescription:
    "How hotel answering services price their plans, what drives the cost, and the questions to ask before signing with any provider.",
  datePublished: "2026-06-29",
  intro: [
    "\"How much does this cost?\" is usually the first question a GM asks, and the hardest one to get a straight answer to — most providers, including GuestSquad, don't publish flat rates, because the honest answer depends on your volume, channels, and coverage hours.",
    "This guide walks through the pricing models actually used in this industry, what genuinely moves the price, and the costs that tend to show up after you've already signed.",
  ],
  sections: [
    {
      heading: "The Three Common Pricing Models",
      paragraphs: [
        "Most hotel answering and guest-operations providers price using one of three models, sometimes blended:",
      ],
      checklist: [
        "Per-seat / per-FTE — a flat monthly rate for a dedicated agent or team, regardless of exact call volume.",
        "Per-call or per-message — a rate charged for each interaction handled, which scales directly with volume.",
        "Per-minute — common with call-center-style providers and AI voice platforms, billed on talk time.",
      ],
    },
    {
      heading: "What Actually Drives the Price",
      paragraphs: [
        "Within any of those models, the quote you get depends on a handful of real factors: your monthly call and message volume, how many properties you're covering, which channels are included (phone only, versus phone plus OTA inboxes plus SMS/WhatsApp/email), and how many hours of coverage you need — after-hours-only coverage costs less than full 24/7 coverage.",
        "Contract length also affects price. Month-to-month plans are typically priced slightly higher per unit than longer commitments, in exchange for the flexibility to leave without penalty.",
      ],
    },
    {
      heading: "Hidden Costs to Watch For",
      paragraphs: [
        "A few things are easy to miss when comparing quotes:",
      ],
      checklist: [
        "Setup or onboarding fees charged separately from the monthly rate.",
        "Per-minute overage charges once you exceed an included call allotment.",
        "Long-term contract lock-in with early-termination penalties.",
        "Integration fees for connecting to your specific PMS or phone system.",
        "Charges for reporting or analytics that aren't included by default.",
      ],
    },
    {
      heading: "What We Quote Instead",
      paragraphs: [
        "GuestSquad doesn't publish flat pricing because doing so would mean either overcharging low-volume properties or underpricing high-volume ones. Instead, every engagement starts with a short conversation about your volume and channels, and we recommend one of three plans accordingly — see the full breakdown on the Pricing page. Every plan starts with a 30-day pilot, so you see real numbers before committing further.",
      ],
    },
  ],
  faqs: [
    {
      q: "Is there a setup fee?",
      a: "Setup is included in the pilot fee rather than charged separately — see Pricing for the current pilot terms.",
    },
    {
      q: "Does the price change if our call volume spikes?",
      a: "Plans are scoped to your typical volume range. A sustained increase would mean revisiting the plan together, not a surprise overage charge.",
    },
    {
      q: "Is the 30-day pilot really the full service?",
      a: "Yes — the pilot runs the full Guest Journey service tier, not a stripped-down trial version.",
    },
    {
      q: "Do you charge per call, per minute, or a flat rate?",
      a: "Plans are scoped around your volume and channels rather than billed per call or per minute — see Pricing for how the three tiers are structured.",
    },
  ],
  relatedServiceSlugs: ["hotel-answering-service", "after-hours-support"],
};

export const afterHoursChecklistGuide: GuideArticleData = {
  slug: "after-hours-hotel-support-checklist",
  title: "After-Hours Hotel Front Desk Support: A Practical Checklist",
  description:
    "What a real after-hours setup needs to cover — overnight calls, night audit phone coverage, and emergency escalation — laid out as a working checklist.",
  metaTitle: "After-Hours Hotel Answering Service Checklist | GuestSquad",
  metaDescription:
    "A practical checklist for after-hours hotel front desk and night audit phone coverage, including escalation rules and morning handoff.",
  datePublished: "2026-06-29",
  intro: [
    "\"After-hours coverage\" means different things to different properties. For some it's just making sure the phone gets answered after 11pm. For others it includes night audit calls, emergency escalation, and a morning handoff report. This checklist breaks down what a complete setup actually covers.",
  ],
  sections: [
    {
      heading: "What Counts as \"After-Hours\" for Most Hotels",
      paragraphs: [
        "Most independent hotels define after-hours as the period between the last front-desk shift change and the morning team arriving — typically somewhere between 11pm and 7am, plus weekends or holidays where staffing is thin. Night audit duties often fall in this same window.",
      ],
    },
    {
      heading: "What a Complete After-Hours Setup Covers",
      paragraphs: ["A setup that actually holds up overnight should include:"],
      checklist: [
        "Live call answering for reservation and general guest questions, not a phone tree.",
        "Night audit phone coverage — calls related to billing, late charges, or audit questions.",
        "Clear emergency escalation rules, agreed in advance, for genuine emergencies.",
        "Handling for common late-night requests: late checkout, early arrival, lock-out support coordination.",
        "A morning summary so your day team knows exactly what happened overnight before their shift starts.",
      ],
    },
    {
      heading: "The Real Risk of Unanswered Overnight Calls",
      paragraphs: [
        "A booking inquiry that calls at 11pm and gets voicemail rarely calls back — they book elsewhere and you never see the lost revenue. The same applies to an existing guest with an urgent issue: if nobody answers, the complaint often surfaces the next morning as a review instead of a call.",
      ],
    },
    {
      heading: "Build vs. Outsource",
      paragraphs: [
        "Staffing a dedicated overnight position is the traditional fix, but it's expensive for the call volume most independent properties actually get overnight, and turnover on graveyard shifts is high. Outsourced after-hours coverage is typically priced closer to the actual volume of overnight activity, with the same person or team handling it night after night rather than rotating through whoever's on shift.",
      ],
    },
  ],
  faqs: [
    {
      q: "Does after-hours coverage include night audit duties?",
      a: "It can — phone-based night audit questions (billing, late charges) are typically included; the actual audit/reconciliation process is covered separately under back-office operations.",
    },
    {
      q: "What happens with a genuine emergency overnight?",
      a: "Escalation rules are agreed before going live — genuine emergencies are routed to your on-call contact immediately, not held for a morning report.",
    },
    {
      q: "Can we start with just weekends, not every night?",
      a: "Yes. Many clients start with weekend-only or peak-period overnight coverage before expanding to full nightly coverage.",
    },
    {
      q: "How do we know what happened overnight?",
      a: "You receive a daily summary every morning logging every call and message handled, so nothing happens in your guest channels you can't see.",
    },
  ],
  relatedServiceSlugs: ["after-hours-support", "hotel-answering-service", "back-office-operations"],
};

export const overflowSupportGuide: GuideArticleData = {
  slug: "hotel-front-desk-overflow-support",
  title: "Hotel Front Desk Overflow Support: When to Outsource and What to Keep In-House",
  description:
    "How overflow call coverage actually works, the signs your property needs it, and how to set it up without disrupting the team you already have.",
  metaTitle: "Hotel Front Desk Overflow Support Guide | GuestSquad",
  metaDescription:
    "When to add overflow phone support at your hotel, how it works in practice, and how to set it up alongside your existing front desk team.",
  datePublished: "2026-06-29",
  intro: [
    "Overflow support isn't the same as replacing your front desk — it's coverage that only activates when your team genuinely can't get to the phone. This guide covers when it makes sense, how it actually works day to day, and what to keep in-house regardless.",
  ],
  sections: [
    {
      heading: "What Overflow Actually Looks Like",
      paragraphs: [
        "The classic overflow moments are predictable: simultaneous check-in and check-out rushes, group or event arrivals, a single front-desk staff member covering a shift alone, or a sudden spike from an OTA promotion. Overflow coverage picks up calls that would otherwise ring out or go to voicemail during exactly those windows.",
      ],
    },
    {
      heading: "Signs Your Property Needs It",
      paragraphs: ["A few patterns are worth watching for:"],
      checklist: [
        "Reception regularly lets calls ring through during check-in/check-out hours.",
        "Voicemail messages pile up faster than your team can return them.",
        "Staff describe phones as \"a distraction\" from in-person guests, not a help.",
        "You suspect — but can't prove — that some calls are going unanswered entirely.",
      ],
    },
    {
      heading: "How Overflow Coverage Actually Works",
      paragraphs: [
        "Calls route to your existing front desk first. Only calls that aren't picked up within a set number of rings — or calls placed during specific hours you define — route to the overflow team instead. Your in-house staff keeps full control of the calls they can take; overflow exists purely to catch what they can't.",
      ],
    },
    {
      heading: "Overflow vs. Full Outsourcing",
      paragraphs: [
        "Overflow is the lighter-touch option: your team handles the majority of calls as normal, and outside coverage only fills genuine gaps. Full outsourcing (every call, every hour) makes more sense for properties without a dedicated phone-answering role at all. Most clients start with overflow and expand only if the data shows it's worth it.",
      ],
    },
  ],
  faqs: [
    {
      q: "Do we lose control of our phone line?",
      a: "No. Your team continues answering as normal; overflow coverage only activates for calls they genuinely can't reach.",
    },
    {
      q: "How is overflow priced differently from full coverage?",
      a: "Overflow is typically lower-volume than full coverage, so it's usually the more affordable starting point — see Pricing for how plans scale.",
    },
    {
      q: "Can overflow handle reservations, or just take messages?",
      a: "It can handle full reservation calls, not just message-taking — see Reservation Support for what's included.",
    },
    {
      q: "How quickly can overflow coverage go live?",
      a: "Typical onboarding is about five business days from your discovery call to go-live.",
    },
  ],
  relatedServiceSlugs: ["hotel-answering-service", "reservation-support", "after-hours-support"],
};

export const otaInboxChecklistGuide: GuideArticleData = {
  slug: "booking-com-message-support",
  title: "Booking.com and Expedia Message Support: An OTA Inbox Checklist",
  description:
    "Why OTA response time affects bookings and rankings, and a practical checklist for keeping Booking.com and Expedia message inboxes under control.",
  metaTitle: "Booking.com & Expedia Message Support Checklist | GuestSquad",
  metaDescription:
    "A practical checklist for managing Booking.com and Expedia guest messages, including response-time targets and common message types.",
  datePublished: "2026-06-29",
  intro: [
    "OTA inboxes are easy to under-prioritize — they're not the phone ringing in front of you, so messages can sit for hours. But response time inside Booking.com's and Expedia's own messaging tools is one of the few factors a hotel can directly control that affects both conversion and, on some platforms, search ranking.",
  ],
  sections: [
    {
      heading: "Why OTA Response Time Matters",
      paragraphs: [
        "A pre-booking question left unanswered for hours is a booking that often goes to a competing property instead. Post-booking, slow responses to modification requests or guest questions show up in reviews. Some OTAs also factor response metrics into how listings are ranked or featured, which compounds the cost of slow replies beyond the single missed booking.",
      ],
    },
    {
      heading: "Booking.com Message Center Basics",
      paragraphs: [
        "Booking.com routes both pre-booking questions and post-booking guest messages through its Message Center, alongside automated requests like late-checkout or special-request approvals. Properties are expected to respond within the platform's own messaging tools rather than directing guests to email or phone.",
      ],
    },
    {
      heading: "Expedia Inbox Specifics",
      paragraphs: [
        "Expedia's Partner Central inbox handles a similar mix of pre-arrival questions and reservation-related messages, with its own response-time expectations and templated quick-replies. Running both Booking.com and Expedia inboxes in parallel, on top of phone and direct-channel messages, is exactly where most properties start to fall behind.",
      ],
    },
    {
      heading: "OTA Inbox SLA Checklist",
      paragraphs: ["A workable internal standard usually includes:"],
      checklist: [
        "A defined response-time target (e.g., under 30 minutes) for pre-booking inquiries specifically.",
        "Someone explicitly responsible for checking each OTA inbox at set intervals, not \"whoever has time.\"",
        "Template responses for the most common question types, customized to your property's actual policies.",
        "A process for escalating anything involving a complaint or refund request, rather than answering it inline.",
        "Regular review of response-time metrics each platform reports back to you.",
      ],
    },
  ],
  faqs: [
    {
      q: "Do you respond inside Booking.com and Expedia's own tools, or by email?",
      a: "Inside the platforms' own messaging tools — that's where guests expect a reply and where response-time metrics are tracked.",
    },
    {
      q: "Can you handle modification and cancellation requests through the OTA, not just questions?",
      a: "Yes — OTA-side date changes, special requests, and cancellation handling are included; see OTA Inbox Management for the full scope.",
    },
    {
      q: "What about Airbnb messages?",
      a: "Airbnb and Vrbo messaging is covered separately for short-term rental operators — see Vacation Rental Answering Service.",
    },
    {
      q: "Will this help us convert more OTA leads to direct bookings?",
      a: "Where appropriate, guests are nudged toward booking directly for future stays as part of the same conversation, without disrupting the OTA relationship.",
    },
  ],
  relatedServiceSlugs: ["ota-inbox-management", "guest-messaging", "vacation-rental-answering-service"],
};

export const messagingSopGuide: GuideArticleData = {
  slug: "hotel-guest-messaging-sop-template",
  title: "Hotel Guest Messaging SOP Template",
  description:
    "What to include in a guest messaging SOP — response-time targets, escalation rules, tone guidelines, and a sample outline to start from.",
  metaTitle: "Hotel Guest Messaging SOP Template | GuestSquad",
  metaDescription:
    "What a hotel guest messaging SOP should include, plus a sample outline covering response times, escalation rules, and tone guidelines.",
  datePublished: "2026-06-29",
  intro: [
    "Most hotels handle guest messages on instinct rather than a written standard — which works fine until a busy week, a new hire, or an outsourced team needs to step in and there's nothing to brief them on. A short, specific SOP fixes that without becoming bureaucracy nobody reads.",
  ],
  sections: [
    {
      heading: "Why Guest Messaging Needs a Written SOP",
      paragraphs: [
        "Without one, tone and response quality vary by whoever happens to answer, response times aren't tracked against any target, and anyone new — a hire, a temp, or an outsourced team — has nothing concrete to work from beyond \"use your judgment.\" A working SOP doesn't need to be long; it needs to answer the questions that actually come up.",
      ],
    },
    {
      heading: "Core Sections Every SOP Should Have",
      paragraphs: ["At minimum, a usable SOP covers:"],
      checklist: [
        "Response-time targets per channel (e.g., SMS within 15 minutes, OTA messages within 30 minutes).",
        "Escalation rules — what gets handled directly versus routed to a manager, and to whom.",
        "Tone and brand-voice guidelines, ideally with two or three real example messages.",
        "A list of every channel actually in use — SMS, WhatsApp, email, OTA inboxes, in-app messaging.",
        "Short scripts or guidance for the handful of scenarios that come up weekly: late check-in, complaint, refund request, special occasion request.",
      ],
    },
    {
      heading: "A Sample SOP Outline",
      paragraphs: ["A simple structure to start from:"],
      checklist: [
        "1. Channels covered and who monitors each one",
        "2. Response-time targets by channel and time of day",
        "3. Tone and brand-voice notes with example messages",
        "4. Common scenarios and how to handle each",
        "5. Escalation path — what, when, and to whom",
        "6. How interactions are logged and reported",
      ],
    },
    {
      heading: "Keeping the SOP Updated",
      paragraphs: [
        "An SOP that's never revisited drifts out of date within a season — new rate structures, new channels, or recurring guest questions that deserve their own scripted response. Treat it as a living document reviewed at least quarterly, not a one-time write-up.",
      ],
    },
  ],
  faqs: [
    {
      q: "Do you build this SOP for us, or do we need one already?",
      a: "We build the property-specific brief — covering rates, policies, brand voice, and escalation rules — as part of onboarding, whether or not you already have a formal SOP written down.",
    },
    {
      q: "How long should a guest messaging SOP actually be?",
      a: "Short enough that someone new can read it in 15 minutes and use it immediately — a few pages, not a manual.",
    },
    {
      q: "What if our tone differs across property types in our portfolio?",
      a: "Each property gets its own brief and tone guidelines — a shared parent SOP plus per-property notes works well for multi-property groups.",
    },
    {
      q: "Does this cover OTA messaging too, or just direct guest messages?",
      a: "A complete SOP should cover every channel, including OTA inboxes — see OTA Inbox Management and Guest Messaging for how each channel is handled day to day.",
    },
  ],
  relatedServiceSlugs: ["guest-messaging", "ota-inbox-management"],
};

export const RESOURCE_ARTICLES: Record<string, ResourceArticleData> = {
  "hotel-answering-service-vs-ai-voice": aiVoiceComparison,
  "hotel-answering-service-vs-call-center": callCenterComparison,
};

export const GUIDE_ARTICLES: Record<string, GuideArticleData> = {
  "hotel-answering-service-cost": answeringServiceCostGuide,
  "after-hours-hotel-support-checklist": afterHoursChecklistGuide,
  "hotel-front-desk-overflow-support": overflowSupportGuide,
  "booking-com-message-support": otaInboxChecklistGuide,
  "hotel-guest-messaging-sop-template": messagingSopGuide,
};
