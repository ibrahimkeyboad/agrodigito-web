import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
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
    'Agri Link - Connecting Agrovets with Trusted Agricultural Input Suppliers',
  description:
    'Agri Link is the ultimate platform that bridges the gap between Agrovet businesses and top agricultural input producers and suppliers.',
  keywords:
    'agri link, agricultural supply chain, agrovet suppliers, farm inputs, agricultural marketplace, agribusiness platform',
  authors: [{ name: 'Agri Link Team' }],
  creator: 'Agri Link',
  publisher: 'Agri Link Inc.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://agrilink.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title:
      'Agri Link - Connecting Agrovets with Trusted Agricultural Input Suppliers',
    description:
      'Streamlining agricultural supply chains by connecting Agrovet businesses with verified suppliers.',
    url: 'https://agrilink.com',
    siteName: 'Agri Link',
    images: [
      {
        url: 'https://agrilink.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Agri Link - Agricultural Supply Chain Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Agri Link - Connecting Agrovets with Trusted Agricultural Input Suppliers',
    description:
      'Streamlining agricultural supply chains by connecting Agrovet businesses with verified suppliers.',
    images: ['https://agrilink.com/images/twitter-image.jpg'],
    creator: '@agrilink',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
