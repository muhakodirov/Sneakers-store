"use server"

export async function getProducts() {
    const res = await fetch("http://localhost:3000/herren/get-products", { cache: "force-cache" })
    const data = await res.json()
    return data
}


export async function getProductsByQuery(query1, query2) {
    const searchParams = new URLSearchParams();
    if (query1) searchParams.set('brand', query1);
    if (query2) searchParams.set('size', query2);
    const url = `http://localhost:3000/herren/get-products?${searchParams.toString()}`;

    const res = await fetch(url, { cache: "force-cache" });
    const data = await res.json();
    return data;
}

// export async function getProductsByQuery(query1, query2) {
//     "use server"
//     if (query1 && query2) {
//         const res = await fetch(`http://localhost:3000/herren/get-products?brand=${query1}&size=${query2}`, { cache: "force-cache" })
//         const data = await res.json()
//         console.log('hey1')
//         return data
//     } else {
//         const res = await fetch(`http://localhost:3000/herren/get-products?size=${query2}`, { cache: "force-cache" })
//         const data = await res.json()
//         console.log('hey2')
//         return data
//     }
// }