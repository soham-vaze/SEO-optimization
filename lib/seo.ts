type OrganizationJsonLd = {
  "@context": "https://schema.org";
  "@type": "Organization";
  name: string;
  url: string;
  logo?: string;
  sameAs?: string[];
};

export function getOrganizationJsonLd(baseUrl: string): OrganizationJsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AI Solutions",
    url: baseUrl,
    logo: `${baseUrl}/images/hero.jpg`,
  };
}
