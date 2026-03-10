import { legalContent } from '@/lib/legal';
export default function CookiesPage() { return <main className="glass rounded-2xl p-8"><h1 className="text-3xl font-bold">Cookie Policy</h1><p className="mt-4 text-white/80">{legalContent.cookies}</p></main>; }
