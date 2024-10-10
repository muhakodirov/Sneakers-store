import { useShopContext } from "@/context/shopContext"
import { SHOES } from "./sale-components/ListOfProducts"
import Image from "next/image";

let bestellwert;
let rabatte = 0
let versandkosten: number;
let gesamtsumme: number;

export default function Rechnung() {
    const { productsInCart, count } = useShopContext()

    bestellwert = productsInCart.length >= 1
        ? productsInCart?.reduce((acc: number, cur: SHOES) => {
            const quantity = count.find((c: any) => c.id == cur._id)?.count || 1
            return acc + cur.price * quantity
        }, 0)
        : productsInCart.map((product: SHOES) => product.price)

    versandkosten = (bestellwert > 200) ? 0 : 5
    rabatte = productsInCart.length >= 3 ? 10 : 0
    gesamtsumme = (Number(versandkosten) + Number(bestellwert) - rabatte)

    return (
        <div className="fixed right-[265px]">
            <div className=" rounded-lg ">
                <div className=" text-left text-xl">
                    <div className="flex justify-between my-5">
                        <p>Rabatte: </p>
                        <p className=""> {rabatte} €</p>
                    </div>
                    <div className="flex justify-between my-5">
                        <p>Bestellwert: </p>
                        <p className=""> {bestellwert} €</p>
                    </div>
                    <div className="flex justify-between my-5">
                        <p>Versandkosten: </p>
                        <p className=""> {typeof (versandkosten) == 'string' ? versandkosten : versandkosten + ' ' + '€'} </p>
                    </div>
                    <div className="flex justify-between my-20  border p-2 rounded-lg bg-slate-100">
                        <p>Gesamtsumme: </p>
                        <p className=""> {bestellwert > 0 ? gesamtsumme : '0'} €    </p>
                    </div>

                </div>
                <div className=" mb-11">
                    <button disabled={bestellwert == 0} className=' h-16 w-full transition border rounded-lg disabled:bg-gray-500 bg-green-500 hover:bg-green-700'>
                        <span className={`text-2xl uppercase font-bold text-white`}>Kaufen</span>
                    </button>
                </div>
                <p className="my-2">Zahlungsmethoden:</p>
                <div className="flex flex-wrap gap-8">
                    <Image
                        src="/bitcoin.png"
                        alt="VISA"
                        width={50}
                        height={50}
                    />
                    <Image
                        src="/solana.png"
                        alt="VISA"
                        width={50}
                        height={50}
                    />
                    <Image
                        src="/visa.webp"
                        alt="VISA"
                        width={50}
                        height={50}
                    />
                    <Image
                        src="/mastercard.webp"
                        alt="VISA"
                        width={50}
                        height={50}
                    />
                </div>
            </div>
        </div>
    )
}
