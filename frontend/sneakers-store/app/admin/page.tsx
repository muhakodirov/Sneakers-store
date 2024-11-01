'use client'
import { SignIn } from "@/components/SignIn"
import Form from "./(components)/CreateProduct-Form"
import FormBestsellers from "./(components)/CreateProduct_Bestsellers-Form"
import { usePathname, useRouter } from "next/navigation"
import { useEffect } from "react"

function AdminPage() {
    const router = useRouter()
    const pathname = usePathname()

    if (pathname.includes('/admin')) {
        return <SignIn />
    }


    return (

        <div >
            <div className="text-center">
                <h1 className="text-3xl mt-20 mb-16 inline-block self-center font-bold">ADMIN PANEL</h1>
            </div>
            <div className="grid grid-cols-2 gap-40">
                <FormBestsellers />
                <Form />
            </div>
        </div>
    )
}

export default AdminPage