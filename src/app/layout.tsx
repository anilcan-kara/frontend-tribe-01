import type { Metadata } from 'next';
import { Html } from 'next/document';
import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI Startup Landing Page',
  description: 'A landing page for an AI startup created with Frontend Tribe',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Html lang="en">
      <body className={inter.className}>{children}</body>
    </Html>
  );
}
