import connectToDatabase from '../../../lib/mongo';
import { NextRequest, NextResponse } from 'next/server';
const Bestsellers = require('../../../models/bestsellers')


export async function GET() {
  try {
    await connectToDatabase();
    const bestsellerProducts = await Bestsellers.find();
    return NextResponse.json({ success: true, data: bestsellerProducts }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Serverfehler' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const data = await req.json()
  await connectToDatabase();
  const resData = await Bestsellers.create(data)
  return Response.json({ message: resData })
}
