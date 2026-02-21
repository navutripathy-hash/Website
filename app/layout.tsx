import type { Metadata } from 'next';
import './globals.css';
import { siteMetadata } from '@/lib/metadata';

export const metadata: Metadata = siteMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="mx-auto min-h-screen max-w-7xl px-4 py-8 md:px-8">{children}</div>
      </body>
    </html>
  );
}
