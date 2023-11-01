export function fetchLoggedInUser() {
    return new Promise(async (resolve) => {
        const response = await fetch('http://localhost:8080/users')
        const data = await response.json()
        resolve({ data })
    }
    );
}