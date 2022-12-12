const login = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#user').value.trim();
    const password = document.querySelector('#pass').value.trim();
  
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
            document.getElementById('pass-err').style.display = 'block'
            document.getElementById('pass-err').innerHTML = 'Invalid username, please try again'
        } else if (response.statusText === 'Incorrect password, please try again') {
            document.getElementById('pass-err').style.display = 'block'
            document.getElementById('pass-err').innerHTML = 'Incorrect password, please try again'
        } else {
            document.getElementById('pass-err').style.display = 'block'
            document.getElementById('pass-err').innerHTML = 'Something went wrong, please try again'
        }

      }
    }
};

document.getElementById('login-button').addEventListener('click', login)