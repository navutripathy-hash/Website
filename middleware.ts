import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  if (request.nextUrl.pathname.startsWith('/api') && request.method !== 'GET') {
    const csrf = request.headers.get('x-csrf-token');
    if (!csrf && !request.nextUrl.pathname.includes('stripe-webhook')) {
      return NextResponse.json({ error: 'Missing CSRF token' }, { status: 403 });
    }
  }
  return response;
}

export const config = { matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'] };
