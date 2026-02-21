import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { question } = await request.json();
  const lower = String(question || '').toLowerCase();
  if (lower.includes('recommend')) return NextResponse.json({ answer: 'Recommended: AI Hack Summit based on your profile and advanced difficulty preference.' });
  if (lower.includes('clash')) return NextResponse.json({ answer: 'Schedule conflict detected: Product War Room overlaps with AI Hack Summit by 90 minutes.' });
  return NextResponse.json({ answer: 'Ask about schedules, recommendations, payment, or registration rules.' });
}
