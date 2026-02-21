import { z } from 'zod';

export const registrationSchema = z.object({
  eventId: z.string().min(3),
  email: z.string().email(),
  fullName: z.string().min(2),
  teamName: z.string().min(2),
  size: z.number().int().min(1).max(8)
});
