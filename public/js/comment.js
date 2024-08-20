const commentFormHandler = async (event) => {
  event.preventDefault();

  const comment_text = event.target.querySelector('.comment-body').value.trim();
  const post_id = event.target.getAttribute('data-post-id');

  if (comment_text) {
    const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ post_id, comment_text }),
        headers: {
            'Content-Type': 'application/json',
        }
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert('Failed to make comment');
    }
  }
};

document.querySelectorAll('.comment-form').addEventListener('submit', commentFormHandler);