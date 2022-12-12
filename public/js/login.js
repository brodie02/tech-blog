const login = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const username = document.querySelector('#user').value.trim();
    const password = document.querySelector('#pass').value.trim();
  
    if (username && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
};

document.getElementById('login-button').addEventListener('click', login)