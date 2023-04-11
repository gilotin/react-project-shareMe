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

//NEED REFACTORING

export async function create(photoData) {
    const token = localStorage.getItem('token')
    const response = await fetch(`${baseUrl}`, {
        method: "POST",
        headers: {
            "Content-type": "Application/json",
            "X-Authorization":  token ,
        },
        body: JSON.stringify(photoData),
    });


    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return error.message;
    }
}


export async function getByOwnerId(_ownerId) {

    const query = encodeURIComponent(`_ownerId="${_ownerId}"`);
    const response = await fetch(`${baseUrl}?${query}`);
    const result = await response.json();
    const myPhotos = Object.values(result);
    return myPhotos;
}
// TO DO create requester for all services !!
