import type { ServiceDetailData } from "@/components/site/service-detail";

export const hotelAnsweringServiceData: ServiceDetailData = {
  slug: "hotel-answering-service",
  eyebrow: "Hotel Answering Service",
  title: "24/7 Hotel Answering Service for Reservation Calls and Guest Questions",
  description:
    "Every call answered by a trained person: reservation questions, general guest inquiries, and overflow during busy periods, without a phone tree or voicemail.",
  answerBlock:
    "GuestSquad's hotel answering service provides live, human call answering for hotels, boutique properties, and independent operators that cannot always have someone at the front desk. Every inbound call reaches a hospitality-trained person working with your rates, policies, and property information, so no reservation inquiry, guest question, or overflow call goes unanswered.",
  image: {
    src: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?w=1600&q=90",
    alt: "Agent answering a hotel call at a desk with monitors",
  },
  includesTitle: "Calls your front desk should never lose to voicemail.",
  includes: [
    { title: "Live call answering", description: "Every inbound call answered by a person, not an automated menu or voicemail, during the hours you choose." },
    { title: "Reservation and general inquiries", description: "Booking questions, rate quotes, and general property questions handled directly using your information." },
    { title: "Call overflow during peak periods", description: "When your front desk is slammed at check-in or check-out, overflow calls are picked up instead of going unanswered." },
    { title: "Message taking and routing", description: "Anything that needs your team's direct attention is logged and routed immediately, with full call context." },
  ],
  examples:
    "A guest calls at 10pm asking about availability for next weekend. The agent pulls live rates, answers the question, and confirms the booking in your system without waking your team. On a busy Saturday check-in, four calls arrive while your desk handles a queue: three are answered and completed directly, one rate-exception request is logged and routed to the manager with full context.",
  handles: [
    "Inbound reservation inquiries using your live rates and availability",
    "General guest questions about amenities, policies, and the local area",
    "Overflow calls during check-in and check-out peaks",
    "Late check-in and early-arrival requests using your property procedures",
    "Direct booking calls from your website or Google Business profile",
    "Call-back scheduling for inquiries that need a follow-up",
  ],
  escalates: [
    "Complaints, disputes, or compensation requests requiring management discretion",
    "Rate exceptions or special approvals outside your pre-set policy",
    "Anything involving guest safety or a security concern",
    "High-value group or corporate inquiries that warrant a direct sales conversation",
  ],
  whoItsForTitle: "Set up around your call routing and front-desk hours.",
  whoItsFor: [
    "Hotels whose front desk cannot always get to the phone",
    "Properties relying on voicemail or a phone tree after hours",
    "Independent hotels without a dedicated reservations line",
    "Groups wanting consistent call handling across multiple properties",
  ],
  notes:
    "This is a true call-answering layer. Every call reaches a hospitality-trained person, not an automated system.",
  pairsWith: [
    { label: "After-Hours Support", slug: "after-hours-support" },
    { label: "Reservation Support", slug: "reservation-support" },
  ],
  relatedSlugs: ["after-hours-support", "reservation-support", "ota-inbox-management"],
  faqTitle: "Hotel answering service questions, answered.",
  relatedTitle: "Pair call answering with after-hours and reservation support.",
  comparisonTitle: "Hotel answering vs voicemail, IVR, and generic call centers.",
  faqs: [
    { q: "What is a hotel answering service?", a: "A hotel answering service provides live, human call coverage so reservation inquiries, guest questions, and overflow calls are answered by a trained person instead of going to voicemail or a phone tree. GuestSquad operates using your rates, policies, and property information, covering calls during peak periods, after hours, and any time your front desk cannot get to the phone." },
    { q: "How is this different from your Reservation Support service?", a: "Reservation Support focuses on bookings, quotes, and modifications. Hotel Answering Service is the broader call-answering layer, including general questions and overflow, and the two are often used together for complete phone coverage." },
    { q: "Do you use an automated phone tree or IVR?", a: "No. Calls are answered by a trained person. Automated menus are exactly what this service is built to avoid." },
    { q: "Can you cover just our busiest hours, not all day?", a: "Yes. Many clients start with peak-hour overflow coverage during check-in and check-out rushes rather than committing to full-day coverage." },
    { q: "What happens with a call that needs management attention?", a: "It is logged with full context and routed to the right person immediately, so nothing sits in a generic voicemail box." },
    { q: "Is this only for hotels, or does it work for smaller properties too?", a: "It works for any property type with a phone line: independent hotels, boutique properties, and small groups alike." },
    { q: "Can GuestSquad answer calls using our hotel name?", a: "Yes. Agents answer in your hotel's name using your preferred greeting, so the experience is seamless for the guest." },
    { q: "Can GuestSquad handle direct booking calls from our website or Google profile?", a: "Yes. Calls from any channel, whether your website, Google Business profile, or a direct number, are answered the same way: by a trained person with your property information." },
    { q: "What happens if a caller asks for something outside our policy?", a: "The caller is informed politely that the request needs your team's direct approval, and the inquiry is logged and routed with full context so your team can follow up promptly." },
    { q: "Can calls be transferred to our team when needed?", a: "Yes. Live transfer to your designated number is available for situations that require your team's direct involvement, following the escalation rules we agree on during setup." },
    { q: "How does a hotel answering service work without adding staff?", a: "A hotel answering service gives your property live call coverage without hiring another front desk shift. GuestSquad answers reservation calls, guest questions, overflow calls, and after-hours inquiries using your property rules, escalation contacts, and approved guest-handling instructions. It pairs naturally with after-hours support for full overnight coverage." },
  ],
  assetLinks: [
    { label: "Missed Booking Revenue Calculator", href: "/resources/missed-booking-calculator" },
    { label: "View Sample Weekly Report", href: "/resources/sample-weekly-report" },
    { label: "Download After-Hours Checklist", href: "/resources/after-hours-checklist" },
  ],
  ctaTitle: "Turn missed calls into handled guest conversations.",
  ctaDescription: "Book a coverage review and see exactly how GuestSquad would cover your reservation calls, guest inquiries, and after-hours lines.",
};

export const reservationSupportData: ServiceDetailData = {
  slug: "reservation-support",
  eyebrow: "Reservation Support",
  title: "24/7 Hotel Reservation Support for Booking Calls and Quotes",
  description:
    "Inbound and outbound reservation calls handled with your rates, availability, and policies, so no booking inquiry goes unanswered, day or night.",
  answerBlock:
    "GuestSquad's reservation support service handles inbound and outbound booking calls for hotels that need consistent coverage beyond their front desk hours. Agents work inside your PMS using your live rates, room types, and policies, so reservation calls that arrive overnight, at weekends, or during busy periods convert into confirmed bookings instead of going to voicemail.",
  image: {
    src: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?w=1600&q=90",
    alt: "Reservation agent on a phone call at a desk with monitors",
  },
  includesTitle: "Booking calls answered before guests choose another property.",
  includes: [
    { title: "Inbound call handling", description: "Calls answered using your current rates, room types, and availability, in your brand voice." },
    { title: "Quotes and bookings", description: "Rate quotes, group inquiries, and direct bookings taken and confirmed in your PMS or booking engine." },
    { title: "Modifications and cancellations", description: "Date changes, cancellations, and policy questions handled without escalation to your team." },
    { title: "Abandoned inquiry follow-up", description: "Guests who called or messaged but did not book are followed up with before they choose another property." },
  ],
  examples:
    "A couple calls on a Sunday evening asking about a long-weekend package. The agent checks live availability, walks them through the options, quotes the correct rate, and confirms the booking in your PMS. On a busy Friday, six reservation calls arrive during check-in: each is answered promptly, modifications are processed, and confirmations sent, without interrupting your on-site staff.",
  handles: [
    "Rate quotes and room-type availability using your live PMS or booking engine",
    "Direct booking confirmation and folio creation",
    "Date changes, room upgrades, and cancellations within your policy",
    "Group inquiry intake and multi-room quote preparation",
    "Abandoned inquiry follow-up before the guest books elsewhere",
    "Pre-arrival confirmations and upsell offers on approved packages",
  ],
  escalates: [
    "Rate exceptions, complimentary upgrades, or policy waivers requiring management approval",
    "Group negotiations outside your pre-approved pricing tiers",
    "Booking disputes or overbooking situations requiring your team's resolution",
    "Any inquiry that reveals a PMS error or availability conflict",
  ],
  whoItsForTitle: "Built around your rates, room types, and booking rules.",
  whoItsFor: [
    "Hotels without 24/7 front-desk phone coverage",
    "Properties losing direct bookings to OTAs after hours",
    "Groups managing reservation calls across multiple properties",
    "Boutique hotels without a dedicated reservations team",
  ],
  notes:
    "Reservation support is delivered by people trained on your specific rates, room types, and policies, not a shared script across unrelated properties.",
  pairsWith: [
    { label: "Hotel Answering Service", slug: "hotel-answering-service" },
    { label: "After-Hours Support", slug: "after-hours-support" },
  ],
  relatedSlugs: ["hotel-answering-service", "after-hours-support", "ota-inbox-management"],
  faqTitle: "Reservation support questions, answered.",
  relatedTitle: "Pair reservation support with call answering and after-hours coverage.",
  comparisonTitle: "Reservation support vs unanswered inquiries and OTA dependency.",
  faqs: [
    { q: "Do your agents work inside our PMS to check live availability?", a: "Yes. Agents are briefed on your PMS or booking engine and confirm real-time availability and rates before quoting, with no guesswork and no overbooking." },
    { q: "Can you handle group or multi-room bookings?", a: "Yes. Group inquiries, multi-room requests, and rate negotiations within your approved policy are handled directly, with anything outside policy routed to your team." },
    { q: "What happens if a guest wants something only our team can approve?", a: "It is escalated immediately with full context: what was asked, what was discussed, and what the guest expects next." },
    { q: "Do you replace our reservations team?", a: "No. We cover overflow, after-hours, and the calls your team cannot get to. Your team stays in control of policy and pricing decisions." },
    { q: "How fast can this go live?", a: "Most clients are live within 5 business days of signing, once we have access to your rates, policies, and booking system." },
    { q: "Can GuestSquad help reduce missed direct bookings?", a: "Yes. The main source of missed direct bookings is unanswered calls and slow responses to inquiries. Having a trained person available on every call, at any hour, addresses that directly." },
    { q: "Can GuestSquad handle rate and availability questions?", a: "Yes. Agents work inside your PMS or booking engine to check real-time availability and quote accurate rates before confirming anything with the guest." },
    { q: "Can your team manage booking modifications?", a: "Yes. Date changes, room-type switches, and cancellations that fall within your policy are handled directly, without escalating to your team." },
    { q: "What happens if a guest asks for a discount or exception?", a: "If the request falls within your pre-approved parameters, it is handled directly. If it requires management discretion, it is escalated immediately with full call context so your team can respond with everything they need." },
  ],
  assetLinks: [
    { label: "Missed Booking Revenue Calculator", href: "/resources/missed-booking-calculator" },
    { label: "View Sample Weekly Report", href: "/resources/sample-weekly-report" },
    { label: "Guest Coverage Gap Assessment", href: "/resources/coverage-gap-assessment" },
  ],
  ctaTitle: "Stop losing bookings to unanswered reservation calls.",
  ctaDescription: "Book a coverage review and see exactly how GuestSquad would handle your inbound reservation inquiries and guest calls.",
};

export const guestMessagingData: ServiceDetailData = {
  slug: "guest-messaging",
  eyebrow: "Guest Messaging",
  title: "Hotel Guest Messaging Support for SMS, WhatsApp, Email, and OTA Channels",
  description:
    "SMS, WhatsApp, email, and in-app messages monitored and answered across the full stay journey: pre-arrival, in-stay, and post-stay.",
  answerBlock:
    "GuestSquad's guest messaging service monitors and responds to SMS, WhatsApp, email, and supported in-app messages across the full guest stay cycle. Pre-arrival questions, in-stay requests, and post-stay follow-ups are handled by trained agents in your property's voice, with housekeeping, maintenance, safety, and compensation issues routed immediately to your team.",
  image: {
    src: "https://images.unsplash.com/photo-1592890288564-76628a30a657?w=1600&q=90",
    alt: "Close-up of a guest message being typed and sent on a phone",
  },
  includesTitle: "SMS, WhatsApp, email, and guest-app replies across the stay journey.",
  includes: [
    { title: "Pre-arrival outreach", description: "Check-in instructions, upsell offers, and special requests handled before guests arrive." },
    { title: "In-stay support", description: "Requests, questions, and issues answered promptly across SMS, WhatsApp, and email." },
    { title: "Post-stay follow-up", description: "Checkout messages, review requests, and rebooking outreach sent without manual effort." },
    { title: "Escalation handling", description: "Anything requiring on-site action is routed to your team immediately with full context." },
  ],
  examples:
    "A guest messages at 9pm asking for early check-in the next morning. The agent checks your availability rules, confirms or declines per your policy, and sends the guest a clear answer with arrival instructions. During a busy weekend, a guest WhatsApps about a broken air conditioner: the agent logs the request, notifies your maintenance contact, and keeps the guest informed with a response time update, without your team having to monitor the message thread.",
  handles: [
    "Pre-arrival questions about check-in, parking, amenities, and local recommendations",
    "In-stay requests such as extra towels, early or late checkout, and service bookings",
    "Post-stay review requests and rebooking outreach",
    "Routine policy questions about checkout times, pet policies, and cancellations",
    "Message thread monitoring across SMS, WhatsApp, and email",
  ],
  escalates: [
    "Maintenance, housekeeping, or facilities issues requiring on-site action",
    "Complaints, compensation requests, or anything requiring management discretion",
    "Safety or security concerns that need immediate on-property response",
    "Sensitive billing or dispute situations",
  ],
  whoItsForTitle: "Built around the channels your guests already use.",
  whoItsFor: [
    "Properties offering digital guest communication without staff to monitor it",
    "Hotels using guest messaging apps that go unanswered after hours",
    "Boutique properties wanting a consistent, branded voice across channels",
    "Teams that want messaging handled without adding headcount",
  ],
  notes:
    "Every message is logged and visible to your team, so nothing happens in your guest communication channels that you cannot see.",
  pairsWith: [
    { label: "OTA Inbox Management", slug: "ota-inbox-management" },
    { label: "After-Hours Support", slug: "after-hours-support" },
  ],
  relatedSlugs: ["ota-inbox-management", "after-hours-support", "hotel-answering-service"],
  faqTitle: "Guest messaging questions, answered.",
  relatedTitle: "Pair messaging support with OTA inbox management and after-hours coverage.",
  comparisonTitle: "Human guest messaging vs auto-replies and slow response times.",
  faqs: [
    { q: "Which channels do you actually cover?", a: "SMS, WhatsApp, email, and in-app messaging from your PMS or guest-messaging platform. OTA messaging (Booking.com, Expedia, Airbnb) is covered under our separate OTA Inbox Management service." },
    { q: "Can you match our brand's tone of voice?", a: "Yes. Agents are briefed on your specific tone, terminology, and any phrases you do or do not want used before handling a single message." },
    { q: "What happens with requests that need a physical response, like housekeeping?", a: "Those are logged and routed to the right on-site team immediately, with the guest kept informed that the request has been received and is being handled." },
    { q: "Do you handle complaints over messaging?", a: "Straightforward issues are resolved directly. Anything sensitive, requiring compensation, or needing management judgment is escalated to your team with full message history attached." },
    { q: "Is there a log of every conversation?", a: "Yes. Every message and outcome is recorded and visible to your team, so nothing happens in your guest channels that you cannot see." },
    { q: "Can GuestSquad respond to WhatsApp and SMS messages overnight?", a: "Yes. Overnight message coverage is one of the most common reasons clients use this service. Guests who message after hours receive a real response instead of silence or a generic auto-reply." },
    { q: "Can GuestSquad support multilingual guest messages?", a: "English is the primary language of operation. For multilingual requirements, we can discuss whether your specific language needs are within scope during the onboarding call." },
    { q: "How are housekeeping or maintenance requests routed?", a: "Requests are logged with the guest's room number, request details, and timestamp, then sent to your designated on-site contact immediately. The guest receives a confirmation that their request has been received." },
  ],
  assetLinks: [
    { label: "Download Guest Messaging SOP Template", href: "/resources/guest-messaging-sop" },
    { label: "Download OTA Inbox Response Checklist", href: "/resources/ota-inbox-response-checklist" },
    { label: "View Sample Weekly Report", href: "/resources/sample-weekly-report" },
  ],
  ctaTitle: "Keep every guest conversation moving.",
  ctaDescription: "Book a coverage review and see how GuestSquad handles your messaging channels so guests always get a reply.",
};

export const otaInboxData: ServiceDetailData = {
  slug: "ota-inbox-management",
  eyebrow: "OTA Inbox Management",
  title: "OTA Inbox Management for Booking.com, Expedia, and Airbnb",
  description:
    "Booking.com, Expedia, and Airbnb inboxes monitored and answered around the clock, so pre-booking questions convert instead of disappearing.",
  answerBlock:
    "GuestSquad's OTA inbox management service monitors and responds to messages across Booking.com, Expedia, and Airbnb on your behalf. Pre-booking inquiries are answered fast enough to win the booking, post-booking questions are resolved without your team having to check multiple extranets, and reviews are responded to in your brand voice. OTA response time is one of the few ranking factors hotels can directly control, and we treat it accordingly. For hotels comparing hotel OTA messaging support, GuestSquad helps monitor and respond to Booking.com, Expedia, Airbnb, and Vrbo messages using your property-specific instructions.",
  image: {
    src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1600&q=90",
    alt: "Team monitoring OTA inboxes across multiple screens",
  },
  includesTitle: "Booking.com, Expedia, and Airbnb replies before the guest moves on.",
  includes: [
    { title: "Pre-booking inquiries", description: "Availability, rate, and policy questions answered fast enough to win the booking before the guest moves on." },
    { title: "Booking modifications", description: "OTA-side date changes, special requests, and cancellation handling." },
    { title: "Review responses", description: "Guest reviews acknowledged and responded to in your brand voice, on schedule." },
    { title: "OTA-to-direct conversion", description: "Where appropriate and within OTA terms, guests are nudged toward booking directly for future stays." },
  ],
  examples:
    "A guest sends a Booking.com message at 11pm asking whether the property allows early check-in and whether parking is available. The agent responds within minutes with an accurate answer based on your policies, keeping the booking live. On Airbnb, a guest with a pending reservation asks about the keyless entry process: the agent sends the correct instructions from your listing guide, resolving the question before it becomes a negative review.",
  handles: [
    "Pre-booking questions about rates, availability, policies, and amenities",
    "Post-booking questions about check-in, parking, and special requests",
    "Date change, cancellation, and modification requests within your policy",
    "Review responses on Booking.com, Expedia, and Airbnb",
    "Routine OTA message threads that do not require management involvement",
  ],
  escalates: [
    "Cancellation disputes, refund requests, or chargeback situations",
    "OTA policy violations or listing integrity issues",
    "Compensation offers or exceptions that require your approval",
    "Anything that reveals an availability conflict or PMS sync error",
  ],
  whoItsForTitle: "Built around your OTA platforms and listing structure.",
  whoItsFor: [
    "Hotels relying heavily on Booking.com, Expedia, or Airbnb for bookings",
    "Properties with multiple OTA inboxes and no dedicated owner",
    "Teams that only check OTA messages once or twice a day",
    "Airbnb hosts and serviced apartment operators managing several listings",
  ],
  notes:
    "OTA response time is one of the few factors hotels can directly control that affects ranking and conversion, so we treat it accordingly.",
  pairsWith: [
    { label: "Guest Messaging", slug: "guest-messaging" },
    { label: "Reservation Support", slug: "reservation-support" },
  ],
  relatedSlugs: ["guest-messaging", "hotel-answering-service", "reservation-support"],
  faqTitle: "OTA inbox management questions, answered.",
  relatedTitle: "Pair OTA coverage with reservation support and guest messaging.",
  comparisonTitle: "OTA inbox management vs auto-replies and once-a-day checking.",
  faqs: [
    { q: "What is hotel OTA messaging?", a: "Hotel OTA messaging refers to the guest messages that arrive through platforms such as Booking.com, Expedia, and Airbnb before and after a booking is confirmed. Pre-booking messages are especially high-value because an unanswered question often results in the guest booking a competitor instead. GuestSquad monitors and responds to OTA messages across your active platforms so response times stay fast and inquiries convert." },
    { q: "Which OTA platforms do you cover?", a: "Booking.com, Expedia, and Airbnb messaging are covered as standard. Other platforms can be added if you use them." },
    { q: "Can you answer pre-booking questions, or just post-booking?", a: "Both. Pre-booking questions about rates, availability, and policies are answered fast enough to win the booking, not just service it after the fact." },
    { q: "Do you respond to guest reviews too?", a: "Yes, where that is part of your plan. Review responses are written in your brand voice and on the schedule you set." },
    { q: "Will you try to move guests off the OTA and onto direct bookings?", a: "Where appropriate and within OTA terms, yes. We will nudge repeat or future bookings toward your direct channel." },
    { q: "How is this different from an OTA's own auto-reply tools?", a: "Auto-replies handle static FAQs. We handle the actual back-and-forth: rate questions, special requests, and anything that requires real judgment and property knowledge." },
    { q: "Can GuestSquad answer Booking.com guest questions before they book?", a: "Yes. Pre-booking questions on Booking.com are typically the highest-value messages to answer quickly, as unresolved questions at that stage often result in the guest booking a competitor instead." },
    { q: "Can GuestSquad improve OTA response time?", a: "Yes. Consistent monitoring and fast response across OTA inboxes directly improves the response-time metrics that affect your ranking and conversion on Booking.com, Expedia, and Airbnb." },
    { q: "Do you handle cancellation, modification, and policy questions?", a: "Yes. Modifications and cancellations that fall within your pre-agreed policy are processed directly. Anything outside policy, or requiring a refund decision, is escalated to your team with full context." },
    { q: "Can you help move repeat guests toward direct booking when appropriate?", a: "Yes. Where it is within OTA terms and appropriate to the conversation, agents will mention your direct booking option for future stays, helping reduce OTA commission costs over time." },
  ],
  assetLinks: [
    { label: "Download OTA Inbox Response Checklist", href: "/resources/ota-inbox-response-checklist" },
    { label: "Download Guest Messaging SOP Template", href: "/resources/guest-messaging-sop" },
    { label: "View Sample Weekly Report", href: "/resources/sample-weekly-report" },
  ],
  ctaTitle: "Reply before the guest books somewhere else.",
  ctaDescription: "Book a coverage review and see how GuestSquad manages your OTA inboxes so no message sits unread.",
};

export const afterHoursData: ServiceDetailData = {
  slug: "after-hours-support",
  eyebrow: "After-Hours Hotel Support",
  title: "After-Hours Hotel Front Desk Support for Calls and Guest Messages",
  description:
    "Overnight and weekend front-desk coverage for calls and messages your on-site team cannot take outside working hours, without hiring a night shift.",
  answerBlock:
    "GuestSquad's after-hours hotel support covers overnight and weekend calls and messages for properties that do not staff a full 24-hour front desk. Late check-ins, access questions, noise complaints, and common overnight inquiries are handled directly. Genuine emergencies involving guest safety, security, or property damage are escalated immediately to your on-call contact following the protocol you set during onboarding. GuestSquad also supports vacation rental and short-term rental operators that need after-hours guest coverage for late arrivals, access problems, urgent guest messages, and host-side escalation.",
  image: {
    src: "https://images.unsplash.com/photo-1534679541758-8dc76ff8081d?w=1600&q=90",
    alt: "Modern hotel lobby and reception desk lit at night",
  },
  includesTitle: "Overnight coverage without hiring a full night shift.",
  includes: [
    { title: "Overnight call coverage", description: "Reservation, guest, and general inquiry calls answered through the night." },
    { title: "Weekend and holiday coverage", description: "Consistent coverage on the days your team is short-staffed." },
    { title: "Emergency escalation", description: "Genuine emergencies routed to your on-call contact immediately, with clear protocols agreed in advance." },
    { title: "Late checkout and early-arrival queries", description: "Common after-hours questions handled without waking your team for routine matters." },
  ],
  examples:
    "A guest arriving on a late flight calls at 1am asking for their room access instructions. The agent provides check-in details from your property guide without needing to wake anyone on your team. A guest at 3am reports a noise disturbance from an adjacent room: the agent logs the complaint, contacts your on-call person per your escalation protocol, and keeps the affected guest informed until resolution.",
  handles: [
    "Late check-in instructions and access queries",
    "Early arrival and late checkout inquiries within your pre-set policy",
    "Parking, directions, and local area questions",
    "General overnight calls and messages that do not require on-site action",
    "Routine noise or minor disturbance follow-ups per your protocol",
  ],
  escalates: [
    "Guest safety or medical emergencies",
    "Security incidents or suspected unauthorized access",
    "Property damage requiring immediate on-site response",
    "Complaints or compensation requests that cannot be resolved overnight",
  ],
  whoItsForTitle: "Built around your hours, escalation rules, and on-call contacts.",
  whoItsFor: [
    "Properties without a 24-hour front desk",
    "Hotels currently relying on a single overnight staff member",
    "Boutique properties and serviced apartments with limited on-site hours",
    "Groups looking to reduce overnight staffing costs without losing coverage",
  ],
  notes:
    "After-hours coverage is built around your existing escalation preferences. We handle what we can, and route the rest to the right person, every time.",
  pairsWith: [
    { label: "Hotel Answering Service", slug: "hotel-answering-service" },
    { label: "Vacation Rental Answering Service", slug: "vacation-rental-answering-service" },
  ],
  relatedSlugs: ["hotel-answering-service", "vacation-rental-answering-service", "back-office-operations"],
  faqTitle: "After-hours support questions, answered.",
  relatedTitle: "Pair after-hours coverage with call answering and OTA inbox management.",
  comparisonTitle: "After-hours support vs hiring overnight staff or going unanswered.",
  faqs: [
    { q: "Can hotels get 24/7 coverage without hiring overnight staff?", a: "Yes. Hotels can get hotel 24/7 coverage without hiring a full night shift by using an after-hours support service. GuestSquad covers overnight calls, late check-in questions, access issues, and guest messages using your property rules and escalation contacts. Genuine emergencies are routed to your on-call person. Most properties go live within 5 business days." },
    { q: "What hours do you actually cover?", a: "Whatever gap you need filled: overnight only, weekends only, or full 24/7 coverage. Most clients start with overnight and weekend gaps before expanding." },
    { q: "What counts as a genuine emergency, and how is it handled?", a: "Anything involving guest safety, security, or property damage is routed to your on-call contact immediately, following the escalation protocol we agree on during setup." },
    { q: "Can you handle a lockout or late check-in at 2am?", a: "Yes. Late check-in, early arrival, and access issues are among the most common overnight requests and are handled directly using your property's procedures." },
    { q: "Do we still need a night auditor?", a: "We cover guest-facing calls and messages. The financial night-audit function is a separate service under Back-Office Operations if you need that covered too." },
    { q: "Is this cheaper than hiring overnight staff?", a: "GuestSquad is not outsourced labor. It is a managed guest operations layer built around your property's standards, escalation rules, and guest experience. Every agent covering your overnight hours has been briefed on your property before handling a single call, so guests get the same standard of care at 2am as they do at check-in." },
    { q: "Can GuestSquad cover only nights and weekends?", a: "Yes. Most clients start with exactly that: overnight and weekend coverage where their team is absent. Coverage hours are agreed during setup and can be adjusted as your needs change." },
    { q: "Can after-hours support reduce front desk burnout?", a: "Yes. One of the most common reasons teams use this service is to remove the expectation that front desk staff will also handle overnight calls. Clear separation of hours reduces the pressure on your in-house team." },
    { q: "How does GuestSquad decide what gets escalated overnight?", a: "Escalation rules are agreed with your team before going live. You specify what can be handled directly, what should be logged for morning review, and what should trigger an immediate call to your on-call contact." },
    { q: "Do you provide vacation rental after-hours support?", a: "Yes. GuestSquad provides vacation rental after-hours support for short-term rental operators, Airbnb hosts, serviced apartments, and property managers who need guest calls and messages covered outside normal working hours. Access issues, check-in questions, and urgent guest concerns are handled or escalated according to your rules. This pairs with the vacation rental answering service for complete coverage." },
  ],
  assetLinks: [
    { label: "Download After-Hours Checklist", href: "/resources/after-hours-checklist" },
    { label: "View Sample Weekly Report", href: "/resources/sample-weekly-report" },
    { label: "Guest Coverage Gap Assessment", href: "/resources/coverage-gap-assessment" },
  ],
  ctaTitle: "Give guests an answer after your front desk closes.",
  ctaDescription: "Book a coverage review and see exactly how GuestSquad would handle your overnight calls, messages, and emergency escalations.",
};

export const backOfficeData: ServiceDetailData = {
  slug: "back-office-operations",
  eyebrow: "Back-Office Guest Operations",
  title: "Hotel Back Office Operations: Night Audit and OTA Reconciliation",
  description:
    "Daily night audit, OTA reconciliation, and guest-billing support, so revenue leakage from missed payouts, fee discrepancies, and unposted charges gets caught the day it happens, not in next month's close.",
  answerBlock:
    "GuestSquad's back-office operations service covers daily night audit, OTA payout reconciliation, and guest-billing exception reporting for hotels that cannot dedicate in-house staff to this function every day. Revenue discrepancies between your PMS, OTA payouts, and processor settlements are flagged the day they occur, not discovered at month-end. The service works inside your existing systems and reports into your finance team or ownership group.",
  image: {
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&q=90",
    alt: "Back-office team reviewing daily reconciliation reports",
  },
  includesTitle: "Night audit and OTA reconciliation before leakage reaches month-end.",
  includes: [
    { title: "Daily night audit", description: "Day-end revenue reconciliation, folio posting, and cash-drawer balancing handled every night, including weekends." },
    { title: "OTA and PMS reconciliation", description: "Booking.com, Expedia, and Airbnb payouts matched against your PMS and processor settlements, flagging missing or incorrect payments." },
    { title: "Guest billing support", description: "Folio disputes, incidental charges, and group billing handled before they become guest complaints or chargebacks." },
    { title: "Reporting to your finance team", description: "Exception reports delivered on a schedule your controller or ownership group actually uses, not buried in a dashboard nobody opens." },
  ],
  examples:
    "An Expedia payout arrives 12 percent short of the expected amount for a group booking. The discrepancy is caught during daily reconciliation, documented with the booking reference and payout detail, and flagged to your finance contact the same morning. A guest departure folio shows an unposted minibar charge: it is identified during the night-audit run and corrected before the folio is finalized, avoiding a disputed charge later.",
  handles: [
    "Daily night audit: folio posting, revenue balancing, and cash reconciliation",
    "OTA payout matching: Booking.com, Expedia, and Airbnb settlements vs. PMS records",
    "Processor settlement verification and variance flagging",
    "Routine guest billing corrections and incidental charge posting",
    "Exception report preparation and delivery to your finance team",
  ],
  escalates: [
    "Significant payout discrepancies requiring direct contact with an OTA",
    "Guest billing disputes requiring management approval or refund authorization",
    "Systemic PMS errors affecting multiple folios",
    "Any finding that requires your controller or ownership group to take direct action",
  ],
  whoItsForTitle: "Built around your PMS, OTA extranets, and finance workflow.",
  whoItsFor: [
    "Properties relying on a single person to handle night audit and reconciliation",
    "Multi-property groups reconciling across several OTAs and PMS instances",
    "Owners who suspect revenue leakage but do not have time to chase it down",
    "Hotels without a dedicated back-office or controller function on-site",
  ],
  notes:
    "Back-office support runs alongside your existing accounting team and PMS. We do not replace your controller; we make sure the daily reconciliation work that protects your revenue actually gets done every day.",
  pairsWith: [
    { label: "After-Hours Support", slug: "after-hours-support" },
    { label: "Reservation Support", slug: "reservation-support" },
  ],
  relatedSlugs: ["after-hours-support", "hotel-answering-service", "reservation-support"],
  faqTitle: "Back office operations questions, answered.",
  relatedTitle: "Pair back office coverage with reservation support and OTA inbox management.",
  comparisonTitle: "Back office outsourcing vs in-house reconciliation gaps.",
  faqs: [
    { q: "Do you replace our accountant or controller?", a: "No. We handle the daily reconciliation legwork: night audit, OTA payout matching, and billing exceptions. Everything is reported into your existing finance team or controller." },
    { q: "What exactly gets reconciled against what?", a: "OTA payout reports from Booking.com, Expedia, and Airbnb are matched against your PMS folios and processor settlements to flag missing, short, or duplicate payments." },
    { q: "How often is night audit run?", a: "Every night, including weekends. That consistency is the main point, since gaps are usually where revenue leakage accumulates unnoticed." },
    { q: "What do we actually receive from this?", a: "Exception reports on the schedule you choose, flagging anything that does not reconcile cleanly, plus routine folio and cash-drawer balancing each night." },
    { q: "Can this work with our existing PMS?", a: "Yes. We work inside your current PMS, OTA extranets, and processor portals rather than asking you to adopt new software." },
    { q: "What is included in hotel night audit support?", a: "Day-end revenue posting, folio balancing, room status verification, cash-drawer reconciliation, and the exception report for the following morning. The exact scope is confirmed during setup based on your PMS and operating procedures." },
    { q: "Can GuestSquad reconcile Booking.com and Expedia payouts?", a: "Yes. Payout reconciliation across Booking.com, Expedia, and Airbnb is one of the core functions of the service. Discrepancies between payout amounts and PMS records are flagged and reported the same day." },
    { q: "Does GuestSquad process payments or only reconcile records?", a: "We reconcile records only. Payment processing remains within your existing systems and authorization chain. We identify discrepancies and report them; your team or controller takes action on anything that requires a financial decision." },
    { q: "How are exceptions reported to management?", a: "Exception reports are delivered by email on a schedule you choose: daily, weekly, or both. Reports are structured for quick review, flagging specific folios, booking references, and variance amounts." },
  ],
  assetLinks: [
    { label: "View Sample Weekly Report", href: "/resources/sample-weekly-report" },
    { label: "Guest Coverage Gap Assessment", href: "/resources/coverage-gap-assessment" },
  ],
  ctaTitle: "Catch revenue leakage before month-end.",
  ctaDescription: "Book a coverage review and see how GuestSquad's back-office support keeps your OTA payouts, billing, and night audit reconciled daily.",
};

export const airbnbSupportData: ServiceDetailData = {
  slug: "airbnb-guest-support",
  eyebrow: "Airbnb Guest Support",
  title: "24/7 Airbnb Guest Support for Short-Term Rental Operators",
  description:
    "Round-the-clock guest support for Airbnb hosts and serviced apartment operators, with check-in help, issue resolution, and FAQs handled across every listing.",
  answerBlock:
    "GuestSquad's Airbnb guest support service provides 24/7 message handling and guest communication for Airbnb hosts, Vrbo operators, and serviced apartment managers who cannot personally monitor inquiries around the clock. Check-in coordination, in-stay issues, listing-specific questions, and review management are handled by trained agents using your listing instructions, so your response rate stays high and your guest experience stays consistent. For hosts and operators comparing Airbnb guest services, GuestSquad provides human guest support across guest messages, access questions, listing FAQs, escalation issues, and after-hours coverage.",
  image: {
    src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1600&q=90",
    alt: "Modern short-term rental interior guests check into",
  },
  includesTitle: "Guest replies, access issues, and listing FAQs handled around the clock.",
  includes: [
    { title: "Check-in coordination", description: "Lockbox codes, access instructions, and arrival questions answered in real time." },
    { title: "In-stay issue resolution", description: "Wi-Fi, appliance, and maintenance questions triaged, with on-site escalation when needed." },
    { title: "Guest messaging across listings", description: "Airbnb, Vrbo, and direct booking messages handled from a single point of coverage." },
    { title: "Review and rating management", description: "Post-stay messaging and review responses handled to protect your listing rating." },
  ],
  examples:
    "A guest messages at midnight asking for the WiFi password because the printed card is missing. The agent locates the credentials from your listing guide and replies within minutes. A guest on a Friday evening reports that the dishwasher is not working: the agent checks whether it is a guest operation issue, resolves it remotely if possible, or escalates to your maintenance contact with a full description and urgency level so the guest is not left waiting without an update.",
  handles: [
    "Check-in instructions, lockbox codes, and arrival logistics",
    "Listing-specific FAQs about house rules, amenities, and local recommendations",
    "In-stay requests such as extra supplies, WiFi support, and appliance questions",
    "Post-stay review responses to protect your Superhost status",
    "Message monitoring across Airbnb, Vrbo, and direct booking channels",
  ],
  escalates: [
    "Maintenance visits, appliance failures, or property damage requiring physical access",
    "Guest safety or security concerns",
    "Refund requests, dispute resolution, or Airbnb Resolution Centre cases",
    "Situations where the property owner needs to communicate directly with the guest",
  ],
  whoItsForTitle: "Built around your listings, house rules, and access setup.",
  whoItsFor: [
    "Hosts managing multiple Airbnb or Vrbo listings",
    "Serviced apartment operators without on-site staff",
    "Property managers covering guests across scattered-site units",
    "Operators who currently field guest messages personally, at all hours",
  ],
  notes:
    "Built for the realities of remote hosting: no front desk, no on-site team, but guests who still expect a fast, human response.",
  pairsWith: [
    { label: "Vacation Rental Answering Service", slug: "vacation-rental-answering-service" },
    { label: "OTA Inbox Management", slug: "ota-inbox-management" },
  ],
  relatedSlugs: ["vacation-rental-answering-service", "ota-inbox-management", "after-hours-support"],
  faqTitle: "Airbnb guest support questions, answered.",
  relatedTitle: "Pair Airbnb support with vacation rental answering and OTA inbox management.",
  comparisonTitle: "Airbnb guest support vs responding to guests personally at 2am.",
  faqs: [
    { q: "How many listings can you cover?", a: "As many as you manage. Pricing scales with listing count and message volume, not a flat per-host fee." },
    { q: "What if a guest needs something only I can handle, like a maintenance visit?", a: "It is escalated to you immediately with full context, while the guest is kept informed in the meantime so they are not left waiting without an update." },
    { q: "Do you cover Vrbo and direct bookings too, or just Airbnb?", a: "Airbnb, Vrbo, and direct-booking messages are all covered from a single point of coverage." },
    { q: "Will this affect my response rate or Superhost status?", a: "That is the point. Fast, consistent responses around the clock protect response-rate metrics and guest ratings, especially overnight when most hosts are unavailable." },
    { q: "I'm not a hotel; does this still make sense for one host with a few units?", a: "Yes. This is built specifically for hosts and small STR operators who cannot realistically be on call 24/7 themselves." },
    { q: "Can GuestSquad help protect Airbnb response rate?", a: "Yes. Response rate is directly tied to how quickly messages are answered. Having trained agents monitoring your Airbnb inbox around the clock means guests receive prompt replies at any hour, protecting your response rate and platform ranking." },
    { q: "Can GuestSquad answer check-in questions across multiple listings?", a: "Yes. Each listing has its own briefing document with specific check-in instructions, house rules, and access details. Agents use the correct information for each property." },
    { q: "Can GuestSquad use listing-specific instructions for each unit?", a: "Yes. During onboarding, we build a briefing document for each listing you operate. This covers check-in details, house rules, amenity instructions, and your escalation preferences for that specific unit." },
    { q: "Is GuestSquad an Airbnb guest services provider?", a: "Yes. GuestSquad provides Airbnb guest services for hosts, serviced apartment operators, and short-term rental managers who need human guest support without personally monitoring every message. Coverage includes guest questions, check-in help, listing-specific FAQs, issue routing, and after-hours escalation. It pairs naturally with the vacation rental answering service for full call and message coverage." },
  ],
  assetLinks: [
    { label: "Guest Coverage Gap Assessment", href: "/resources/coverage-gap-assessment" },
    { label: "Download After-Hours Checklist", href: "/resources/after-hours-checklist" },
    { label: "Download Guest Messaging SOP Template", href: "/resources/guest-messaging-sop" },
  ],
  ctaTitle: "Keep guest replies moving without being on call all night.",
  ctaDescription: "Book a coverage review and see how GuestSquad covers your Airbnb messages, check-in issues, and guest questions around the clock.",
};

export const vacationRentalAnsweringData: ServiceDetailData = {
  slug: "vacation-rental-answering-service",
  eyebrow: "Vacation Rental Answering Service",
  title: "24/7 Vacation Rental Answering Service for Airbnb, Vrbo, and STR Operators",
  description:
    "Round-the-clock call and message answering for Airbnb, Vrbo, and short-term rental operators, built for hosts and property managers who cannot be on call all night.",
  answerBlock:
    "GuestSquad's vacation rental answering service provides 24/7 phone and message coverage for Airbnb, Vrbo, and direct-booking operators who need a real person available to guests at any hour. Calls that would otherwise go to a host's personal voicemail are answered by trained agents using your listing-specific instructions. Guest questions, check-in issues, and maintenance escalations are handled without requiring you to be personally on call.",
  image: {
    src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1600&q=90",
    alt: "Modern short-term rental interior guests check into",
  },
  includesTitle: "Phone and message coverage so you stop being the 24/7 on-call line.",
  includes: [
    { title: "24/7 call answering", description: "Guest calls answered by a trained person at any hour, instead of going to your personal voicemail." },
    { title: "Cross-platform messaging", description: "Airbnb, Vrbo, and direct-booking messages handled from a single point of coverage." },
    { title: "Check-in and access support", description: "Lockbox codes, directions, and arrival questions answered in real time, day or night." },
    { title: "Issue triage and escalation", description: "Wi-Fi, appliance, and maintenance issues triaged immediately, with on-site or vendor escalation when needed." },
  ],
  examples:
    "A guest calls at midnight unable to locate the lockbox because the unit number signage is unclear. The agent references your listing guide, provides step-by-step directions, and confirms the guest is inside before closing the call. A prospective guest calls on a Saturday afternoon asking whether a specific unit allows pets and whether a crib is available: the agent checks your listing rules and gives an accurate answer, keeping the inquiry from dropping into a missed call.",
  handles: [
    "Inbound guest calls on your vacation rental phone line or forwarded number",
    "Check-in and access support for all listings using your property-specific instructions",
    "Airbnb, Vrbo, and direct-booking message monitoring and response",
    "Prospective guest inquiries about availability, rules, and amenities",
    "Routine maintenance issue triage and vendor notification",
  ],
  escalates: [
    "Maintenance visits or property damage requiring physical access",
    "Guest safety or security situations",
    "Refund or compensation requests requiring owner decision",
    "Situations where the owner or property manager must speak directly with the guest",
  ],
  whoItsForTitle: "Built around your listings, call routing, and escalation contacts.",
  whoItsFor: [
    "Hosts and co-hosts managing multiple listings",
    "STR and serviced-apartment operators without on-site staff",
    "Property managers tired of being on call personally at all hours",
    "Operators worried about response-time impact on ratings and rankings",
  ],
  notes:
    "Built for the realities of remote hosting: no front desk, no on-site team, but guests who still expect a fast, human answer when they call or message.",
  pairsWith: [
    { label: "After-Hours Support", slug: "after-hours-support" },
    { label: "Airbnb Guest Support", slug: "airbnb-guest-support" },
  ],
  relatedSlugs: ["after-hours-support", "airbnb-guest-support", "ota-inbox-management"],
  faqTitle: "Vacation rental answering questions, answered.",
  relatedTitle: "Pair vacation rental answering with Airbnb guest support and OTA coverage.",
  comparisonTitle: "Vacation rental answering vs being the 24/7 on-call line yourself.",
  faqs: [
    { q: "What is vacation rental after-hours support?", a: "Vacation rental after-hours support means guest calls and messages are answered outside normal working hours, including late check-in questions, access issues, urgent guest concerns, and escalation requests. GuestSquad handles or routes these issues using your property-specific rules and on-call contacts so you are not personally on call every night." },
    { q: "Do you answer phone calls, or just Airbnb/Vrbo messages?", a: "Both. This service covers live phone answering as well as Airbnb, Vrbo, and direct-booking messaging." },
    { q: "How many listings or units can this cover?", a: "As many as you manage. Pricing scales with listing count and volume, not a flat per-host fee." },
    { q: "What happens with something only I can fix, like a broken appliance?", a: "It is escalated to you or your maintenance contact immediately, while the guest is kept informed so they are not left waiting." },
    { q: "Will this help protect my Superhost status or response rate?", a: "That is the core purpose. Consistent, fast responses around the clock protect response-rate metrics and guest satisfaction, especially overnight." },
    { q: "I only have 2-3 units; is this still worth it?", a: "Yes. Many clients start with just a handful of units specifically because they cannot personally be on call every night." },
    { q: "Is this only for Airbnb or also Vrbo and direct bookings?", a: "All three. Airbnb, Vrbo, and direct-booking guests are covered from the same point of coverage, so you are not managing separate answering arrangements per platform." },
    { q: "Can GuestSquad answer calls for multiple properties or listings?", a: "Yes. Each property or listing has its own briefing in our system. Agents use the correct information for whichever unit a guest is calling about." },
    { q: "What information do you need for each listing?", a: "During onboarding we collect check-in instructions, access codes, house rules, amenity details, local recommendations, and your escalation contacts. The more detail you provide, the more we can handle without needing to reach you." },
    { q: "Does the vacation rental answering service cover after-hours calls and emergencies?", a: "Yes. GuestSquad covers vacation rental after-hours support for late check-in questions, access issues, urgent guest calls, and messages that arrive when your team or host is offline. True emergencies are escalated to your on-call contact using your property-specific rules. This pairs with the after-hours support service for full overnight coverage." },
  ],
  assetLinks: [
    { label: "Download After-Hours Checklist", href: "/resources/after-hours-checklist" },
    { label: "Guest Coverage Gap Assessment", href: "/resources/coverage-gap-assessment" },
    { label: "View Sample Weekly Report", href: "/resources/sample-weekly-report" },
  ],
  ctaTitle: "Keep guest replies moving without being on call all night.",
  ctaDescription: "Book a coverage review and see how GuestSquad covers your Airbnb, Vrbo, and direct-booking guest calls around the clock.",
};
