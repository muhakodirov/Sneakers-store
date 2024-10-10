import connectToDatabase from '@/lib/mongo';
import { NextRequest, NextResponse } from 'next/server';
const Product = require('../../../../models/shoes')

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const brand = searchParams.get("brand")?.toLowerCase();
    const size = searchParams.get("size");
    await connectToDatabase();

    const query: { sale: boolean; category?: string; size?: { $in?: number[] } } = { sale: true };
    if (brand) query.category = brand;
    if (size) query.size = { $in: [parseInt(size)] };
    const filteredProducts = await Product.find(query);
    return NextResponse.json({ success: true, data: filteredProducts }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Serverfehler' }, { status: 500 });
  }
}