import connectToDatabase from "@/lib/mongo"
const Product = require('../../../models/shoes')

export async function POST(req: Request) {
    const data = await req.json()
    await connectToDatabase()
    const resData = await Product.create(data)
    return Response.json({ message: resData })
}