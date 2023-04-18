const baseUrl = "http://localhost:3030/users";

// TO DO create requester for all services !!!

export async function login(loginData) {
    try {
        const response = await fetch(`${baseUrl}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(loginData),
        });

        if (loginData.userName === "" || loginData.password === "") {
            throw new Error("Fill all fields");
        }

        if (response.status === 204) {
            return {};
        }

        const result = await response.json();

        if (!response.ok) {
            throw result;
        }

        return result;
    } catch (error) {
        throw error
    }
}

export async function register(data) {
    const response = await fetch(`${baseUrl}/register`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if(response.status === 409){
        throw new Error("email is already taken")
    }

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

//NEED Refactoring

export async function logout() {
    const token = localStorage.getItem("token");
    const response = await fetch(`${baseUrl}/logout`, {
        method: "GET",
        headers: {
            "Content-type": "Application/json",
            "X-Authorization": token,
        },
    });

    if (response.status === "204") {
        return {};
    } else {
        localStorage.clear();
    }
}
