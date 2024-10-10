import connectToDatabase from '@/lib/mongo';
import { type NextRequest, NextResponse } from 'next/server';
import Product from '../../../../models/shoes';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const brand = searchParams.get("brand")?.toLowerCase();
    const size = searchParams.get("size");
    await connectToDatabase();

    const query: { women: boolean; category?: string; size?: { $in?: number[] } } = { women: true };
    if (brand) query.category = brand;
    if (size) query.size = { $in: [parseInt(size)] };
    const filteredProducts = await Product.find(query);
    return NextResponse.json({ success: true, data: filteredProducts }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Serverfehler' }, { status: 500 });
  }
}