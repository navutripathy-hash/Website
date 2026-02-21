import { NextRequest, NextResponse } from 'next/server';
import sanitizeHtml from 'sanitize-html';

const bucket = new Map<string, { count: number; resetAt: number }>();

export function applySecurityHeaders(response: NextResponse) {
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Content-Security-Policy', "default-src 'self'; img-src 'self' data: https:; script-src 'self'; style-src 'self' 'unsafe-inline';");
  return response;
}

export function sanitize(input: string) {
  return sanitizeHtml(input, { allowedTags: [], allowedAttributes: {} });
}

export function enforceRateLimit(request: NextRequest, key: string, max = 40, windowMs = 60_000) {
  const ip = request.ip ?? request.headers.get('x-forwarded-for') ?? 'unknown';
  const composed = `${key}:${ip}`;
  const now = Date.now();
  const item = bucket.get(composed);
  if (!item || item.resetAt < now) {
    bucket.set(composed, { count: 1, resetAt: now + windowMs });
    return false;
  }
  item.count += 1;
  if (item.count > max) return true;
  return false;
}
