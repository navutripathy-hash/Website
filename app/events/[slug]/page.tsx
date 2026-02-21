import { events } from '@/lib/mock-data';
import { notFound } from 'next/navigation';

export default function EventDetailPage({ params }: { params: { slug: string } }) {
  const event = events.find((item) => item.slug === params.slug);
  if (!event) return notFound();

  return (
    <main className="space-y-6">
      <section className="glass rounded-3xl p-8">
        <h1 className="text-4xl font-bold">{event.title}</h1>
        <p className="mt-4 text-white/75">Dynamic schedule, rules, FAQ, prize ladder, and live participant metrics.</p>
        <div className="mt-6 h-3 rounded-full bg-white/10">
          <div className="h-3 rounded-full bg-gradient-to-r from-sky-400 to-violet-500" style={{ width: `${Math.max(8, (event.seatsLeft / 200) * 100)}%` }} />
        </div>
      </section>
    </main>
  );
}
