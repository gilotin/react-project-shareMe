const baseUrl = "http://localhost:3030/users";

export async function login(loginData) {
    const response = await fetch(`${baseUrl}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
    });

    if (!response.ok) {
        const result = await response.json();
        throw result;
        
    }

    try {
        const result = await response.json();
        return result

    } catch (error) {

        return {};
    }
}
