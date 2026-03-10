export type Role = 'ADMIN' | 'ORGANIZER' | 'PARTICIPANT';

export interface EventCard {
  id: string;
  slug: string;
  title: string;
  category: string;
  difficulty: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
  date: string;
  maxTeamSize: number;
  seatsLeft: number;
  priceInr: number;
}
