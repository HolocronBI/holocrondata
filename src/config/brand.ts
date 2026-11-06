/** Provisional identity and contact details. No invented legal data. */
export const brand = {
  name: "Holocron",
  descriptor: "BI & AI Consulting",
  description: {
    de: "BI- und AI-Beratung für den Mittelstand. Daten aufbereiten, Power-BI-Reporting aufbauen und AI-Anwendungen gezielt prüfen.",
    en: "BI and AI consulting for small and medium-sized businesses. Reliable data, clear Power BI reporting and focused AI pilots.",
  },
  email: "holocrondata@outlook.de",
  siteUrl: "https://holocrondata.net",
  logo: "/brand/mark.svg",
  socialImage: "/images/pearl-social.jpg",
  formEndpoint: "https://formspree.io/f/mbdqjadp",
  // Complete with actual owner details before production publication.
  legal: { provider: "", address: [] as string[], vatId: "", reviewed: false },
};
export const legalReady = Boolean(
  brand.legal.provider && brand.legal.address.length && brand.legal.reviewed,
);
export type Locale = "de" | "en";
