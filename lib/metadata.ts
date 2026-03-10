import { Metadata } from 'next';

export const siteMetadata: Metadata = {
  metadataBase: new URL('https://eventstack.example.com'),
  title: {
    default: 'EventStack | Production Event Ecosystem',
    template: '%s | EventStack'
  },
  description: 'Discover, register, pay, compete, and manage events at startup scale.',
  openGraph: {
    title: 'EventStack',
    description: 'Premium event ecosystem platform',
    images: ['/og-default.png']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EventStack',
    description: 'Premium event ecosystem platform',
    images: ['/og-default.png']
  }
};
