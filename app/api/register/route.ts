import { NextRequest, NextResponse } from 'next/server';
import { registrationSchema } from '@/lib/validation';
import { applySecurityHeaders, enforceRateLimit, sanitize } from '@/lib/security';
import QRCode from 'qrcode';

export async function POST(request: NextRequest) {
  if (enforceRateLimit(request, 'register', 20)) {
    return applySecurityHeaders(NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 }));
  }

  const body = await request.json();
  const parsed = registrationSchema.safeParse(body);
  if (!parsed.success) {
    return applySecurityHeaders(NextResponse.json({ error: parsed.error.flatten() }, { status: 400 }));
  }

  const ticketId = `TKT-${crypto.randomUUID()}`;
  const qr = await QRCode.toDataURL(JSON.stringify({ ticketId, email: sanitize(parsed.data.email) }));
  return applySecurityHeaders(NextResponse.json({ ticketId, qr }));
}
