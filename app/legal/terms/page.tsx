import { legalContent } from '@/lib/legal';
export default function TermsPage() { return <main className="glass rounded-2xl p-8"><h1 className="text-3xl font-bold">Terms of Service</h1><p className="mt-4 text-white/80">{legalContent.terms}</p></main>; }
