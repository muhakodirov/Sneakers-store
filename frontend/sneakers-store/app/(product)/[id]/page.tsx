import SingePageComponent from "@/components/SingePageComponent"

type DATA = {
    _id: string,
    name: string,
    size: number[],
    price: number,
    description: string,
    category: string,
    men: boolean,
    women: boolean,
    imageUrl: string,
    stock: number,
    __v: number
  }

async function getProductById(id:string) {
    "use server"
    const res = await fetch(`http://localhost:3000/api/products/${id}`)
    if (!res.ok) {
        throw new Error('Error!');
    }
    const data = await res.json()
    return data
}

export default async function SinglePage({params}:{params: {id:string}}) {
    const {data}:{data:DATA} = await getProductById(params.id) 
    
    return (
        <SingePageComponent data={data} />
  ) 
}
