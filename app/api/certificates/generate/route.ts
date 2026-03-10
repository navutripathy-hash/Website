import { NextRequest, NextResponse } from 'next/server';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';

export async function POST(request: NextRequest) {
  const { name, eventName, issuedOn } = await request.json();
  const pdf = await PDFDocument.create();
  const page = pdf.addPage([842, 595]);
  const font = await pdf.embedFont(StandardFonts.HelveticaBold);
  page.drawText('Certificate of Participation', { x: 220, y: 500, size: 36, color: rgb(0.2, 0.2, 0.9), font });
  page.drawText(name, { x: 250, y: 380, size: 28, font });
  page.drawText(`${eventName} • ${issuedOn}`, { x: 220, y: 320, size: 20 });
  const bytes = await pdf.save();
  return new NextResponse(Buffer.from(bytes), { headers: { 'Content-Type': 'application/pdf' } });
}
