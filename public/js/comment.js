const newComment = async (event) => {
    event.preventDefault();
    
    const content = document.querySelector('#content').value.trim();

    const urlString = window.location.href
    const urlParameter = urlString.split('/')
    const post_id = urlParameter[4]
    
    if (content) {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ content, post_id }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace(`/comments/${post_id}`);
      } else {
        console.log(response.statusText);
      }
    }
};

document.getElementById('add').addEventListener('click', newComment)