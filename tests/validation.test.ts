import { describe, expect, it } from 'vitest';
import { registrationSchema } from '../lib/validation';

describe('registration schema', () => {
  it('accepts valid payload', () => {
    const result = registrationSchema.safeParse({
      eventId: 'evt_1',
      email: 'participant@example.com',
      fullName: 'Alex Doe',
      teamName: 'Neural Ninjas',
      size: 4
    });
    expect(result.success).toBe(true);
  });

  it('rejects malformed email', () => {
    const result = registrationSchema.safeParse({
      eventId: 'evt_1',
      email: 'broken',
      fullName: 'Alex Doe',
      teamName: 'Neural Ninjas',
      size: 4
    });
    expect(result.success).toBe(false);
  });
});
