
const createPostFormHandler = async (event) => {
    event.preventDefault();

    // Collect values from the login form
    const title = document.querySelector('#blog-title').value.trim();
    const body = document.querySelector('#blog-body').value.trim();

    console.log(title)
    console.log(body)

    if (title && body) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/blogs', {
            method: 'POST',
            body: JSON.stringify({ title, body }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // If successful, redirect the browser to the profile page
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
};

document
    .querySelector('.create-form')
    .addEventListener('submit', createPostFormHandler);