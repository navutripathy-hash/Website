import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ items: [
    { team: 'Neural Ninjas', score: 980 },
    { team: 'Bug Hunters', score: 940 },
    { team: 'Stack Masters', score: 910 }
  ] });
}
