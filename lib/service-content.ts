import type { ServiceDetailData } from "@/components/site/service-detail";

export const reservationSupportData: ServiceDetailData = {
  slug: "reservation-support",
  eyebrow: "Reservation Support",
  title: "24/7 Hotel Reservation Support for Booking Calls and Quotes",
  description:
    "Inbound and outbound reservation calls handled with your rates, availability, and policies, so no booking inquiry goes unanswered, day or night.",
  image: {
    src: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?w=1600&q=90",
    alt: "Reservation agent on a phone call at a desk with monitors",
  },
  includes: [
    { title: "Inbound call handling", description: "Calls answered using your current rates, room types, and availability, in your brand voice." },
    { title: "Quotes & bookings", description: "Rate quotes, group inquiries, and direct bookings taken and confirmed in your PMS or booking engine." },
    { title: "Modifications & cancellations", description: "Date changes, cancellations, and policy questions handled without escalation to your team." },
    { title: "Abandoned inquiry follow-up", description: "Guests who called or messaged but didn't book are followed up with before they book elsewhere." },
  ],
  whoItsFor: [
    "Hotels without 24/7 front-desk phone coverage",
    "Properties losing direct bookings to OTAs after hours",
    "Groups managing reservation calls across multiple properties",
    "Boutique hotels without a dedicated reservations team",
  ],
  notes:
    "Reservation support is delivered by people trained on your specific rates, room types, and policies, not a shared script across unrelated properties.",
  faqs: [
    { q: "Do your agents work inside our PMS to check live availability?", a: "Yes. Agents are briefed on your PMS or booking engine and confirm real-time availability and rates before quoting, with no guesswork and no overbooking." },
    { q: "Can you handle group or multi-room bookings?", a: "Yes. Group inquiries, multi-room requests, and rate negotiations within your approved policy are handled directly, with anything outside policy routed to your team." },
    { q: "What happens if a guest wants something only our team can approve?", a: "It's escalated immediately with full context: what was asked, what was already discussed, and what the guest expects next." },
    { q: "Do you replace our reservations team?", a: "No. We cover overflow, after-hours, and the calls your team can't get to; your team stays in control of policy and pricing decisions." },
    { q: "How fast can this go live?", a: "Most clients are live within 5 business days of signing, once we have access to your rates, policies, and booking system." },
  ],
};

export const guestMessagingData: ServiceDetailData = {
  slug: "guest-messaging",
  eyebrow: "Guest Messaging",
  title: "Hotel Guest Messaging Support for SMS, WhatsApp, Email, and OTA Channels",
  description:
    "SMS, WhatsApp, email, and in-app messages monitored and answered across the full stay journey: pre-arrival, in-stay, and post-stay.",
  image: {
    src: "https://images.unsplash.com/photo-1592890288564-76628a30a657?w=1600&q=90",
    alt: "Close-up of a guest message being typed and sent on a phone",
  },
  includes: [
    { title: "Pre-arrival outreach", description: "Check-in instructions, upsell offers, and special requests handled before guests arrive." },
    { title: "In-stay support", description: "Requests, questions, and issues answered promptly across SMS, WhatsApp, and email." },
    { title: "Post-stay follow-up", description: "Checkout messages, review requests, and rebooking outreach sent without manual effort." },
    { title: "Escalation handling", description: "Anything requiring on-site action is routed to your team immediately with full context." },
  ],
  whoItsFor: [
    "Properties offering digital guest communication without staff to monitor it",
    "Hotels using guest messaging apps that go unanswered after hours",
    "Boutique properties wanting a consistent, branded voice across channels",
    "Teams that want messaging handled without adding headcount",
  ],
  notes:
    "Every message is logged and visible to your team, so nothing happens in your guest communication channels that you can't see.",
  faqs: [
    { q: "Which channels do you actually cover?", a: "SMS, WhatsApp, email, and in-app messaging from your PMS or guest-messaging platform. OTA messaging is covered under our separate OTA Inbox Management service." },
    { q: "Can you match our brand's tone of voice?", a: "Yes. Agents are briefed on your specific tone, terminology, and any phrases you do or don't want used before handling a single message." },
    { q: "What happens with requests that need a physical response, like housekeeping?", a: "Those are logged and routed to the right on-site team immediately, with the guest kept informed that it's been received." },
    { q: "Do you handle complaints over messaging?", a: "Straightforward issues are resolved directly; anything sensitive or compensation-related is escalated to your team with full message history attached." },
    { q: "Is there a log of every conversation?", a: "Yes. Every message and outcome is recorded and visible to your team, so nothing happens in your guest channels that you can't see." },
  ],
};

export const otaInboxData: ServiceDetailData = {
  slug: "ota-inbox-management",
  eyebrow: "OTA Inbox Management",
  title: "OTA Inbox Management for Booking.com, Expedia, and Airbnb",
  description:
    "Booking.com, Expedia, and Airbnb inboxes monitored and answered around the clock, so pre-booking questions convert instead of disappearing.",
  image: {
    src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1600&q=90",
    alt: "Team monitoring OTA inboxes across multiple screens",
  },
  includes: [
    { title: "Pre-booking inquiries", description: "Availability, rate, and policy questions answered fast enough to win the booking." },
    { title: "Booking modifications", description: "OTA-side date changes, special requests, and cancellation handling." },
    { title: "Review responses", description: "Guest reviews acknowledged and responded to in your brand voice, on schedule." },
    { title: "OTA-to-direct conversion", description: "Where appropriate, guests are nudged toward booking directly for future stays." },
  ],
  whoItsFor: [
    "Hotels relying heavily on Booking.com, Expedia, or Airbnb for bookings",
    "Properties with multiple OTA inboxes and no dedicated owner",
    "Teams that only check OTA messages once or twice a day",
    "Airbnb hosts and serviced apartment operators managing several listings",
  ],
  notes:
    "OTA response time is one of the few factors hotels can directly control that affects ranking and conversion, so we treat it accordingly.",
  faqs: [
    { q: "Which OTA platforms do you cover?", a: "Booking.com, Expedia, and Airbnb messaging are covered as standard; other platforms can be added if you use them." },
    { q: "Can you answer pre-booking questions, or just post-booking?", a: "Both. Pre-booking questions about rates, availability, and policies are answered fast enough to win the booking, not just service it after the fact." },
    { q: "Do you respond to guest reviews too?", a: "Yes, where that's part of your plan. Review responses are written in your brand voice and on the schedule you set." },
    { q: "Will you try to move guests off the OTA and onto direct bookings?", a: "Where appropriate and within OTA terms, yes. We'll nudge repeat or future bookings toward your direct channel." },
    { q: "How is this different from an OTA's own auto-reply tools?", a: "Auto-replies handle FAQs. We handle the actual back-and-forth: rate negotiations, special requests, and anything that needs real judgment." },
  ],
};

export const afterHoursData: ServiceDetailData = {
  slug: "after-hours-support",
  eyebrow: "After-Hours Hotel Support",
  title: "After-Hours Hotel Front Desk Support for Calls and Guest Messages",
  description:
    "Overnight and weekend front-desk coverage for calls and messages your on-site team can't take outside working hours, without hiring a night shift.",
  image: {
    src: "https://images.unsplash.com/photo-1534679541758-8dc76ff8081d?w=1600&q=90",
    alt: "Modern hotel lobby and reception desk lit at night",
  },
  includes: [
    { title: "Overnight call coverage", description: "Reservation, guest, and general inquiry calls answered through the night." },
    { title: "Weekend & holiday coverage", description: "Consistent coverage on the days your team is short-staffed." },
    { title: "Emergency escalation", description: "Genuine emergencies are routed to your on-call contact immediately, with clear protocols." },
    { title: "Late-checkout & early-arrival queries", description: "Common after-hours questions handled without waking your team." },
  ],
  whoItsFor: [
    "Properties without a 24-hour front desk",
    "Hotels currently relying on a single overnight staff member",
    "Boutique properties and serviced apartments with limited on-site hours",
    "Groups looking to reduce overnight staffing costs without losing coverage",
  ],
  notes:
    "After-hours coverage is built around your existing escalation preferences. We handle what we can, and route the rest to the right person, every time.",
  faqs: [
    { q: "What hours do you actually cover?", a: "Whatever gap you need filled: overnight only, weekends only, or full 24/7 coverage. Most clients start with overnight and weekend gaps." },
    { q: "What counts as a genuine emergency, and how is it handled?", a: "Anything involving guest safety, security, or property damage is routed to your on-call contact immediately, following the escalation protocol we set up with you." },
    { q: "Can you handle a lockout or late check-in at 2am?", a: "Yes. Common after-hours requests like late check-in, early arrival, and access issues are handled directly using your property's procedures." },
    { q: "Do we still need a night auditor?", a: "We cover guest-facing calls and messages; the financial night-audit function itself is a separate service (see Back-Office Operations) if you need that covered too." },
    { q: "Is this cheaper than hiring overnight staff?", a: "Typically yes. Outsourced after-hours coverage commonly runs 30-50% below the cost of staffing the same hours in-house, since you're not paying for a full overnight shift's downtime." },
  ],
};

export const backOfficeData: ServiceDetailData = {
  slug: "back-office-operations",
  eyebrow: "Back-Office Guest Operations",
  title: "Hotel Back Office Operations: Night Audit and OTA Reconciliation",
  description:
    "Daily night audit, OTA reconciliation, and guest-billing support, so revenue leakage from missed payouts, fee discrepancies, and unposted charges gets caught the day it happens, not in next month's close.",
  image: {
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&q=90",
    alt: "Back-office team reviewing daily reconciliation reports",
  },
  includes: [
    { title: "Daily night audit", description: "Day-end revenue reconciliation, folio posting, and cash drawer balancing handled every night, including weekends." },
    { title: "OTA & PMS reconciliation", description: "Booking.com, Expedia, and Airbnb payouts matched against your PMS and processor settlements, flagging missing or incorrect payments." },
    { title: "Guest billing support", description: "Folio disputes, incidental charges, and group billing handled before they become guest complaints or chargebacks." },
    { title: "Reporting to your finance team", description: "Exception reports delivered on a schedule your controller or ownership group actually wants, not buried in a dashboard nobody opens." },
  ],
  whoItsFor: [
    "Properties relying on a single person to handle night audit and reconciliation",
    "Multi-property groups reconciling across several OTAs and PMS instances",
    "Owners who suspect revenue leakage but don't have time to chase it down",
    "Hotels without a dedicated back-office or controller function on-site",
  ],
  notes:
    "Back-office support runs alongside your existing accounting team and PMS. We don't replace your controller; we make sure the daily reconciliation work that protects your revenue actually gets done every day.",
  faqs: [
    { q: "Do you replace our accountant or controller?", a: "No. We handle the daily reconciliation legwork (night audit, OTA payout matching, billing exceptions) and report into your existing finance team or controller." },
    { q: "What exactly gets reconciled against what?", a: "OTA payout reports (Booking.com, Expedia, Airbnb) are matched against your PMS folios and processor settlements to flag missing, short, or duplicate payments." },
    { q: "How often is night audit run?", a: "Every night, including weekends. That consistency is the main point, since gaps are usually where revenue leakage hides." },
    { q: "What do we actually receive from this?", a: "Exception reports on the schedule you choose, flagging anything that doesn't reconcile cleanly, plus routine folio and cash-drawer balancing each night." },
    { q: "Can this work with our existing PMS?", a: "Yes. We work inside your current PMS, OTA extranets, and processor portals rather than asking you to adopt new software." },
  ],
};

export const airbnbSupportData: ServiceDetailData = {
  slug: "airbnb-guest-support",
  eyebrow: "Airbnb Guest Support",
  title: "24/7 Airbnb Guest Support for Short-Term Rental Operators",
  description:
    "Round-the-clock guest support for Airbnb hosts and serviced apartment operators, with check-in help, issue resolution, and FAQs handled across every listing.",
  image: {
    src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1600&q=90",
    alt: "Modern short-term rental interior guests check into",
  },
  includes: [
    { title: "Check-in coordination", description: "Lockbox codes, access instructions, and arrival questions answered in real time." },
    { title: "In-stay issue resolution", description: "Wi-fi, appliance, and maintenance questions triaged, with on-site escalation when needed." },
    { title: "Guest messaging across listings", description: "Airbnb, VRBO, and direct booking messages handled from a single point of coverage." },
    { title: "Review & rating management", description: "Post-stay messaging and review responses handled to protect your listing rating." },
  ],
  whoItsFor: [
    "Hosts managing multiple Airbnb or VRBO listings",
    "Serviced apartment operators without on-site staff",
    "Property managers covering guests across scattered-site units",
    "Operators who currently field guest messages personally, at all hours",
  ],
  notes:
    "Built for the realities of remote hosting: no front desk, no on-site team, but guests who still expect a fast, human response.",
  faqs: [
    { q: "How many listings can you cover?", a: "As many as you manage. Pricing scales with listing count and message volume, not a flat per-host fee." },
    { q: "What if a guest needs something only I can handle, like a maintenance visit?", a: "It's escalated to you immediately with full context, while the guest is kept informed in the meantime so they're not left waiting." },
    { q: "Do you cover Vrbo and direct bookings too, or just Airbnb?", a: "Airbnb, Vrbo, and direct-booking messages are all covered from a single point of coverage." },
    { q: "Will this affect my response-rate or Superhost status?", a: "That's the point. Fast, consistent responses around the clock are what protect response-rate metrics and guest ratings, especially overnight." },
    { q: "I'm not a hotel; does this still make sense for one host with a few units?", a: "Yes. This is built specifically for hosts and small STR/serviced-apartment operators who can't realistically be on call 24/7 themselves." },
  ],
};

export const hotelAnsweringServiceData: ServiceDetailData = {
  slug: "hotel-answering-service",
  eyebrow: "Hotel Answering Service",
  title: "24/7 Hotel Answering Service for Reservation Calls and Guest Questions",
  description:
    "Every call answered by a trained person: reservation questions, general guest inquiries, and overflow during busy periods, without a phone tree or voicemail.",
  image: {
    src: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?w=1600&q=90",
    alt: "Agent answering a hotel call at a desk with monitors",
  },
  includes: [
    { title: "Live call answering", description: "Every inbound call answered by a person, not an automated menu or voicemail, during the hours you choose." },
    { title: "Reservation & general inquiries", description: "Booking questions, rate quotes, and general property questions handled directly using your information." },
    { title: "Call overflow during peak periods", description: "When your front desk is slammed at check-in or check-out, overflow calls are picked up instead of going unanswered." },
    { title: "Message taking & routing", description: "Anything that needs your team's direct attention is logged and routed immediately, with full call context." },
  ],
  whoItsFor: [
    "Hotels whose front desk can't always get to the phone",
    "Properties relying on voicemail or a phone tree after hours",
    "Independent hotels without a dedicated reservations line",
    "Groups wanting consistent call handling across multiple properties",
  ],
  notes:
    "This is a true call-answering layer. Every call reaches a hospitality-trained person, not an automated system. It pairs naturally with Reservation Support and After-Hours Support for full phone coverage.",
  faqs: [
    { q: "How is this different from your Reservation Support service?", a: "Reservation Support focuses on bookings, quotes, and modifications. Hotel Answering Service is the broader call-answering layer, including general questions and overflow, and the two are often used together." },
    { q: "Do you use an automated phone tree or IVR?", a: "No. Calls are answered by a trained person. Automated menus are exactly what this service is built to avoid." },
    { q: "Can you cover just our busiest hours, not all day?", a: "Yes. Many clients start with peak-hour overflow coverage (check-in/check-out rushes) rather than full-day coverage." },
    { q: "What happens with a call that needs management attention?", a: "It's logged with full context and routed to the right person immediately, so nothing sits in a generic voicemail box." },
    { q: "Is this only for hotels, or does it work for smaller properties too?", a: "It works for any property type with a phone line: independent hotels, boutique properties, and small groups alike." },
  ],
};

export const vacationRentalAnsweringData: ServiceDetailData = {
  slug: "vacation-rental-answering-service",
  eyebrow: "Vacation Rental Answering Service",
  title: "24/7 Vacation Rental Answering Service for Airbnb, Vrbo, and STR Operators",
  description:
    "Round-the-clock call and message answering for Airbnb, Vrbo, and short-term rental operators, built for hosts and property managers who can't be on call all night.",
  image: {
    src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1600&q=90",
    alt: "Modern short-term rental interior guests check into",
  },
  includes: [
    { title: "24/7 call answering", description: "Guest calls answered by a trained person at any hour, instead of going to your personal voicemail." },
    { title: "Cross-platform messaging", description: "Airbnb, Vrbo, and direct-booking messages handled from a single point of coverage." },
    { title: "Check-in & access support", description: "Lockbox codes, directions, and arrival questions answered in real time, day or night." },
    { title: "Issue triage & escalation", description: "Wi-fi, appliance, and maintenance issues triaged immediately, with on-site or vendor escalation when needed." },
  ],
  whoItsFor: [
    "Hosts and co-hosts managing multiple listings",
    "STR and serviced-apartment operators without on-site staff",
    "Property managers tired of being on call personally at all hours",
    "Operators worried about response-time impact on ratings and rankings",
  ],
  notes:
    "Built for the realities of remote hosting: no front desk, no on-site team, but guests who still expect a fast, human answer when they call or message.",
  faqs: [
    { q: "Do you answer phone calls, or just Airbnb/Vrbo messages?", a: "Both. This service covers live phone answering as well as Airbnb, Vrbo, and direct-booking messaging." },
    { q: "How many listings or units can this cover?", a: "As many as you manage. Pricing scales with listing count and volume, not a flat per-host fee." },
    { q: "What happens with something only I can fix, like a broken appliance?", a: "It's escalated to you or your maintenance contact immediately, while the guest is kept informed so they're not left waiting." },
    { q: "Will this help protect my Superhost status or response rate?", a: "That's the core purpose. Consistent, fast responses around the clock are what protect response-rate metrics and guest satisfaction overnight." },
    { q: "I only have 2-3 units; is this still worth it?", a: "Yes. Many clients start with just a handful of units specifically because they can't personally be on call every night." },
  ],
};
