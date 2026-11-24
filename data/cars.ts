export type PriceBand = "under-250" | "250-500" | "500-1000" | "over-1000";
export type CarCategory = "Hypercar" | "Supercar" | "Track-focused" | "Grand tourer" | "Performance coupe";

export interface Car {
  slug: string;
  brand: string;
  model: string;
  displayName: string;
  year: string;
  trim: string;
  category: CarCategory;
  priceBand: PriceBand;
  priceBandLabel: string;
  image: string;
  imageAlt: string;
  horsepower: string;
  topSpeed: string;
  zeroTo100: string;
  engine: string;
  powerUnitNote: string;
  specificationNote: string;
  summary: string;
  engineDetail: string;
  sourceName: string;
  sourceUrl: string;
}

export const priceBandLabels: Record<PriceBand, string> = {
  "under-250": "Under $250K",
  "250-500": "$250K–$500K",
  "500-1000": "$500K–$1M",
  "over-1000": "$1M+"
};

export const cars: Car[] = [
  {
    slug: "porsche-918-spyder",
    brand: "Porsche",
    model: "918 Spyder",
    displayName: "Porsche 918 Spyder",
    year: "2014–15 production",
    trim: "Production-series hybrid road car",
    category: "Hypercar",
    priceBand: "over-1000",
    priceBandLabel: priceBandLabels["over-1000"],
    image: "/images/918-guards-red.webp",
    imageAlt: "Guards Red Porsche 918 Spyder in a three-quarter front view",
    horsepower: "887 PS",
    topSpeed: "345 km/h",
    zeroTo100: "2.6 s",
    engine: "4.6L V8 + two electric motors",
    powerUnitNote: "652 kW combined; Porsche's source labels 887 PS (English page labels hp).",
    specificationNote: "Factory production figure. The Weissach package is not implied; Porsche model-year pages differ by market and unit label.",
    summary: "A plug-in hybrid that pairs a naturally aspirated V8 with electric drive. It remains a landmark in the performance hybrid story.",
    engineDetail: "A 4.6-litre naturally aspirated V8 works with front and rear electric motors. Porsche quotes 652 kW combined system output and all-wheel drive.",
    sourceName: "Porsche Newsroom — 918 Spyder technical specifications",
    sourceUrl: "https://newsroom.porsche.com/en/press-kits/Porsche-Museum/Porsche-918-Spyder.html"
  },
  {
    slug: "porsche-911-gt3-rs",
    brand: "Porsche",
    model: "911 GT3 RS",
    displayName: "Porsche 911 GT3 RS",
    year: "2023 model",
    trim: "992 generation, road-legal",
    category: "Track-focused",
    priceBand: "250-500",
    priceBandLabel: priceBandLabels["250-500"],
    image: "/images/911-gt3-rs.webp",
    imageAlt: "Rear three-quarter view of a 2022 Porsche 911 GT3 RS",
    horsepower: "525 PS",
    topSpeed: "296 km/h",
    zeroTo100: "3.2 s",
    engine: "4.0L naturally aspirated flat-six",
    powerUnitNote: "525 PS (386 kW) in Porsche's European release; 518 SAE hp in the U.S. release.",
    specificationNote: "Porsche's 2023 road-car figures; the U.S. source gives 0–60 mph rather than a separate 0–100 km/h figure.",
    summary: "A road-legal 911 shaped around track precision, aerodynamic load and a naturally aspirated engine.",
    engineDetail: "A 4.0-litre naturally aspirated boxer six drives through a seven-speed PDK transmission. This listing describes the 992 GT3 RS, not an earlier generation.",
    sourceName: "Porsche Newsroom — new 911 GT3 RS",
    sourceUrl: "https://newsroom.porsche.com/en/2022/products/porsche-911-gt3-rs-world-premiere-29177.html"
  },
  {
    slug: "ferrari-sf90-stradale",
    brand: "Ferrari",
    model: "SF90 Stradale",
    displayName: "Ferrari SF90 Stradale",
    year: "2019 launch specification",
    trim: "Standard production coupe",
    category: "Hypercar",
    priceBand: "500-1000",
    priceBandLabel: priceBandLabels["500-1000"],
    image: "/images/ferrari-sf90.webp",
    imageAlt: "Ferrari SF90 Stradale in red, photographed on a road",
    horsepower: "1,000 cv",
    topSpeed: "340 km/h",
    zeroTo100: "2.5 s",
    engine: "4.0L twin-turbo V8 + 3 electric motors",
    powerUnitNote: "Ferrari's 1,000 cv is metric horsepower (approximately 986 SAE hp); the V8 alone is rated at 780 cv.",
    specificationNote: "Standard SF90 Stradale coupe figures; not the SF90 XX or a trim-specific Assetto Fiorano claim.",
    summary: "Ferrari's series-production plug-in hybrid supercar, combining a twin-turbo V8 with three electric motors.",
    engineDetail: "A 3,990 cc 90-degree twin-turbo V8 is paired with two front-axle motors and a third motor between the engine and gearbox.",
    sourceName: "Ferrari — SF90 Stradale model page",
    sourceUrl: "https://www.ferrari.com/en-EN/auto/sf90-stradale"
  },
  {
    slug: "lamborghini-aventador-svj",
    brand: "Lamborghini",
    model: "Aventador SVJ",
    displayName: "Lamborghini Aventador SVJ",
    year: "2018 coupe",
    trim: "SVJ Coupé, not Roadster",
    category: "Supercar",
    priceBand: "500-1000",
    priceBandLabel: priceBandLabels["500-1000"],
    image: "/images/aventador-svj.webp",
    imageAlt: "Lamborghini Aventador SVJ in Monaco",
    horsepower: "770 PS",
    topSpeed: ">350 km/h",
    zeroTo100: "2.8 s",
    engine: "6.5L naturally aspirated V12",
    powerUnitNote: "770 PS/CV (566 kW), approximately 759 SAE hp.",
    specificationNote: "Factory coupe specification; Lamborghini's official sources publish top speed as over 350 km/h.",
    summary: "A V12 flagship defined by active aerodynamics, dramatic proportions and a high-revving naturally aspirated engine.",
    engineDetail: "The SVJ Coupé uses a 6,498 cc naturally aspirated V12. Lamborghini's ALA active-aerodynamics system manages downforce and drag.",
    sourceName: "Lamborghini — Aventador SVJ",
    sourceUrl: "https://www.lamborghini.com/en-en/history/aventador-svj"
  },
  {
    slug: "mclaren-720s",
    brand: "McLaren",
    model: "720S",
    displayName: "McLaren 720S",
    year: "2017–22 series",
    trim: "Original Coupé",
    category: "Supercar",
    priceBand: "250-500",
    priceBandLabel: priceBandLabels["250-500"],
    image: "/images/mclaren-720s.webp",
    imageAlt: "Orange McLaren 720S parked outdoors",
    horsepower: "720 PS",
    topSpeed: "341 km/h",
    zeroTo100: "2.9 s",
    engine: "4.0L twin-turbo V8",
    powerUnitNote: "720 PS (approximately 710 SAE hp/bhp).",
    specificationNote: "McLaren's media specification for the original 720S Coupé; market, model year and body style may differ.",
    summary: "A light, mid-engined supercar whose carbon-fibre structure and twin-turbo V8 make speed feel deliberate and composed.",
    engineDetail: "The original Coupé uses a 4.0-litre twin-turbocharged V8, rear-wheel drive and a carbon-fibre Monocage II structure.",
    sourceName: "McLaren — 720S media information",
    sourceUrl: "https://cars.mclaren.press/assets/documents/original/13913-McLaren720Smediainformationv22CLEAN.pdf"
  },
  {
    slug: "mercedes-amg-gt-63",
    brand: "Mercedes-AMG",
    model: "GT 63",
    displayName: "Mercedes-AMG GT 63",
    year: "2024 model",
    trim: "Second-generation C192 coupé",
    category: "Grand tourer",
    priceBand: "under-250",
    priceBandLabel: priceBandLabels["under-250"],
    image: "/images/mercedes-amg-gt-c192.webp",
    imageAlt: "Second-generation Mercedes-AMG GT in a front three-quarter view",
    horsepower: "585 PS",
    topSpeed: "315 km/h",
    zeroTo100: "3.2 s",
    engine: "4.0L twin-turbo V8, 4MATIC+ AWD",
    powerUnitNote: "585 PS (430 kW); U.S. market material expresses output as 577 SAE hp.",
    specificationNote: "C192 GT 63 Coupé factory figures; not the first-generation GT or the GT 63 S E PERFORMANCE plug-in hybrid.",
    summary: "A grand-touring interpretation of the AMG GT: a long bonnet, broad stance and four-wheel-drive traction.",
    engineDetail: "A 3,982 cc twin-turbocharged V8 is paired with AMG Performance 4MATIC+ all-wheel drive. This is the standard second-generation GT 63 Coupé.",
    sourceName: "Mercedes-Benz Media — GT 63 4MATIC+ Coupé technical specifications",
    sourceUrl: "https://media.mercedes-benz.com/en/press-kit/48252dbe-9bb4-4aa6-9d04-28a69a74cf85/article/5593356e-f5a7-4b92-83fb-bfb062f494bd"
  },
  {
    slug: "bmw-m4-competition",
    brand: "BMW",
    model: "M4 Competition",
    displayName: "BMW M4 Competition",
    year: "G82, rear-wheel drive",
    trim: "Competition Coupé, not xDrive",
    category: "Performance coupe",
    priceBand: "under-250",
    priceBandLabel: priceBandLabels["under-250"],
    image: "/images/bmw-m4-g82.webp",
    imageAlt: "Green BMW M4 G82 coupe photographed in Böblingen",
    horsepower: "510 PS",
    topSpeed: "250 km/h",
    zeroTo100: "3.9 s",
    engine: "3.0L twin-turbo inline-six",
    powerUnitNote: "510 PS (375 kW; approximately 503 SAE hp). M Driver's Package raises the limited top speed to 290 km/h.",
    specificationNote: "RWD Competition specification; the xDrive model has different power and acceleration figures. Top speed is electronically limited unless optioned.",
    summary: "A contemporary M car that pairs a turbocharged inline-six with a focused rear-drive chassis and everyday coupe usability.",
    engineDetail: "The G82 Competition uses BMW's 3.0-litre S58 twin-turbo straight-six. This card follows the rear-wheel-drive version rather than M xDrive.",
    sourceName: "BMW M — M4 Coupé and Competition Coupé specifications",
    sourceUrl: "https://www.bmw-m.com/en/all-models/overview-m-and-m-performance/bmw-m4-coupe/2024/bmw-m4-coupe-and-m4-competition-coupe.html"
  },
  {
    slug: "audi-r8-v10-performance",
    brand: "Audi",
    model: "R8 V10 performance quattro",
    displayName: "Audi R8 V10 performance quattro",
    year: "Final generation, through 2024",
    trim: "Coupé, quattro AWD",
    category: "Supercar",
    priceBand: "250-500",
    priceBandLabel: priceBandLabels["250-500"],
    image: "/images/audi-r8.webp",
    imageAlt: "White 2020 Audi R8 V10 photographed from the front",
    horsepower: "620 PS",
    topSpeed: "331 km/h",
    zeroTo100: "3.1 s",
    engine: "5.2L naturally aspirated V10",
    powerUnitNote: "620 PS (456 kW); Audi publishes the quoted metric horsepower on its technical page.",
    specificationNote: "Final-generation V10 performance quattro Coupé. These figures are not for the rear-drive or Spyder versions; production ended in 2024.",
    summary: "A naturally aspirated V10 supercar with quattro traction and a distinctive engine note that helped define the R8.",
    engineDetail: "The final-generation performance quattro Coupé uses a 5,204 cc naturally aspirated 5.2 FSI V10 and all-wheel drive.",
    sourceName: "Audi MediaCenter — R8 engine and technical figures",
    sourceUrl: "https://www.audi-mediacenter.com/en/the-audi-r8-until-2024-updated-dynamics-for-the-high-performance-sports-car-11734/engine-11738"
  }
];

export const getCar = (slug: string) => cars.find((car) => car.slug === slug);
export const brands = Array.from(new Set(cars.map((car) => car.brand)));
export const categories = Array.from(new Set(cars.map((car) => car.category)));
