import { SITE } from "@/lib/site-data";
import type { LegalSection } from "@/components/site/legal-page";

export const LEGAL_EFFECTIVE_DATE = "June 26, 2026";

export const PRIVACY_INTRO = [
  `This Privacy Policy explains how ${SITE.legalName}, operating the GuestSquad service ("GuestSquad," "we," "us," or "our"), collects, uses, discloses, and protects personal data in connection with the ${SITE.url} website (the "Site") and the guest-operations services we provide to hotel, resort, serviced-apartment, and short-term-rental clients (the "Services").`,
  "We act in two distinct roles depending on the data involved, and this policy is structured around that distinction:",
  "As a Data Controller for personal data collected directly through this Site — for example, when you submit the contact form, book a demo, or otherwise communicate with us as a prospective or existing client.",
  "As a Data Processor (or \"service provider\"/\"processor\" under applicable law) for guest personal data that we handle on behalf of our hotel and property-management clients while delivering the Services — for example, guest names, contact details, and booking information accessed through a client's PMS, OTA accounts, or messaging channels. Processing of that guest data is governed primarily by the data processing agreement (\"DPA\") between GuestSquad and the relevant client, and by that client's own privacy policy toward its guests. This Site-facing policy describes our general practices and safeguards as a processor, but the client (as controller) remains the primary point of contact for guests exercising rights over their own personal data.",
];

export const PRIVACY_SECTIONS: LegalSection[] = [
  {
    heading: "Who We Are",
    paragraphs: [
      `GuestSquad is operated by ${SITE.legalName}. For the purposes of the EU General Data Protection Regulation ("GDPR"), the UK GDPR, and other applicable data protection laws, ${SITE.legalName} is the data controller for personal data described in Section 2 below, and acts as a processor for client guest data as described in Section 3.`,
      `You can contact us about this Policy at ${SITE.email} or ${SITE.phone}.`,
    ],
  },
  {
    heading: "Personal Data We Collect Directly (Controller Role)",
    paragraphs: [
      "When you interact with the Site as a visitor or prospective client, we collect:",
    ],
    list: [
      "Contact and identity data: name, work email address, phone number, hotel/company name, job role.",
      "Business data: number of properties, property type, approximate monthly call/message volume, and the PMS, CRS, OTA, and phone systems you currently use, as submitted through our contact form.",
      "Communications: the content of any message, inquiry, or correspondence you send us, and records of our replies.",
      "Technical and usage data: IP address, browser type and version, device information, pages visited, referring URLs, and approximate location, collected automatically via server logs and any analytics tools we deploy on the Site.",
      "Cookies and similar technologies: see Section 6 (Cookies & Tracking).",
    ],
  },
  {
    heading: "Personal Data We Process on Behalf of Clients (Processor Role)",
    paragraphs: [
      "Where you are a guest of a hotel, resort, serviced-apartment, or short-term-rental property that has engaged GuestSquad, we may process your personal data strictly to deliver the Services our client has contracted for. This typically includes:",
    ],
    list: [
      "Guest identity and contact details (name, email, phone number).",
      "Reservation and booking details (dates, room/unit type, rate, special requests).",
      "Communications exchanged via phone, SMS, WhatsApp, email, in-app messaging, or OTA messaging platforms.",
      "Payment-adjacent metadata necessary for reservation handling (we do not store full payment card numbers; card data, where involved at all, is handled within the client's own PMS or payment processor, not by GuestSquad directly).",
    ],
  },
  {
    heading: "Legal Bases for Processing",
    paragraphs: [
      "Where the GDPR or UK GDPR applies, we rely on the following legal bases under Article 6:",
    ],
    list: [
      "Consent — for example, when you voluntarily submit the contact form or opt in to receive communications from us. You may withdraw consent at any time (see Section 9).",
      "Performance of a contract — to respond to your inquiry, provide a demo, or deliver the Services under an agreement with a client.",
      "Legitimate interests — to operate, secure, and improve the Site and our Services, including fraud prevention and basic analytics, balanced against your rights and freedoms.",
      "Legal obligation — where processing is necessary to comply with applicable law, regulation, or a valid legal request.",
    ],
  },
  {
    heading: "How We Use Personal Data",
    paragraphs: ["We use personal data described above to:"],
    list: [
      "Respond to inquiries, schedule demos, and provide quotes.",
      "Deliver, maintain, and improve the Services for our clients, including reservation handling, guest messaging, OTA inbox management, after-hours support, and back-office reconciliation.",
      "Send service-related communications, and, where you have consented, marketing communications (which you may opt out of at any time).",
      "Maintain records required for billing, accounting, and legal compliance.",
      "Detect, investigate, and prevent fraud, abuse, or security incidents.",
    ],
  },
  {
    heading: "Cookies & Tracking Technologies",
    paragraphs: [
      "The Site may use cookies and similar technologies for essential site functionality, analytics, and (where applicable) marketing measurement. Where required by applicable law (including the GDPR's ePrivacy-derived consent requirements and similar laws in the UK and other jurisdictions), we will request your consent before placing non-essential cookies, and you may withdraw that consent at any time through your browser settings or any cookie-preference tool made available on the Site.",
      "Strictly necessary cookies do not require consent and are used solely to enable core functionality (such as remembering your navigation state).",
    ],
  },
  {
    heading: "Sharing & Disclosure of Personal Data",
    paragraphs: [
      "We do not sell personal data. We may share personal data with:",
    ],
    list: [
      "Service providers and sub-processors who support our operations (e.g., hosting, email delivery, scheduling/Calendly, analytics, customer relationship management), bound by confidentiality and data protection obligations at least as protective as this Policy.",
      "Our clients, where the data relates to that client's own guests, as necessary to deliver the Services to that client.",
      "Professional advisors (legal, accounting) where reasonably necessary.",
      "Law enforcement, regulators, or other third parties where required by law, legal process, or to protect the rights, property, or safety of GuestSquad, our clients, or others.",
      "A successor entity in connection with a merger, acquisition, financing, or sale of assets, subject to standard confidentiality protections.",
    ],
  },
  {
    heading: "International Data Transfers",
    paragraphs: [
      `${SITE.legalName} is based in the United States. If you are located in the European Economic Area, the United Kingdom, or another jurisdiction with data transfer restrictions, your personal data may be transferred to, stored, and processed in the United States or other countries where we or our service providers operate. Where required, we rely on appropriate safeguards for such transfers, including the EU Standard Contractual Clauses (or the UK International Data Transfer Addendum) or another legally recognized transfer mechanism. You may contact us for more information about the safeguards we use for a specific transfer.`,
    ],
  },
  {
    heading: "Data Retention",
    paragraphs: [
      "We retain personal data only for as long as reasonably necessary to fulfil the purposes described in this Policy, including to provide the Services, comply with legal, accounting, or reporting obligations, resolve disputes, and enforce our agreements. Contact-form and lead inquiry data not converted into a client relationship is generally retained for a limited period (typically up to 24 months) and then deleted or anonymized, unless a longer period is required by law or you have asked us to retain it for an ongoing purpose.",
      "Guest data processed on behalf of a client is retained in accordance with that client's instructions and our data processing agreement with them, and is deleted or returned upon termination of that agreement except where retention is required by law.",
    ],
  },
  {
    heading: "Your Rights Under GDPR and Other Privacy Laws",
    paragraphs: [
      "If the GDPR, UK GDPR, or a similar data protection law applies to you, you have the right to:",
    ],
    list: [
      "Access the personal data we hold about you.",
      "Rectify inaccurate or incomplete personal data.",
      "Erase your personal data ('right to be forgotten'), subject to certain exceptions.",
      "Restrict or object to our processing of your personal data in certain circumstances.",
      "Receive a copy of your personal data in a structured, portable format ('data portability').",
      "Withdraw consent at any time where processing is based on consent, without affecting the lawfulness of processing carried out before withdrawal.",
      "Lodge a complaint with your local data protection supervisory authority.",
    ],

  },
  {
    heading: "Data Security",
    paragraphs: [
      "We implement reasonable technical and organizational measures designed to protect personal data against unauthorized access, alteration, disclosure, or destruction, including access controls, encryption in transit, and confidentiality obligations on our staff and sub-processors. No method of transmission or storage is 100% secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    heading: "Children's Privacy",
    paragraphs: [
      "The Site and Services are directed at businesses and professionals and are not intended for individuals under the age of 16. We do not knowingly collect personal data from children. If you believe a child has provided us with personal data, please contact us so we can take appropriate action.",
    ],
  },
  {
    heading: "Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will post the revised policy on this page with an updated effective date, and where changes are material, we will provide additional notice as appropriate.",
    ],
  },
  {
    heading: "Contact Us",
    paragraphs: [
      `For questions about this Privacy Policy or to exercise any of the rights described above, contact us at ${SITE.email} or ${SITE.phone}. You may also write to ${SITE.legalName} at the address provided upon request.`,
      "This Privacy Policy is provided as a general statement of our data practices and does not constitute legal advice. We recommend reviewing it with qualified legal counsel for your specific jurisdiction and circumstances before relying on it as your sole compliance measure.",
    ],
  },
];

export const TERMS_INTRO = [
  `These Terms of Service ("Terms") govern your access to and use of the ${SITE.url} website and the guest-operations services (the "Services") provided by ${SITE.legalName}, operating as GuestSquad ("GuestSquad," "we," "us," or "our"). By signing an order form, statement of work, or pilot agreement with us, accessing the Site, or otherwise engaging the Services, you ("Client," "you," or "your") agree to be bound by these Terms.`,
  "If you are entering into these Terms on behalf of a company or other legal entity, you represent that you have the authority to bind that entity, in which case \"you\" refers to that entity.",
];

export const TERMS_SECTIONS: LegalSection[] = [
  {
    heading: "Description of Services",
    paragraphs: [
      "GuestSquad provides outsourced guest-communications and back-office support for hotels, resorts, serviced apartments, and short-term-rental operators, which may include reservation support, guest messaging, OTA inbox management, after-hours front-desk coverage, callback and lead recovery, upsell and revenue support, and back-office guest operations (collectively, the \"Services\"), as further described on the Site or in an applicable order form, statement of work, or pilot agreement (each, an \"Order\").",
      "GuestSquad provides Services as a support, overflow, and after-hours layer for Client's existing operations. GuestSquad does not guarantee specific booking volumes, revenue outcomes, response times, or any other business result, except to the extent expressly and specifically stated in a signed Order.",
    ],
  },
  {
    heading: "Client Responsibilities",
    paragraphs: [
      "Client is responsible for providing accurate and current information about its property, rates, policies, escalation preferences, and brand voice, and for granting GuestSquad timely access to the systems (PMS, CRS, OTA accounts, phone systems, messaging platforms) reasonably necessary to perform the Services. Delays or inaccuracies caused by Client's failure to provide such access or information may affect service quality and are not attributable to GuestSquad.",
      "Client represents that it has all necessary rights, consents, and lawful basis to share any guest or third-party personal data with GuestSquad for purposes of the Services, including any consents required for GuestSquad to act as a processor under applicable data protection law.",
    ],
  },
  {
    heading: "Fees, Billing, and Payment Authorization",
    paragraphs: [
      "Fees for the Services are as set out in the applicable Order. By providing a payment method (credit card, ACH, wire, or other agreed method) and signing an Order, Client expressly authorizes GuestSquad to charge that payment method for all fees described in the Order on the agreed billing schedule, including recurring monthly charges where applicable, until the Order or these Terms are terminated in accordance with Section 7.",
      "Client agrees to keep payment method details current and to promptly notify GuestSquad of any changes. GuestSquad is not responsible for failed charges, late fees, or service interruption resulting from outdated or invalid payment information on file.",
      "Invoices are due upon receipt unless otherwise stated in the Order. Late payments may accrue interest at the lesser of 1.5% per month or the maximum rate permitted by applicable law, and GuestSquad may suspend Services for accounts more than 15 days past due, upon prior written notice.",
    ],
  },
  {
    heading: "Billing Disputes and Chargebacks",
    paragraphs: [
      "If Client believes any charge is incorrect, Client agrees to contact GuestSquad at " +
        SITE.email +
        " within thirty (30) days of the charge date to attempt to resolve the dispute directly with us before contacting Client's bank or card issuer to dispute or reverse the charge (a \"Chargeback\").",
      "Client agrees not to initiate a Chargeback for fees properly authorized under a signed Order and these Terms. Initiating a Chargeback for an authorized, undisputed-in-good-faith charge, without first attempting resolution as described above, is a material breach of these Terms. In such cases, GuestSquad reserves the right to: (a) suspend or terminate Services immediately; (b) pursue collection of the disputed amount through any lawful means, including third-party collections; and (c) recover GuestSquad's reasonable costs of collection, including chargeback fees imposed by GuestSquad's payment processor and reasonable attorneys' fees, to the extent permitted by applicable law.",
      "Nothing in this Section limits any right Client may have under applicable consumer protection law where such law cannot be waived; this Section applies to the maximum extent permitted by law in a business-to-business context.",
    ],
  },
  {
    heading: "Pilot Program Terms",
    paragraphs: [
      "Where Client purchases a discounted pilot engagement (a \"Pilot\") as described on the Site or in an Order, the Pilot fee is charged at the outset of the Pilot period and is non-refundable once the Pilot has commenced, except as required by applicable law. The Pilot does not automatically convert into a recurring paid plan; continuation beyond the Pilot period requires Client's affirmative agreement to a subsequent Order. GuestSquad will provide a performance summary at or near the end of the Pilot period to support that decision.",
    ],
  },
  {
    heading: "Refunds and Cancellation",
    paragraphs: [
      "Except as expressly stated in an Order or required by applicable law, fees already invoiced or charged for Services already rendered, or for a then-current billing period, are non-refundable. Either party may terminate a month-to-month Order for convenience with at least 30 days' prior written notice unless a different notice period is specified in the Order; fees for the notice period remain payable.",
      "Client remains responsible for all fees accrued up to the effective date of termination.",
    ],
  },
  {
    heading: "Term and Termination",
    paragraphs: [
      "These Terms remain in effect for as long as an Order between the parties is active. Either party may terminate an Order for the other party's uncured material breach upon thirty (30) days' written notice describing the breach, if the breach remains uncured at the end of that period. GuestSquad may suspend or terminate Services immediately for non-payment (subject to Section 4) or for Client's violation of Section 6 (Chargebacks).",
      "Upon termination, Client remains liable for all fees accrued prior to the termination date, and GuestSquad will, upon request and consistent with our data processing agreement, return or delete Client and guest data in our possession, except as required to be retained by law.",
    ],
  },
  {
    heading: "Confidentiality",
    paragraphs: [
      "Each party agrees to protect the other party's non-public business, technical, and guest information disclosed in connection with the Services (\"Confidential Information\") using at least the same degree of care it uses for its own confidential information, and not to disclose such information to third parties except as necessary to perform under these Terms or as required by law. This obligation survives termination of these Terms.",
    ],
  },
  {
    heading: "Data Protection",
    paragraphs: [
      "GuestSquad's collection and use of personal data is described in our Privacy Policy, available at /privacy-policy, which is incorporated by reference. Where GuestSquad processes personal data on Client's behalf as a processor, the parties will, upon request, enter into a separate data processing agreement governing that processing in accordance with applicable data protection law.",
    ],
  },
  {
    heading: "Intellectual Property",
    paragraphs: [
      "GuestSquad retains all right, title, and interest in and to its own methodologies, software, templates, training materials, and know-how used to deliver the Services. Client retains all right, title, and interest in its own brand, trademarks, content, and data. Nothing in these Terms transfers ownership of either party's pre-existing intellectual property to the other.",
    ],
  },
  {
    heading: "Disclaimer of Warranties",
    paragraphs: [
      "THE SERVICES ARE PROVIDED \"AS IS\" AND \"AS AVAILABLE.\" TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, GUESTSQUAD DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT, AND DOES NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR WILL RESULT IN ANY PARTICULAR BOOKING VOLUME, REVENUE, OR GUEST SATISFACTION OUTCOME.",
    ],
  },
  {
    heading: "Limitation of Liability",
    paragraphs: [
      "TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, NEITHER PARTY WILL BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR LOSS OF PROFITS, REVENUE, OR DATA, ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.",
      "TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, GUESTSQUAD'S TOTAL AGGREGATE LIABILITY ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICES WILL NOT EXCEED THE TOTAL FEES PAID BY CLIENT TO GUESTSQUAD UNDER THE APPLICABLE ORDER IN THE THREE (3) MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM.",
    ],
  },
  {
    heading: "Indemnification",
    paragraphs: [
      "Client agrees to indemnify, defend, and hold harmless GuestSquad and its officers, employees, and agents from and against any third-party claims, damages, liabilities, and reasonable expenses (including attorneys' fees) arising out of Client's breach of these Terms, Client's provision of inaccurate information, or Client's failure to obtain necessary consents or rights for data shared with GuestSquad.",
    ],
  },
  {
    heading: "Governing Law and Dispute Resolution",
    paragraphs: [
      "These Terms are governed by the laws of the State of Washington, USA, without regard to its conflict-of-laws principles. The parties agree to first attempt to resolve any dispute arising out of or relating to these Terms through good-faith negotiation between authorized representatives within thirty (30) days of written notice of the dispute. If unresolved, the parties consent to the exclusive jurisdiction and venue of the state and federal courts located in Washington State for any action not otherwise subject to mandatory arbitration under applicable law.",
    ],
  },
  {
    heading: "Force Majeure",
    paragraphs: [
      "Neither party will be liable for any failure or delay in performance due to causes beyond its reasonable control, including acts of God, natural disaster, war, terrorism, labor disputes, internet or telecommunications failures, or governmental action.",
    ],
  },
  {
    heading: "General Provisions",
    paragraphs: [
      "These Terms, together with any applicable Order, constitute the entire agreement between the parties regarding the Services and supersede any prior agreements on the subject matter. If any provision of these Terms is found unenforceable, the remaining provisions will remain in full force and effect. Neither party may assign these Terms without the other party's prior written consent, except in connection with a merger, acquisition, or sale of substantially all assets. GuestSquad may update these Terms from time to time; material changes will be communicated to active Clients, and continued use of the Services after the effective date of an update constitutes acceptance of the revised Terms.",
    ],
  },
  {
    heading: "Contact Information",
    paragraphs: [
      `Questions about these Terms should be directed to ${SITE.email} or ${SITE.phone}. ${SITE.legalName} operates GuestSquad; for general company information, visit ${SITE.parentUrl}.`,
      "These Terms are provided as a general commercial template and do not constitute legal advice. We strongly recommend having these Terms reviewed by qualified legal counsel licensed in your jurisdiction before relying on them, particularly the billing authorization, chargeback, and limitation of liability provisions, to ensure enforceability under applicable law and your card-network/payment-processor rules.",
    ],
  },
];
