'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="glass rounded-3xl p-8 md:p-16">
      <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold md:text-6xl">
        Launch, manage, and scale <span className="bg-gradient-to-r from-sky-400 via-pink-500 to-violet-500 bg-clip-text text-transparent">event ecosystems</span>
      </motion.h1>
      <p className="mt-6 max-w-2xl text-white/80">From registration and payments to QR check-in, certificates, and analytics.</p>
      <div className="mt-8 flex gap-4">
        <Link href="/events/ai-hack-summit" className="rounded-full bg-sky-500 px-6 py-3 font-semibold">Explore Event</Link>
        <Link href="/dashboard/organizer" className="rounded-full border border-white/20 px-6 py-3 font-semibold">Organizer Console</Link>
      </div>
    </section>
  );
}
