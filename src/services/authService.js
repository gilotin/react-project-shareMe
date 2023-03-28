const baseUrl = "http://localhost:3030/users/login";

export async function login(loginData) {
    const data = await fetch(baseUrl, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(loginData),
    });

    const user = await data.json()

    return user;
}
