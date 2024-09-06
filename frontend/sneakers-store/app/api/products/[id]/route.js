///api/products.js
const {ObjectId} = require('mongodb')

import connectToDatabase from '../../../../lib/mongo';
import { NextResponse } from 'next/server';
const Product = require('../../../../models/shoes')


export async function GET(request) {
  const url = request.url.split('/')
  const id = url[url.length - 1]

  try {
    await connectToDatabase();
    const productById = await Product.findOne({_id: new ObjectId(id)});
    return NextResponse.json({ success: true, data: productById }, {status: 200});
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Serverfehler' }, {status: 500});
  }
}
