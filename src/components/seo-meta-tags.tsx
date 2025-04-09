import Head from 'next/head';

interface SeoMetaTagsProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
}

export default function SeoMetaTags({
  title = 'Agri Link - Connecting Agrovets with Trusted Agricultural Input Suppliers',
  description = 'Streamlining agricultural supply chains by connecting Agrovet businesses with verified suppliers.',
  canonicalUrl = 'https://agrilink.com',
  ogImage = 'https://agrilink.com/images/og-image.jpg',
  ogType = 'website',
}: SeoMetaTagsProps) {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='description' content={description} />
      <meta
        name='keywords'
        content='agri link, agricultural supply chain, agrovet suppliers, farm inputs, agricultural marketplace, agribusiness platform'
      />

      {/* Canonical Link */}
      <link rel='canonical' href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property='og:type' content={ogType} />
      <meta property='og:url' content={canonicalUrl} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={ogImage} />

      {/* Twitter */}
      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content={canonicalUrl} />
      <meta property='twitter:title' content={title} />
      <meta property='twitter:description' content={description} />
      <meta property='twitter:image' content={ogImage} />

      {/* Favicon */}
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon-16x16.png'
      />
      <link rel='manifest' href='/site.webmanifest' />
    </Head>
  );
}
