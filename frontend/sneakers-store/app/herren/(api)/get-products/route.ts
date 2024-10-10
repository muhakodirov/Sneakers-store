import connectToDatabase from '@/lib/mongo';
import { type NextRequest, NextResponse } from 'next/server';
const Product = require('../../../../models/shoes')

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const brand = searchParams.get("brand")?.toLowerCase();
    const size = searchParams.get("size");
    await connectToDatabase();

    const query: { men: boolean; category?: string; size?: { $in?: number[] } } = { men: true };
    if (brand) query.category = brand;
    if (size) query.size = { $in: [parseInt(size)] };
    console.log(typeof size)
    const filteredProducts = await Product.find(query);

    return NextResponse.json({ success: true, data: filteredProducts }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Serverfehler' }, { status: 500 });
  }
}