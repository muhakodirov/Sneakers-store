export default function Rechnung() {
  return (
    <div className="fixed right-[265px]">
        <div className=" rounded-lg ">
            <div className=" text-left text-xl">
                <div className="flex justify-between my-5">
                    <p>Rabatte: </p>
                    <p className=""> 5 €</p>
                </div>
                <div className="flex justify-between my-5">
                    <p>Bestellwert: </p>
                    <p className=""> 10 €</p>
                </div>
                <div className="flex justify-between my-5">
                    <p>Versandkosten: </p>
                    <p className=""> 5 €</p>
                </div>
                <div className="flex justify-between my-20  border p-2 rounded-lg bg-slate-100">
                    <p>Gesamtsumme: </p>
                    <p className=""> 50 €</p>
                </div>

            </div>
            <div className=" mb-11">
                <button className=' hover:bg-green-700 h-16 w-full transition border rounded-lg bg-green-500'>
                    <span className="text-2xl uppercase font-bold text-white">Kaufen</span>
                </button>
                <p className="mt-2">Zahlungsmethode:</p>
                <div className="flex flex-wrap gap-2">
                    <span>VISA</span>
                    <span>MASTERCARD</span>
                    <span>BITCOIN</span>
                    <span>SOLANA</span>
                </div>
            </div>
        </div>
    </div>
  )
}
