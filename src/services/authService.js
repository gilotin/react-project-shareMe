const baseUrl = "http://localhost:3030/users";

export async function login(loginData) {
    const response = await fetch(`${baseUrl}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
