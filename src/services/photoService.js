const baseUrl = "http://localhost:3030/data/catalog";

export async function getAll() {
    const data = await fetch(baseUrl);
    const result = await data.json()
    const photos = Object.values(result);
    return photos;
}
