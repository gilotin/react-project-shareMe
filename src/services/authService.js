const baseUrl = "http://localhost:3030/users";

export async function login(loginData) {
    const data = await fetch(`${baseUrl}/login`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(loginData),
    });

    const user = await data.json()

    return user;
}
