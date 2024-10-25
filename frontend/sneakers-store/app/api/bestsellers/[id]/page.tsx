import SingePageComponent from "@/components/SingePageComponent"

export type BESTSELLERSDATA = {
    _id: string,
    name: string,
    price: number,
    size?:number[],
    description: string,
    category: string,
    imageUrl: string,
  }

async function getProductById(id:string) {
    "use server"
    const res = await fetch(`http://localhost:3000/api/bestsellers/api/${id}`)
    if (!res.ok) {
        throw new Error('Error!');
    }
    const data = await res.json()
    return data
}

export default async function SinglePage({params}:{params: {id:string}}) {
    const {data}:{data:BESTSELLERSDATA} = await getProductById(params.id) 
    
    return (
        <SingePageComponent data={data} />
  ) 
}
