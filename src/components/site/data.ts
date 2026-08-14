import pride from "@/assets/project-pride.jpg";
import avenue from "@/assets/project-avenue.jpg";
import kingdom from "@/assets/project-kingdom.jpg";
import county from "@/assets/project-county.jpg";

export const projects = [
  {
    name: "Royal County",
    type: "3BHK Luxury Apartments",
    blurb: "Just 2 minutes from ORR Exit 07 — expansive 1930 SFT luxury homes.",
    image: county,
    price: "₹4,200",
    tag: "Now Selling" as string | null,
    specs: [
      ["Location", "ORR Exit 07 · 2 Min"],
      ["Floors", "G+6 Floors"],
      ["Per Floor", "2 Flats (3BHK)"],
      ["Flat Size", "1930 SFT"],
      ["Total Flats", "12"],
      ["Car Parking", "₹4 Lakhs"],
    ],
  },
  {
    name: "Royal Pride",
    type: "3BHK Premium Apartments",
    blurb: "Signature 3BHK residences crafted for those who expect more.",
    image: pride,
    price: "₹4,499",
    tag: null as string | null,
    specs: [
      ["Total Land", "520 Sq. Yards"],
      ["Floors", "5 Floors"],
      ["Per Floor", "2 Flats Per Floor"],
      ["Flat Size", "1500 SFT"],
      ["Total Flats", "10"],
      ["Facing", "Premium"],
    ],
  },
  {
    name: "Royal Avenue",
    type: "3BHK Apartments",
    blurb: "Our newest launch — refined East/West facing homes.",
    image: avenue,
    price: "₹4,499",
    tag: "New Launch",
    specs: [
      ["Total Land", "500 Sq. Yards"],
      ["Floors", "G+5"],
      ["Per Floor", "2 Flats Per Floor"],
      ["Flat Size", "1420 SFT"],
      ["Total Flats", "10"],
      ["Facing", "East / West"],
    ],
  },
  {
    name: "Royal Kingdom",
    type: "2BHK Apartments Only",
    blurb: "Spacious 2BHK living in a grand gated community.",
    image: kingdom,
    price: "₹4,499",
    tag: null as string | null,
    specs: [
      ["Total Land", "1000 Sq. Yards"],
      ["Floors", "C+G+6 Floors"],
      ["Per Floor", "4 Flats Per Floor"],
      ["Flat Size", "1265 SFT"],
      ["Total Flats", "24"],
      ["Facing", "Premium"],
    ],
  },
];

export const promises = [
  {
    n: "01",
    title: "A Prime Address",
    body: "ORR Exit No. 7, Karimnagar Highway facing — 100m from the proposed Double Decker Flyover & Metro Rail, inside the Celebrity Club premises.",
  },
  {
    n: "02",
    title: "Built for Everyday Ease",
    body: "Sub-Registrar office opposite, collectorates within 2km, buses every 5 minutes, and top schools, colleges & hospitals minutes away.",
  },
  {
    n: "03",
    title: "A Lifetime of Privilege",
    body: "Every home carries a lifetime Celebrity Club membership free — pools, gym, function halls and 20% off on food bills, for life.",
  },
];

export const locations: [string, string][] = [
  ["Double Decker & Metro Rail", "100 m"],
  ["NALSAR University", "2 km"],
  ["BITS Pilani", "2 km"],
  ["Sub Registrar Office", "Opposite"],
  ["Medchal & Malkajgiri Collectorate", "2 km"],
  ["AMB Multiplex & RS Shopping", "2 km"],
  ["MRO Office", "2 km"],
  ["Ratnalayam Temple", "2 km"],
  ["Genome Valley", "5 km"],
  ["Bus Facility", "Every 5 min"],
  ["Pallavi International School", "Nearby"],
  ["Multi-Speciality Hospitals", "Nearby"],
];

export const amenities = [
  "Gym",
  "Club House",
  "Indoor / Outdoor Games",
  "Landscaped Gardens",
  "20% Off on Food Bills",
  "Function Hall",
  "Car Parking",
  "Power Backup",
  "Lift Facility",
  "Solar Fencing",
  "24/7 CCTV Surveillance",
  "EV Charging Station",
];

export const marqueeChips = [
  "ORR Exit No. 7",
  "Karimnagar Highway Facing",
  "Celebrity Club Premises",
  "Metro Rail 100m",
  "Genome Valley 5km",
  "NALSAR University",
  "BITS Pilani",
];