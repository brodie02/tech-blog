const signup = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#user').value.trim();
    const password = document.querySelector('#pass').value.trim();

    const errorMes = document.getElementById('pass-err')

    if (!username || !password) {
      errorMes.style.display = 'block'
      errorMes.innerHTML = 'Inputs cannot be blank'
      return
    }
    
    if (password.length < 8) {
      errorMes.style.display = 'block'
      errorMes.innerHTML = 'Password must be at least 8 characters'
      return
    }

    if (username && password) {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        console.log(response.statusText);
      }
    }
};

document.querySelector('#signup-button').addEventListener('click', signup)