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
    const token = localStorage.getItem("token");
    const response = await fetch(`${baseUrl}`, {
        method: "POST",
        headers: {
            "Content-type": "Application/json",
            "X-Authorization": token,
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

export async function edit(photoData, photoId) {
    const token = localStorage.getItem("token");
    const response = await fetch(`${baseUrl}/${photoId}`, {
        method: "PUT",
        headers: {
            "Content-type": "Application/json",
            "X-Authorization": token,
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

export async function getByOwnerId(ownerId) {
    const query = encodeURIComponent(`_ownerId="${ownerId}"`);
    const response = await fetch(`${baseUrl}?where=${query}`);
    const result = await response.json();
    return result;
}

export async function deletePhoto(photoId) {
    const token = localStorage.getItem("token");

    const response = await fetch(`${baseUrl}/${photoId}`, {
        method: "DELETE",
        headers: {
            "Content-type": "Application/json",
            "X-Authorization": token,
        },
    });

    try {
        const result = await response.json();
        return result
    } catch (error) {
        return error.message;
    }
}
// TO DO create requester for all services !!
