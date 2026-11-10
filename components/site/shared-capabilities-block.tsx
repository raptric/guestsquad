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
      name: "Guest Messaging & Support",
      body: "Arrival information, in-stay questions and guest requests handled through your agreed channels. Housekeeping requests and maintenance escalation using your property procedures and contacts.",
      slug: "guest-messaging",
    },
  ],
  group: [
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
      name: "Guest Messaging & Support",
      body: "Property-specific pre-arrival and in-stay communication. Guest requests routed to the correct property team, with coordination and escalation following each property's agreed procedures.",
      slug: "guest-messaging",
    },
  ],
  rental: [
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
      name: "Guest Messaging & Support",
      body: "Arrival instructions, house rules and listing-specific conversations handled through agreed channels. Access assistance, in-stay questions and local contact coordination using each listing's approved procedures.",
      slug: "guest-messaging",
    },
  ],
};

interface SharedCapabilitiesBlockProps {
  variant: Variant;
}

export function SharedCapabilitiesBlock({ variant }: SharedCapabilitiesBlockProps) {
  const caps = CAPABILITIES[variant];

  return (
    <div className="grid gap-4 sm:grid-cols-3">
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
