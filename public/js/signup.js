const signup = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#user').value.trim();
    const password = document.querySelector('#pass').value.trim();
    
    if (username && password) {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        console.log(response.statusText);
      }
    }
};

document.querySelector('#signup-button').addEventListener('click', signup)