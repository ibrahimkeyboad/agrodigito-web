import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title:
    'Agri Link  - Connecting Agrovets with Trusted Agricultural Input Suppliers',
  description:
    'Agri Link is the ultimate platform that bridges the gap between Agrovet businesses and top agricultural input producers and suppliers.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <header>
        <meta
          name='keywords'
          content='agrilink, agriculture, agrovet, farming, fertilizers, pesticides, crop protection, agricultural supplies, farm inputs'
        />

        {/* <Open Graph / Facebook  */}
        <meta
          property='og:title'
          content='AgriLink - Connecting Agrovets with Agricultural Input Suppliers'
        />
        <meta
          property='og:description'
          content='Get real-time access to fertilizers, pesticides, insecticides, fungicides, seeds, and other essential agricultural products, all in one place.'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://agrilink.com/' />
        <meta
          property='og:image'
          content='https://lovable.dev/opengraph-image-p98pqg.png'
        />

        {/* Twitter  */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@agrilink' />
        <meta
          name='twitter:title'
          content='AgriLink - Connecting Farmers with Suppliers'
        />
        <meta
          name='twitter:description'
          content='Get real-time access to essential agricultural products all in one place.'
        />
        <meta
          name='twitter:image'
          content='https://lovable.dev/opengraph-image-p98pqg.png'
        />

        {/* Canonical URL */}
        <link rel='canonical' href='https://agrilink.com/' key='canonical' />
      </header>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
