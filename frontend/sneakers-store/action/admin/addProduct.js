export async function addProduct(formData) {
    await fetch("http://localhost:3000/admin/api", { method: 'POST', body: JSON.stringify(formData) })
}