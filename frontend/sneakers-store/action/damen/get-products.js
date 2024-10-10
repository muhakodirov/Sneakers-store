export async function getProducts() {
    "use server"
    const res = await fetch("http://localhost:3000/damen/get-products", { cache: "no-cache" })
    const data = await res.json()
    return data
}

export async function getProductsByQuery(query1, query2) {
    const searchParams = new URLSearchParams();
    if (query1) searchParams.set('brand', query1);
    if (query2) searchParams.set('size', query2);
    const url = `http://localhost:3000/damen/get-products?${searchParams.toString()}`;

    const res = await fetch(url, { cache: "force-cache" });
    const data = await res.json();
    return data;
}