"use server"
export async function getProducts() {
    const res = await fetch("http://localhost:3000/api/bestsellers", { cache: "no-cache" })
    const data = await res.json()
    return data
}

export async function addProduct(data) {
    await fetch("http://localhost:3000/api/bestsellers", {
        method: 'POST',
        body: JSON.stringify(data)
    })
}
