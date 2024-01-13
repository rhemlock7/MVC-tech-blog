
const createPostFormHandler = async (event) => {
    event.preventDefault();

    // Collect values from the login form
    const comment = document.querySelector('#comment-body').value.trim();

    if (comment) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ comment }),
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