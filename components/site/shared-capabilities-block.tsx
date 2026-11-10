import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Variant = "hotel" | "group" | "rental";

interface Capability {
  name: string;
  body: string;
  slug: string | null;
}

const CAPABILITIES: Record<Variant, Capability[]> = {
  hotel: [
    {
      name: "Phone Answering",
      body: "Reception overflow handled with your hotel greeting. Room inquiries, availability questions and guest requests answered from your property brief.",
      slug: null,
    },
    {
      name: "Reservation Support",
      body: "Room availability, approved rates and booking actions within your agreed permissions. Changes and cancellations handled per your policies.",
      slug: "reservation-support",
    },
    {
      name: "OTA Inbox Management",
      body: "Guest threads on Booking.com, Expedia and other supported hotel channels. Inquiry responses, pre-arrival questions and booking follow-up.",
      slug: "ota-inbox-management",
    },
    {
      name: "Guest Messaging",
      body: "Arrival information, in-stay questions and guest requests handled through your agreed messaging channels.",
      slug: "guest-messaging",
    },
    {
      name: "Guest Support",
      body: "Stay questions, housekeeping requests and maintenance escalation using your property procedures and contacts.",
      slug: null,
    },
  ],
  group: [
    {
      name: "Phone Answering",
      body: "Callers identified to the right property and handled per that property's brief. Reservation calls and general inquiries routed appropriately.",
      slug: null,
    },
    {
      name: "Reservation Support",
      body: "Property selection, availability, approved bookings, changes and follow-up across your participating hotels.",
      slug: "reservation-support",
    },
    {
      name: "OTA Inbox Management",
      body: "Property-specific reservation and guest threads across supported channels. Each property's inbox handled to its own instructions.",
      slug: "ota-inbox-management",
    },
    {
      name: "Guest Messaging",
      body: "Property-specific pre-arrival and in-stay communication. Handovers and open items passed to the relevant property team.",
      slug: "guest-messaging",
    },
    {
      name: "Guest Support",
      body: "Guest requests routed to the correct property team. Coordination and escalation follow each property's agreed procedures.",
      slug: null,
    },
  ],
  rental: [
    {
      name: "Phone Answering",
      body: "Calls identified to the right listing and handled per that listing's brief. Booking inquiries, arrival questions and guest calls answered directly.",
      slug: null,
    },
    {
      name: "Reservation Support",
      body: "Listing availability, booking questions and approved reservation changes within your agreed permissions.",
      slug: "reservation-support",
    },
    {
      name: "OTA Inbox Management",
      body: "Guest threads on Airbnb, Vrbo and other supported rental channels. Inquiry responses, house-rule questions and pre-arrival messages.",
      slug: "ota-inbox-management",
    },
    {
      name: "Guest Messaging",
      body: "Arrival instructions, house rules and listing-specific conversations handled through agreed channels.",
      slug: "guest-messaging",
    },
    {
      name: "Guest Support",
      body: "Access assistance, in-stay questions and local contact coordination using each listing's approved procedures.",
      slug: null,
    },
  ],
};

interface SharedCapabilitiesBlockProps {
  variant: Variant;
}

export function SharedCapabilitiesBlock({ variant }: SharedCapabilitiesBlockProps) {
  const caps = CAPABILITIES[variant];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {caps.map((cap) => (
        <div
          key={cap.name}
          className="flex flex-col rounded-lg border border-line bg-paper p-5"
        >
          <p className="text-sm font-semibold text-ink">{cap.name}</p>
          <p className="mt-2 grow text-sm leading-relaxed text-ink-soft">{cap.body}</p>
          {cap.slug && (
            <Link
              href={`/services/${cap.slug}`}
              className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-gold-dark hover:text-gold"
            >
              Learn more
              <ArrowRight className="h-3 w-3" />
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}
