import { EventCard } from './types';

export const events: EventCard[] = [
  {
    id: 'evt_1', slug: 'ai-hack-summit', title: 'AI Hack Summit', category: 'Hackathon', difficulty: 'ADVANCED',
    date: '2026-03-10T09:00:00.000Z', maxTeamSize: 4, seatsLeft: 52, priceInr: 1999
  },
  {
    id: 'evt_2', slug: 'product-war-room', title: 'Product War Room', category: 'Workshop', difficulty: 'INTERMEDIATE',
    date: '2026-04-02T11:30:00.000Z', maxTeamSize: 3, seatsLeft: 128, priceInr: 999
  }
];
