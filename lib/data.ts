// The Craving List - Structured Mock Data
// Based on PRD entity definitions

export interface City {
  id: string;
  name: string;
  country: string;
  status: "active" | "coming-soon";
}

export interface CravingCategory {
  id: string;
  cityId: string;
  title: string;
  slug: string;
  status: "live" | "coming-soon";
  shortDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  primarySynonyms: string[];
  lastUpdated: string;
  imageUrl?: string;
}

export interface Place {
  id: string;
  name: string;
  neighborhood: string;
  cityId: string;
  placeType: string[];
  address: string;
  googleMapsUrl: string;
  websiteUrl: string;
  instagramUrl: string;
  isClaimed: boolean;
}

export interface RankedItemPick {
  id: string;
  cravingId: string;
  placeId: string;
  rank: number;
  publicLabel: string;
  itemName: string;
  itemStyle: string;
  bestFor: string;
  whyItRanks: string;
  whatPeopleMention: string[];
  watchOuts: string[];
  evidenceConfidence: "High confidence" | "Medium confidence" | "Early signal" | "Needs re-check";
  lastChecked: string;
  internalScore: number;
  sourceTypes: string[];
  status: "ranked" | "contender" | "reader-nomination";
  imageUrl?: string;
}

// Mock Data

export const cities: City[] = [
  {
    id: "amsterdam",
    name: "Amsterdam",
    country: "Netherlands",
    status: "active",
  },
];

export const cravingCategories: CravingCategory[] = [
  {
    id: "cheesecake",
    cityId: "amsterdam",
    title: "Cheesecake",
    slug: "cheesecake",
    status: "live",
    shortDescription: "Creamy, baked, burnt, classic, or somewhere in between.",
    heroTitle: "Best cheesecake in Amsterdam",
    heroSubtitle: "Five cheesecake picks worth your craving, from Basque-style burnt cheesecake to classic creamy slices.",
    primarySynonyms: ["cheesecake", "basque cheesecake", "san sebastian cheesecake", "burnt cheesecake", "new york cheesecake"],
    lastUpdated: "2026-05-13",
    imageUrl: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=800&h=600&fit=crop",
  },
  {
    id: "pain-au-chocolat",
    cityId: "amsterdam",
    title: "Pain au chocolat",
    slug: "pain-au-chocolat",
    status: "coming-soon",
    shortDescription: "Flaky, buttery, chocolate-filled morning perfection.",
    heroTitle: "Best pain au chocolat in Amsterdam",
    heroSubtitle: "The flakiest, most buttery chocolate croissants the city has to offer.",
    primarySynonyms: ["pain au chocolat", "chocolate croissant", "chocolatine"],
    lastUpdated: "2026-05-13",
    imageUrl: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=800&h=600&fit=crop",
  },
  {
    id: "matcha",
    cityId: "amsterdam",
    title: "Matcha",
    slug: "matcha",
    status: "coming-soon",
    shortDescription: "From ceremonial-grade lattes to matcha desserts done right.",
    heroTitle: "Best matcha in Amsterdam",
    heroSubtitle: "Where to find the matcha spots that actually take it seriously.",
    primarySynonyms: ["matcha", "matcha latte", "ceremonial matcha", "matcha dessert"],
    lastUpdated: "2026-05-13",
    imageUrl: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=800&h=600&fit=crop",
  },
  {
    id: "french-toast-pancakes",
    cityId: "amsterdam",
    title: "French toast & pancakes",
    slug: "french-toast-pancakes",
    status: "coming-soon",
    shortDescription: "Weekend brunch staples, from fluffy stacks to caramelized perfection.",
    heroTitle: "Best French toast and pancakes in Amsterdam",
    heroSubtitle: "The brunch destinations worth the wait.",
    primarySynonyms: ["french toast", "pancakes", "brunch", "fluffy pancakes", "brioche french toast"],
    lastUpdated: "2026-05-13",
    imageUrl: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800&h=600&fit=crop",
  },
  {
    id: "gelato",
    cityId: "amsterdam",
    title: "Gelato",
    slug: "gelato",
    status: "coming-soon",
    shortDescription: "Artisanal scoops, seasonal flavors, and the real Italian deal.",
    heroTitle: "Best gelato in Amsterdam",
    heroSubtitle: "Five spots serving gelato that rivals anything you would find in Italy.",
    primarySynonyms: ["gelato", "italian ice cream", "artisan gelato", "stracciatella"],
    lastUpdated: "2026-05-13",
    imageUrl: "https://images.unsplash.com/photo-1557142046-c704a3adf364?w=800&h=600&fit=crop",
  },
];

export const places: Place[] = [
  {
    id: "bakkerij-vanderberg",
    name: "Bakkerij Van Der Berg",
    neighborhood: "De Pijp",
    cityId: "amsterdam",
    placeType: ["bakery", "cafe"],
    address: "Ferdinand Bolstraat 112, Amsterdam",
    googleMapsUrl: "https://maps.google.com",
    websiteUrl: "https://example.com",
    instagramUrl: "https://instagram.com",
    isClaimed: false,
  },
  {
    id: "canal-side-patisserie",
    name: "Canal Side Patisserie",
    neighborhood: "Jordaan",
    cityId: "amsterdam",
    placeType: ["patisserie", "cafe"],
    address: "Prinsengracht 245, Amsterdam",
    googleMapsUrl: "https://maps.google.com",
    websiteUrl: "https://example.com",
    instagramUrl: "https://instagram.com",
    isClaimed: false,
  },
  {
    id: "de-taart-van-mijn-tante",
    name: "De Taart Van Mijn Tante",
    neighborhood: "Rivierenbuurt",
    cityId: "amsterdam",
    placeType: ["cake shop", "cafe"],
    address: "Ferdinand Bolstraat 10, Amsterdam",
    googleMapsUrl: "https://maps.google.com",
    websiteUrl: "https://example.com",
    instagramUrl: "https://instagram.com",
    isClaimed: false,
  },
  {
    id: "sweet-cup-bakery",
    name: "Sweet Cup Bakery",
    neighborhood: "Oud-West",
    cityId: "amsterdam",
    placeType: ["bakery"],
    address: "Bilderdijkstraat 88, Amsterdam",
    googleMapsUrl: "https://maps.google.com",
    websiteUrl: "https://example.com",
    instagramUrl: "https://instagram.com",
    isClaimed: false,
  },
  {
    id: "petits-gateaux",
    name: "Petits Gâteaux",
    neighborhood: "Centrum",
    cityId: "amsterdam",
    placeType: ["patisserie"],
    address: "Utrechtsestraat 142, Amsterdam",
    googleMapsUrl: "https://maps.google.com",
    websiteUrl: "https://example.com",
    instagramUrl: "https://instagram.com",
    isClaimed: false,
  },
];

export const rankedPicks: RankedItemPick[] = [
  {
    id: "cheesecake-pick-1",
    cravingId: "cheesecake",
    placeId: "bakkerij-vanderberg",
    rank: 1,
    publicLabel: "Best overall",
    itemName: "San Sebastian burnt cheesecake",
    itemStyle: "Basque / San Sebastian-style",
    bestFor: "A rich, creamy slice with a soft center and deeply caramelized top. The kind that wobbles when it lands on your plate.",
    whyItRanks: "Strong item-specific praise across multiple review platforms, clear cheesecake identity, and repeated signals that this is a destination-worthy slice. The caramelization is consistently mentioned as exceptional.",
    whatPeopleMention: ["Creamy, almost custardy center", "Perfectly burnt top", "Rich but balanced", "Worth crossing town for", "Great with black coffee"],
    watchOuts: ["Often sells out by 2pm on weekends", "Limited seating inside", "Cash preferred"],
    evidenceConfidence: "High confidence",
    lastChecked: "2026-05-10",
    internalScore: 94,
    sourceTypes: ["public reviews", "menu evidence", "editorial review"],
    status: "ranked",
    imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=400&fit=crop",
  },
  {
    id: "cheesecake-pick-2",
    cravingId: "cheesecake",
    placeId: "canal-side-patisserie",
    rank: 2,
    publicLabel: "Best Basque-style",
    itemName: "Basque burnt cheesecake",
    itemStyle: "Basque-style",
    bestFor: "A slightly denser take on Basque cheesecake with a more pronounced burnt flavor. Pairs exceptionally well with their house espresso.",
    whyItRanks: "Consistent high ratings specifically for cheesecake, with reviewers frequently comparing it favorably to versions in San Sebastian. The coffee pairing is noted as particularly good.",
    whatPeopleMention: ["Intense caramelized flavor", "Dense but not heavy", "Beautiful presentation", "Canal-side seating is lovely"],
    watchOuts: ["Pricier than average", "Can be very busy on sunny days", "Reservations recommended for terrace"],
    evidenceConfidence: "High confidence",
    lastChecked: "2026-05-08",
    internalScore: 91,
    sourceTypes: ["public reviews", "editorial review", "instagram evidence"],
    status: "ranked",
    imageUrl: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&h=400&fit=crop",
  },
  {
    id: "cheesecake-pick-3",
    cravingId: "cheesecake",
    placeId: "de-taart-van-mijn-tante",
    rank: 3,
    publicLabel: "Best classic",
    itemName: "New York-style cheesecake",
    itemStyle: "Classic New York",
    bestFor: "If you prefer the denser, tangier, graham-cracker-crust classic over the trendier burnt versions. A faithful American-style slice.",
    whyItRanks: "Long-standing Amsterdam institution with decades of cheesecake expertise. The New York style here is cited as the most authentic in the city by multiple sources.",
    whatPeopleMention: ["Proper graham cracker crust", "Tangy cream cheese flavor", "Generous portions", "Nostalgic, classic taste"],
    watchOuts: ["The decor is eccentric, not for everyone", "Can feel touristy", "Limited savory options"],
    evidenceConfidence: "High confidence",
    lastChecked: "2026-05-05",
    internalScore: 88,
    sourceTypes: ["public reviews", "long-standing reputation", "editorial review"],
    status: "ranked",
    imageUrl: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=600&h=400&fit=crop",
  },
  {
    id: "cheesecake-pick-4",
    cravingId: "cheesecake",
    placeId: "sweet-cup-bakery",
    rank: 4,
    publicLabel: "Most promising",
    itemName: "Japanese-style soufflé cheesecake",
    itemStyle: "Japanese soufflé",
    bestFor: "A lighter, fluffier alternative when you want cheesecake but not the richness. Jiggly, airy, and delicately sweet.",
    whyItRanks: "Growing buzz for their Japanese-inspired approach. Multiple recent reviews specifically praise the texture as unique in Amsterdam. Still building evidence base.",
    whatPeopleMention: ["Incredibly light and fluffy", "Jiggles on the plate", "Not too sweet", "Different from anything else in the city"],
    watchOuts: ["Newer spot, less established", "Only available Thursday through Sunday", "Delicate, best eaten fresh"],
    evidenceConfidence: "Medium confidence",
    lastChecked: "2026-05-12",
    internalScore: 85,
    sourceTypes: ["recent public reviews", "instagram evidence"],
    status: "ranked",
    imageUrl: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=600&h=400&fit=crop",
  },
  {
    id: "cheesecake-pick-5",
    cravingId: "cheesecake",
    placeId: "petits-gateaux",
    rank: 5,
    publicLabel: "Best if nearby",
    itemName: "Ricotta cheesecake with lemon",
    itemStyle: "Italian-inspired ricotta",
    bestFor: "A refreshing, citrus-forward option when the richer styles feel too heavy. Light ricotta base with bright lemon notes.",
    whyItRanks: "Well-regarded patisserie with a unique take on cheesecake. The lemon-ricotta combination is frequently mentioned as a standout among their offerings.",
    whatPeopleMention: ["Fresh and zesty", "Lighter than traditional", "Beautiful lemon flavor", "Lovely in summer"],
    watchOuts: ["Seasonal item, check availability", "Small portions", "Central location means crowds"],
    evidenceConfidence: "Medium confidence",
    lastChecked: "2026-05-01",
    internalScore: 82,
    sourceTypes: ["public reviews", "menu evidence"],
    status: "ranked",
    imageUrl: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&h=400&fit=crop",
  },
];

// Helper functions
export function getCravingBySlug(slug: string): CravingCategory | undefined {
  return cravingCategories.find((c) => c.slug === slug);
}

export function getPicksForCraving(cravingId: string): RankedItemPick[] {
  return rankedPicks
    .filter((p) => p.cravingId === cravingId && p.status === "ranked")
    .sort((a, b) => a.rank - b.rank);
}

export function getPlaceById(placeId: string): Place | undefined {
  return places.find((p) => p.id === placeId);
}

export function getLiveCategories(): CravingCategory[] {
  return cravingCategories.filter((c) => c.status === "live");
}

export function getComingSoonCategories(): CravingCategory[] {
  return cravingCategories.filter((c) => c.status === "coming-soon");
}
