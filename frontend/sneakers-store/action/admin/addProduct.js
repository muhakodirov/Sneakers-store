export async function addProduct(formData) {
    const apiUrl = process.env.URL
    await fetch(`${apiUrl}/admin/api`, { method: 'POST', body: JSON.stringify(formData) })
}