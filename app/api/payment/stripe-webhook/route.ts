import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '');

export async function POST(request: NextRequest) {
  const rawBody = await request.text();
  const sig = request.headers.get('stripe-signature') || '';
  try {
    const event = stripe.webhooks.constructEvent(rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET || '');
    if (event.type === 'payment_intent.succeeded') {
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json({ ignored: true });
  } catch {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }
}
