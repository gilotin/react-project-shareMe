const baseUrl = "http://localhost:3030/users";

export async function login(loginData) {
    const response = await fetch(`${baseUrl}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
    });

    if (response.status === 204) {
        return {};
    }

    const result = await response.json();

    if (!response.ok) {
        throw result;
    }

    return result;

    // TO DO create requester for all services !!!
}

export async function register(data) {
    const response = await fetch(`${baseUrl}/register`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error("data is invalid");
    }

    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return error.message;
    }
}

// NEED FIXING

export async function logout() {

    const token = localStorage.getItem('token');
    const response = await fetch(`${baseUrl}/logout`, {
        method: "GET",
        headers: {
            "Content-type": "Application/json",
            "X-Authorization" : token
        },
    });
    
    if(response.status === '204'){
        return {}
    }else{
        localStorage.clear();
    }
}
