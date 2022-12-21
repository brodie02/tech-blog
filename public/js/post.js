const newPost = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title-input').value.trim();
    const content = document.querySelector('#content').value.trim();

    const errorMes = document.getElementById('pass-err')

    if (!title || !content) {
        errorMes.style.display = 'block'
        errorMes.innerHTML = 'Inputs cannot be black'
    }

    if (title && content) {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        console.log(response.statusText);
      }
    }
};

document.getElementById('create-post').addEventListener('click', newPost)