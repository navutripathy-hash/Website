import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '');

export async function POST(request: NextRequest) {
  const { amount, currency = 'inr' } = await request.json();
  const intent = await stripe.paymentIntents.create({ amount, currency, automatic_payment_methods: { enabled: true } });
  return NextResponse.json({ clientSecret: intent.client_secret });
}
