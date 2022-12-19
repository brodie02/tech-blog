const deletePost = async (event) => {
    event.preventDefault()

    const urlString = window.location.href
    const urlParameter = urlString.split('/')
    const post_id = urlParameter[4]

    const response = await fetch(`/api/posts/${post_id}`, {
    method: 'DELETE',
    });

    if (response.ok) {
    document.location.replace('/dashboard');
    } else {
    alert('Failed to delete project');
    }
};

document.querySelector('#delete').addEventListener('click', deletePost)