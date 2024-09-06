import connectToDatabase from '@/lib/mongo';
import { NextResponse } from 'next/server';
const Product = require('../../../../models/shoes')

export async function GET(request) {
    try {
      await connectToDatabase();
      const insaleProducts = await Product.find({sale: true});
      return NextResponse.json({ success: true, data: insaleProducts }, {status: 200});
    } catch (error) {
      return NextResponse.json({ success: false, message: 'Serverfehler' }, {status: 500});
    }
  }