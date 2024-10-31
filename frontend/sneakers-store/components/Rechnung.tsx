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
        <div className="border w-full lg:w-2/3 lg:float-right">
            <div className="rounded-lg p-4 sm:p-6">
                <div className="text-left text-lg sm:text-xl">
                    <div className="flex justify-between my-3 sm:my-5">
                        <p>Rabatte:</p>
                        <p>{rabatte} €</p>
                    </div>
                    <div className="flex justify-between my-3 sm:my-5">
                        <p>Bestellwert:</p>
                        <p>{bestellwert} €</p>
                    </div>
                    <div className="flex justify-between my-3 sm:my-5">
                        <p>Versandkosten:</p>
                        <p>{typeof versandkosten === 'string' ? versandkosten : `${versandkosten} €`}</p>
                    </div>
                    <div className="flex justify-between my-6 sm:my-10 lg:my-20 border p-2 rounded-lg bg-slate-100">
                        <p>Gesamtsumme:</p>
                        <p>{bestellwert > 0 ? gesamtsumme : '0'} €</p>
                    </div>
                </div>
                <div className="mb-6 sm:mb-8 lg:mb-11">
                    <button
                        disabled={bestellwert === 0}
                        className="h-12 sm:h-14 lg:h-16 w-full transition border rounded-lg disabled:bg-gray-500 bg-green-500 hover:bg-green-700"
                    >
                        <span className="text-xl sm:text-2xl uppercase font-bold text-white">Kaufen</span>
                    </button>
                </div>
                <p className="my-2 text-center text-sm sm:text-base">Zahlungsmethoden:</p>
                <div className="flex flex-wrap gap-4 sm:gap-6 lg:gap-8 justify-evenly">
                    <Image src="/visa.webp" alt="VISA" width={40} height={40} className="w-10 h-10 sm:w-12 sm:h-12 lg:w-[50px] lg:h-[50px]" />
                    <Image src="/mastercard.webp" alt="Mastercard" width={40} height={40} className="w-10 h-10 sm:w-12 sm:h-12 lg:w-[50px] lg:h-[50px]" />
                </div>
            </div>
        </div>
    )
}
