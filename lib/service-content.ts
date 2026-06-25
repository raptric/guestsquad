import type { ServiceDetailData } from "@/components/site/service-detail";

export const reservationSupportData: ServiceDetailData = {
  slug: "reservation-support",
  eyebrow: "Reservation Support",
  title: "Every reservation call answered. Every quote sent.",
  description:
    "Inbound and outbound reservation calls handled with your rates, availability, and policies — so no booking inquiry goes unanswered, day or night.",
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
    "Reservation support is delivered by people trained on your specific rates, room types, and policies — not a shared script across unrelated properties.",
};

export const guestMessagingData: ServiceDetailData = {
  slug: "guest-messaging",
  eyebrow: "Guest Messaging",
  title: "Guest messages answered in minutes, not hours.",
  description:
    "SMS, WhatsApp, email, and in-app messages monitored and answered across the full stay journey — pre-arrival, in-stay, and post-stay.",
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
    "Every message is logged and visible to your team — nothing happens in your guest communication channels that you can't see.",
};

export const otaInboxData: ServiceDetailData = {
  slug: "ota-inbox-management",
  eyebrow: "OTA Inbox Management",
  title: "OTA inboxes answered before the lead goes cold.",
  description:
    "Booking.com, Expedia, and Airbnb inboxes monitored and answered around the clock — so pre-booking questions convert instead of disappearing.",
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
    "OTA response time is one of the few factors hotels can directly control that affects ranking and conversion — we treat it accordingly.",
};

export const afterHoursData: ServiceDetailData = {
  slug: "after-hours-support",
  eyebrow: "After-Hours Hotel Support",
  title: "Coverage for the hours your front desk can't staff.",
  description:
    "Overnight and weekend front-desk coverage for calls and messages your on-site team can't take outside working hours — without hiring a night shift.",
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
    "After-hours coverage is built around your existing escalation preferences — we handle what we can, and route the rest to the right person, every time.",
};

export const backOfficeData: ServiceDetailData = {
  slug: "back-office-operations",
  eyebrow: "Back-Office Guest Operations",
  title: "The reconciliation work that usually gets pushed to next month.",
  description:
    "Daily night audit, OTA reconciliation, and guest-billing support — so revenue leakage from missed payouts, fee discrepancies, and unposted charges gets caught the day it happens, not in next month's close.",
  image: {
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&q=90",
    alt: "Back-office team reviewing daily reconciliation reports",
  },
  includes: [
    { title: "Daily night audit", description: "Day-end revenue reconciliation, folio posting, and cash drawer balancing handled every night, including weekends." },
    { title: "OTA & PMS reconciliation", description: "Booking.com, Expedia, and Airbnb payouts matched against your PMS and processor settlements, flagging missing or incorrect payments." },
    { title: "Guest billing support", description: "Folio disputes, incidental charges, and group billing handled before they become guest complaints or chargebacks." },
    { title: "Reporting to your finance team", description: "Exception reports delivered on a schedule your controller or ownership group actually wants — not buried in a dashboard nobody opens." },
  ],
  whoItsFor: [
    "Properties relying on a single person to handle night audit and reconciliation",
    "Multi-property groups reconciling across several OTAs and PMS instances",
    "Owners who suspect revenue leakage but don't have time to chase it down",
    "Hotels without a dedicated back-office or controller function on-site",
  ],
  notes:
    "Back-office support runs alongside your existing accounting team and PMS — we don't replace your controller, we make sure the daily reconciliation work that protects your revenue actually gets done every day.",
};

export const airbnbSupportData: ServiceDetailData = {
  slug: "airbnb-guest-support",
  eyebrow: "Airbnb Guest Support",
  title: "24/7 guest support for short-term rental operators.",
  description:
    "Round-the-clock guest support for Airbnb hosts and serviced apartment operators — check-in help, issue resolution, and FAQs handled across every listing.",
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
    "Built for the realities of remote hosting — no front desk, no on-site team, but guests who still expect a fast, human response.",
};
