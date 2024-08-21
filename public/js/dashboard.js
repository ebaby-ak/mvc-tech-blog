// create post
const createPostHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();

    if (title && content) {
        const response = await fetch(`/api/posts`, {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to make post');
        }
    }
};

document.querySelector('#create-new-post').addEventListener('click', createPostHandler);

// edit post
const editFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#post-title').value;
    const post_content = document.querySelector('#post-content').value;
    
    if (title && post_content) {
        const response = await fetch(`/api/posts/`, {
            method: 'POST',
            body: JSON.stringify({ title, post_content }),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )};

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Unable to edit post');
    }
};

document.querySelector('#edit-post').addEventListener('submit', editFormHandler);