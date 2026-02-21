import { NextRequest, NextResponse } from 'next/server';

const usedTickets = new Set<string>();

export async function POST(request: NextRequest) {
  const { ticketId } = await request.json();
  if (!ticketId) return NextResponse.json({ error: 'ticketId required' }, { status: 400 });
  if (usedTickets.has(ticketId)) return NextResponse.json({ valid: false, reason: 'Already used' }, { status: 409 });
  usedTickets.add(ticketId);
  return NextResponse.json({ valid: true, attendee: { name: 'Verified Participant', ticketId } });
}
