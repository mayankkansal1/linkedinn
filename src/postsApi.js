// A mock function to mimic making an async request for data
export function fetchAllPosts() {
    return new Promise(async (resolve) => {
        const response = await fetch("http://localhost:8080/posts")
        const data = await response.json();
        resolve({ data })
    }
    );
}
export function addToPost(posts) {
    return new Promise(async (resolve) => {
        const response = await fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(posts),
            headers: { 'content-type': 'application/json' },
        });
        const data = await response.json();
        resolve({ data });
    });
}
export function fetchCount() {
    return new Promise(async (resolve) => {
        const response = await fetch('http://localhost:8080/posts')
        const data = await response.json()
        resolve({ data })
    }
    );
}