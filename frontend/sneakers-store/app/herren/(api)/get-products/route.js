import connectToDatabase from '@/lib/mongo';
import { NextResponse } from 'next/server';
const Product = require('../../../../models/shoes')

export async function GET(request) {
    try {
      await connectToDatabase();
      const allProducts = await Product.find({men:true});
      console.log(allProducts)
      return NextResponse.json({ success: true, data: allProducts }, {status: 200});
    } catch (error) {
      return NextResponse.json({ success: false, message: 'Serverfehler' }, {status: 500});
    }
  }