const baseUrl = "http://localhost:3030/data/catalog";

export async function getAll() {
    const response = await fetch(baseUrl);
    const result = await response.json();
    const photos = Object.values(result);
    return photos;
}

export async function getOne(photoId) {
    const response = await fetch(`${baseUrl}/${photoId}`);
    const result = await response.json();
    return result;
}


    // TO DO create requester for all services !!!
