import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#09090b',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://roastmypurchase.me'),
  title: 'RoastMyPurchase.me | Face Dick Headerson',
  description: 'Before dropping serious cash on a depreciating asset, gadget, or impulse buy, face Dick Headerson for a brutal financial reality check.',
  keywords: ['purchase roast', 'impulse buy audit', 'spending roast', 'financial reality check', 'Dick Headerson'],
  openGraph: {
    title: 'RoastMyPurchase.me | Face Dick Headerson',
    description: 'Are you about to waste hard-earned cash? Face Dick Headerson and see if your purchase survives the hot seat.',
    url: 'https://roastmypurchase.me',
    siteName: 'RoastMyPurchase.me',
    images: [{ url: 'https://roastmyinterview.me/dick-avatar.jpg', width: 1200, height: 630, alt: 'Dick Headerson' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RoastMyPurchase.me | Face Dick Headerson',
    description: 'Dick Headerson shreds impulsive purchases and retail therapy delusions.',
    images: ['https://roastmyinterview.me/dick-avatar.jpg'],
  },
  icons: { icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🔥</text></svg>' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-zinc-950 text-zinc-100 antialiased selection:bg-orange-500 selection:text-black`}>
        {children}
      </body>
    </html>
  );
}
