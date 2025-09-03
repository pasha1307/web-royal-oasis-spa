import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID!,
  dataset: "production",
  token: process.env.SANITY_WRITE_TOKEN!, // Needs Editor/Contributor role
  apiVersion: "2025-01-01",
  useCdn: false,
});

const services = [
  {
    _id: "service-sauna",
    _type: "service",
    title: "Steam and Dry Sauna",
    slug: { _type: "slug", current: "steam-and-dry-sauna" },
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Rejuvenate your body with our steam and dry sauna therapies, designed to promote circulation, detoxification, and deep relaxation.",
          },
        ],
      },
    ],
    duration: 30,
    priceText: "$40 per session",
    order: 1,
  },
  {
    _id: "service-cold-plunge",
    _type: "service",
    title: "Cold Plunge",
    slug: { _type: "slug", current: "cold-plunge" },
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Boost recovery and invigorate your senses with our cold plunge experience, a contrast therapy that reduces inflammation and restores energy.",
          },
        ],
      },
    ],
    duration: 15,
    priceText: "$25 per session",
    order: 2,
  },
  {
    _id: "service-floating",
    _type: "service",
    title: "Floating",
    slug: { _type: "slug", current: "floating" },
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Experience weightless relaxation in our float tanks, designed to reduce stress, ease muscle tension, and promote mindfulness.",
          },
        ],
      },
    ],
    duration: 60,
    priceText: "$75 per session",
    order: 3,
  },
  {
    _id: "service-massage",
    _type: "service",
    title: "Massage",
    slug: { _type: "slug", current: "massage" },
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Choose from a variety of massage modalities, including Swedish, deep tissue, and prenatal, customized to your body’s needs.",
          },
        ],
      },
    ],
    duration: 60,
    priceText: "$90 per session",
    order: 4,
  },
  {
    _id: "service-relaxation-room",
    _type: "service",
    title: "Relaxation Room Area",
    slug: { _type: "slug", current: "relaxation-room-area" },
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Unwind in our serene relaxation room, featuring calming ambiance, refreshments, and a quiet environment before or after treatments.",
          },
        ],
      },
    ],
    duration: 30,
    priceText: "Included with select services / $20 standalone",
    order: 5,
  },
];

async function run() {
  for (const s of services) {
    await client.createOrReplace(s);
    console.log(`Seeded: ${s.title}`);
  }
  console.log("✅ All spa services seeded.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
