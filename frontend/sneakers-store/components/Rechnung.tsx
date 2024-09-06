export default function Rechnung() {
  return (
    <div className="">
        <div className=" rounded-lg ml-10 ">
            <div className=" text-left text-2xl text-pretty mx-5">
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
            <div className="relative">
                <button className=' hover:bg-green-700 absolute w-full transition border rounded-lg bg-green-500'>
                    <span>Kaufen</span>
                </button>
            </div>
        </div>
    </div>
  )
}
