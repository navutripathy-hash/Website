import { HeroSection } from '@/components/sections/hero';
import { events } from '@/lib/mock-data';

export default function HomePage() {
  return (
    <main className="space-y-8">
      <HeroSection />
      <section className="grid gap-4 md:grid-cols-2">
        {events.map((event) => (
          <article key={event.id} className="glass rounded-2xl p-6">
            <p className="text-sm text-white/60">{event.category} · {event.difficulty}</p>
            <h2 className="mt-2 text-2xl font-semibold">{event.title}</h2>
            <p className="mt-3 text-sm text-white/70">Seats left: {event.seatsLeft} · Team size: {event.maxTeamSize}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
