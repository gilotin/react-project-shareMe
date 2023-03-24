const baseUrl = "http://localhost:3030/data/catalog";

export async function getAll() {
    const data = await fetch(baseUrl);
    const result = await data.json();
    const photos = Object.values(result);
    return photos;
}

export async function getOne(photoId) {
    const data = await fetch(`${baseUrl}/${photoId}`);
    const result = await data.json();
    return result;
}
