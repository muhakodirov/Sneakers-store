import NothingFound from "../NoDatas";
import ProductCard from "../ProductCard";

export type SHOES = {

  _id: string,
  name: string,
  size?: number[],
  price: number,
  description: string,
  category: string,
  men: boolean,
  women: boolean,
  imageUrl: string,
  stock: number,
  __v: number

}

export default async function ListOfProducts({ shoes }: { shoes: SHOES[] }) {

  if (shoes.length <= 0) {
    return <NothingFound />

  }

  return (
    <>
      <div className="mx-auto mt-3 lg:mt-0 px-3">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-3 lg:gap-12">
          {shoes?.map(shoe => (
            <ProductCard
              key={shoe._id}
              id={shoe._id}
              category={shoe.category}
              name={shoe.name}
              price={shoe.price}
              imageUrl={shoe.imageUrl}
            />
          ))}
        </div>
      </div>
    </>
  )
}
