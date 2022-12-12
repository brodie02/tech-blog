const login = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#user').value.trim();
    const password = document.querySelector('#pass').value.trim();

    const errorMes = document.getElementById('pass-err')

    if (!username || !password) {
        errorMes.style.display = 'block'
        errorMes.innerHTML = 'Inputs cannot be black'
    }
  
    if (username && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {

        if (response.statusText === 'Invalid username, please try again') {
            errorMes.style.display = 'block'
            errorMes.innerHTML = 'Invalid username, please try again'
        } else if (response.statusText === 'Incorrect password, please try again') {
            errorMes.style.display = 'block'
            errorMes.innerHTML = 'Incorrect password, please try again'
        } else {
            errorMes.style.display = 'block'
            errorMes.innerHTML = 'Something went wrong, please try again'
        }

      }
    }
};

document.getElementById('login-button').addEventListener('click', login)