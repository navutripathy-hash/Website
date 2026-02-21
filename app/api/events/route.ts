import { NextResponse } from 'next/server';
import { events } from '@/lib/mock-data';
import { applySecurityHeaders } from '@/lib/security';

export async function GET() {
  return applySecurityHeaders(NextResponse.json({ items: events }));
}
