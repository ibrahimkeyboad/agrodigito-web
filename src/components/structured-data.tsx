export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Agri Link',
    url: 'https://agrilink.com',
    logo: 'https://agrilink.com/images/logo.png',
    sameAs: [
      'https://www.facebook.com/agrilink',
      'https://www.twitter.com/agrilink',
      'https://www.linkedin.com/company/agrilink',
      'https://www.instagram.com/agrilink',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-234-567-8901',
      contactType: 'customer service',
      availableLanguage: ['English'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Agriculture Street',
      addressLocality: 'Farmville',
      addressRegion: 'CA',
      postalCode: '12345',
      addressCountry: 'US',
    },
    description:
      'Agri Link is the ultimate platform that bridges the gap between Agrovet businesses and top agricultural input producers and suppliers.',
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Agri Link',
    url: 'https://agrilink.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://agrilink.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
