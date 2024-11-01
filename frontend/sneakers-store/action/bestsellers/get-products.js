"use server"
const apiUrl = process.env.URL
export async function getProducts() {
    const res = await fetch(`${apiUrl}/api/bestsellers`, { cache: "no-cache" })
    const data = await res.json()
    return data
}

export async function addProduct(data) {
    await fetch(`${apiUrl}/api/bestsellers`, {
        method: 'POST',
        body: JSON.stringify(data)
    })
}
